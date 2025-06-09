const express = require('express');
const {
  createTicket,
  getMyTickets,
  getAllTickets,
  updateTicket,
} = require('../controllers/ticketController');

const { protect, adminOnly } = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/', protect, createTicket);
router.get('/my', protect, getMyTickets);
router.get('/', protect, adminOnly, getAllTickets);
router.put('/:id', protect, adminOnly, updateTicket);

module.exports = router;
