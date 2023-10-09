import { useSelector } from "react-redux"
import { ListItem } from "./shared/CListItem"

export function MenuBar(options) {

    const items = useSelector((state)=>state.menu)
    console.log(items)

    return(
        <div className="flex flex-col w-[150px] h-[900px] bg-indigo-100">
            <ul className="flex flex-col list-none">
                {items.map(item=><ListItem name={item.name} router={item.router}/>)}
            </ul>
        </div>
    )
}
