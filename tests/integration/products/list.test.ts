import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../../../src/app';
import ProductModel from '../../../src/database/models/product.model';

chai.use(chaiHttp);

describe('GET /products', function () {
  beforeEach(function () { sinon.restore(); });

  it('should return a list of products', async function () {
    const products = [
      {
        id: 1,
        name: "Nemesis AR",
        price: "10 v-bucks",
        userId: 1,
      },
      {
        id: 2,
        name: "Hammer Pump Shotgun",
        price: "20 v-bucks",
        userId: 1,
      },
    ];
    const productsStub = ProductModel.bulkBuild(products);
    sinon.stub(ProductModel, 'findAll').resolves(productsStub);

    const response = await chai.request(app).get('/products');

    expect(response.status).to.equal(200);
    expect(response.body).to.deep.equal(products);
  });
});
