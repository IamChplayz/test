console.log("main.js loaded");

const axios = require('axios');

axios.get('https://www.roblox.com/home/api', {
  headers: { 'Cookie': '.ROBLOSECURITY=yourCookieValue' }
})
  .then(response => {
    // Access cookies and other headers here
    const cookies = response.headers['set-cookie'];
    console.log(cookies);
  })
  .catch(error => {
    console.error('Error:', error);
  });
