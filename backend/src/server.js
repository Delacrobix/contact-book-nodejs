import { app } from "../index";

const PORT = process.env.SERVER_PORT;

app.listen(PORT, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log("Server listening on port " + PORT);
  }
});