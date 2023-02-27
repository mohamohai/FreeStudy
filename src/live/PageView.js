
import { useEffect, useState } from "react";
import { useLocation, useParams } from 'react-router-dom';
import firebaseConfig from './firebase.js';
import { getDatabase, ref, onValue,set, add, push} from "firebase/database";
import { initializeApp } from "firebase/app";

import './PageView.css'
function PageView(){
    useEffect(()=>{
        console.log(process.env.REACT_APP_projectId)
    },[])
    
    return(
    <div className="PageView">

    </div>
    )   
}export default PageView

