import ApiService from "../apiservice";

class IngredientService extends ApiService {
    constructor() {
        super('/blog/ingredients');
    }

    getAll(filter) {
        return this.get('');
    }

    save(ingredient) {
        console.log(ingredient);
        return this.post('', ingredient);
    }

}

export default IngredientService;