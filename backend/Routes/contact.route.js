import express from 'express';
import { contact, fetchAllContacts } from '../Controllers/contact.controller.js';
const router = express.Router();

router.post("/contact", contact);
router.get("/all-contacts", fetchAllContacts);

export default router