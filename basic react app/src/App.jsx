import "./App.css" ;
import Title from "./title.jsx";
import MsgBox from "./MsgBox.jsx";


function Description() {
  return <p> this is the description about the first component</p>
}



function App() {
  
  return (
    <>
      <h1> this is my app component</h1>
      <p> inside we have the title component</p>
      <Title/>
      <Description/>
      <MsgBox userName="shradha" textColor="yellow"/>
      <MsgBox userName="Aman" textColor="green"/>
      </>
  )
}

export default App;
 
//* in case of using div , we are creating an extra node to make to compact we use fragment i.e <> inside it we use to combine multiple component</>