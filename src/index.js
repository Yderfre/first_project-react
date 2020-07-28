import React from 'react'
import ReactDOM from 'react-dom'
import Card from './components/card'
import "../src/components/styles/card.css"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"


const container = document.getElementById('root')
//ReactDOM.render(__QUE__,__DONDE__)
ReactDOM.render(<Card 
    title="Flexiones Avanzadas"
    description="Aprenda a hacer flexiones con los pies en el aire"
    bg = "0"
    exer ="1"
    leftColor="#000000"
    rightColor="#ffffff"
/>, container)