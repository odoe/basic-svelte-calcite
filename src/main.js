import "./app.css";
import App from "./App.svelte";
import { setAssetPath } from "@esri/calcite-components/dist/components";

setAssetPath("https://js.arcgis.com/calcite-components/1.10.0/assets");

const app = new App({
  target: document.getElementById("app"),
});

export default app;
