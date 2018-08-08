import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
import EditPostForm from './editpostform';

class EditPost extends Component {
    componentDidMount(){
    }

    componentWillUnmount(){
        this.props.clearEditPostDispache();
        console.log(this.props);        
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
        clearEditPostDispache: () =>{
            dispatch({type: 'CLEAR_EDIT_POST'});
        }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditPost);
