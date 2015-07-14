( function () {
    'use strict';

    angular
        .module( 'app' )
        .controller( 'ImageController', ['$scope', '$location', '$q', '$log', 'ImageService', ImageController] );


    function ImageController( $scope, $location, $q, $log, imageService ) {
        var vm = this;
        vm.images = [];
        vm.title = 'ImageController';
        vm.useBackground = false;

        $scope.images = vm.images;
        $scope.getImages = getImageList;
        $scope.useBackground = vm.useBackground;

        function getImageList( option ) {

            var cdnFormat = "/Content/img/";

            if ( option==="fcdn" ) {
                cdnFormat = 'http://cdn{X}.r.cicoriadev.net/Content/img/';
            }

            if ( option == "cdn" ) {
                    cdnFormat = 'http://cdn{X}.cicoriadev.net/Content/img/';
            }

            if ( option == "singlecdn" ) {
                cdnFormat = 'http://cdn01.cicoriadev.net/Content/img/';
            }


            imageService.getData(cdnFormat).then(
                function ( data ) {
                    $scope.images = data;
                    $log.info( 'getImageList called' );
                    return data;
                } );
        }

    }
} )();
