const api = require("axios");
const DevModel = require("../models/dev");
module.exports = {
  async index(req, res) {
    const { user } = req.headers;
    const loggedDev = await DevModel.findById(user);

    const users = await DevModel.find({
      $and: [
        { _id: { $ne: user } },
        { _id: { $nin: loggedDev.likes } },
        { _id: { $nin: loggedDev.dislikes } }
      ]
    });

    return res.json(users);
  }, async findAll(req,res){
    const devs = await  DevModel.find();
    return res.json(devs)
  },
  async store(req, res) {
    const { username } = req.body;
    const UserExist = await DevModel.findOne({ user: username });
    if (UserExist) {
      return res.json(UserExist);
    }
    const response = await api.get(`https://api.github.com/users/${username}`);
    console.log(response);
    const { name, bio, avatar_url: avatar } = response.data;
    const dev = await DevModel.create({
      name,
      user: username,
      bio,
      avatar
    });
    return res.json(dev);
  }
};
