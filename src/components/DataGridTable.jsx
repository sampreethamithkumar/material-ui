import React, { useState, useEffect, Component } from "react";
import _ from "lodash";
import { DataGrid } from "@material-ui/data-grid";
import { getClients } from "./../services/clientService";

const columns = [
  { field: "clientName", headerName: "Client Name", width: 150 },
  { field: "clientEmail", headerName: "Email", width: 270 },
  { field: "clientWorkPhone", headerName: "Phone", width: 130 },
  { field: "clientIndustry", headerName: "Industry", width: 130 },
  { field: "clientContact", headerName: "Point of Contact", width: 170 },
  { field: "clientWebsite", headerName: "Website", width: 170 },
];

const rows = [
  {
    id: 1,
    clientName: "Sampreeth",
    clientEmail: "sampreethamithkumar@gmail.com",
    clientWorkPhone: "0478826487",
    clientIndustry: "IT",
    clientContact: "Sam",
    clientWebsite: "www.sampreeth.com",
  },
  {
    id: 2,
    clientName: "Sampreeth",
    clientEmail: "sampreethamithkumar@gmail.com",
    clientWorkPhone: "0478826487",
    clientIndustry: "IT",
    clientContact: "Sam",
    clientWebsite: "www.sampreeth.com",
  },
  {
    id: 3,
    clientName: "Sampreeth",
    clientEmail: "sampreethamithkumar@gmail.com",
    clientWorkPhone: "0478826487",
    clientIndustry: "IT",
    clientContact: "Sam",
    clientWebsite: "www.sampreeth.com",
  },
  {
    id: 4,
    clientName: "Sampreeth",
    clientEmail: "sampreethamithkumar@gmail.com",
    clientWorkPhone: "0478826487",
    clientIndustry: "IT",
    clientContact: "Sam",
    clientWebsite: "www.sampreeth.com",
  },
];

class DataGridTable extends Component {
  state = {
    client: [],
  };

  async componentDidMount() {
    let { data } = await getClients();
    let newArray = [];
    for (let i = 0; i < data.length; i++) {
      data[i].id = i;
      newArray.push(
        _.pick(data[i], [
          "id",
          "clientName",
          "clientEmail",
          "clientWorkPhone",
          "clientIndustry",
          "clientContact",
          "clientWebsite",
        ])
      );
    }

    this.setState({ client: newArray });
  }

  render() {
    const row = this.state.client.length == 0 ? rows : this.state.client;
    return (
      <div style={{ width: "100%", height: 400 }}>
        <DataGrid rows={row} columns={columns} pageSize={5} checkboxSelection />
      </div>
    );
  }
}

// const DataGridTable = (props) => {
//   const [client, setClient] = useState([]);

//   useEffect(() => {
//     let newArray = [];
//     async function getClientsDetails() {
//       let { data } = await getClients();

//       for (let i = 0; i < data.length; i++) {
//         data[i].id = i;
//         newArray.push(
//           _.pick(data[i], [
//             "clientId",
//             "clientName",
//             "clientEmail",
//             "clientWorkPhone",
//             "clientIndustry",
//             "clientContact",
//             "clientWebsite",
//           ])
//         );
//       }
//     }

//     getClientsDetails();
//     setClient([...newArray]);
//   }, []);

//   console.log(client);

//   return (
//     <div style={{ width: "100%", height: 400 }}>
//       <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
//     </div>
//   );
// };

export default DataGridTable;
