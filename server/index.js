import dotenv from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import passport from 'passport';
import session from 'express-session';
import cors from 'cors';
import postRoutes from './routes/posts.js';
import authRoutes from './routes/auth.js';
import passportConfig from './passportConfig.js';

dotenv.config();

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true}));
app.use(cors());
app.use(session({
    secret: "Out little secret.",
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());
passportConfig(passport);

var env = process.env.NODE_ENV || 'development';
if ('development' == env) {
    app.set('passport', passport); 
}

app.use('/posts', postRoutes);
app.use('/auth', authRoutes);

const CONNECTION_URL = process.env.CONNECTION_URL;
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {app.listen(PORT, () => { console.log(`Server running on port: ${PORT}`) })})
    .catch((err) => console.log(err));
//mongoose.set("useFindAndModify", false);