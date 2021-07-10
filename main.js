const { green, blue, red } = require('chalk');
const server = require('./server/app');
const db = require('./server/db/db');
const PORT = 8080;

const init = async () => {
  try {
    await db.sync();
    console.log(green('Database synced'));

    server.listen(PORT, () =>
      console.log(blue('Listening on http://localhost:8080'))
    );
  } catch (err) {
    console.log(red(`There was an error starting up!`, err));
  }
};

init();
