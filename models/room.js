const mongoose = require("mongoose");
const { Schema } = mongoose;

const { composeWithMongoose } = require("graphql-compose-mongoose");

const RoomSchema = Schema({
  number: { 
    type: Number, 
    required: true 
  },
  hotelName: { 
    type: String, 
    required: true 
  },
  available: { 
    type: Boolean, 
    default: true 
  },
  hotelId: { 
    type: String
  },
  //New
  type: {
    type: String
  },
  numberOfBeds: {
    type: Number
  },
  minibar: {
    type: Boolean
  }
});

const Room = mongoose.model('Room',RoomSchema);

module.exports = { 
  Room,
  RoomTC: composeWithMongoose(mongoose.model("Room", RoomSchema))
};
