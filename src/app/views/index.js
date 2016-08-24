import angular from 'angular';

import titleViewModule from './title';
import techsViewModule from './techs';
import searchViewModule from './search';

export default angular
    .module('app.views', [
        titleViewModule,
        techsViewModule,
        searchViewModule
    ])
    .name;
