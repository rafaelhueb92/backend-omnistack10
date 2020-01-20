const axios = require("axios");
const Dev = require("../model/dev");
const parseStringAsArray = require("../utils/parseStringAsArray");

module.exports = {
  async index(_, res) {
    const devs = await Dev.find();
    return res.json(devs);
  },
  async store(req, res) {
    const { github_username, techs, longitude, latitude } = req.body;
    console.log("args", github_username, techs, longitude, latitude);
    let dev = await Dev.findOne({ github_username });

    if (!dev) {
      const response = await axios.get(
        `https://api.github.com/users/${github_username}`
      );
      const { name, avatar_url, bio } = response.data;

      const techsArray = parseStringAsArray(techs);

      const location = {
        type: "Point",
        coordinates: [longitude, latitude]
      };

      console.log("location", location);

      dev = await Dev.create({
        github_username,
        name,
        avatar_url,
        bio,
        techs: techsArray,
        location
      });
    }

    return res.status(200).json(dev);
  }
};
