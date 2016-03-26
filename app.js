import koa from "koa";
import routes from "./app/http/routes";
import session from "koa-session";
import csrf from "koa-csrf";
import middlewares from './app/http/middlewares';

const app = module.exports = koa();

let appKey = "hbXouhXjgD95ihHVG1ifjpIEaPoAMUIg";

/**
 * Set session key
 */
app.keys = [appKey];
app.use(session(app));

csrf(app);

/**
 * Load middlewares
 */
app.use(middlewares);


/**
 * Load routes
 */
app.use(routes);

app.use(csrf());


/**
 * Start app
 */
if (!module.parent) {
    app.listen(3000);
}