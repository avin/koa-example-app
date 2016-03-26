

export default class {

    constructor(model) {
        this.model = model;
        this.alwaysInclude = [];
    }

    all(where = {}) {
        return this.model.findAll({where, include: this.alwaysInclude});
    }

    allPaginated(where = {}, page = 1) {
        let limit = 5;
        let offset = (page-1)*limit;
        return this.model.findAll({where, offset, limit, include: this.alwaysInclude});
    }

    total(where = {}){
        return this.model.count({where});
    }

    byId(id) {
        return this.model.findById(id, {include: this.alwaysInclude});
    }

    create(item) {
        delete item['_csrf'];
        return this.model.create(item);
    }
}