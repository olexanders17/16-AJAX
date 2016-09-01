function Ajax(params) {

    this.method;
    this.url;
    this.data = {};
    this.headers;
    this.callback;
    this.user;
    this.id;

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

    this.resource = function (url) {
        this.url = url;

        return this;
    }

    this.list = function () {
        this.get(this.url);
        return this;
    }

    this.getbyId = function (id) {
        this.get(this.url);
        this.id = id;
        return this;

    }

}


//----------------------------------

/*var Users = ajax.resource('http://..../api/v1/users')
 Users.list().done(function(users) { ... })
 Users.get(id).done(function(user) { ... })
 Users.get(id).done(function(user) { user.name = "other"; user.save().done()...; })*/


var ajax = new Ajax();

var Users = ajax.resource('users.json');
/*
/console.log("list of all users");
 Users.list().done(function (users) {
 console.log(users.responseText);
 })
 */

console.log("det user by id and edit user");
Users.getbyId(2).done(function (users) {
    var user = JSON.parse(users.responseText)
        .filter(e => e.index == Users.id)[0];
    console.log(user);
    user.index=100;
    console.log(user);

});








