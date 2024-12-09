import * as clientService from "../services/clientServices.js";

export const getClients = async (req, res) => {
  try {
    const clients = await clientService.getClients();
    res.status(200).json(clients);
  } catch (error) {
    console.error("Error fetching clients:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const createClient = async (req, res) => {
  try {
    const clientData = req.body;
    const newClient = await clientService.createClient(clientData);
    res.status(200).json(newClient);
  } catch (error) {
    console.error("Error creating clients:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const updateClient = async (req, res) => {
  try {
    const clientId = req.params.id;
    const clientData = req.body;

    const updatedClient = await clientService.updateClient(
      clientId,
      clientData
    );

    if (!updatedClient) {
      return res.status(404).json({ message: "Client not found" });
    }
    res.status(200).json(updatedClient);
  } catch (error) {
    console.error("Error updating clients:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
