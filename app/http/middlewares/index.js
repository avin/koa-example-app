import compose from "koa-compose";
import csrf from './csrf'

export default compose([
    csrf,
])