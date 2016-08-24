import angular from 'angular';

import historyComponent from './history.component';

export default angular
    .module('app.components.history', [])
    .component('xxHistory', historyComponent)
    .name;