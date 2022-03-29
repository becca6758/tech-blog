const {User} = require('../models');

const userData = [{
    username: 'Dory',
    password: 'dory'
},
{
    username: 'Marlin',
    password: 'marlin'
},
{
    username: 'Crush',
    password: 'crush'
}];

const seedUsers = () => User.bulkCreate(userData);
module.exports = seedUsers;