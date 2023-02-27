import { useEffect } from "react";
import { Link } from "react-router-dom";

function MainPage(props){
    return(
        <div>
            <Link to={'/fireLive'}>보여지는 부분</Link><br></br>
            <Link to={"/fireLive"} state={{ name: "이종현" }}>state one </Link> <br></br>
            <Link to={`/fireLive`} state={{ name: "이종현", user: "coffeeman" }}> state two </Link>
        </div>
    )
}export default MainPage