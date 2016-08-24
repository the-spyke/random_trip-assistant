class FlightsController {
    /** @ngInject */
    constructor(searchService) {
        this.searchService = searchService;
        this.type = 'flight';
        this.isLoading = false;

        this.searchRequest = {
            dateStart: new Date(2016, 8, 5),
            dateEnd: new Date(2016, 8, 30),
            cityFrom: 'New York',
            cityTo: 'London'
        };
    }

    onSearchClick() {
        this.isLoading = true;
        this.searchService.searchFlight(
            this.searchRequest.dateStart,
            this.searchRequest.dateEnd,
            this.searchRequest.cityFrom,
            this.searchRequest.cityTo
        ).then(result => {
            //alert(result);
            this.isLoading = false;
        });
    }

    showClearMessage() {
        alert('Clear button has no sense in a good UI.');
    }
}

export default {
    templateUrl: 'app/views/search/components/flights/flights.template.html',
    controller: FlightsController
};