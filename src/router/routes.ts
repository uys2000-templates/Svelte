import Default from "../layouts/Default.svelte";

import { default as ErrorLayout } from "../layouts/Error.svelte";

import Error from "../pages/Error.svelte";
import Home from "../pages/Home.svelte";

export default [
  {
    name: "Home",
    path: "/",
    component: Home,
    layout: Default,
  },
  {
    name: "Error",
    path: "*",
    component: Error,
    layout: ErrorLayout,
  },
];
