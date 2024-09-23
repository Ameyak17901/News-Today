import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home";
// import store from "./store";
// import { Provider } from "react-redux";

function App() {
  return (
    // <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="home" element={<Home />}></Route>
          <Route index element={<Navigate replace to="/home" />} />
        </Routes>
      </BrowserRouter>
    // </Provider>
  );
}

export default App;
