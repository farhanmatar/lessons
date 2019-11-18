import React, {Component }from 'react'
import { connect} from 'react-redux';

class C extends Component{
    render(){
        return (
            
            <div>
                C , y ={this.props.y}
                <button onClick={this.props.incrementX}>increment X </button>
            </div>
            
           
        )
    }
}

// redux specific mappers

const mapStateTpProps =(state) => ({
    y: state.y
})
const mapDispatchToProps = (dispatch) => ({
    incrementX: () => dispatch({type:'INCREMENT_X'})
});

// export 
//export default C;

export default connect(mapStateTpProps, mapDispatchToProps )(C);