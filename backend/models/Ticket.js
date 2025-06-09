const mongoose = require('mongoose');

const ticketSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  title: String,
  message: String,
  status: { type: String, default: 'open' },
  reply: String,
}, { timestamps: true });

module.exports = mongoose.model('Ticket', ticketSchema);
