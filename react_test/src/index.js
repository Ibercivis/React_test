import React from 'react';
import { createRoot } from "react-dom/client";
import { App, App2 } from './App'; //para importarlos {} recordar

//reactdoom.render(<App/>, document.getElementById("root"));
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
    <App/>
);


