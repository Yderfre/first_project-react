import React from 'react'
import exerciceImg from '../images/exercise.png'
class card extends React.Component {
    render(){
        return (
            <div>
                <div>
                    <img src={exerciceImg}/>
                </div>
                <div>
                    <h1>Technique Guides</h1>
                    <p>Learn amazing street wokout and calisthenics</p>
                </div>
            </div>
        )
    }
}

export default card