class SearchController {
    /** @ngInject */
    constructor() {
        this.type = 'flight';
    }

    switchType(type) {
        this.type = type;
    }
}

export default {
    templateUrl: 'app/views/search/search.template.html',
    controller: SearchController
};
