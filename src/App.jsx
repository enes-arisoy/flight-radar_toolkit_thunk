import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Map from "./pages/map/index";
import List from "./pages/list/index";
import Header from "./components/header/index";
import { useDispatch } from "react-redux";
import { getFlights } from "./redux/actions";
import Modal from "./components/modal";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFlights());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Map />} />
          <Route path="/list" element={<List />} />
        </Routes>

        <Modal />
      </main>
    </BrowserRouter>
  );
};

export default App;
