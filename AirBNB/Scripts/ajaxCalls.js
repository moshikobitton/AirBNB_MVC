function ajaxCall(method, api, data, successCB, errorCB) {
    $.ajax({
        type: method,
        url: api,
        data: data,
        cache: false,
        contentType: "application/jsonp",
        success: successCB,
        error: errorCB,
        dataType: 'jsonp'
    });
}