const express = require('express');
const app = express();
app.use(express.static('./dist/fronthackajob'));
app.get('/*', function (req, res) {
 res.sendFile(__dirname + '/dist/fronthackajob/index.html');
});
app.listen(process.env.PORT || 8080);
