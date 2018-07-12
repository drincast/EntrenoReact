import { createStore, combineReducers } from 'redux';

const allPostF = (state={postsA: [{title: "Título del post", body: "cuerpo del post"}]}, action) => {
    let newState = Object.assign({}, state);
    let isNewState = false;

    switch (action.type) {
        case 'DATA_LOADER':
            
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
    allPostX: allPostF
});

const store = createStore(reducer);

export default store;