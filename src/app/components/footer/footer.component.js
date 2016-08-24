class FooterController {
    /** @ngInject */
    constructor() {
        this.year = new Date().getUTCFullYear();
    }
}

export default {
    templateUrl: 'app/components/footer/footer.template.html',
    controller: FooterController
};
