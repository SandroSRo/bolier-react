import { useSelector } from "react-redux"

export function Header(params) {
    const user = useSelector((state)=> state.auth)
    return(
        <div className="flex flex-row w-full justify-between items-center bg-indigo-100 h-[80px] p-5">
           <div className="w-[50%]"><h1 className="text-black font-bold text-3xl p-5">SysFinance</h1></div>
           <div><span className="text-black font-bold">Olá</span> {user.name}</div>
        </div>
    )
}
