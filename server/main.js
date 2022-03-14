var axios = require('axios');
var express = require('express');
var cors = require('cors');
var app = express();

app.use(cors());

app.get('/token', async (req, res) => {
  let token = null;

  const client_id = 'f2adb1fbc77143af8a5d';
  const client_secret = '28ab3753f4b538a135201ca227f146e22f99b77d';
  const { code } = req.query;
  console.log({ code });

  const url = `https://github.com/login/oauth/access_token?client_id=${client_id}&client_secret=${client_secret}&code=${code}`;

  console.log({ url });

  axios.defaults.headers.post['Content-Type'] = 'application/json';
  axios.defaults.headers.post['Accept'] = 'application/json';

  const { data } = (response = await axios.post(url));

  return res.json(data);
});

app.listen(5000, () => {
  console.log('Server started on port 5000');
  console.log('http://localhost:5000/token');
});
