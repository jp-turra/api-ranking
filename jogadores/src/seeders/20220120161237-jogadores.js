'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert('jogadores', [
      {
        nome: 'Teste Seed',
        email: 'teste@teste.com',
        telefone: '41988579363',
        ranking: 'futebol',
        posicaoRanking: 1,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('jogadores', [
      {
        where: {
          email: 'teste@teste.com',
        },
      },
    ]);
  },
};
