import React, { useState, useEffect } from "react";
import _ from "lodash";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@material-ui/core";
import { getClients } from "./../services/clientService";

const DataTable = (props) => {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    let newArray = [];
    async function getClientsDetails() {
      let { data } = await getClients();

      for (let i = 0; i < data.length; i++) {
        newArray.push(
          _.pick(data[i], [
            "clientId",
            "clientName",
            "clientEmail",
            "clientWorkPhone",
            "clientIndustry",
            "clientContact",
            "clientWebsite",
          ])
        );
      }
    }

    getClientsDetails();
    setClients([...clients, newArray]);
  }, []);

  return (
    <React.Fragment>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ClientName</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>Industry</TableCell>
              <TableCell>Person of Contact</TableCell>
              <TableCell>Website</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {clients.map((client) => (
              <TableRow key={client.clientId}>
                <TableCell>{client.clientName}</TableCell>
                <TableCell>{client.clientEmail}</TableCell>
                <TableCell>{client.clientWorkPhone}</TableCell>
                <TableCell>{client.clientIndustry}</TableCell>
                <TableCell>{client.clientContact}</TableCell>
                <TableCell>{client.clientWebsite}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </React.Fragment>
  );
};

export default DataTable;
