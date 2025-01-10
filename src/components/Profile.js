import { useEffect, useState } from "react";

const Profile = (props)=>{
    const [count, setCount] = useState(0)
    function increseCount(count){
        return count+1;
    }
    useEffect(()=>{
        console.log("useEffect");
        return ()=>{
            console.log("udeEffectReturn");
        }
    }, [])
    return(
        <div className="footer">
            <h2>Profile Functional Component /</h2>
            <h2>Name: {props.name}</h2>
            <h2>Count: {count}</h2>
            <button onClick={()=>setCount(increseCount(count))}>Count ++</button>
        </div>
    )
}

export default Profile;