import axios from "axios";
import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TableList from "./components/Tablelist";
import Modal from "./components/Modal";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [modalMode, setModalMode] = useState("add");
  const [clientData, setClientData] = useState(null);
  const [tableData, setTableData] = useState([]);

  const fetchClients = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/clients");
      setTableData(response.data);
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchClients();
  }, [clientData, tableData]);

  const handleOpen = (mode, client) => {
    setClientData(client);
    setIsOpen(true);
    setModalMode(mode);
  };

  const handleSubmit = async (newClientData) => {
    if (modalMode === "add") {
      const response = await axios.post(
        "http://localhost:3000/api/clients",
        newClientData
      );
      console.log("Client added:", response.data);
      setTableData((prevData) => [...prevData, response.data]);
    } else {
      try {
        const response = await axios.put(
          `http://localhost:3000/api/clients/${clientData.id}`,
          newClientData
        );
        console.log("Client updated:", response.data);
        setTableData((prevData) => {
          prevData.map((client) => {
            return client.id === clientData.id ? response.data : client;
          });
        });
      } catch (error) {
        console.error("Error updating client:", error);
      }
    }
  };

  return (
    <>
      <Navbar onOpen={() => handleOpen("add")} />
      <TableList
        handleOpen={handleOpen}
        setTableData={setTableData}
        tableData={tableData}
      />
      <Modal
        isOpen={isOpen}
        onSubmit={handleSubmit}
        mode={modalMode}
        onClose={() => setIsOpen(false)}
        clientData={clientData}
      />
    </>
  );
}

export default App;
