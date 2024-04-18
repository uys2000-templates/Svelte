import { writable } from "svelte/store";

export const layout = writable(
  null as null | ConstructorOfATypedSvelteComponent
);
export const page = writable(null as null | ConstructorOfATypedSvelteComponent);

export const route = writable("" as string);
