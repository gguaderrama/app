import React from 'react'

import ReactDom from 'react-dom'
import './index.css';

class App extends React.Component{
    render(){
        return(
            <div>
                Hello world !
            </div>
        )
    }
}

ReactDom.render(
     <App/>, 
    document.getElementById('app')
)