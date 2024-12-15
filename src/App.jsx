
import TreeView from "./Treeview/index.jsx" 
import './App.css'
import Menus from './Treeview/Data.js'
function App() {


  return (
    <>
    <h1>Raman's TreeView</h1>

    <TreeView Menus={Menus}/>
    </>
  )
}

export default App
