import { Route, Routes } from "react-router-dom";
import Header from "./components/header/Header.component";
import Home from "./routes/home/home";
import CharacterPage from "./routes/character/character";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Home />} />
      </Route>
      <Route path="/characters/:id" element={<Header />}>
        <Route index element={<CharacterPage />} />
      </Route>
    </Routes>
  );
};

export default App;
