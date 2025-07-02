const Project = require('../models/project');

exports.getAll = async (req, res) => res.json(await Project.find());
exports.getById = async (req, res) => res.json(await Project.findById(req.params.id));
exports.create = async (req, res) => res.status(201).json(await new Project(req.body).save());
exports.update = async (req, res) => res.json(await Project.findByIdAndUpdate(req.params.id, req.body, { new: true }));
exports.deleteById = async (req, res) => { await Project.findByIdAndDelete(req.params.id); res.sendStatus(204); };
exports.deleteAll = async (req, res) => { await Project.deleteMany(); res.sendStatus(204); };