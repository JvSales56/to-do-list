import { useState, memo } from "react";
import "./Chore.css";

function Chore ({text}){

    const [completed, setCompleted] = useState(false);

    const alterateCompleted = () =>{
        setCompleted(!completed);
    }

    return (
        <li className={completed ? "completed" : ""}>
            <input type="checkbox" onChange={alterateCompleted} />
            <span className={completed ? "completed" : ""}>{text}</span>
            <button>Remove</button>
        </li>
    )
}

export default memo(Chore);