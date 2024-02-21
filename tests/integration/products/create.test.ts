import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import ProductModel from '../../../src/database/models/product.model';
import app from '../../../src/app';
import { newProduct, successfullyCreatedProduct } from '../../mocks/products.mock';

chai.use(chaiHttp);

describe('POST /products', function () {
  beforeEach(function () { sinon.restore(); });

  it('posting a new product', async function () {
    const body = newProduct;
    const mockReturn = ProductModel.build(successfullyCreatedProduct);
    sinon.stub(ProductModel, 'create').resolves(mockReturn);
    const response = await chai.request(app).post('/products').send(body);
    expect(response.status).to.equal(201);
    expect(response.body).to.deep.equal(successfullyCreatedProduct);
  });
});
