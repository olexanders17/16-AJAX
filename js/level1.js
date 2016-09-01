run = function () {
    var ts = Math.floor(new Date().getTime() / 1000);
    //https://api.twitter.com/1.1/search/tweets.json
    var data2 = {
        oauth_consumer_key: 'lDHfkIME4mAbuAmgkVBFJAYoF',
        oauth_token: '942248905-Ow2g6gvAxE8XmxmdD3H7B36xvrN6NtQBtdKjrfcf',
        oauth_signature_method: "HMAC-SHA1",
        oauth_timestamp: ts,
        oauth_version: "1.0",
        oauth_nonce: "06f077b685094a29897960c46dc907b7",
        oauth_signature: "W0vNqWA6p8DrW9sWNz6dGyqUVr8%3D"
    };

    /*consumer_secret: '5q7b2a4jvHHuY8mDu9yJU9ViD4tANTWcLorh0nWIRrYNOCeo0J',
     token_secret: 'qiYlUS3GKn4eHD1O9XooATdJcvbomhkZf1YUOvQu49l8j',*/

    var settings = {
        url: "https://api.twitter.com/1.1/search/tweets.json?q=twitterapi",
        method: "GET",
        success: onSuccess,
        error: onError,
        data: data2
    };


    function onSuccess(data) {
        console.log(data);
    };

    function onError(err) {
        console.log(err);
    }


    $.ajax(settings);
}


/*
 GET /1.1/statuses/user_timeline.json?screen_name=nodejs HTTP/1.1
 Accept: *!/!*
 Connection: close
 User-Agent: node-twitter/1.4.0
 host: api.twitter.com
 Authorization: OAuth oauth_consumer_key="lDHfkIME4mAbuAmgkVBFJAYoF",
 oauth_nonce="06f097b685094a2989c960c46dc907b7" ,
 oauth_signature_method="HMAC-SHA1",
 oauth_timestamp="1472391764",
 oauth_token="942248905-Ow2g6gvAxE8XmxmdD3H7B36xvrN6NtQBtdKjrfcf",
 oauth_version="1.0",
 oauth_signature="W0vNqWA6p8DrW9sWNz6dGyqUVr8%3D"
 content-length: 0

 */

