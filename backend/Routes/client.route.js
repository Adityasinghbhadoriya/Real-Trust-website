import express from 'express';
import { createClient, fetchAllClients } from '../Controllers/client.controller.js';
const router = express.Router();

router.post("/create-client", createClient);
router.get("/all-clients", fetchAllClients);

export default router