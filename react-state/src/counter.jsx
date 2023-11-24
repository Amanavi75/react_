import { useState } from "react";

export default function Counter(){
    let [count, setCount] = useState(0);
        

    // direct use of javascript function will only change and update in  the logic but it will not trigger on  the ui 


    //* for the use of this we will usestate which is basically a type of hook 

    // we have total of 15 hooks in react in recents updates 

    function inCount(){
        setCount(count+1);  

        //* this setCount will trigger the rerender on the ui 
       // console.log(count);
    }

    return(
        <div>
            <h3> Count={count}</h3>
            <button onClick={inCount}> increase Count</button>
        </div>
    );
}  