
import './App.css';
import Donation from './components/donation/donation';
import Header from './components/header/header';
import Programs from './components/programs/programs';

import Login from './Login';
import {Route, Routes} from 'react-router-dom'
import {Link} from 'react-router-dom'
import Main from './components/main/main';


const App =()=>{
  
  return( 
    <div>
      <div className='two'>
      <Header/>
      <ul className='flex'>
  <li className='lishka'>
    <Link to="/programs">programs |</Link>
  </li>
  <li className='lishka'>
    <Link to="/login">login |</Link>
  </li>
  <li className='lishka'>
    <Link to="/donation">donation </Link>
  </li>
</ul>
</div>

      <Routes>
      <Route path="/" element={<Main/> }/>
      <Route path="/programs" element={<Programs/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/donation" element={<Donation/>}/>
      </Routes>
  </div>
  )
}
export default App;
