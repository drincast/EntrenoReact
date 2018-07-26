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

const sessionReducer = (state={session: null}, action) => {
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

const paginationReducer = (state={total: 1, page: 1}, action) => {
  let newState = Object.assign({}, state);
  let isNewState = false;

  switch (action.type) {
      case 'SET_CURRENT':
          newState.page = action.page;
          isNewState = true;
          break;
      case 'SET_TOTAL':
          newState.total = action.total;
          //console.log(action.total);
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

const showPostReducer = (state={post: null}, action) =>{
    let newState = Object.assign({}, state);
    let isNewState = false;

    switch (action.type) {
        case 'GET_POST':
            newState.post = action.post;
            isNewState = true;
            break;
        case 'CLEAR_POST':
            newState.post = {};
            isNewState = true;
            break;

        default:
            isNewState = false;
    }

    if (isNewState) {
        return newState;
    }
    else {
        return state;
    }    
}

const postErrorReducer = (state={message: null}, action) =>{
    let newState = Object.assign({}, state);
    let isNewState = false;

    switch (action.type) {
        case 'ERROR_GET_POST':
            newState.message = "Error al cargar el post";
            isNewState = true;
            break;

        default:
            isNewState = false;
    }

    if (isNewState) {
        return newState;
    }
    else {
        // TODO: Mejorar no debe alterar el state
        state.message = null;
        return state;
    }    
}

/*
TODO: entender el porque el reducer sessionReducer sin bindiarlo en el combineReducer funciona
*/
const reducer = combineReducers({
    allPostX: allPostF,
    passwordValid: passwordValid,
    form: formReducer,
    userStatus: userStatusReducer,
    pagination: paginationReducer,
    session: sessionReducer,
    post: showPostReducer,
    postError: postErrorReducer
});

const store = createStore(reducer);

//console.log("en store: ", reducer);


export default store;
