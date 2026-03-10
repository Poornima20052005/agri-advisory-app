function CropForm({ cropData, setCropData }) {

  function handleChange(e) {
    setCropData({
      ...cropData,
      [e.target.name]: e.target.value
    });
  }

  return (
    <div>

      <h3>Enter Crop Details</h3>

      <select name="crop" onChange={handleChange}>
        <option value="">Select Crop</option>
        <option value="Rice">Rice</option>
        <option value="Wheat">Wheat</option>
        <option value="Maize">Maize</option>
      </select>

      <br /><br />

      <input
        name="temperature"
        placeholder="Temperature (°C)"
        onChange={handleChange}
      />

      <br /><br />

      <input
        name="moisture"
        placeholder="Soil Moisture (%)"
        onChange={handleChange}
      />

    </div>
  );
}

export default CropForm;