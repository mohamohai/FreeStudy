import { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { initializeApp } from "firebase/app";
import firebaseConfig from './firebase.js';
import { getDatabase, ref, onValue,set, add, push} from "firebase/database";

function FireLive(props){

    const [UserName,setUserName] = useState("guest")
    const [Message,setMessage]=useState("ahwjs1022")
    const [Email,setEmail]=useState("")
    
    useEffect(()=>{
        const db = getDatabase();
        const starCountRef = ref(db, 'chatting1/' + "guest" );
        onValue(starCountRef, (snapshot) => {
        const data = snapshot.val();
        console.log(data)
        }); 
    },[])

    const location = useLocation();
    const { key1 } = useParams();

    function writeUserData(userId, name, email, imageUrl) {
        const timeCheck = new Date();
        console.log(timeCheck)
    const db = getDatabase();
    push(ref(db, 'chatting1/' + "guest"), { //쿠기계정
      username: UserName,                      //
      email   : Email,                                         
      message : Message,
      asd :String(timeCheck),
      
    });
  }

    return(
        <div>
            {/* {location.state.name}
            {key1} */}
            {Message}
           <br></br>
           <input type="text" onChange={(e)=>{setMessage(e.target.value)}}></input> 
           <button onClick={()=>writeUserData()}></button>
        </div>
    )
}export default FireLive