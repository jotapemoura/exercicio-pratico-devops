const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

app.get('/hello', (req, res) => {
  res.send('Hello World 2');
});

app.listen(PORT, () => {
  console.log(`Aplicação a executar na porta ${PORT}`);
});
