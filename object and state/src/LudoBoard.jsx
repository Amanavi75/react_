import { useState } from "react"
export default function LudoBoard() {
    let [move, setMove] = useState({blue:0,red:0,yellow:0,green:0});
    let [count, setCount] = useState(0);

    //* intializing the state variable as an object

    let updateBlue=()=>{
        console.log(`moves = ${move.blue}`);
        setMove((preMove)=>{
            return {...preMove, blue:move.blue +1}
        });
    }
    let updateYellpw=()=>{
        console.log(`moves = ${move.yellow}`);
        setMove((preMove)=>{
            return {...preMove, yellow:move.yellow +1}
        });
    }
    let updateGreen=()=>{
        console.log(`moves = ${move.green}`);
        setMove((preMove)=>{
            return {...preMove, green:move.green +1}
        });
    }
    let updateRed=()=>{
        console.log(`moves = ${move.red}`);
        setMove((preMove)=>{
            return {...preMove, red:move.red +1}
        });
    }
    // *we will use spread operator so that a copy will create and a new address will generate an will able to see the changes on the ui 

    return (
        <div>
            <p> game begins</p>

            <div className="board">
                <p> Blue moves ={move.blue}</p>
                <button style={{backgroundColor:"blue"}}onClick={updateBlue}>+1</button>
                <p> Yellow moves ={move.yellow}</p>
                <button style={{backgroundColor:"yellow"}}onClick={updateGreen}>+1</button>
                <p> Green moves ={move.green}</p>
                <button style={{backgroundColor:"green"}}onClick={updateGreen}>+1</button>
                <p> Red moves ={move.red}</p>
                <button style={{backgroundColor:"red"}}onClick={updateRed}>+1</button>
                
            </div>
        </div>
    )
} 