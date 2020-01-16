const Dev = require("../model/dev");
const parseStringAsArray = require("../utils/parseStringAsArray");

module.exports = {
    async index(req, res) {
        const { latitude, longitude, techs } = req.query;
        const techsArray = parseStringAsArray(techs);

        const devs = await Dev.find({
            techs: {
                $in: techsArray
            },
            location: {
                $near: {
                    $geometry: {
                        type: "Point",
                        coordinate: [longitude, latitude]
                    },
                    $maxDistance:10000
                }
            }
        })

        return res.status(200).json(devs)

    }
}