import React, { Component } from 'react'

export default class Images extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             url: '',
             isLoading:false,
             fetchedData:[]
        }
    }
   static getDerivedStateFromProps(props, state) {
        if(state.url !==props.url){
            return(state.url=props.url)
        }else{
            return null
        }
    }
     
    componentDidMount(){
        this.setState({isLoading:true});

        const url =this.state.url;

        fetch(url)
        .then((response) => {
            return(response.json())
        })
        .then((date) =>{
            console.log(data)
            this.setState({fetchedData:date.hits,isLoading:false})

        }
        )
    }
    
    render() {
        return (
            <div>
                
            </div>
        )
    }
}
