<!DOCTYPE html>
<html lang="fa">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>blog</title>
    <link href="{{asset("css/app.css")}}">
</head>
<body>
<div id="app">
  <div id="app">
    <router-link to="/login">صفحه لاگین</router-link>
    <router-link to="/register"> صفحه ثبت نام  </router-link>
  
    <router-view></router-view>
  </div>
    
</div>
<script src="{{asset("js/app.js")}}"></script>

</body>
</html>
