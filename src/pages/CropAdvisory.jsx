import { useState } from "react";
import CropForm from "../components/CropForm";
import Advice from "../components/Advice";

function CropAdvisory() {

  const [cropData, setCropData] = useState({
    crop: "",
    temperature: "",
    moisture: ""
  });

  return (
    <div style={{ padding: "20px" }}>

      <h2>Crop Advisory</h2>

      <CropForm cropData={cropData} setCropData={setCropData} />

      <Advice cropData={cropData} />

    </div>
  );
}

export default CropAdvisory;