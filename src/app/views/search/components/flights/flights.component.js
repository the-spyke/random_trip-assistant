class FlightsController {
    /** @ngInject */
    constructor(searchService) {
        this.searchService = searchService;
        this.type = 'flight';
        this.isLoading = false;

        this.reset();
    }

    onSearchClick() {
        this.isLoading = true;
        this.searchService.searchFlight(
            this.searchRequest.dateStart,
            this.searchRequest.dateEnd,
            this.searchRequest.cityFrom,
            this.searchRequest.cityTo
        ).then(() => {
            this.isLoading = false;
        });
    }

    reset() {
        this.searchRequest = {
            dateStart: new Date(2016, 8, 5),
            dateEnd: new Date(2016, 8, 30),
            cityFrom: 'New York',
            cityTo: 'London'
        };

        if (this.formFlight) {
            this.formFlight.$setPristine();
        }
    }

    getValidationGroupClass(input) {
        if (input.$pristine) {
            return '';
        } else if (input.$valid) {
            return 'has-success';
        }

        return 'has-error';
    }

    getValidationIconClass(input, isRequired = false) {
        if (input.$pristine) {
            if (isRequired) {
                return 'glyphicon-asterisk text-info spk-required-field';
            }

            return 'hidden';
        } else if (input.$valid) {
            return 'glyphicon-ok';
        }

        return 'glyphicon-remove';
    }
}

export default {
    templateUrl: 'app/views/search/components/flights/flights.template.html',
    controller: FlightsController
};
