import "./App.css";
import { Container } from "@material-ui/core";
import DataGridTable from "./components/DataGridTable";

function App() {
  return (
    <div className="App" style={{ marginTop: "30px" }}>
      <Container>
        <DataGridTable />
      </Container>
    </div>
  );
}

export default App;
