angular.module('StupidFilters', []).filter('altCaps', function() {
    return function(input) {
        var charArray = input.split('');

        charArray = charArray.map(function(el, i) {
            return i % 2 === 0 ? el.toLowerCase(el) : el.toUpperCase(el);
        });

        return charArray.join('');
    };
});