import Sequelize from 'Sequelize'
import sequelize from '../lib/sequelize';

import Author from './Author';

let Post = sequelize.define('Post', {
    title: {
        type: Sequelize.STRING,
        field: 'title'
    },
    content: {
        type: Sequelize.STRING,
        field: 'content'
    },
}, {
    tableName: 'posts'
});

Post.belongsTo(Author);

export default Post