const server = require('./server.js');

server.get('/', (req, res) => {
  res.json({ message: "Welcome to the cars server."})
})

const PORT = process.env.PORT || 4000;
server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});