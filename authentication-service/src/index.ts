import app from './server';

app.listen(process.env.PORT, () => {
  console.log('listening on port' + process.env.PORT);
});
