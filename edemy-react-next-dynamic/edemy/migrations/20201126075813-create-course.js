'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Courses', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
      },
      title: {
        type: Sequelize.STRING
      },
      overview: {
        type: Sequelize.TEXT
      },
      price: {
        type: Sequelize.FLOAT
      },
      free: {
        type: Sequelize.BOOLEAN
      },
      published: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      profilePhoto: {
        type: Sequelize.STRING
      },
      coverPhoto: {
        type: Sequelize.STRING
      },
      courese_preview_img: {
        type: Sequelize.STRING
      },
      course_preview_video: {
        type: Sequelize.STRING
      },
      duration: {
        type: Sequelize.STRING
      },
      duration: {
        type: Sequelize.STRING
      },
      lessons: {
        type: Sequelize.STRING
      },
      access: {
        type: Sequelize.STRING
      },
      category: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      userId: {
        type: Sequelize.UUID,
        onDelete: 'CASCADE',
        references: {
          model: 'Users',
          key: 'id',
          as: 'userId',
        }
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Courses');
  }
};