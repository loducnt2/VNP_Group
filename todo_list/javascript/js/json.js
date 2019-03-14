
showUl();

function createBykey(){
    var n = new Date();
    return n.getTime();
}

function newElement() {
      var test = localStorage.getItem("test");

      var inputValue = document.getElementById("myInput").value;
      if (inputValue === '') {
        alert("Bạn chưa nhập nội dung");
      } else 
      {
          var testObj = (test !== null) ? JSON.parse(test) : {};
          var key = createBykey();
         
          testObj[key] = {"id": key, "data": inputValue, "check": "false"};
 
          localStorage.setItem('test', JSON.stringify(testObj));

          var li = document.createElement("li");
          li.setAttribute("data-id", key)  
          var textLi = document.createTextNode(inputValue);
          li.appendChild(textLi);
          document.getElementById("myUL").appendChild(li);
          document.getElementById("myInput").value = "";

          var span = document.createElement("span");
          var textSpan = document.createTextNode("X");
          span.appendChild(textSpan);
          span.className = "close";
          li.appendChild(span);

          // XÓA
          var close = document.getElementsByClassName("close");
          for (var j = 0; j < close.length; j++){
            close[j].onclick = function() {
              var parent = document.getElementById('myUL');
              var div = this.parentElement;
              parent.removeChild(div);

              var id = div.getAttribute("data-id");
              var item = localStorage.getItem('test');
              item = JSON.parse(item);
              if(item){
                delete item[id];
                item = JSON.stringify(item);
                localStorage.setItem('test', item);
              }
              countListLI();
              countWork();
            }
          }
        tickWork();
        countListLI();
        countWork();
    }
  }

function runScript(e){
  if (e.keyCode == 13) {
      newElement();
  }
}

function showUl(){
  if (typeof(Storage) !== "undefined") {
    var test = localStorage.getItem('test');
    var Test2 = JSON.parse(test);

    for(var i in Test2){
      var li = document.createElement("li");
      var textLiStorage = Test2[i].data;

      li.setAttribute("data-id", Test2[i].id)  

      if(Test2[i].check == true){
        li.className = "checked";
      }
      // Tao the span Xóa
      var textLi = document.createTextNode(textLiStorage);
      li.appendChild(textLi);
      document.getElementById("myUL").appendChild(li);

      var span = document.createElement("span");
      var textSpan = document.createTextNode("X");
      span.appendChild(textSpan);
      span.className = "close";
      li.appendChild(span);

      // Xoa
      var close = document.getElementsByClassName("close");
      var i;
      for (var j = 0; j < close.length; j++){
        close[j].onclick = function() {
          var parent = document.getElementById('myUL');
          var div = this.parentElement;
          parent.removeChild(div);

          var id = div.getAttribute("data-id");
          var item = localStorage.getItem('test');
          item = JSON.parse(item);
          if(item){
            delete item[id];
            item = JSON.stringify(item);
            localStorage.setItem('test', item);
          }
          countListLI();
          countWork();
        }

      }
      tickWork();
      countWork();
      countListLI();
    }
  } else {
      document.write('Trình duyệt của bạn không hỗ trợ local storage');
  }
}

//THÊM CLASS "checked" VÀO THẺ li NÀO ĐƯỢC Click
function tickWork(){
  var listUl = document.querySelector('ul');
  var CheckLi = listUl.getElementsByTagName('LI');
  for (var i = 0; i < CheckLi.length; i++) {
    CheckLi[i].onclick = function(check) {
      //console.log(this);
      if(check.target.classList.contains("checked")){
        this.classList.remove("checked");
      }else{
        this.className = "checked";
      }

      var id = this.getAttribute("data-id");
      //console.log(id);
      var item = localStorage.getItem('test');
      item = JSON.parse(item);
      if(item){
        if(check.target.classList.contains("checked")){
          item[id].check = true;
        }else{
          item[id].check = false;
        }
        item = JSON.stringify(item);
        localStorage.setItem('test', item);
      }
      countWork();

    }
  }
  
}

