import './App.css'
import Counter from './counter';
import Team from './team';
import Users from './user';
import Friends from './friends';

function App() {
  function handleclick(){
    alert('Button Clicked!!');
  }
  const handleclick2=()=>{
    alert('button clicked 2');
  }
  const addtofive=(num)=>{
    alert(num+3);
  }
  return (
    <>
     
      <h1> React Core Concept</h1>
      <Friends></Friends>
      <Users></Users>
      <Team></Team>
      <Counter></Counter>
      <button onClick={handleclick}>Click Me!!</button>
      <button onClick={handleclick2}>Click 2</button>
      <button onClick={()=>alert('button clicked 3!!')}>Third</button>
      <button onClick={()=>addtofive(3)}>Four</button>
    </>
  )
}

export default App
