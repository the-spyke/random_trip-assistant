import angular from 'angular';

import flightsComponent from './flights.component';

import searchServiceModule from './../../../../services/search';

export default angular
    .module('app.views.search.components.flights', [
        searchServiceModule
    ])
    .component('xxSearchFlights', flightsComponent)
    .name;