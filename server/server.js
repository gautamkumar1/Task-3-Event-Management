require('dotenv').config();

const express = require('express');
const sequelize = require('./database/Db');
const userRoutes = require('./routes/userRoutes');
const passport = require('passport');
const session = require("express-session");
const cookieParser = require('cookie-parser');
const oauthRoutes = require('./routes/oauthRoutes');
const cors = require('cors');
const eventRoutes = require('./routes/eventRoutes');
const ticketRoutes = require('./routes/ticketRoutes');
const { initSocket } = require('./socket/socket');
const http = require('http');

require('./oAuth-Passport/passport');

const app = express();
const server = http.createServer(app);

const corsOptions = {
  origin: "http://localhost:5173",
  // origin: "*",
  methods: "GET,POST,PUT,DELETE,PATCH,HEAD",
  credentials: true,
};
app.use(cors(corsOptions));
app.use(cookieParser());
app.use(express.json());
// setup session
app.use(session({
  secret:process.env.SESSION_SECRET_KEY,
  resave:false,
  saveUninitialized:true
}))
// setuppassport
app.use(passport.initialize());
app.use(passport.session());
app.use(express.urlencoded({ extended: true }));

app.get('/',(req,res)=>{
    res.send('Hello from server');
})




// User Routes
app.use('/api/user', userRoutes);
// Google and Facebook routes
app.use('/auth/oauth', oauthRoutes);
// Event Routes
app.use('/api/events', eventRoutes);
// Tickets and Booking Routes
app.use('/api/ticket', ticketRoutes);

// Socket.io connection - Real-time ticket availability updates

initSocket(server);
const PORT = process.env.PORT || 3000;
sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}).catch((error) => {
  console.error('Unable to connect to the database:', error);
});

