<template>
  <div class="container">
    <div id="navigation">
      <enterprise-navbar></enterprise-navbar>
    </div>
    <div class="row">
      <div class="col-md-4">
        <div class="list-group">
          <div>
            <input type="search" placeholder="Search" class="form-control" />
          </div>
          <br>
          <div
            class="list-group-item"
            v-for="(item, index) in conversations.slice(0, 6)"
            :key="index.$key"
          >
            <a style="cursor: pointer" @click="showConversation(item.token)">
              {{ item.candidate.first_name }}.{{ item.candidate.last_name[0] }}
              <i class="bi bi-pencil pull-right"></i
            ></a>
          </div>
        </div>
      </div>

      <div class="col-md-8">
        <div class="card">
          <div class="card-header">
            Message to :
            <span v-if="destinator != null"
              >{{ destinator.first_name }}.{{ destinator.last_name[0] }}</span
            >
          </div>
          <div class="card-body conversations">
            <div class="form-group">
              <div v-for="(item, index) in messages" :key="index.$key">
                <div class="row">
                  <div>
                    <p
                      :class="{
                        'pull-right': item.from_id != user_id,
                      }"
                    >
                      <strong v-if="item.from_id != user_id" class="pull-right"
                        >Vous</strong
                      >
                      <strong v-else
                        >{{ item.from.first_name }}.{{
                          item.from.last_name[0]
                        }}</strong
                      >
                      <br />
                      {{ item.message }}
                    </p>
                  </div>
                </div>
                <hr />
              </div>
              <textarea
                class="form-control"
                placeholder="Ecrivez votre message..."
                rows="3"
                v-model="message"
              ></textarea>
              <span
                class="text-danger"
                v-if="erros.message"
                :class="['label label-danger']"
                >{{ erros.message[0] }}</span
              ><br /><br />
              <button @click="storeMessage(token)" class="btn btn-primary">
                Envoyer
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import EnterpriseNavbar from "../../../components/Navbars/EnterpriseNavbar.vue";
import ApiService from "../../../services/api.service";
/*import Footer from "@/components/Footer.vue"; */

export default {
  name: "EnterpriseConversations",
  components: {
    EnterpriseNavbar,
  },

  data() {
    return {
      candidates: null,
      conversation: null,
      conversations: null,
      destinator: null,
      token: this.$route.params.token,
      message: null,
      messages: null,
      user_id: localStorage.user.userable_id,
      erros: [],
    };
  },
  mounted() {
    if (this.token != null) {
      this.showConversation(this.token);
    }
    ApiService.get(this.$appUrl + "/api/enterprise/get-conversations")
      .then((response) => {
        this.conversations = response.data.conversations;
        console.log(this.conversations);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  methods: {
    showConversation(token) {
      ApiService.get(this.$appUrl + "/api/enterprise/get-conversation/" + token)
        .then((response) => {
          this.conversation = response.data.conversation;
          this.messages = response.data.conversation.messages;
          this.destinator = response.data.destinator;
        })
        .catch((error) => {
          console.log(error);
        });
    },

    storeMessage(token) {
      const data = {
        message: this.message,
      };
      /*    this.messages.push(data); */
      ApiService.post(
        this.$appUrl + "/api/enterprise/store-message/" + token,
        data
      )
        .then((response) => {
          this.erros = [];
          this.messages = response.data.messages;
          this.message = null;
          console.log(response.data);
        })
        .catch((error) => {
          this.erros = error.response.data.errors;
          console.log(error);
        });
    },
  },
};
</script>

<style scoped>
.container {
  margin-top: 7%;
  margin-bottom: 8%;
}
/* .card {
  width: 80%;
  display: flex;
  text-align: left;
  justify-content: center;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  margin-top: 2%;
  box-shadow: #dc143c;
  height: auto;
} */
.list-group {
}
</style>