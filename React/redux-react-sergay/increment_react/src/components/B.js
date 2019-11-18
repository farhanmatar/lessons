import React, {Component }from 'react'
import { connect} from 'react-redux';

class B extends Component{
    render(){
        return (
            
            <div>
                B , x ={this.props.x}
                <button onClick={this.props.incrementY}>INCREMENT Y </button>
            </div>
            
        )
    }
}
// redux specific mappers
const mapStateTpProps =(state) => ({
    x: state.x
})

const mapDispatchToProps = (dispatch) => ({
    incrementY: () => dispatch({type:'INCREMENT_Y'})
});

// export 
//export default B;

export default connect(mapStateTpProps,mapDispatchToProps  )(B);