import { useState } from "react"

export default function CommentsForm (){

    let[formData,setformData] = useState({
        username: "",
        remarks: "",
        rating: 5,
    })

    // creating state variable as object 
    

    let handleInputChange = (event) =>{
        setformData((currData)=>{
            return {...currData,[event.target.name] : event.target.value}  // re rendering the ui 
        });
    }
    // input handler for multiple inputs 
    
    let handleSubmit = (event) => {
       console.log(formData)
       event.preventDefault();
    }
    // preventing the default criteria for the form 

    return(
        <div>
            <h4> Give a comment</h4>
            <form onSubmit={handleSubmit}> 
            <label htmlFor="username">username</label>
                <input placeholder="username" type="text" value={formData.username} onChange={handleInputChange} id="username" name="username"/>
                <br /> <br /> 
                <label htmlFor="remarks">remarks</label>
                <textarea  value={formData.remarks} placeholder="remarks" onChange={handleInputChange} id="remarks" name="remarks">Remarks </textarea>
                <br /> <br /> 
                <label htmlFor="rating">rating</label>
                <input placeholder="rating" type="number" min={1} max={5} value={formData.rating} onChange={handleInputChange} id="rating" name="rating"/>
                <br /> <br /> 
                <button>add commnet</button>
            </form>
        </div>
    )
}