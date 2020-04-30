const Pc = require("../../Models/pc");
const Posi = require("../../Models/position");
const { UserInputError } = require("apollo-server");
const { validatePcInput } = require("../../util/validators");

const { find, filter } = require("lodash");

module.exports = {
  Query: {
    async getPcs() {
      try {
        const pcs = await Pc.find();
        return pcs;
      } catch (err) {
        throw new Error(err);
      }
    },
    async getPc(_, { pcId }) {
      try {
        const pc = await Pc.findById(pcId);
        if (pc) {
          return pc;
        } else {
          throw new Error("Pc not found");
        }
      } catch (err) {
        throw new Error(err);
      }
    },
    async getPcsa() {
      try {
        const pcs = await Pc.find();
        return pcs;
      } catch (err) {
        throw new Error(err);
      }
    },
  },

  Mutation: {
    async createPc(
      _,
      {
        input: {
          name,
          sertag,
          assettag,
          vlan,
          ip,
          positionName,
          positionFloor,
          status,
          createdAt,
        },
      }
    ) {
      const { valid, errors } = validatePcInput(
        name,
        sertag,
        assettag,
        vlan,
        ip,
        status,
        positionName,
        positionFloor
        /* posiId */
      );
      if (!valid) {
        throw new UserInputError("Errors", { errors });
      }

      const p_name = await Pc.findOne({ name });
      if (p_name) {
        throw new UserInputError("Name is taken", {
          errors: {
            name: "This Name is taken",
          },
        });
      }
      const p_sertag = await Pc.findOne({ sertag });
      if (p_sertag) {
        throw new UserInputError("Service Tag is taken", {
          errors: {
            sertag: "This Service Tag is taken",
          },
        });
      }
      const p_assettag = await Pc.findOne({ assettag });
      if (p_assettag) {
        throw new UserInputError("Asset Tag is taken", {
          errors: {
            assettag: "This Asset Tag is taken",
          },
        });
      }
      const p_ip = await Pc.findOne({ ip });
      if (p_ip) {
        throw new UserInputError("IP Address is taken", {
          errors: {
            ip: "This IP Address is taken",
          },
        });
      }
      const newPc = new Pc({
        name,
        sertag,
        assettag,
        vlan,
        ip,
        positionName,
        positionFloor,
        status,
        createdAt: new Date().toISOString(),
      });
      const pc = await newPc.save();
      return pc;
    },
    async deletePc(_, { pcId }) {
      try {
        const pc = await Pc.findById(pcId);
        if (pc) {
          await pc.delete();
          return "Pc Delete Successfully";
        } else {
          throw new Error("id not found");
        }
      } catch (err) {
        throw new Error(err);
      }
    },
    async updateName(_, { pcId, name, modifyAt }) {
      const p_name = await Pc.findOne({ name });
      if (p_name) {
        throw new UserInputError("Name is taken", {
          errors: {
            name: "This Name is taken",
          },
        });
      }
      try {
        const updatedPc = await Pc.findByIdAndUpdate(
          pcId,
          {
            $set: { name, modifyAt: new Date().toISOString() },
          },
          { new: true }
        ).exec();
        if (!updatedPc) {
          throw Error(`Couldn't find Pc with id ${pcId}`);
        }
        if (name !== undefined) {
          updatedPc.name = name;
        }
        return updatedPc;
      } catch (err) {
        throw new Error(err);
      }
    },
    async updateVlan(_, { pcId, vlan, modifyAt }) {
      try {
        const updatedPc = await Pc.findByIdAndUpdate(
          pcId,
          {
            $set: { vlan, modifyAt: new Date().toISOString() },
          },
          { new: true }
        ).exec();
        if (!updatedPc) {
          throw Error(`Couldn't find Pc with id ${pcId}`);
        }
        if (vlan !== undefined) {
          updatedPc.vlan = vlan;
        }
        return updatedPc;
      } catch (err) {
        throw new Error(err);
      }
    },
    async updateIp(_, { pcId, ip, modifyAt }) {
      const p_ip = await Pc.findOne({ ip });
      if (p_ip) {
        throw new UserInputError("IP Address is taken", {
          errors: {
            ip: "IP Address is taken",
          },
        });
      }
      try {
        const updatedPc = await Pc.findByIdAndUpdate(
          pcId,
          {
            $set: { ip, modifyAt: new Date().toISOString() },
          },
          { new: true }
        ).exec();
        if (!updatedPc) {
          throw Error(`Couldn't find Pc with id ${pcId}`);
        }
        if (ip !== undefined) {
          updatedPc.ip = ip;
        }
        return updatedPc;
      } catch (err) {
        throw new Error(err);
      }
    },
    async updateStatus(_, { pcId, status, modifyAt }) {
      try {
        const updatedPc = await Pc.findByIdAndUpdate(
          pcId,
          {
            $set: { status, modifyAt: new Date().toISOString() },
          },
          { new: true }
        ).exec();
        if (!updatedPc) {
          throw Error(`Couldn't find Pc with id ${pcId}`);
        }
        if (status !== undefined) {
          updatedPc.status = status;
        }
        return updatedPc;
      } catch (err) {
        throw new Error(err);
      }
    },
    async updatePosi(_, { pcId, posiId, modifyAt }) {
      try {
        const updatedPc = await Pc.findByIdAndUpdate(
          pcId,
          {
            $set: { posiId, modifyAt: new Date().toISOString() },
          },
          { new: true }
        ).exec();
        if (!updatedPc) {
          throw Error(`Couldn't find Pc with id ${pcId}`);
        }
        if (posiId !== undefined) {
          updatedPc.posiId = posiId;
        }
        return updatedPc;
      } catch (err) {
        throw new Error(err);
      }
    },
    async updatePCPosiName(_, { pcId, positionName, modifyAt }) {
      try {
        const updatedPc = await Pc.findByIdAndUpdate(
          pcId,
          {
            $set: { positionName, modifyAt: new Date().toISOString() },
          },
          { new: true }
        ).exec();
        if (!updatedPc) {
          throw Error(`Couldn't find Pc with id ${pcId}`);
        }
        if (positionName !== undefined) {
          updatedPc.positionName = positionName;
        }
        return updatedPc;
      } catch (err) {
        throw new Error(err);
      }
    },
    async updatePCPosiFloor(_, { pcId, positionFloor, modifyAt }) {
      try {
        const updatedPc = await Pc.findByIdAndUpdate(
          pcId,
          {
            $set: { positionFloor, modifyAt: new Date().toISOString() },
          },
          { new: true }
        ).exec();
        if (!updatedPc) {
          throw Error(`Couldn't find Pc with id ${pcId}`);
        }
        if (positionFloor !== undefined) {
          updatedPc.positionFloor = positionFloor;
        }
        return updatedPc;
      } catch (err) {
        throw new Error(err);
      }
    },
  },
};
