import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


const AHeader = (props) => {
    return(
        <div>
            <div>AUT</div>
            <Link to='/'>Home</Link>
            <Link to={`/${props.session.id}/posts`}>Mis post</Link>
            <Link to='/' onClick={props.logoutFunctionDispache}>Logout</Link>
        </div>
    )
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
            //console.log(ownProps);
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AHeader);
//export default AHeader
