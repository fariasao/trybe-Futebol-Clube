import * as sinon from 'sinon';
import * as chai from 'chai';
import chaiHttp = require('chai-http');

import { app } from '../app';
import Example from '../database/models/ExampleModel';

import { Response } from 'superagent';

chai.use(chaiHttp);

const { expect } = chai;

describe('Testes de Login', () => {
  
// padroes de testes que uso em projetos pessoais
      describe('teste de login', () => {
        
        it('deve validar login corretamente', () => {
          chai.request(app)
            .post('/login')
            .send({ email: 'admin@admin.com', password: 'secret_admin' })
            .end((err, res) => {
              chai.expect(res).to.have.status(200);});
        })

        it('deve validar login errado', () => {
          chai.request(app)
            .post('/login')
            .send({ email: 'errado@errado.com', password: 'errado' })
            .end((err, res) => {
              chai.expect(res).to.have.status(400);});
        })

        it('valida o campo de email nao pode ser vazio', () => {
          chai.request(app)
            .post('/login')
            .send({ email: '', password: 'secret_admin' })
            .end((err, res) => {
              chai.expect(res).to.have.status(400);});
        })

        it('valida o campo de senha nao pode ser vazio', () => {
          chai.request(app)
            .post('/login')
            .send({ email: 'admin@admin.com', password: '' })
            .end((err, res) => {
              chai.expect(res).to.have.status(400);});
        })

        it('valida se campo de usuario e valido', () => {
          chai.request(app)
            .post('/login')
            .send({ email: '1admin@admin.com', password: 'secret_admin' })
            .end((err, res) => {
              chai.expect(res).to.have.status(400);});
        })

        it('valida se campo de usuario ou senha sao corretos', () => {
          chai.request(app)
            .post('/login')
            .send({ email: ' ', password: ' ' })
            .end((err, res) => {
              chai.expect(res).to.have.status(401);});
        })
    })
  })
