import React from 'react'
import Button from '../../../Layout/UI/Button/Button'
import { connect } from 'react-redux'
import * as actions from '../../../../store/actions/index'
import classes from './Response.module.css'

const Response = (props) => {

    const deleteResponseHandler = () => {
        props.deleteResponse(props.id, props.responseID);
    }

    let showButton = 
        props.email === props.resEmail 
        ?  <Button btnType = 'Danger' clicked = {() => deleteResponseHandler()}>Delete Reply</Button>
        : null;

    return (
        <div className = {classes.Response}>
            <section>
                {props.resEmail} : {props.response}
            </section>
           {showButton}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        id: state.fullpost.id,
        email: state.auth.email
    }
}

const mapDispatchToProps = dispatch => {
    return {
        deleteResponse: (id, responseID) => dispatch(actions.deleteResponse(id, responseID))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Response);
