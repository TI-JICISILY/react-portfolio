const mongoose = require('mongoose');
const User = require('./models/user');
const bcrypt = require('bcryptjs');

const MONGO_URI = process.env.MONGO_URI || 'mongodb+srv://tjogy1:<db_password>@cluster0.0almzgg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

async function seedAdmin() {
  await mongoose.connect(MONGO_URI);

  const adminEmail = 'admin@example.com';
  const existingAdmin = await User.findOne({ email: adminEmail });
  if (existingAdmin) {
    console.log('Admin user already exists');
    mongoose.disconnect();
    return;
  }

  const hashedPassword = await bcrypt.hash('adminpassword', 10);

  const adminUser = new User({
    username: 'admin',
    email: adminEmail,
    password: hashedPassword,
    role: 'admin',
  });

  await adminUser.save();
  console.log('Admin user created');
  mongoose.disconnect();
}

seedAdmin();
