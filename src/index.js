// import React from 'react';
import ReactDOM from "react-dom";
import { Toaster } from "react-hot-toast";
import { Reset } from "styled-reset";

import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import "./assets/vars.css";
import "animate.css";
import MarkdownStyleOverride from "./common/component/MarkdownStyleOverride";
import ReduxRoutes from "./routes";

ReactDOM.render(
  <>
    <Reset />
    <Toaster />
    <DndProvider backend={HTML5Backend}>
      <ReduxRoutes />
    </DndProvider>
    <MarkdownStyleOverride />
  </>,
  document.getElementById("root")
);