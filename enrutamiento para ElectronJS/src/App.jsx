import ShowComponent from "./components/ShowComponent";
import NavigatorElectron from "./components/Navigator Electron";
import { useState } from "react";

export default function App({newComponent}) {
  const [componentShowing, setComponentShowing] = useState("home");
  return (
    <>
        <NavigatorElectron setComponentShowing ={setComponentShowing}/>
        <ShowComponent componentShowing ={componentShowing}/>
    </>
  );
}
