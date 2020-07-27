import React from 'react'
import ReactDOM from 'react-dom'


const user = {
    firstName: 'Fredy',
    lastName: 'Rivera',
    avatar:'https://i0.wp.com/www.bitme.gg/wp-content/uploads/2019/09/z-1-.jpg?w=1140&ssl=1'
}

function getName(user){
    return `${user.firstName} ${user.lastName}`
}

function getGreeting(user){
    if(user){
        return <h1> Hello {getName(user)}</h1>
    
    }
    return <h1>Hello Stranger</h1>
}



const name = 'Fredy'

const element = (
    <div>
        <h1>{getGreeting(user)}</h1>
     <img src={user.avatar}/>
    </div>
)
const container = document.getElementById('root')
//ReactDOM.render(__QUE__,__DONDE__)
ReactDOM.render(element, container)