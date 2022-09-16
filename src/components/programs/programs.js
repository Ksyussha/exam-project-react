import { Component } from "react"
import './programs.css';
import dogs from '../images/friends.jpg';
import trash from '../images/мусор.png';
import tree from '../images/tree.webp';

class Programs extends Component {
    render(){ 
  return (
    <div className="body">
    <h1>Able programs in Kazakhstan:</h1>
<div class="wrapper">
<div class="media">
<div class="layer">
<h1>очистка города</h1>
    <button className="btn">записаться</button>
  </div>
<img src={trash}/>
</div>
 <div class="media">
<div class="layer">
    <h1>помощь приюту</h1>
    <button className="btn">записаться</button>
  </div>
<img src={dogs} alt="" />
</div>
   <div class="media">
<div class="layer">
    <h1>озеленение участка</h1>
    <button className="btn">записаться</button>
    
  </div>
<img src={tree} alt="" />
</div>
</div>
</div>
  )
  }
  }
  export default Programs