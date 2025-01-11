import express from 'express';
import cookieParser from 'cookie-parser';
import path from 'path';
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';
import listingRouter from './routes/listing.route.js';
import connectDB from './db.js';  // Import the connectDB function
import dotenv from 'dotenv';
dotenv.config();

// Connect to the database
connectDB();

const __dirname = path.resolve();
const app = express();
console.log('JWT_SECRET:', process.env.JWT_SECRET); // This should print your secret value


// Middleware setup
app.use(express.json());
app.use(cookieParser());

// API routes
app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);
app.use('/api/listing', listingRouter);

// Serve static files from the client build directory
app.use(express.static(path.join(__dirname, '/client/dist')));

// Catch-all route for SPA (Single Page Application)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
});

// Global error handler
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000!');
});
