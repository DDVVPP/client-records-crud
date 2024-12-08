import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TableList from "./components/Tablelist";
import Modal from "./components/Modal";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [modalMode, setModalMode] = useState("add");

  const handleOpen = (mode) => {
    setIsOpen(true);
    setModalMode(mode);
  };

  const handleSubmit = () => {
    if (modalMode === "add") {
      console.log("modal mode Add");
    } else {
      console.log("modal mode Edit");
    }
  };

  return (
    <>
      <Navbar onOpen={() => handleOpen("add")} />
      <TableList handleOpen={handleOpen} />
      <Modal
        isOpen={isOpen}
        onSubmit={handleSubmit}
        mode={modalMode}
        onClose={() => setIsOpen(false)}
      />
    </>
  );
}

export default App;
