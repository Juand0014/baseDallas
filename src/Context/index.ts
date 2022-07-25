//https://www.youtube.com/watch?v=8HE657KssxE&ab_channel=FernandoHerrera

import { createContext } from "react";

export const context = createContext({
	name: "",
	age: 0,
	setName: () => {},
	setAge: () => {}
} as any);
