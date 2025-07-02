const User = require('../models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

exports.register = async (req, res) => {
  const hashed = await bcrypt.hash(req.body.password, 10);
  const user = new User({ ...req.body, password: hashed, created: new Date(), updated: new Date() });
  await user.save();
  res.status(201).json(user);
};

exports.login = async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (!user || !await bcrypt.compare(req.body.password, user.password)) return res.status(403).json({ message: 'Invalid credentials' });
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
  res.json({ token });
};

exports.getAll = async (req, res) => res.json(await User.find());
exports.getById = async (req, res) => res.json(await User.findById(req.params.id));
exports.update = async (req, res) => res.json(await User.findByIdAndUpdate(req.params.id, req.body, { new: true }));
exports.deleteById = async (req, res) => { await User.findByIdAndDelete(req.params.id); res.sendStatus(204); };
exports.deleteAll = async (req, res) => { await User.deleteMany(); res.sendStatus(204); };