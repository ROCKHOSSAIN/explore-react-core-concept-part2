import { useState } from "react"

export default function Team(){
    const [count,TeamCount] = useState(11);
    const handleAdd =()=>{
        const newCount = count + 1;
        TeamCount(newCount);
    }
    // 1st way --we will use this way
    // const handleremove =()=>{
    //     TeamCount(count - 1);
    // }
    // 2nd way 
    const handleremove =()=>{
    TeamCount(previousState=>previousState-1);

    }
   const Teamstyles ={
        border:'2px solid yellow',
        color:'skyblue',
        margin:'12px',
        padding:'15px',
        borderRadius:'15px'

    }

    return(
        <div style={Teamstyles}>
            <h3>Team :{count}</h3>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleremove}>Remove</button>
            
        </div>
    )
}