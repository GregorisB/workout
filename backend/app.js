
import * as dotenv from 'dotenv'
process.env.NODE_ENV !== "production" ? dotenv.config() : void 0;
import createError from 'http-errors';
import express, { json } from 'express';
import mongoose from 'mongoose';
import log4js from 'log4js';

const log = log4js.getLogger();
log.level = 'all';

mongoose.connect(process.env.MONGO_URI)
	.then(() => log.info('MongoDB Atlas connected'))
	.catch((e) => log.error(e));

import workoutRouter from './routes/workouts_route.js';
// var usersRouter = require('./routes/users');

var app = express();

// middleware
app.use(json());
app.use((req, res, next) => {
	log.debug(req.path, req.method);
	next();
});

app.use('/api/workouts', workoutRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
	next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};

	// render the error page
	res.status(err.status || 500);
});

export default app;
