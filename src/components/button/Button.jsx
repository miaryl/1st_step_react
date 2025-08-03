import { useState } from 'react';
import './Button.css';

function Button({text, color}){
    const [counter, setCounter] = useState(0);

    function handleClick(){
        setCounter(counter +1);
    }
    /* also:
    const handleClick =>(){
        setCoutner(counter +1);
        };
        
        */

    return(
        <button className={color == "light" ? "buttonLight" : "buttonDark"}
        /*then directry write function: onClick={()=>setCounter(counter+1)} */
        onClick={handleClick}>{text} - {counter}</button>
    )
}

export default Button