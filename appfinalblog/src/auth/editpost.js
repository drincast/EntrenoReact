import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
import EditPostForm from './editpostform';

class EditPost extends Component {
    componentDidMount(){
    }

    componentWillUnmount(){
    }

    handleData = (data) => {
        console.log(data);
    }

    render() {
        return(
            <div>
                <h4>Editar</h4>
                <EditPostForm onSubmit={this.handleData}></EditPostForm>
            </div>

        )
    }
}

const mapStateToProps = (state, ownProps) => {
    //console.log('valor de session', state.session); //OK
    return {
        session: state.session.session,
        listPosts: state.listUserPosts.data,
        errorListPosts: state.errorListUserPosts.message,
        own: ownProps
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getMyPostDispache: (data) => {
            let config = {'Authorization': 'Bearer' + data.token};
            axios.get(`https://blog-api-u.herokuapp.com/users/${data.userId}/posts`, {headers: config})
            .then((response) => {;
                dispatch({type: 'USER_LIST_POSTS', data: response.data});
            })
            .catch((error) => {
                console.log(error);
                dispatch({type: 'ERROR_USER_LIST_POSTS'});
            });
        },
        clearMyPostsWhenExit: () =>{
            dispatch({type: 'CLEAR_USER_LIST_POSTS'});
        }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditPost);
