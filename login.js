if (window.localStorage) {
  alert("您的浏览器支持");
} else {
  alert("您的浏览器不支持");
}
//经过判断目前本机浏览器支持本地存储功能.

//判断当前用户是否在线,离线缓存文件的加载,需要是在服务器,不响应的情况下,对文件缓存测试/
function online() {
  if (navigator.onLine) {
    alert("在线");
  } else {
    alert(lixian);
  }
}
online();
window.addEventListener("online", online, false);
window.addEventListener("offline", online, false);
//系统调用触发函数
//密码登录按钮函数
function passlogin() {
  var cover1 = document.getElementById("form1");
  var discover = document.getElementById("form2");
  cover1.style.display = "none";
  discover.style.display = "block";
  //点击时,一个隐藏,一个显示
}

//注册按钮函数
function registered() {
  var cover1 = document.getElementById("form1");
  var discover = document.getElementById("form2");
  cover1.style.display = "block";

  discover.style.display = "none";
}

//注册密码,用户名函数
function enroll() {
  var enroll_name = document.getElementById("user1_name");
  var enroll_pass = document.getElementById("pass1_name");
  var tel = enroll_name.value;
  console.log(tel); //获取用户名
  var pas = enroll_pass.value;
  console.log(pas); //获取密码
  if (localStorage.length == 0) {
    //没有数据直接存储
    var dataLength = localStorage.length; // 获取现在已有数据的长度  这个长度用于拼接到本地存储的每个key值中  达到一个动态存储的效果  每条本地存储数据需要一个钥匙   也就是获取这条数据的名称  就是key
    console.log(dataLength);
    // 创建一个对象用于存储用户输入的数据
    var data = {}; //创建一个对象
    data.tel = tel; //添加用户名
    data.pas = pas; //添加密码
    data.id = dataLength; //添加凭证id
    var info = JSON.stringify(data); //将对象转化为字符串,因为本地只能存储字符串
    console.log(info);
    // 向本地存储数据   第一个参数就是key钥匙  第二个是我们要存储的数据
    localStorage.setItem("key" + dataLength, info);
    // 获取本地存储所有数据 查看是否存到本地
  } else {
    //判断用户名是否重复
    for (var i = 0; i < localStorage.length; i++) {
      var key = localStorage.key(i);
      var keydate = localStorage.getItem(key); //得到当前key对应的对象
      var keyinfo = JSON.parse(keydate); //转化字符转

      if (keyinfo.tel == tel) {
        //判断你输入的用户名和已存储的是否重复
        alert("用户名已经存在");
        break;
      } else {
        var dataLength = localStorage.length; // 获取现在已有数据的长度  这个长度用于拼接到本地存储的每个key值中  达到一个动态存储的效果  每条本地存储数据需要一个钥匙   也就是获取这条数据的名称  就是key

        // 创建一个对象用于存储用户输入的数据
        var data = {};
        data.tel = tel; //添加用户名
        data.pas = pas; //添加密码
        data.id = dataLength; //添加凭证id
        var info = JSON.stringify(data); //将对象转化为字符串,因为本地只能存储字符串
        console.log(info);
        // 向本地存储数据   第一个参数就是key钥匙  第二个是我们要存储的数据
        localStorage.setItem("key" + dataLength, info);
        // 获取本地存储所有数据 查看是否存到本地
        console.log(localStorage.valueOf());
        alert("注册成功");
        setTimeout(function () {
          window.open("oo.html");
        }, 2000); //定时器注册成功后,直接进入主页
        break;
      }
    }
  }
}

//登录函数
function login() {
  var username = document.getElementById("user").value;
  var password = document.getElementById("pass").value;

  if (localStorage.length == 0) {
    //判断当前本地存储是否为空值
    alert("你还没有注册");
  } else {
    //定义三个数组,实现本地的存储值临时存放,与输入的值进行比对作用
    var teldata = [];
    var passdata = [];
    var iddata = [];
    //循环判断本地用户名
    for (var i = 0; i < localStorage.length; i++) {
      var key = localStorage.key(i);

      var keydate = localStorage.getItem(key); //拿到当前key对应的value.
      var keyinfo = JSON.parse(keydate); //转换字符串
      console.log(keyinfo); //拿到了当前对象的三个值,
      teldata[i] = keyinfo.tel; //将对象的值,分别放入数组中,进行比较
      passdata[i] = keyinfo.pas;
      iddata[i] = keyinfo.id;
      console.log(teldata);
      console.log(passdata);
      console.log(iddata);
    }

    if (teldata.indexOf(username) < 0) {
      //当前数组中如果没有该用户名,返回-1,
      alert("该账号,尚未注册,请先注册");
    } else {
      var index = teldata.indexOf(username); //将当前得到的用户名在数组的中下标,拿出来,
      if (passdata[index] != password) {
        //将拿到的下标,赋给,密码数组的下标,因为此时,两个数组的下标是匹配的,所以可以通过下标进行密码的正确判断.
        alert("密码错误!");
      } else {
        alert("欢迎" + username + "光临");
        window.open("oo.html");
      }
    }
  }
}
