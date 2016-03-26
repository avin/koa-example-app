import render from "../lib/render";

export default {

    /**
     * Вывод всех постов
     */
    home: function *() {
        this.body = yield render('pages/home/home', {})
    },
};