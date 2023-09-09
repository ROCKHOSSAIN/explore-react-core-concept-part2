import { useEffect, useState } from "react"
import './friends.css'
import Friend from "./friend";
export default function Friends(){
    const [friend, setfriends] = useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=>res.json())
        .then(data =>setfriends(data))
    },[])
    return(
        <div className='box'>
            <h3>Friends:{friend.length}</h3>
            {
                friend.map(friend =><Friend friend={friend}></Friend>)
            }
        </div>
    )
}