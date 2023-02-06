import ApiService from "../apiservice";

export default class IngredientService extends ApiService {
    constructor() {
        super('/blog/ingredients');
    }

    getAll(filter) {
        
    }
}