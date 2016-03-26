import compose from "koa-compose";
import route from "koa-route";
import postController from "../controllers/post";
import homeController from "../controllers/home";

export default compose([
    //Home
    route.get('/', homeController.home),

    //Posts
    route.get('/posts/', postController.index),
    route.get('/posts/new', postController.add),
    route.post('/posts/new', postController.create),
    route.get('/posts/:id', postController.view),
])