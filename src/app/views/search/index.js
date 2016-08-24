import angular from 'angular';

import flightsComponentModule from './components/flights';

import searchViewComponent from './search.component';

export default angular
    .module('app.views.search', [
        flightsComponentModule
    ])
    .component('zzSearch', searchViewComponent)
    .name;