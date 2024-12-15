import MenuItem from "./Menu-item";

import Menus from "./Data.js";
export default function MenuList({list=[]}){
    return <ul className="Menu-List-Conatiner">

        {
            list && list.length? 
            list.map(listItem=> <MenuItem  item={listItem}  key={listItem}/>)
            : null
        }
    </ul>
}
   
// import MenuItem from "./Menu-item";
// import Menus from "./Data.js";

// export default function MenuList({ list = [] }) {
//     return (
//         <ul className="Menu-List-Container">
//             {list && list.length ? (
//                 list.map((listItem, index) => (
//                     <MenuItem item={listItem} key={index} />
//                 ))
//             ) : null}
//         </ul>
//     );
// }
