
var express = require('express');
var app = express();

app.get('/', (req, res) => {
	res.send(`
		<html>
			<head>
				<title>hh</title>
			</head>
			<body>
				<h1>me</h1>
			</body>
		</html>
	`)
});

app.listen(3000);