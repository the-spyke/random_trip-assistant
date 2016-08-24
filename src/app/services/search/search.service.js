export default class {
    /** @ngInject */
    constructor($rootScope, $q, $timeout) {
        this.$rootScope = $rootScope;
        this.$q = $q;
        this.$timeout = $timeout;
    }

    searchFlight(dateStart, dateEnd, cityFrom, cityTo) {
        this.$emit('flight', dateStart, dateEnd, `${cityFrom} \u2192 ${cityTo}`);

        return this.$getResult();
    }

    $getResult() {
        return this.$q(resolve => {
            // this.$timeout(() => resolve('Done!'), Math.floor(500 + Math.random() * 2500));
            resolve('Done!');
        });
    }

    $emit(type, dateStart, dateEnd, title) {
        this.$rootScope.$emit(
            'search',
            {
                type: type,
                dateStart: dateStart,
                dateEnd: dateEnd,
                title: title
            });
    }
}
