const chai = require("chai");
const expect = chai.expect;
const knex = require("knex");
const pgConnection = require("../../config/knex-pg");
const { getUser } = require("../../repositories/userRepository");

const db = knex(pgConnection.development);

describe("getUser Repository", () => {

  it("should fetch users from the database", async () => {
    const users = await getUser();
    console.log(users);
    expect(users).to.be.an("array");
    expect(users).to.have.lengthOf.at.least(1);

    const user = users[0];
    expect(user).to.have.property("id");
    expect(user).to.have.property("name");
    expect(user).to.have.property("lastname");
    expect(user).to.have.property("code");
  });

});
