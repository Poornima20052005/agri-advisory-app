import rice from "../assets/rice.jpg";
import wheat from "../assets/wheat.jpg";
import maize from "../assets/maize.jpg";

function CropList() {

  const crops = [
    { name: "Rice", image: rice },
    { name: "Wheat", image: wheat },
    { name: "Maize", image: maize }
  ];

  return (
    <div style={{ padding: "20px" }}>

      <h2>Available Crops</h2>

      {crops.map((crop, index) => (
        <div key={index} style={{ marginBottom: "20px" }}>

          <h3>{crop.name}</h3>

          <img
            src={crop.image}
            alt={crop.name}
            width="200"
          />

        </div>
      ))}

    </div>
  );
}

export default CropList;