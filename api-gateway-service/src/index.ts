import usersRouter from './routes/users';

import app from './server';

app.use('/users', usersRouter);

app.listen(process.env.PORT, () => {
  console.log('listening on port' + process.env.PORT);
});
