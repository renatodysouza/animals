/* eslint-disable no-undef */
/// <reference types="cypress" />


describe('example to-do app', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200')
  });

  it('Should exist image when initialize home', () => {
    cy.get('button').click();
    cy.get(':nth-child(1) > .avatar > img').should('exist')
  });

  it('Should reload data when click in button update', () => {
    cy.get('button').click();
    cy.get('app-skeleton').should('exist')
  });

  it('When click in image should open modal', () => {
    cy.get(':nth-child(1) > .avatar > img').click();
    cy.get('.modal-pet > img').should('exist')
  });

  it('When click in close  in image should close modal', () => {
    cy.get(':nth-child(1) > .avatar > img').click();
    cy.get('.close-md').click();
    cy.get('.modal-pet > img').should('not.exist')
  });

})