// HiỆN SỐ ĐẾM CÔNG VIỆC
function countWork(){
    var ulParent= document.querySelector('ul');
    var li_list = ulParent.getElementsByTagName('LI');
    var liNumber = 0;
    for (var i = 0; i < li_list.length; i++) {
      liNumber++;
    }

    var listCheck = document.getElementsByClassName("checked"); 
    var checkNumber = 0;
    for (var i = 0; i < listCheck.length; i++) {
      checkNumber++;
    }
    document.getElementById("count").innerHTML = liNumber - checkNumber;

    if (checkNumber > 0) {
      document.getElementById("hidden3").style.display = "flex";
    }else{
      document.getElementById("hidden3").style.display = "none";
    }
}

// Dem List LI
function countListLI(){
    var ulParent = document.querySelector('ul');
    var li_list = ulParent.getElementsByTagName('LI');
    var liNumber = 0;
    for (var i = 0; i < li_list.length; i++) {
      liNumber++;
    }

    if (liNumber > 0) {
      document.getElementById("action").style.display = "flex";
    }else{
      document.getElementById("action").style.display = "none";
    }
}

function tickAllWork(){
  var ul_list = document.querySelector('ul');
  var li_list = ul_list.getElementsByTagName('LI');

   for(var j=0; j < li_list.length; j++){

      li_list[j].className = "checked";

      // Đếm số công việc đã làm được
    }
    var item = localStorage.getItem('test');
    test2 = JSON.parse(item);
    for(var i in test2){
      test2[i].check = true;
      item = JSON.stringify(test2);
      localStorage.setItem('test', item);
    }
    countWork();
 }

function unTickAllWork(){
  var ul_list = document.querySelector('ul');
  var li_list = ul_list.getElementsByTagName('LI');

   for(var j=0; j < li_list.length; j++){

      li_list[j].classList.remove("checked");

      // Đếm số công việc đã làm được
    }
    var item = localStorage.getItem('test');
    test2 = JSON.parse(item);
    for(var i in test2){
      test2[i].check = false;
      item = JSON.stringify(test2);
      localStorage.setItem('test', item);
    }
    countWork();
 }

var count = document.getElementsByClassName("checked");

function getAllWork(){
  var list_ul = document.querySelector('ul');
  var list_li = list_ul.getElementsByTagName('LI');
  for(var j = 0; j < list_li.length; j++){
    list_li[j].style.display = "block";
  }
}


function getUnfinishWork(){
  var list_ul = document.querySelector('ul');
  var list_li = list_ul.getElementsByTagName('LI');
  for(var j = 0; j < list_li.length; j++){
    list_li[j].style.display = "block";
  }
  for(var j = 0; j < count.length; j++){
    count[j].style.display = "none";
  }
}

function getCompleteWork(){
  var list_ul = document.querySelector('ul');
  var list_li = list_ul.getElementsByTagName('LI');
  for(var j = 0; j < list_li.length; j++){
    list_li[j].style.display = "none";
  }
  for(var j = 0; j < count.length; j++){
    count[j].style.display = "block";
  }
}

function deleteWorkComplete(){
  var myUL = document.getElementById('myUL');
  var childChecked = document.getElementsByClassName("checked");

    for(var i = 0; i < childChecked.length; i++){
      var id = childChecked[i].getAttribute("data-id");
      var item = localStorage.getItem('test');
      item = JSON.parse(item);
      if(item){
        delete item[id];
        item = JSON.stringify(item);
        localStorage.setItem('test', item);
      }

      myUL.removeChild(childChecked[i]);

      deleteWorkComplete();
    }
    countListLI();
    countWork();
}

  
    /*
    JSON lưu dữ liệu theo kiểu chuỗi do đó cần chuyển đổi nó thành đ.tượng Javascript để sử dụng
    JSON.parse : Nhận vào 1 chuỗi JSON sau đó chuyển đổi nó thành đối tượng Javascript
    JSON.stringify : Lấy 1 đ.tượng Javascript chuyển nó thành chuỗi JSON để có thể lưu vào JSON*/
