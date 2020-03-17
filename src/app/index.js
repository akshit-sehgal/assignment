import React from "react";
import ReactDOM from "react-dom";
import './index.scss';
import App from "./App";

const rootElement = document.getElementById("root");
if(DEVELOPMENT){
    ReactDOM.render(<App />, rootElement);
}
else{
    ReactDOM.hydrate(<App />, rootElement);
}
