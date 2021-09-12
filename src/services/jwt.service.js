const ID_API_TOKEN = 'token';
const ID_API_SPACE_NAME = 'space_name';
const ID_API_USER = 'user';


export const getToken = () => {
    return {
        token: localStorage.getItem(ID_API_TOKEN),
        authName: localStorage.getItem(ID_API_SPACE_NAME)
    }
};

export const getUser = () => {
    return {
        user: localStorage.getItem(ID_API_USER),
       
    }
};

export const setToken = (token, space) => {
    localStorage.setItem(ID_API_TOKEN, token);
    localStorage.setItem(ID_API_SPACE_NAME, space);
  
};

export const setUser = (user) => {
    
    
    localStorage.setItem(ID_API_USER , JSON.stringify(user) );
   
  
};
export const unsetToken = () => {
    localStorage.removeItem(ID_API_TOKEN);
    localStorage.removeItem(ID_API_SPACE_NAME);
  
};
export const unsetUser = () => {
    localStorage.removeItem(ID_API_USER);
    
  
};
export default {getToken, setToken, unsetToken ,getUser, setUser, unsetUser}
