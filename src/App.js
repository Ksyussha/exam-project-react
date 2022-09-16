import { Component } from 'react';
import './App.css';
import Donation from './components/donation/donation';

import Header from './components/header/header';
import Hand from './components/inHands/inHands';
import Menu from './components/menu/menu';
import Programs from './components/programs/programs';
import About from './components/aboutUs/aboutUs';


class App extends Component {
  constructor(props){
    super(props)
    
  }
  render(){ 
  return( 
    <div>
  <Header/>
  <Hand/> 
  <About/>
  {/* <Menu site=" "/> */}
  <Programs/>
  <Donation/>
  </div>
  )
  }
}
export default App;
