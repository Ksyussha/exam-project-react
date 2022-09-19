import './programs.css';
import dogs from '../images/friends.jpg';
import trash from '../images/мусор.png';
import tree from '../images/tree.webp';


const Programs =()=> {

  return (
    <div className="body">
    <h1>Able programs in Kazakhstan:</h1>
<div className="wrapper">
<div className="media">
<div className="layer">
<h1>очистка города</h1>
    <button className="custom-btn btn-16">записаться</button>
  </div>
<img src={trash}/>
</div>
 <div className="media">
<div className="layer">
    <h1>помощь приюту</h1>
    <button className="custom-btn btn-16">записаться</button>
  </div>
<img src={dogs} alt="" />
</div>
   <div className="media">
<div className='layer'>
    <h1>озеленение участка</h1>
    <button className="custom-btn btn-16">записаться</button>
    
  </div>
<img src={tree} alt="" />
</div>
</div>
</div>
  )
  }
  
  export default Programs