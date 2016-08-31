function Ajax(params) {

    this.method;
    this.url;
    this.data = {};
    this.headers;
    this.callback;
    this.user;

    this.output = [];


    var connect = function (calback) {
        this.callback = calback;
        var self = this;

        var xhr = new XMLHttpRequest();
        xhr.open(this.method, this.url, true);
        for (key in this.headers) {
            xhr.setRequestHeader(key, this.headers[key]);
        }
        xhr.send(JSON.stringify(this.data));

        xhr.onreadystatechange = function () {
            if (xhr.readyState != xhr.DONE) {

                return;
            }

            var resp = {
                status: xhr.status,
                headers: xhr.getAllResponseHeaders(),
                responseText: xhr.responseText,

            }

            self.callback(resp);
        }

    }.bind(this);

    this.get = function (url, headers) {
        this.url = url;
        this.method = 'GET';
        return this;
    }

    this.post = function (url, data, headers) {
        this.url = url;
        this.method = 'POST';
        this.data = data;
        return this;
    }

    this.head = function (url, headers) {
        this.url = url;
        this.method = 'HEAD';
        return this;
    }

    this.put = function (url, headers) {
        this.url = url;
        this.method = 'PUT';
        return this;
    }

    this.done = function (callback) {
        connect(callback);
    }

    this.resource = function (url, callback) {
        this.get(url).done(function (resp) {

            // console.log(resp.responseText);
            //this.user =resp.responseText ;
            callback(resp)
        });


    }

}


//----------------------------------

var ajax = new Ajax();

/*
var Users = ajax.resource('users2.json', function (resp) {


});
console.log('users', Users);
*/


var promise = new Promise(function (resolve, reject) {
    var Users = ajax.resource('users2.json', function (resp) {
        resolve(resp.responseText);
    });

})

promise.than(function (resp) {

})
console.log(Users);



