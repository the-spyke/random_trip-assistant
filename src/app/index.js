import angular from 'angular';
import uiRouter from 'angular-ui-router';

import configuration from './configuration';

import rootViews from './views';

import headerComponentModule from './components/header';
import footerComponentModule from './components/footer';
import historyComponentModule from './components/history';

import layoutViewComponent from './layout.component';

export default angular
    .module('app', [
        uiRouter,
        rootViews,
        headerComponentModule,
        footerComponentModule,
        historyComponentModule
    ])
    .config(configuration)
    .component('zzLayout', layoutViewComponent)
    .name;
