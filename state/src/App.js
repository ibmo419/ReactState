import './App.css';
import {Component} from 'react';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      fullName:'Mohamed Ali',
      bio:"je suis ingénieur industriel, d'origine Mahdia et j'ai 27 ans,j'étudie le developpement web dans le but de me reconvertir vers ce domaine  ",
      profession:"Developpeur web",
      imgSrc:'/MedAli.jpg',
      booleanShow:true
    }
  }
  Show=()=>{
    this.setState({booleanShow:!this.state.booleanShow})
  }
  render(){
    return (
      <div className="App">
        <header className="App-header">
        <button onClick={this.Show}>Show Profile</button>
        {this.state.booleanShow?
        <div>
        <h2>Full Name : {this.state.fullName} </h2>
        <p> Bio : {this.state.bio}</p>
        <h2>Profession : {this.state.profession}</h2>
        <img src={this.state.imgSrc} alt="ProfilePhoto" style={{width:200,border:"solid"}}></img>
        </div>:null}
        </header>
      </div>
    );
  }
  // componentDidMount(){
  //   this.myInterval=setInterval(()=>{
  //     this.setState(prevState=>({booleanShow:!prevState.booleanShow}))
  //   },3000)
  // }
  // disappearance and appearance of the profile automotically after each 4 s 
  componentDidMount(){
    this.myInterval=setInterval(this.Show,4000)
  }
}
export default App 
