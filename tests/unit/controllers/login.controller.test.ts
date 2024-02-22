import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { Request, Response } from 'express';
import { invalidLoginBody, noUserBody, validLoginBody, token } from '../../mocks/login.mock';
import { ServiceRes } from '../../../src/types/ServiceRes';
import { Token } from '../../../src/types/Token';
import loginService from '../../../src/service/login.service';
import loginController from '../../../src/controller/login.controller';

chai.use(sinonChai);

describe('LoginController', function () {
  const req = {} as Request;
  const res = {} as Response;

  beforeEach(function () {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
    sinon.restore();
  });

  it('should return an error if username is not provided', async function () {
    req.body = noUserBody;

    const response: ServiceRes<Token> = {
      status: 'BAD_REQUEST',
      data: { message: '"username" and "password" are required' },
    }
    sinon.stub(loginService, 'verifyLogin').resolves(response);
    await loginController.newLogin(req, res);
    expect(res.status).to.have.been.calledWith(400);
    expect(res.json).to.have.been.calledWith({ message: '"username" and "password" are required' });
  });

  it('should return an error if password is not provided', async function () {
    req.body = invalidLoginBody;
    const response: ServiceRes<Token> = {
      status: 'UNAUTHORIZED',
      data: { message: 'Username or password invalid' },
    }
    sinon.stub(loginService, 'verifyLogin').resolves(response);
    await loginController.newLogin(req, res);
    expect(res.status).to.have.been.calledWith(401);
    expect(res.json).to.have.been.calledWith({ message: 'Username or password invalid' });
  });

  it('should return a token if username and password are valid', async function () {
    req.body = validLoginBody;
    const response: ServiceRes<Token> = {
      status: 'SUCCESSFUL',
      data: token,
    }
    sinon.stub(loginService, 'verifyLogin').resolves(response);
    await loginController.newLogin(req, res);
    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(token);
  });
});

