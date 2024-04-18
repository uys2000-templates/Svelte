import { setDebugMode } from "u-logger";

import App from "./App.svelte";

import "./app.css";

setDebugMode(true, false);

const app = new App({
  target: document.getElementById("app")!,
});

export default app;
