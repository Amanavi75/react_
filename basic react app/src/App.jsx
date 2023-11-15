import "./App.css" ;
import Title from "./title.jsx";


function Description() {
  return <p> this is the description about the first component</p>
}



function App() {
  
  return (
    <div>
      <h1> this is my app component</h1>
      <p> inside we have the title component</p>
      <Title/>
      <Description/>
    </div>
  )
}

export default App;
 