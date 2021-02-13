import React from 'react'
import {useState} from 'react'

export default function AppFunction() {
    const [state, setState] = useState(()=>{
        return{
            fullName:'Mohamed Ali',
            bio:"je suis ingénieur industriel, d'origine Mahdia et j'ai 27 ans,j'étudie le developpement web dans le but de me reconvertir vers ce domaine  ",
            profession:"Developpeur web",
            imgSrc:'/MedAli.jpg',
            booleanShow:true  
        }
    })
    const Show=()=>{
        setState({...state,booleanShow:!state.booleanShow})
      }
    return (
        <div>
         <div className="App">
        <header className="App-header">
        <button onClick={Show}>Show Profile</button>
        {state.booleanShow?
        <div>
        <h2>Full Name : {state.fullName} </h2>
        <p> Bio : {state.bio}</p>
        <h2>Profession : {state.profession}</h2>
        <img src={state.imgSrc} alt="logo" style={{width:200,border:"solid"}}></img>
        </div>:null}
        </header>
      </div> 
        </div>
    )
}
