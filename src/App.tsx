import gsap from "gsap";
import { Draggable } from "gsap/all";
import { Safari, Terminal } from "@/windows";

import { Dock, NavBar, Welcome } from "@/components";

gsap.registerPlugin(Draggable);

const App = () => {
  return (
    <main>
      <NavBar />
      <Welcome />
      <Dock />

      <Terminal />
      <Safari />
    </main>
  );
};

export default App;
