import Sequelize from 'Sequelize'
import sequelize from '../lib/sequelize';

let Author = sequelize.define('Author', {
    name: {
        type: Sequelize.STRING,
        field: 'name'
    },
}, {
    tableName: 'authors',
    timestamps: false
});

export default Author;