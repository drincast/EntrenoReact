import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';

class MyPost extends Component {
    componentDidMount(){
        let data = {
            userId: this.props.session.id,
            token: this.props.session.jwt
        }
        //console.log("componentDidMount", data);        
        this.props.getMyPostDispache(data);
    }

    render() {
        return(
            <div>
                <h2>Mis Posts</h2>
                <Link to={`/${this.props.session.id}/create`}>Crear Post</Link>
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
        getMyPostDispache: (data) => {
            // dispatch({type: "LOGOUT"});
            // console.log(ownProps);
            let config = {'Authorization': 'Bearer' + data.token};
            axios.get(`https://blog-api-u.herokuapp.com/users/${data.userId}/posts`, {headers: config})
            .then((response) => {
                console.log(response);                
            })
            .catch((error) => {
                console.log(error);                
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyPost);
