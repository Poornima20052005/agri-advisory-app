function Advice({ cropData }) {

  if (!cropData.crop) {
    return <p>Please enter crop details.</p>;
  }

  const temp = Number(cropData.temperature);
  const moisture = Number(cropData.moisture);

  return (
    <div style={{ marginTop: "20px" }}>

      <h3>Advice for {cropData.crop}</h3>

      {temp > 30 && (
        <p>High temperature detected. Increase irrigation.</p>
      )}

      {moisture < 30 && (
        <p>Soil moisture is low. Water the field.</p>
      )}

      {temp <= 35 && moisture >= 30 && (
        <p>Conditions are good for crop growth.</p>
      )}

    </div>
  );
}

export default Advice;