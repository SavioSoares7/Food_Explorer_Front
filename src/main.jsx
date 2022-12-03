import React from "react";
import ReactDOM from "react-dom/client";

import { SingIn } from "../src/pages/SingIn";
import { SingUp } from "./pages/SingUp";
import { Home } from "./pages/Home";
import { Request } from "./pages/Request";
import { EditDish } from "./pages/EditDish";
import { Payment } from "./pages/Payment";

import { ThemeProvider } from "styled-components";

import Themes from "./styles/themes";
import Global from "./styles/global";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={Themes}>
      <Global />

      <Router>
        <Routes>
          <Route path="/payment" element={<Payment />} />
          <Route path="/editdish" element={<EditDish />} />
          <Route path="/request" element={<Request />} />
          <Route path="/login" element={<SingIn />} />
          <Route path="/register" element={<SingUp />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </ThemeProvider>
  </React.StrictMode>
);
