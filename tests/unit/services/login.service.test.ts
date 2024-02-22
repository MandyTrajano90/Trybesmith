import { expect } from 'chai';
import sinon from 'sinon';
import UserModel from '../../../src/database/models/user.model';
import loginService from '../../../src/service/login.service';
import { invalidLoginBody, noPassBody, noUserBody, validLoginBody, validUser } from '../../mocks/login.mock';
import e from 'express';

describe('LoginService', function () {
  beforeEach(function () { sinon.restore(); });

  it('should return an error if username is not provided', async function () {
    const { status, data } = await loginService.verifyLogin(noUserBody);
    expect(status).to.be.equal('BAD_REQUEST');
    expect(data).to.be.deep.equal({ message: '"username" and "password" are required' });
    expect(data).not.to.have.key('token');
  });

  it('should return an error if password is not provided', async function () {
    const { status, data } = await loginService.verifyLogin(noPassBody);
    expect(status).to.be.equal('BAD_REQUEST');
    expect(data).to.be.deep.equal({ message: '"username" and "password" are required' });
    expect(data).not.to.have.key('token');
  });

  it('should return an error if a wrong password is provided', async function () {
    const expectedReturn = UserModel.build(validUser);
    sinon.stub(UserModel, 'findOne').resolves(expectedReturn);
    const { status, data } = await loginService.verifyLogin(invalidLoginBody);
    expect(status).to.be.equal('UNAUTHORIZED');
    expect(data).to.be.deep.equal({ message: 'Username or password invalid' });
    expect(data).not.to.have.key('token');
  });

  it('should return a token if username and password are valid', async function () {
    const expectedReturn = UserModel.build(validUser);
    sinon.stub(UserModel, 'findOne').resolves(expectedReturn);
    const { status, data } = await loginService.verifyLogin(validLoginBody);
    expect(status).to.be.equal('SUCCESSFUL');
    expect(data).to.have.key('token');
  });
});
