const {Comment} = require('../models');

const commentData = [{
    comment_text:"CSS stands for cascading style sheets",
    user_id: 1, 
    post_id: 1
},
{
    comment_text:"You can code with javascript",
    user_id: 2,
    post_id: 2
},
{
    comment_text:"Settings can be changed on VS code",
    user_id: 3,
    post_id: 3
}];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;