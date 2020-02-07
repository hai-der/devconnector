const express = require('express');
const connectDB = require('./config/db');

const app = express();

// connect database
connectDB();

app.get('/', (req, res) => res.send('API Running...'));

// define routes
app.use('/api/auth', require('./routes/api/auth.js'));
app.use('/api/posts', require('./routes/api/posts.js'));
app.use('/api/profile', require('./routes/api/profile.js'));
app.use('/api/users', require('./routes/api/users.js'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is listening on PORT ${PORT}`));