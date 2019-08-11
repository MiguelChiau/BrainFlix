const express = require("express");
const router = express.Router();
const helper = require("../helper/helper");

//This package will generate a unique id for each new video
const uuid = require("uuid");
const videosJsonFile = `${__dirname}/../model/videos.json`;
const videos = helper.readJSONFile(videosJsonFile);

router.get("/", (req, res) => {
  return res.send(Object.values(videos));
});

router.get("/:videosId", (req, res) => {
  // This is to request a specific video id
  // return res.send(videos.filter(video => video.id === req.params.videosId));
  const found = videos.some(video => video.id === req.params.videosId);

  //This if statement will return a message in case the video id requested doesn't exist
  if (found) {
    res.json(videos.filter(video => video.id === req.params.videosId));
  } else {
    res.status(400).json({
      msg: `No video with the id of ${req.params.videosId} was found`
    });
  }
});

//Now to create a new video
router.post("/", (req, res) => {
  const newVideo = {
    image: req.body.image,
    title: req.body.title,
    channel: req.body.channel,
    //This is to generate a unique id for each video
    id: uuid.v4()
  };

  videos.push(newVideo);

  helper.writeJSONFile(videosJsonFile, videos);
  return res.send(newVideo);
});

module.exports = router;
