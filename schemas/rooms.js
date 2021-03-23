const { Room } = require("../models/room");
const { RoomTC } = require("../models/room");


RoomTC.addResolver({
    name: "create",
    kind: "mutation",
    type: RoomTC.getResolver("createOne").getType(),
    args: RoomTC.getResolver("createOne").getArgs(),
    resolve: async({source, args,context,info}) => {
        const room = await Room.create(args.record)

        return {
            record: room
        }
    }
})


const RoomQuery = {
    RoomMany: RoomTC.getResolver("findMany"),
    RoomById: RoomTC.getResolver("findById")
};

const RoomMutation = {
    create: RoomTC.getResolver("create"),
    RoomCreateOne: RoomTC.getResolver("createOne"),
    RoomUpdateById: RoomTC.getResolver("updateById")
};

module.exports = { RoomQuery: RoomQuery, RoomMutation: RoomMutation };