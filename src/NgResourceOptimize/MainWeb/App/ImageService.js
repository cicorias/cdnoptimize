(function () {
    'use strict';

    angular
        .module('app')
        .factory('ImageService',['$http', '$q', '$log', ImageService ]);


    function ImageService($http, $q, $log) {
        var service = {
            getData: getData
        };

        return service;

        function getData(cdnFormat) {
            var deferred = $q.defer();
            deferred.resolve( makeFakeCollection(cdnFormat) );
            return deferred.promise;
        }

        function makeFakeCollection(cdnFormat) {

            var suffix = '.png';
            var images = [];

            for ( var i = 0; i < 16; i++ ) {

                var prefix = padString( '00', i+1 );

                var cdnPath = cdnFormat.replace( '{X}', prefix );
                var imgPath = cdnPath + 'p' + padString( '00', i ) + suffix;
                $log.info('padding for ' + imgPath);
                images.push( { "id": i, "src": imgPath});
            }
            return images;
        }

        function padString( pad, i ) {
            var imgName = ( pad + i ).slice( -pad.length  );
            return imgName;
        }



    }
})();