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

        function getData() {
            var deferred = $q.defer();
            deferred.resolve( makeFakeCollection() );
            return deferred.promise;
        }

        function makeFakeCollection() {
            var prefix = '/Content/img/';
            var suffix = '.png';
            var images = [];

            for ( var i = 0; i < 25; i++ ) {
                var imgPath = prefix + padString( '00', i ) + suffix;
                $log.info('padding for ' + imgPath);
                images.push( { "id": i, "src": imgPath});
            }
            return images;
        }



        function padString( pad, i ) {
            var imgName = 'p' + ( pad + i ).slice( -pad.length  );
            return imgName;
        }



    }
})();