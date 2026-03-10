import farm from "../assets/Farm.jpg";

function Home() {
  return (
    <div style={{ padding: "20px" }}>

      <h1>Smart Agriculture Advisory System</h1>

      <img
        src={farm}
        alt="farm"
        width="400"
      />

      <p>
        This application helps farmers get crop advice based on
        temperature and soil moisture conditions.
      </p>

    </div>
  );
}

export default Home;