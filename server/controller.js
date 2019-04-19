const express = require("express");
const app = express();

const getHouses = async (req, res) => {
  const reply = await req.app
    .get("db")
    .get_houses()
    .catch(error => {
      console.log(error);
      res.status(500).json("Server Error");
    });
  res.status(200).json(reply);
};

const addHouse = async (req, res) => {
  const reply = await req.app
    .get("db")
    .add_house([
      req.body.name,
      req.body.address,
      req.body.city,
      req.body.state,
      +req.body.zip,
      req.body.img,
      +req.body.mortgage,
      +req.body.rent
    ])
    .catch(error => {
      console.log(error);
      res.status(500).json("Server Error");
    });
  res.status(200).json(reply);
};

const deleteHouse = async (req, res) => {
  const reply = await req.app
    .get("db")
    .delete_house(req.params.id)
    .catch(error => {
      console.log(error);
      res.status(500).json("Server Error");
    });
  res.status(200).json(reply);
};

module.exports = {
  getHouses,
  addHouse,
  deleteHouse
};
