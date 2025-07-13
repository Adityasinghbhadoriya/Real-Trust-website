import express from 'express';
import { fetchAllSubscriptions, subscribe } from '../Controllers/subscribed.controller.js';
const router = express.Router();

router.post("/subscribe", subscribe);
router.get("/all-subscriptions", fetchAllSubscriptions);

export default router