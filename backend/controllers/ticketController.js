const Ticket = require('../models/Ticket');

exports.createTicket = async (req, res) => {
  const { title, message } = req.body;
  const reply = message.toLowerCase().includes('support')
    ? 'A human support agent will respond shortly.'
    : 'Thanks! We will get back to you soon.';
  const ticket = await Ticket.create({ user: req.user._id, title, message, reply });
  res.json(ticket);
};

exports.getMyTickets = async (req, res) => {
  const tickets = await Ticket.find({ user: req.user._id });
  res.json(tickets);
};

exports.getAllTickets = async (req, res) => {
  const tickets = await Ticket.find().populate('user', 'name email');
  res.json(tickets);
};

exports.updateTicket = async (req, res) => {
  const { status, reply } = req.body;
  const ticket = await Ticket.findByIdAndUpdate(req.params.id, { status, reply }, { new: true });
  res.json(ticket);
};
