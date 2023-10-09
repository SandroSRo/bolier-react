import { BoxLogin } from "../components/BoxLogin";

export function Auth(options) {
    return(
        <div className="flex flex-row items-center w-full h-[935px] bg-indigo-400">
      <div className="w-[45%] text-center">
        <h1 className="text-6xl font-bold text-white">SysFinance</h1>
        <p className="font-bold text-white   mt-5">Sistema financeiro integrado</p>
        <span className=' text-white  mt-5"'>Versão 0.1</span>
      </div>
      <BoxLogin/>
    </div>
    )
}
