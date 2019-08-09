const express = require("express");
const router = express.Router();
const helper = require("../helper/helper");
const videosJsonFile = `${__dirname}/../model/videos.json`;
const videos = helper.readJSONFile(videosJsonFile);

router.get("/", (req, res) => {
  return res.send(Object.values(videos));
});

router.get("/:videosId", (req, res) => {
  return res.send(videos[0]);
});

//Now to post a new video
router.post("/", (req, res) => {
  const newVideo = {
    image: req.body.image,
    title: req.body.title,
    channel: req.body.channel,
    // id: req.body.id
    id: videos.length
  };
  videos.push(newVideo);

  helper.writeJSONFile(videosJsonFile, videos);
  return res.send(newVideo);
});

module.exports = router;
