const Qualification = require('../models/qualification');

const getAll = async (req, res) => {
  const qualifications = await Qualification.find();
  res.json(qualifications);
};

const getById = async (req, res) => {
  const qualification = await Qualification.findById(req.params.id);
  if (!qualification) return res.status(404).json({ message: 'Not found' });
  res.json(qualification);
};

const create = async (req, res) => {
  const newQualification = new Qualification(req.body);
  const saved = await newQualification.save();
  res.status(201).json(saved);
};

const update = async (req, res) => {
  const updated = await Qualification.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
};

const deleteById = async (req, res) => {
  await Qualification.findByIdAndDelete(req.params.id);
  res.status(204).send();
};

const deleteAll = async (req, res) => {
  await Qualification.deleteMany();
  res.status(204).send();
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  deleteById,
  deleteAll,
};

