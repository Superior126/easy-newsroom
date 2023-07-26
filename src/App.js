import { BrowserRouter, Route, Routes } from "react-router-dom";
// Import Pages
import Main from "./pages/home";
import NewPost from "./pages/new_post";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/new_post" element={<NewPost />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;