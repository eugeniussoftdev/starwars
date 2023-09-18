import React from "react";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

import { CharacterDetail } from "./components/CharacterDetail";
import { StarWarsList } from "./components/List";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StarWarsList />} />
        <Route path="/character/:characterName" element={<CharacterDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
