var axios = require('axios');
var express = require('express');
var app = express();

app.get('/token', async (req, res) => {
  let token = null;

  const client_id = 'f2adb1fbc77143af8a5d';
  const client_secret = '80881c50c62fba95fd84dbfc55f0e7dcaf35dbcb';
  const { code } = req.query;

  // const body = {
  //   client_id,
  //   client_secret,
  //   code,
  // };
  const opts = { headers: { accept: 'application/json' } };

  axios
    .post(
      `https://github.com/login/oauth/access_token?client_id=${client_id}&client_secret${client_secret}=&code=${code}`
    )
    // .post(
    //   `https://github.com/login/oauth/access_token?client_id=${client_id}&client_secret=${client_secret}&code=${code}`
    // )
    .then((resp) => resp.data['access_token'])
    .then((_token) => {
      console.log('My token:', token);
      token = _token;
      res.json({ ok: 1 });
    })
    .catch((err) => res.status(500).json({ message: err.message }));
});

app.listen(5000, () => {
  console.log('Server started on port 5000');
  console.log('http://localhost:5000/token');
});
