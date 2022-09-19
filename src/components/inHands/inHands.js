import './inHands.css';
import river from '../images/река.jpg';
import forest from '../images/лес.avif';
import famine from '../images/голод.jpg';
import animals from '../images/носорог.jpg';

const Hand =()=>{
  return (
    <div className='inHand'>
        <div className="containerr">
  <div className="box">
    <img src={river}></img>
    <span>EVERYTHING</span>
  </div>
  <div className="box">
    <img src={famine}></img>
    <span>IN</span>
  </div>
  <div className="box">
    <img src={forest}></img>
    <span>OUR</span>
  </div>
  <div className="box">
    <img src={animals}></img>
    <span>HANDS</span>
  </div>
</div>
    </div>
  );
    
}

export default Hand;