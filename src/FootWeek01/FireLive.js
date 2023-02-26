import { useEffect } from "react";
import { useLocation } from 'react-router-dom';
import { useParams } from 'react-router-dom';
function FireLive(props){
    

    const location = useLocation();
    console.log(location)
    const { key1 } = useParams();
    console.log(key1)
    return(
        <div>
            {key1}
        </div>
    )
}export default FireLive