(function(){

    var defaults = {
        layout: 'topRight',
        theme: 'relax',
        timeout: 5000,
        text: '',
        type: 'alert',
        animation: {
            open: 'animated bounceInRight',
            close: 'animated bounceOutRight'
        }
    };

    var extend = function(src, options){
        var res = {};
        for (var i in src) {
            if (options.hasOwnProperty(i)) {
                res[i] = options[i];
            }
            else {
                res[i] = src[i];
            }
        }
        return res;
    };

    window.flash = function(type, text, params){

        switch (type) {
            case 'alert':
                type = 'warning';
                break;
            case 'info':
                type = 'information';
                break;
        }

        var options = extend(defaults, {
            text: text,
            type: type
        });

        if (params && typeof params === 'object') {
            options = extend(options, params);
        }

        noty(options);

    };

})();
