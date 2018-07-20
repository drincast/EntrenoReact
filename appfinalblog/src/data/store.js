import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

const _POST = [
    {
        id: 1,
        title: "Titulo del post 01",
        body: "Cuerpo del post 01"
    },
    {
        id: 2,
        title: "Titulo del post 02",
        body: "Cuerpo del post 02"
    }
]

const allPostF = (state={posts: []}, action) => {
    let newState = Object.assign({}, state);
    let isNewState = false;

    switch (action.type) {
        case 'DATA_LOADED':
            // console.log("en allPostF state", state);
            // console.log("en allPostF state.posts", state.posts);

            newState.posts = state.posts.concat(action.data);
            isNewState = true;
            break;

        case 'CLEAR_DATA':
            newState.posts = [];
            isNewState = true;
            break;

        default:
            isNewState = false;
    }

    if(isNewState){
        return newState;
    }
    else{
        return state;
    }
};

const test = (state="2", action) =>{
    return state;
}

const passwordValid = (state={valid: false}, action) => {
    let newState = Object.assign({}, state);
    let isNewState = false;

    switch (action.type) {
        case 'VALID_PASSWORD':
            newState.valid = action.val;
            isNewState = true;
            break;

        default:
            isNewState = false;
    }

    if(isNewState){
        return newState;
    }
    else{
        return state;
    }
}

const userStatusReducer = (state={message: ''}, action) => {
    let newState = Object.assign({}, state);
    let isNewState = false;

    switch (action.type) {
        case 'USER_CREATED':
            newState.message = 'The user has been created successfully !!';
            isNewState = true;
            break;
        case 'USER_ERROR':
            newState.message = 'Error in the data of the user';
            isNewState = true;
            break;

        default:
            isNewState = false;
    }

    if(isNewState){
        return newState;
    }
    else{
        return {}; //state; //debido a que se usa en login.js para que se limpie siempre que se cambia de pagina
    }
}

const session = (state={session: null}, action) => {
  let newState = Object.assign({}, state);
  let isNewState = false;

  switch (action.type) {
      case 'LOGIN':
          newState.session = action.data;
          isNewState = true;
          break;
      case 'LOGOUT':
          newState.session = null;
          isNewState = true;
          break;

      default:
          isNewState = false;
  }

  if(isNewState){
      return newState;
  }
  else{
      return state;
  }
}

const reducer = combineReducers({
    allPostX: allPostF,
    passwordValid: passwordValid,
    form: formReducer,
    userStatus: userStatusReducer
});

const store = createStore(reducer);

//console.log("en store: ", reducer);


export default store;
