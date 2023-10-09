import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export function ListItem({ name ,router }) {

    const navigate = useNavigate()

  return (
    <li className="
    flex h-[50px] bg-slate-400 text-center border-b-2 cursor-pointer shadow-md
    transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ...
    " onClick={() =>navigate(router)}>
      <span className="font-bold text-white ml-10 mt-2">{name}</span>
    </li>
  );
}
