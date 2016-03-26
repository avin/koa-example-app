import DBRepository from "./DBRepository";
import Author from '../../models/Author';

export default class extends DBRepository {

    constructor(model) {
        super(model);
        this.alwaysInclude = [
            {model: Author},
        ]
    }
}