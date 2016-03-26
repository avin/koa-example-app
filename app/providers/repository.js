import PostRepository from '../repositories/db/PostRepository'
import AuthorRepository from '../repositories/db/AuthorRepository'
import PostModel from '../models/Post'
import AuthorModel from '../models/Author'

require('../models/relations');

export const postRepository = new PostRepository(PostModel);
export const authorRepository = new AuthorRepository(AuthorModel);
