import gsap from "gsap";
import { Draggable } from "gsap/all";
import { Resume, Safari, Terminal } from "@/windows";

import { Dock, NavBar, Welcome } from "@/components";
import Finder from "./windows/Finder";

gsap.registerPlugin(Draggable);

const App = () => {
  return (
    <main>
      <NavBar />
      <Welcome />
      <Dock />

      <Terminal />
      <Safari />
      <Resume />
      <Finder />
    </main>
  );
};

export default App;
