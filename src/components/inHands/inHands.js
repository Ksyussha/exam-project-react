import { Component } from 'react';
import './inHands.css';


class Hand extends Component {
    render(){ 
  return (
    <div className='inHand'>
        <div className='lineFlex'>
    <div className='pic1'></div>
    <div className='pic2'></div>
    <div className='pic5'></div>
    </div>
    <div className='lineFlex'>
    <div className='pic3'></div>
    <div className='pic4'></div>
    <div className='pic6'></div>
    </div>

    </div>
  );
    }
}

export default Hand;