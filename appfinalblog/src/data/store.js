import { createStore, combineReducers } from 'redux';

const allPost = (state={posts: []}, action) => {
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
    allPost: allPost
});

const store = createStore(reducer);

export default store;