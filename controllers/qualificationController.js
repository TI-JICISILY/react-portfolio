const Qualification = require('../models/qualification');

exports.getAll = async (req, res) => res.json(await Qualification.find());
exports.getById = async (req, res) => res.json(await Qualification.findById(req.params.id));
exports.create = async (req, res) => res.status(201).json(await new Qualification(req.body).save());
exports.update = async (req, res) => res.json(await Qualification.findByIdAndUpdate(req.params.id, req.body, { new: true }));
exports.deleteById = async (req, res) => { await Qualification.findByIdAndDelete(req.params.id); res.sendStatus(204); };
exports.deleteAll = async (req, res) => { await Qualification.deleteMany(); res.sendStatus(204); };