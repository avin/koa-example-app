import Author from '../Author';
import Post from '../Post'

console.log('relation loader');
Author.hasMany(Post);

Post.belongsTo(Author);