import { Component } from 'react';
import './header.css';
import logo from '../images/logo (3).png';
import logo2 from '../images/logo.png';
import About from '../aboutUs/aboutUs';
import Programs from '../programs/programs'
import Donation from '../donation/donation'

class Header extends Component {
    constructor(props){
        super(props)
        this.handleMenu = this.handleMenu.bind(this);
      }
      handleMenu({ value, href }) {
        this.props.handleMenu(value, href);
      }
    render(){ 
  return (
    <div className='cont'>
    <div className='header'>
        <div className='logo-name'>
            <div className='imgIn'>
            <img src={logo2}></img>
            </div>
            <div className='name'>
            <h1 >eKin</h1>
            </div>
            <div className='imgIn'>
            <img src={logo}></img>
            </div>
            
        </div>
        
        
    </div>
    {/* <div>
        <About onSubmit={this.handleMenu} />
        <Programs onSubmit={this.handleMenu} />
        <Donation onSubmit={this.handleMenu} />
      </div> */}
    </div>
  );
    }
}

export default Header;