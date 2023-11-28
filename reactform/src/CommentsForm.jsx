export default function CommentsForm (){
    return(
        <div>
            <h4> Give a comment</h4>
            <form>
                <input placeholder="username" type="text" />
                <br /> <br /> 
                <textarea >Remarks </textarea>
                <br /> <br /> 
                <input placeholder="rating" type="number" min={1} max={5}/>
                <br /> <br /> 
                <button>add commnet</button>
            </form>
        </div>
    )
}