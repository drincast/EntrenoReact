import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class MyPost extends Component {
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
        logoutFunctionDispache: () => {
            dispatch({type: "LOGOUT"});
            console.log(ownProps);
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyPost);
