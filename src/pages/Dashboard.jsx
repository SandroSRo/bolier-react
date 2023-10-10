import { Header } from "../components/Header";
import { MenuBar } from "../components/MenuBar";

export function Dashboard(options) {
  return (
    <div class="grid grid-rows-3 grid-flow-col">
      <div className="row-span-3">
        <MenuBar />
      </div>
      <div className="col-span-2">
        <Header />
      </div>
      <div className="row-span-2 col-span-2">
        <div className="w-full h-[940px] bg-indigo-400"></div>
      </div>
    </div>
  );
}
