var posts=["2025/11/22/hello-world/","2025/11/22/0.Keil工程模板搭建指南/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };