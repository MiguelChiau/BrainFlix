const express = require("express");
const videosRouter = require("./routes/videos");
const port = process.argv[2] || 8080;

//Hero is to initialize the express server
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//This is the route to the videos API and chosen port
app.use("/videos", videosRouter);

//The server will listen to client request on port above
app.listen(port, () => {
  console.log(`I'm listening on port ${port}`);
});
