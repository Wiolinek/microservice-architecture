import loginRouter from './routes/login';

import app from './server';

app.use('/api/login', loginRouter);

app.listen(process.env.PORT, () => {
  console.log('listening on port' + process.env.PORT);
});
