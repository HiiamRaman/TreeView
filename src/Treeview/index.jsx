
import MenuList from "./Menu-list"
import MenuItem from "./Menu-item"
export default function TreeView({Menus}){
    return <div>
      {
        <MenuList list={Menus}/>
      }
    </div> 
}