const Position = require("../../Models/position");
const { UserInputError } = require("apollo-server");
const { validatePosiInput } = require("../../util/validators");
module.exports = {
  Query: {
    async getPosis() {
      try {
        const posision = await Position.find();
        return posision;
      } catch (err) {
        throw new Error(err);
      }
    },
    async getPosi(_, { posiId }) {
      try {
        const position = await Position.findById(posiId);
        if (position) {
          return position;
        } else {
          throw new Error("Position not found");
        }
      } catch (err) {
        throw new Error(err);
      }
    },
  },
  Mutation: {
    async createPosi(_, { input: { name, floor } }) {
      const { valid, errors } = validatePosiInput(name, floor);
      if (!valid) {
        throw new UserInputError("Errors", { errors });
      }
      const p_name = await Position.findOne({ name });
      if (p_name) {
        throw new UserInputError("Name is taken", {
          errors: {
            name: "This Name is taken",
          },
        });
      }
      const p_floor = await Position.findOne({ floor });
      if (p_floor) {
        throw new UserInputError("Floor is taken", {
          errors: {
            floor: "This Floor is taken",
          },
        });
      }

      const newPosi = new Position({
        name,
        floor,
      });
      const posi = await newPosi.save();
      return posi;
    },
    async deletePosi(_, { posiId }) {
      try {
        const posi = await Position.findById(posiId);
        if (posi) {
          await posi.delete();
          return "Position Delete Successfully";
        } else {
          throw new Error("id not found");
        }
      } catch (err) {
        throw new Error(err);
      }
    },
    async updatePosiName(_, { posiId, name }) {
      const p_name = await Position.findOne({ name });
      if (p_name) {
        throw new UserInputError("Name is taken", {
          errors: {
            name: "This Name is taken",
          },
        });
      }
      try {
        const updatedPosiName = await Position.findByIdAndUpdate(
          posiId,
          {
            $set: { name },
          },
          { new: true }
        ).exec();
        if (!updatedPosiName) {
          throw Error(`Couldn't find Pc with id ${posiId}`);
        }
        if (name !== undefined) {
          updatedPosiName.name = name;
        }
        return updatedPosiName;
      } catch (err) {
        throw new Error(err);
      }
    },
    async updatePosiFloor(_, { posiId, floor }) {
      try {
        const p_floor = await Position.findOne({ floor });
        if (p_floor) {
          throw new UserInputError("Floor is taken", {
            errors: {
              floor: "This Floor is taken",
            },
          });
        }
        const updatedPosifloor = await Position.findByIdAndUpdate(
          posiId,
          {
            $set: { floor },
          },
          { new: true }
        ).exec();
        if (!updatedPosifloor) {
          throw Error(`Couldn't find Pc with id ${posiId}`);
        }
        if (floor !== undefined) {
          updatedPosifloor.floor = floor;
        }
        return updatedPosifloor;
      } catch (err) {
        throw new Error(err);
      }
    },
  },
};
