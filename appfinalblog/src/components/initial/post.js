import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

class Post extends Component{
    componentDidMount(){
        this.props.getPostDispache();
    }

    render(){
        return(
            <div>
                <h2>Post</h2>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    //console.log('valor de session', state.session); //OK
    return {
        session: state.session.session,
        own: ownProps
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getPostDispache: () => {            
            console.log(ownProps.match.params.id);
            let idPost = parseInt(ownProps.match.params.id);
            axios.get(`https://blog-api-u.herokuapp.com/v1/posts/${idPost}`)
            .then((response) => {
                console.log(response);                
            })
            .catch((error) => {
                console.log(error);
            })
            //dispatch({type: "LOGOUT"});
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post);
//export default Post;