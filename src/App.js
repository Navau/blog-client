import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import routes from "./config/routes";
import AuthProvider from "./providers/AuthProvider";

import { map } from "lodash";
import "./App.scss";

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {map(routes, (item, index) => (
            <Route
              key={index}
              path={item.path}
              element={<item.element routes={item.routes} />}
            />
          ))}
        </Routes>
      </Router>
    </AuthProvider>
  );
}
