'use strict';
// main model file
const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};
import User from './user'
import Course from './course'
import Video from './video'
import Enroled_courses from './enroled_courses'

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.users = User(sequelize, Sequelize)
db.courses = Course(sequelize, Sequelize)
db.videos = Video(sequelize, Sequelize)
db.enroled_courses = Enroled_courses(sequelize, Sequelize)

// hasMany relationshipt with user and course
db.users.hasMany(db.courses, { 
  as: 'courses',
  foreignKey: 'userId'
})
db.courses.belongsTo(db.users, {
  foreignKey: 'userId',
  as: 'user'
})

// hasMany relationshipt with course and videos
db.courses.hasMany(db.videos, { 
  as: 'videos',
  foreignKey: 'courseId'
})
db.videos.belongsTo(db.courses, {
  foreignKey: 'courseId',
  as: 'course'
})

// hasMany relationshipt with user and videos
db.users.hasMany(db.videos, { 
  as: 'videos',
  foreignKey: 'userId'
})
db.videos.belongsTo(db.courses, {
  foreignKey: 'userId',
  as: 'user'
})

// hasMany relationshipt with course and enroled
db.courses.hasMany(db.enroled_courses, { 
  as: 'enroled_courses',
  foreignKey: 'courseId'
})
db.enroled_courses.belongsTo(db.courses, {
  foreignKey: 'courseId',
  as: 'course'
})

// hasMany relationshipt with user and enroled
db.users.hasMany(db.enroled_courses, { 
  as: 'enroled_courses',
  foreignKey: 'userId'
})
db.enroled_courses.belongsTo(db.users, {
  foreignKey: 'userId',
  as: 'user'
})

// console.log('######', db)

module.exports = db;
