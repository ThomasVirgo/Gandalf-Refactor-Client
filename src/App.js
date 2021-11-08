import React from "react";
import { SocketContext, socket } from "./context/socket";
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import { LoginPage, RegisterPage, Dashboard } from "./pages";

const App = () => {
  return (
    <SocketContext.Provider value = {socket}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<LoginPage/>} />
          <Route exact path="/login" element={<LoginPage/>} />
          <Route exact path="/register" element={<RegisterPage/>} />
          <Route exact path="/dashboard" element={<Dashboard/>} />
        </Routes>
      </BrowserRouter>
    </SocketContext.Provider>
  );
}

export default App;
