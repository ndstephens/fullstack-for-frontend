const express = require('express');
const app = express();
const port = 3000;

app.get('/test', (req, res) => {
	res.status(418).set('X-Test-Header', 'YO').send('test response message');
});

app.get('/', (req, res) => {
	res.send('My Node App');
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

