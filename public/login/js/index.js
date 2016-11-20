$('.form button.login').click(function () {

    if ($('.login-form').is(':visible'))
        requestAccessToken();

    $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
});

function requestAccessToken() {
    const options = {
        _apiId: 5737599,
        _domain: {
            main: 'https://oauth.vk.com/',
            api: 'https://api.vk.com/'
        },
        _path: {
            login: 'authorize',
            proxy: 'fxdm_oauth_proxy.html'
        },
    }

    var url = options._domain.main + options._path.login + '?client_id=' + options._apiId
        + '&display=popup&redirect_uri=blank.html&response_type=token'

    // if (settings && parseInt(settings, 10) > 0) {
    url += '&scope=groups';
    // }

    UI.popup({
        width: 400,
        height: 200,
        url: url
    });
}

UI = {
    active: null,
    _buttons: [],
    popup: function (options) {
        var
            screenX = typeof window.screenX != 'undefined' ? window.screenX : window.screenLeft,
            screenY = typeof window.screenY != 'undefined' ? window.screenY : window.screenTop,
            outerWidth = typeof window.outerWidth != 'undefined' ? window.outerWidth : document.body.clientWidth,
            outerHeight = typeof window.outerHeight != 'undefined' ? window.outerHeight : (document.body.clientHeight - 22),
            width = options.width,
            height = options.height,
            left = parseInt(screenX + ((outerWidth - width) / 2), 10),
            top = parseInt(screenY + ((outerHeight - height) / 2.5), 10),
            features = (
                'width=' + width +
                ',height=' + height +
                ',left=' + left +
                ',top=' + top
            );
        this.active = window.open(options.url, 'vk_openapi', features);
    }
}