import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import UsersPage from "./pages/users-page/UsersPage";
import AuthPage from "./pages/auth-page/AuthPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateRoute from "./components/private-route/PrivateRoute";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<AuthPage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route
          path="/users"
          element={
            <PrivateRoute>
              <UsersPage />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
