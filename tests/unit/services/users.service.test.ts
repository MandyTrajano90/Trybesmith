import { expect } from 'chai';
import sinon from 'sinon';
import userService from '../../../src/service/user.service';
import { userWithProductIds } from '../../mocks/user.mock';

describe('UsersService', function () {
  beforeEach(function () { sinon.restore(); });

  it('should return a list of users', async function () {
    sinon.stub(userService, 'getUsers').resolves(userWithProductIds as any);
    const users = await userService.getUsers();
    expect(users).to.deep.equal(userWithProductIds);
  });
});
