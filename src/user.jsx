import { useEffect, useState } from "react";

export default function Users(){
    const [users, setUser] = useState([])
useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data=>setUser(data));
},[])
    return(
        <div>
            <h3>Users:{users.length}</h3>
        </div>
    )
}