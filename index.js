//setup express framework , create app and define port
const express = require('express');
const app = express();
const PORT = 3000;

//start the server
app.listen(PORT, () => {
  console.log(`Server is running and listening on http://localhost:${PORT}`);
});
