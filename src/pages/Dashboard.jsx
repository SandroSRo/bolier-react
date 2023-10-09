import { Header } from "../components/Header";
import { MenuBar } from "../components/MenuBar";

export function Dashboard(options) {
    return(
        <>
        <Header/>
        <div className="w-full h-[940px] bg-indigo-400">
        <MenuBar/>
        </div>
        </>
    )
}
