<!doctype html>
{% html lang="en" framework="vuelearn:static/js/mod.js" %}
    {% head %}
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="description" content="">
        <meta name="author" content="sqliang">
        <link rel="icon" href="/static/favicon.ico">
        <title>{{ title }}</title>
    {% endhead %}

    {% body %}
        <div id="app">
            <div id="middle" class="container">
                {% block content %}
                {% endblock %}
            </div>
        </div>

    {% endbody %}
    <script>
        // webview返回刷新
        window.webviewOnShow = function (from) {
            if(from == 1) {
                window.location.href = window.location.href;
            }
        }
        var Config = require('vuelearn:widget/config.js');
        !function(){
            if (!(navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
                if(!Config.debug) { location.href = Config.redirect }
            }
        }();
        require('../widget/main.js');
    </script>

{% endhtml %}
