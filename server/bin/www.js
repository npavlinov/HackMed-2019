import app from '../index';

app.listen(
  process.env.PORT || 1337, () => console.log('webhook is listening'
));
