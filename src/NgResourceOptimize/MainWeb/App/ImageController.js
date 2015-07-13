( function () {
    'use strict';

    angular
        .module( 'app' )
        .controller( 'ImageController', ['$scope', '$location', '$q', '$log', 'ImageService', ImageController] );


    function ImageController( $scope, $location, $q, $log, imageService ) {
        var vm = this;
        vm.images = [];
        vm.getImages = getImageList;
        vm.title = 'ImageController';

        $scope.images = vm.images;
        $scope.getImages = getImageList;

        function getImageList() {
            imageService.getData().then(
                function ( data ) {
                    $scope.images = data;
                    $log.info( 'getImageList called' );
                    return data;
                } );
        }

    }
} )();
