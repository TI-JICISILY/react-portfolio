const jwt = require('jsonwebtoken');
const User = require('../models/user');
const bcrypt = require('bcrypt');

exports.signin = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) return res.status(400).json({ message: 'Invalid email or password' });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(400).json({ message: 'Invalid email or password' });

  const token = jwt.sign(
    {
      id: user._id,
      role: user.role
    },
    process.env.JWT_SECRET || 'your_jwt_secret',
    { expiresIn: '1h' }
  );

  res.json({
    message: 'Login successful',
    token,
    user: {
      id: user._id,
      email: user.email,
      role: user.role
    }
  });
};

// Optional dummy signout
exports.signout = (req, res) => {
  res.json({ message: 'Signout successful' });
};
