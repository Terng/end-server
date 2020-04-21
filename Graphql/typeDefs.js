const { gql } = require("apollo-server");

module.exports = gql`
  type Pc {
    id: ID!
    name: String!
    sertag: String!
    assettag: String!
    vlan: String!
    ip: String!
    locId: String!
    posiId: String!
    createdAt: String!
    modifyAt: String
    position: [Position!]
  }
  type Position {
    id: ID!
    name: String!
    floor: String!
  }
  type Location {
    id: ID!
    country: String!
    zipcode: String!
  }
  type User {
    id: ID!
    email: String!
    token: String!
    username: String!
    createdAt: String!
  }

  input PcInput {
    name: String!
    sertag: String!
    assettag: String!
    vlan: String!
    ip: String!
    posiId: String!
  }
  input PositionInput {
    name: String!
    floor: String!
  }
  input LocationInput {
    country: String
    zipcode: String
  }

  input RegisterInput {
    username: String!
    password: String!
    confirmPassword: String!
    email: String!
  }
  input posiNameUpd {
    name: String
  }
  input posiFloorUpd {
    floor: String
  }
  input countryUpd {
    country: String
  }
  input zipcodeUpd {
    zipcode: String
  }
  input nameUpd {
    name: String
  }
  input vlanUpd {
    vlan: String
  }
  input ipUpd {
    ip: String
  }
  type positionpayload {
    id: ID
    name: String
    floor: String
  }
  type locationPayload {
    id: ID
    country: String
    zipcode: String
  }
  type UpdatePcPayload {
    id: ID
    name: String
    sertag: String
    assettag: String
    vlan: String
    ip: String
    posiId: String
    createdAt: String
    modifyAt: String
  }
  type Query {
    getPcs: [Pc]
    getPc(pcId: ID!): Pc
    getLocs: [Location]
    getLoc(locId: ID!): locationPayload
    getPosis: [Position]
    getPosi(posiId: ID!): Position
  }
  type Mutation {
    register(registerInput: RegisterInput): User!
    login(username: String!, password: String!): User!

    createPc(input: PcInput): UpdatePcPayload
    createLoc(input: LocationInput!): locationPayload
    createPosi(input: PositionInput!): positionpayload

    deletePc(pcId: ID!): String
    deleteLoc(locId: ID!): String
    deletePosi(posiId: ID!): String

    updateName(pcId: ID!, name: String!): UpdatePcPayload
    updateVlan(pcId: ID!, vlan: String!): UpdatePcPayload
    updateIp(pcId: ID!, ip: String!): UpdatePcPayload
    updatePosi(pcId: ID!, posiId: String!): UpdatePcPayload
    updatePosiName(posiId: ID!, name: String!): positionpayload
    updatePosiFloor(posiId: ID!, floor: String!): positionpayload
  }
`;
