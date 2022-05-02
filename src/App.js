import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DataVisualisations from "./pages/DataVisualisations";
import SingleDataVisualisation from "./pages/SingleDataVisualisation";
import About from "./pages/About";
import Error from "./pages/Error";
import NavigationOverlay from "./components/NavigationOverlay";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            <Route index path="/CL" element={<DataVisualisations />} />
            <Route path="/CL/about" element={<About />} />
            <Route
              path="/CL/data-visualisation/:dataVisualisationId"
              element={<SingleDataVisualisation />}
            />
            <Route path="*" element={<Error />} />
          </Routes>
          <Footer />
        </main>
        <NavigationOverlay />
      </BrowserRouter>
    </div>
  );
}

export default App;
