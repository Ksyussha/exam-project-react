import { Component } from 'react';
import './inHands.css';
import river from '../images/река.jpg';
import forest from '../images/лес.avif';
import famine from '../images/голод.jpg';
import animals from '../images/носорог.jpg';

class Hand extends Component {
    render(){ 
  return (
    <div className='inHand'>
        <div class="containerr">
  <div class="box">
    <img src={river}></img>
    <span>EVERYTHING</span>
  </div>
  <div class="box">
    <img src={famine}></img>
    <span>IN</span>
  </div>
  <div class="box">
    <img src={forest}></img>
    <span>OUR</span>
  </div>
  <div class="box">
    <img src={animals}></img>
    <span>HANDS</span>
  </div>
</div>
    </div>
  );
    }
}

export default Hand;