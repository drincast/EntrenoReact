import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

class Post extends Component{
    componentWillMount(){                
        this.props.clearPostDispache();
   }

    componentDidMount(){                
         this.props.getPostDispache();
    }

    render(){
        return(
            <div>
                <h2>{this.props.post !== null ? this.props.post.title : null}</h2>
                <h4>                    
                    {this.props.post !== null ? this.props.post.body : null}
                </h4>
                <h3>{this.props.error.message}</h3>
                <div>hola</div>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {    
    return {
        post: state.post.post,
        own: ownProps,
        error: state.postError
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getPostDispache: () => {            
            //console.log(ownProps.match.params.id);
            let idPost = parseInt(ownProps.match.params.id);
            axios.get(`https://blog-api-u.herokuapp.com/v1/posts/${idPost}`)
            .then((response) => {            
                //console.log(response.data);
                dispatch({type: "GET_POST", post: response.data});
            })
            .catch((error) => {
                console.error(error);
                dispatch({type: 'ERROR_GET_POST'})
            })
            //dispatch({type: "LOGOUT"});
        },
        clearPostDispache: () => {
            dispatch({type: "CLEAR_POST"});
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post);
//export default Post;