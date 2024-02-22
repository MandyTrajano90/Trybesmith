import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../../../src/app';
import UserModel from '../../../src/database/models/user.model';
import { userDataValues, userWithProductIds } from '../../mocks/user.mock';

chai.use(chaiHttp);

describe('GET /users', function () {
  beforeEach(function () { sinon.restore(); });

  it('should return a list of users', async function () {
    sinon.stub(UserModel, 'findAll').resolves([userDataValues] as any);
    const response = await chai.request(app).get('/users');
    expect(response.status).to.equal(200);
    expect(response.body).to.deep.equal(userWithProductIds);
  });
});
