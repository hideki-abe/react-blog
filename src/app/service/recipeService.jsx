import ApiService from "../apiservice";

export default class RecipeService extends ApiService {
    constructor() {
        super('/blog/recipes');
    }

    getAll(filter) {
        return this.get('');
    }
}