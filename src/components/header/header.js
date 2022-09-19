
import './header.css';
import logo from '../images/logo (3).png';
import logo2 from '../images/logo.png';


const Header =()=> {
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
    </div>
  );
}

export default Header;