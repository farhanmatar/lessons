import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {logout} from '../Action'
class Home extends Component {
    handelRedirect=()=>{
        if(this.props.logedIn){
            return null
        }else{
            return <Redirect to='/'/>
        }


    }
    render() {
        return (
            <div>{this.handelRedirect()}
               <h2> hello</h2>
                <h1>welcome !!!</h1>
                <h2>{this.props.user.username}</h2>
                <button onClick={this.props.LogoutUser}>logout</button>
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    user : state.logedUser,
    logedIn: state.logedIn

})

const mapDispatchToProps = (dispatch) => ({
    LogoutUser: () => dispatch(logout())
})
export default connect(mapStateToProps,mapDispatchToProps)(Home)