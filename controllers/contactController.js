const Contact = require('../models/contact');

exports.getAll = async (req, res) => res.json(await Contact.find());
exports.getById = async (req, res) => res.json(await Contact.findById(req.params.id));
exports.create = async (req, res) => res.status(201).json(await new Contact(req.body).save());
exports.update = async (req, res) => res.json(await Contact.findByIdAndUpdate(req.params.id, req.body, { new: true }));
exports.deleteById = async (req, res) => { await Contact.findByIdAndDelete(req.params.id); res.sendStatus(204); };
exports.deleteAll = async (req, res) => { await Contact.deleteMany(); res.sendStatus(204); };