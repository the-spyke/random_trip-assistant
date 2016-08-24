import angular from 'angular';

import searchService from './search.service';

export default angular
    .module('app.services.search', [])
    .service('searchService', searchService)
    .name;