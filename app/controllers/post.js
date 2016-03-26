import render from "../lib/render";
import parse from "co-body";
import errorController from "./error";
import {postRepository} from "../providers/repository";

export default {

    /**
     * Вывод всех постов
     */
    index: function *() {
        let page = parseInt(this.query.page) || 1;
        let search = this.query.search;
        let filter = search ? {$or: {
            title: {$like: `%${search}%`},
            content: {$like: `%${search}%`},
        }} : {};
        let posts = yield postRepository.allPaginated(filter, page);

        let total = yield postRepository.total(filter);
        this.body = yield render('pages/posts/index', {
            posts,
            page,
            total,
            search,
            totalPages: total/5,
        })
    },

    /**
     * Страница добавления поста
     */
    add: function *() {
        this.body = yield render('pages/posts/new')
    },

    /**
     * Создание нового поста
     */
    create: function *() {
        var post = yield parse(this);

        let newPost = yield postRepository.create(post);

        this.redirect(`/posts/${newPost.id}`)
    },

    /**
     *
     * @param id
     */
    view: function *(id) {

        const post = yield postRepository.byId(id);

        if (post) {
            this.body = yield render('pages/posts/view', {post: post})
        } else {
            yield errorController.pageNotFound;
        }
    },
};