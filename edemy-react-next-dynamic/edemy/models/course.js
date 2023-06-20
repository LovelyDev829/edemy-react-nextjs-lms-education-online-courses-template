'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, Sequelize) => {
    class Course extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        // static associate(models) {
        //     // define association here
        //     Course.belongsTo(models.User, {
        //         foreignKey: 'userId',
        //         onDelete: 'CASCADE'
        //     });
        // }
    };
    
    Course.init({
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
        userId: {
            type: Sequelize.UUID,
            onDelete: 'CASCADE',
            references: {
                model: 'Users',
                key: 'id',
                as: 'userId',
            }
        }
    }, {
        sequelize,
        modelName: 'Course',
    });
    return Course;
};