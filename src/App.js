
import './App.css';
import Donation from './components/donation/donation';
import Header from './components/header/header';
import Programs from './components/programs/programs';
import {Route, Routes} from 'react-router-dom'
import {Link} from 'react-router-dom'
import Main from './components/main/main';



const App =()=>{
  // const [modalActive, setModalActive] = useState(true)
  return( 
    <div>
      <div className='two'>
      <Header/>
      <ul className='flex'>
      <li className='lishka'>
    <Link to="/main">main |</Link>
  </li>
  <li className='lishka'>
    <Link to="/programs">programs |</Link>
  </li>
  <li className='lishka'>
    <Link to="/donation">donation </Link>
  </li>
</ul>
{/* <button className='open-btn' onClick={() => setModalActive(true)}>открыть окно</button> */}
{/* <Modal active={modalActive} setActive={setModalActive}>
  <form action=''>
    <input type="text"> </input>
    <input type="text"> </input>
    <input type="text"> </input>
    <button> SEND</button>
  </form>
</Modal> */}
</div>

      <Routes>
      <Route path="/" element={<Main/> }/>
      <Route path="/main" element={<Main/>}/>
      <Route path="/programs" element={<Programs/>}/>
      <Route path="/donation" element={<Donation/>}/>
      </Routes>
      
  </div>
  )
}
export default App;
