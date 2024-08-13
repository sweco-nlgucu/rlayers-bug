import { useState, useEffect } from "react";
import { RControl, RMap, RLayerVector, ROSM } from "rlayers";
import { fromLonLat } from "ol/proj";
import "./App.css";

const coords = {
  origin: [2.364, 48.82],
  ArcDeTriomphe: [2.295, 48.8737],
};

// There's three solutions to preventing the error.
function App() {
  const [anArray, setAnArray] = useState([1, 2]);

  // Solution #1: remove this useEffect...
  useEffect(() => {
    setAnArray([1, 2, 3]);
  }, []);

  return (
    <RMap
      className="example-map"
      initial={{ center: fromLonLat(coords.origin), zoom: 11 }}
    >
      {/* Solution #2: move this ROSM component between the closing of the next fragment and the RControl component... */}
      <ROSM />
      <>
        {anArray.map((value) => (
          <RLayerVector key={value} />
        ))}
      </>
      {/* Solution #3: remove this RControl.RCustom */}
      <RControl.RCustom></RControl.RCustom>
    </RMap>
  );
}

export default App;
