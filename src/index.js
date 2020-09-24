import React from 'react';
import { hydrate, render } from "react-dom";
import { } from "react-router-dom";
import App from './App';

const APP = (<App />)

const rootElement = document.getElementById("root");

if (rootElement.hasChildNodes()) {
  hydrate(APP, rootElement);
} else {
  render(APP, rootElement);
}
