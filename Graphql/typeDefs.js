const { gql } = require("apollo-server");

module.exports = gql`
  type Pc {
    id: ID
    name: String
    sertag: String
    assettag: String
    vlan: String
    ip: String
    posiId: String
    positionName: String
    positionFloor: String
    status: String
    createdAt: String!
    modifyAt: String
  }
  type Position {
    id: ID!
    name: String!
    floor: String!
    status: String!
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
    positionName: String!
    positionFloor: String!
    status: String!
  }
  input PositionInput {
    name: String!
    floor: String!
    status: String!
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
    status: String
  }
  type UpdatePcPayload {
    id: ID
    name: String
    sertag: String
    assettag: String
    vlan: String
    ip: String
    createdAt: String
    modifyAt: String
    positionName: String!
    positionFloor: String!
    status: String!
  }
  type createPosiNamePayload {
    id: ID
    name: String
    floor: String
  }
  type Query {
    getPcs: [Pc]
    getPc(pcId: ID!): Pc
    getPosis: [Position]
    getPosi(posiId: ID!): Position
    getPcsa: Pc
  }
  type Mutation {
    register(registerInput: RegisterInput): User!
    login(username: String!, password: String!): User!

    createPc(input: PcInput): UpdatePcPayload
    createPosi(input: PositionInput!): positionpayload

    deletePc(pcId: ID!): String
    deleteLoc(locId: ID!): String
    deletePosi(posiId: ID!, pcId: ID!): String

    updateName(pcId: ID!, name: String!): UpdatePcPayload
    updateVlan(pcId: ID!, vlan: String!): UpdatePcPayload
    updateIp(pcId: ID!, ip: String!): UpdatePcPayload
    updatePosi(pcId: ID!, posiId: String!): UpdatePcPayload
    updatePosiName(posiId: ID!, name: String!): positionpayload
    updatePosiFloor(posiId: ID!, floor: String!): positionpayload
    updatePosiStatus(
      posiId: ID!
      status: String!
      positionName: String!
    ): positionpayload

    updateStatus(pcId: ID!, status: String!): UpdatePcPayload
    updatePCPosiName(pcId: ID!, positionName: String!): UpdatePcPayload
    updatePCPosiFloor(pcId: ID!, positionFloor: String!): UpdatePcPayload
  }
`;
