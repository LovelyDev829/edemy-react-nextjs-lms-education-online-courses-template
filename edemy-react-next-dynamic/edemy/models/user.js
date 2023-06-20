'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, Sequelize) => {
    class User extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        // static associate(models) {
        //     // define association here
        //     User.hasMany(models.Course, {
        //         foreignKey: 'userId'
        //     })
        // }
    };
    User.init({
        id: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true
        },
        name: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING
        },
        isEmailPublic: {
            type: Sequelize.BOOLEAN,
            defaultValue: true
        },
        password: {
            type: Sequelize.STRING
        },
        designation: {
            type: Sequelize.TEXT
        },
        about: {
            type: Sequelize.TEXT
        },
        location: {
            type: Sequelize.STRING
        },
        phone: {
            type: Sequelize.STRING
        },
        company: {
            type: Sequelize.STRING
        },
        companyUrl: {
            type: Sequelize.STRING
        },
        interests: {
            type: Sequelize.STRING
        },
        passwordResetToken: {
            type: Sequelize.UUID
        },
        passwordUpdatedAt: {
            type: Sequelize.DATE
        },
        emailResetToken: {
            type: Sequelize.UUID
        },
        profilePhoto: {
            type: Sequelize.STRING
        },
        gender: {
            type: Sequelize.STRING
        },
        fb_url: {
            type: Sequelize.STRING
        },
        tw_url: {
            type: Sequelize.STRING
        },
        insta_url: {
            type: Sequelize.STRING
        },
        in_url: {
            type: Sequelize.STRING
        },
        emailConfirmed: {
            type: Sequelize.BOOLEAN,
            defaultValue: false
        },
        emailConfirmedAt: {
            type: Sequelize.DATE
        },
        as_teacher_apply: {
            type: Sequelize.BOOLEAN,
            defaultValue: false
        },
        as_teacher_confirmed: {
            type: Sequelize.BOOLEAN
        },
        as_teacher_confirmed_at: {
            type: Sequelize.DATE
        },
        as_teacher_req_desc: {
            type: Sequelize.TEXT
        },
        role: {
            type: Sequelize.ENUM,
            values: ['student', 'admin', 'teacher'],
            defaultValue: 'student'
        },
        active: {
            type: Sequelize.BOOLEAN,
            defaultValue: true
        },
        agreedTerms: {
            allowNull: false,
            type: Sequelize.BOOLEAN,
            defaultValue: false
        }
    }, {
        sequelize,
        modelName: 'User',
    });
    return User;
};