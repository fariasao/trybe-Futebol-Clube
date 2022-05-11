import * as sinon from 'sinon';
import * as chai from 'chai';
import chaiHttp = require('chai-http');

import { app } from '../app';
import Example from '../database/models/ExampleModel';

import { Response } from 'superagent';

chai.use(chaiHttp);

const { expect } = chai;

describe('Seu teste', () => {
  

  it('teste de login', () => {
    let chaiHttpResponse: Response;
    
    it('deve validar login corretamente', () => {
      chai.request(app)
        .post('/login')
        .send({ email: 'admin@admin.com', password: 'secret_admin' })
        .end((err, res) => {
          chai.expect(res).to.have.status(200);});
    })
  });
});
