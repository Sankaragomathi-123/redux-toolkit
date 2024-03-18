import CarForm from "./component/CarForm";
import CarList from "./component/CarList";
import CarSearch from "./component/CarSearch";
import CarValue from "./component/CarValue";

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: "2rem",
        width: "60%",
        margin: "auto",
      }}>
      <CarForm />
      <div
        style={{
          boxShadow: "0px 3px 20px #00000021",
        }}>
        <br />
        <CarSearch />
        <br />
        <CarList />
        <br />
        <CarValue />
      </div>
    </div>
  );
}

export default App;
