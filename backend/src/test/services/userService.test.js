const sinon = require("sinon");
const chai = require("chai");
const expect = chai.expect;

const getUserService = require("../../services/userService");
const userRepository = require("../../repositories/userRepository");

describe("getUserService", () => {
  it("should call getUser from userRepository and return the result", async () => {
    const mockUsers = [
      { id: 1, name: "MockedUser1" }
    ];
    
    // Stub el método getUser en el módulo userRepository
    userRepository.getUser = sinon.stub().returns(mockUsers);

    const result = await getUserService();
    console.log(result);
    expect(result).to.deep.equal(mockUsers);
    expect(userRepository.getUser.calledOnce).to.be.true; // Cambiado de getUserStub a userRepository.getUser

    // Restaurar el stub después de la prueba
    // userRepository.getUser.restore();
  });

  // Agregar más pruebas aquí según sea necesario
});
