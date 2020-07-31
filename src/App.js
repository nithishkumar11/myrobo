import React,{ Component } from 'react';
import './App.css';
import Sticky from './Sticky';
import Input from './Input';
import CardList from './CardList';
import 'tachyons';

class App extends Component {
  constructor() {
    super()
    this.state={
        robots : [],
        searchfield : ''
    }
  }

onSearch = (event) =>{
    this.setState({ searchfield: event.target.value });
}

componentDidMount(){
  fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json()).then(user=>{this.setState({robots:user})});
}




  render(){
    const filteredRobots = this.state.robots.filter(robot=> robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase()));
    return(
    <div className = "tc bg-gold">
      <h1 className = "f2">ROBO-MATE</h1>
      <Input searchChange = {this.onSearch}/>
      <Sticky>
          <CardList robots = {filteredRobots}/>
      </Sticky>
    </div>
    );
  }
}

export default App; 