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

        function getImageList( useCdn ) {

            var cdnFormat = "/Content/img/";

            if ( useCdn ) {
                cdnFormat = 'http://cdn{X}.r.cicoriadev.net/Content/img/';
            }
            //if ( useCdn ) {
            //    cdnFormat = 'http://cdn{X}.cicoriadev.net/Content/img/';
            //}
            ////r.cicoriadev.net

            imageService.getData(cdnFormat).then(
                function ( data ) {
                    $scope.images = data;
                    $log.info( 'getImageList called' );
                    return data;
                } );
        }

    }
} )();
