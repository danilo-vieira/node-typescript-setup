import express from 'express';
import "@controllers/UsersController";

const app = express();

app.use(express.json());

app.get('/', (_, response) => {
  return response.json({ ok: true });
});

app.listen(3333);