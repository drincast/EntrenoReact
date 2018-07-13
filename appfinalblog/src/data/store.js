import { createStore, combineReducers } from 'redux';

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

const reducer = combineReducers({    
    allPostX: allPostF
});

const store = createStore(reducer);

//console.log("en store: ", reducer);


export default store;