import React, { Component } from 'react';

class Test extends Component{
    state = {

    }

    componentWillMount(){
        fetch('http://catfact.ninja/breeds?limit=1')
            .then(response => response.json())
            .then(data => console.log(data))
    }

    render(){
        return(
            <div>
                hello
            </div>
        )
    }

}


export default Test;