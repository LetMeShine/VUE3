
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        /**
         * Add altering commands here.
         *
         * Example:
         * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
         */

        const { INTEGER, DATE, STRING } = Sequelize
        await queryInterface.createTable('users', {
            id: {
                type: INTEGER,
                type: INTEGER,
                allowNull: false,
                autoIncrement: true, // 自增
                primaryKey: true,
            },
            userCode: STRING(30),
            name: STRING(30),
            username: STRING(30),
            password: STRING(30),
            address: STRING(200),
            tel: STRING(30),
            birth: DATE,
            created_at: DATE,
            update_at: DATE
        });
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add reverting commands here.
         *
         * Example:
         * await queryInterface.dropTable('users');
         */
        await queryInterface.dropTable('users');
    }
};
