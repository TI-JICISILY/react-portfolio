const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const bcrypt = require('bcrypt');

// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection and Admin setup
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(async () => {
  console.log('✅ MongoDB connected');
  await createAdminUser();
})
.catch(err => console.error('❌ MongoDB connection error:', err));

// Admin auto-creation
const User = require('./models/user');
async function createAdminUser() {
  const adminEmail = 'admin@example.com';
  const existingAdmin = await User.findOne({ email: adminEmail });

  if (!existingAdmin) {
    const hashedPassword = await bcrypt.hash('adminpassword', 10);
    const admin = new User({
      email: adminEmail,
      password: hashedPassword,
      role: 'admin',
      created: new Date(),
      updated: new Date()
    });

    await admin.save();
    console.log('✅ Admin user created with email: admin@example.com');
  } else {
    console.log('ℹ️ Admin user already exists.');
  }
}

// Root route (for browser testing)
app.get('/', (req, res) => {
  res.send('Welcome to My Portfolio Backend Server!');
});

// Import Routes
const contactRoutes = require('./routes/contactRoutes');
const projectRoutes = require('./routes/projectRoutes');
const qualificationRoutes = require('./routes/qualificationRoutes');
const userRoutes = require('./routes/userRoutes');
const authRoutes = require('./routes/authRoutes');

// Use Routes
app.use('/api/contacts', contactRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/qualifications', qualificationRoutes);
app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

