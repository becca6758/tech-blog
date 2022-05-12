const {Post} = require('../models');

const postData = [{
    title: 'Coding Languages',
    content: 'There are currently around 700 programming languages',
    user_id: 1
},
{
    title: 'Computer Programmer',
    content: 'The worlds first programmer was a woman',
    user_id: 2
},
{
    title: 'Virus',
    content: 'The first computer virus was created in 1986',
    user_id: 3
}];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;