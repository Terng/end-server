const Location = require("../../Models/location");

module.exports = {
  Query: {
    async getLocs() {
      try {
        const locations = await Location.find();
        return locations;
      } catch (err) {
        throw new Error(err);
      }
    },
    async getLoc(_, { locId }) {
      try {
        const location = await Location.findById(locId);
        if (location) {
          return location;
        } else {
          throw new Error("Location not found");
        }
      } catch (err) {
        throw new Error(err);
      }
    }
  },
  Mutation: {
    async createLoc(_, { input: { country, zipcode } }) {
      const newLoc = new Location({
        country,
        zipcode
      });
      const loc = await newLoc.save();
      return loc;
    }
  }
};
