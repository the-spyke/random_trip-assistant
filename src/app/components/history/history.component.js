const LOG_LIMIT = 10;

class HistoryController {
    /** @ngInject */
    constructor($rootScope) {
        this.logs = [];
        this.$id = 0;

        this.$subscriptions = [];

        this.$subscriptions.push($rootScope.$on('search', (e, s) => this.onSearch(e, s)));
    }

    onSearch(e, searchRequest) {
        // if (this.logs.length === 0 || !angular.equals(this.logs[0], searchRequest)) {
        if (this.logs.length >= LOG_LIMIT) {
            this.logs.length = LOG_LIMIT - 1;
        }

        this.$id += 1;
        searchRequest.id = this.$id;
        this.logs.unshift(searchRequest);
        // }
    }

    getIconClass(type) {
        if (type === 'flight') {
            return 'glyphicon-plane';
        } else if (type === 'hotel') {
            return 'glyphicon-bed';
        } else {
            return 'glyphicon-dashboard';
        }
    }

    onDeleteClick(index) {
        if (index >= 0 && index <= this.logs.length) {
            this.logs.splice(index, 1);
        }
    }

    $onDestroy() {
        for (const unsubscribe of this.$subscriptions) {
            unsubscribe();
        }
    }
}

export default {
    templateUrl: 'app/components/history/history.template.html',
    controller: HistoryController
};
