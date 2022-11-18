// import logo from './logo.svg';
// import './App.scss';
import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import AboutUs from "./pages/AboutUs";
import AddToCart from "./pages/AddToCart";
import AllPart from "./pages/AllPart";
import Engines from "./pages/Engines";
import FAQ from "./pages/FAQ";
import Gearbox from "./pages/Gearbox";
import Guide from "./pages/Guide";
import NotFound from "./pages/NotFound";
import PartItems from "./pages/PartItems";
import Product from "./pages/Product";

// import Header from "./components/Layout/Header";

function App() {
  return (
    <Layout>
      {/* <Header/> */}
      <Routes>
        <Route exact path="/" element={<Navigate to="/about-us" />} />
        <Route exact path="/about-us" element={<AboutUs />} />
        <Route path="/all-part">
          <Route index element={<AllPart />} />
          <Route path="item" element={<PartItems />} />
          <Route path="view-product" element={<Product />} />
        </Route>
        <Route exact path="/faq" element={<FAQ />} />
        <Route exact path="/engines" element={<Engines />} />

        <Route exact path="/gearbox" element={<Gearbox />} />
        <Route exact path="/guide" element={<Guide />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

export default App;
