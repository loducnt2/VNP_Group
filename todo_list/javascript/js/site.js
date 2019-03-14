

hienUl();

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

              var count = document.getElementsByClassName("checked");
              var dem=0;
              for (var i = 0; i < count.length; i++){
                  dem++;
              }
              document.getElementById("count").innerHTML = dem;
              if (dem > 0) {
                document.getElementById("hiddenSpan").style.display = "block";
                document.getElementById("hidden3").style.display = "flex";
              }else{
                document.getElementById("hiddenSpan").style.display = "none";
                document.getElementById("hidden3").style.display = "none";
              }

              // Hiện bộ lọc 
              var ul_global = document.querySelector('ul');
              var li_global = ul_global.getElementsByTagName('LI');
              var dem_global = 0;
              for(var j=0; j < li_global.length; j++){
                dem_global++;
              }
              if(dem_global > 0){
                document.getElementById("hidden2").style.display = "block";
              }else{
                document.getElementById("hidden2").style.display = "none";
              }

            }
          }
        TickCheck();
        HienBoLoc()
    }
  }
//localStorage.removeItem('test');

function runScript(e){
  if (e.keyCode == 13) {
      newElement();
  }
}


function hienUl(){
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

          var count = document.getElementsByClassName("checked");
          var dem=0;
          for (var i = 0; i < count.length; i++){
              dem++;
          }
          document.getElementById("count").innerHTML = dem;
          if (dem > 0) {
            document.getElementById("hiddenSpan").style.display = "block";
            document.getElementById("hidden3").style.display = "flex";
          }else{
            document.getElementById("hiddenSpan").style.display = "none";
            document.getElementById("hidden3").style.display = "none";
          }
         
         // Hiện bộ lọc 
          var ul_global = document.querySelector('ul');
          var li_global = ul_global.getElementsByTagName('LI');
          var dem_global = 0;
          for(var j=0; j < li_global.length; j++){
            dem_global++;
          }
          if(dem_global > 0){
            document.getElementById("hidden2").style.display = "block";
          }else{
            document.getElementById("hidden2").style.display = "none";
          }

        }

      }

      TickCheck();
      SoDemCongViec();
      HienBoLoc();

    }
  } else {
      document.write('Trình duyệt của bạn không hỗ trợ local storage');
  }
}

//THÊM CLASS "checked" VÀO THẺ li NÀO ĐƯỢC Click
function TickCheck(){
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
      SoDemCongViec();

    }
  }
  
}

// HiỆN SỐ ĐẾM CÔNG VIỆC
function SoDemCongViec(){
    var ListCheck = document.getElementsByClassName("checked"); 
    var demCheck = 0;
    for (var i = 0; i < ListCheck.length; i++) {
      demCheck++;
    }
    document.getElementById("count").innerHTML = demCheck;

    if (demCheck > 0) {
      document.getElementById("hiddenSpan").style.display = "block";
      document.getElementById("hidden3").style.display = "flex";
    }else{
      document.getElementById("hiddenSpan").style.display = "none";
      document.getElementById("hidden3").style.display = "none";
    }
}

  //  HIỆN bộ lọc công việc - Tất cả - Chưa hoàn thành - Hoàn thành
function HienBoLoc(){
  var ul_global = document.querySelector('ul');
  var li_global = ul_global.getElementsByTagName('LI');
  var dem_global = 0;
  for(var j=0; j < li_global.length; j++){
    dem_global++;
  }
  if(dem_global > 0){
    document.getElementById("hidden2").style.display = "flex";
    
  }else{
    document.getElementById("hidden2").style.display = "block";
  }
}

function TickAll(){
  var list_all = document.querySelector('ul');
  var li_all = list_all.getElementsByTagName('LI');

   for(var j=0; j < li_all.length; j++){

      li_all[j].className = "checked";

      // Đếm số công việc đã làm được
    }
    var item = localStorage.getItem('test');
    Test2 = JSON.parse(item);
    for(var i in Test2){
      Test2[i].check = true;
      item = JSON.stringify(Test2);
      localStorage.setItem('test', item);
    }

    SoDemCongViec();
 }

 function Cancel(){
  var list_all = document.querySelector('ul');
  var li_all = list_all.getElementsByTagName('LI');

   for(var j=0; j < li_all.length; j++){

      li_all[j].classList.remove("checked");

      // Đếm số công việc đã làm được
    }
    var item = localStorage.getItem('test');
    Test2 = JSON.parse(item);
    for(var i in Test2){
      Test2[i].check = false;
      item = JSON.stringify(Test2);
      localStorage.setItem('test', item);
    }

    SoDemCongViec();
 }

var count = document.getElementsByClassName("checked");
var dem=0;
for (var i = 0; i < count.length; i++){
    dem++;
}
document.getElementById("count").innerHTML = dem;

 function TatCa(){
  var listUl = document.querySelector('ul');
  var li_tatca = listUl.getElementsByTagName('LI');
  for(var j = 0; j < li_tatca.length; j++){
    li_tatca[j].style.display = "block";
  }
}


function Active(){
  var listUl = document.querySelector('ul');
  var li_tatca = listUl.getElementsByTagName('LI');
  for(var j = 0; j < li_tatca.length; j++){
    li_tatca[j].style.display = "block";
  }
  for(var j = 0; j < count.length; j++){
    count[j].style.display = "none";
  }
}


function Complete(){
  var listUl = document.querySelector('ul');
  var li_tatca = listUl.getElementsByTagName('LI');
  for(var j = 0; j < li_tatca.length; j++){
    li_tatca[j].style.display = "none";
  }
  for(var j = 0; j < count.length; j++){
    count[j].style.display = "block";
  }
}

function HoanThanh(){
  var parent = document.getElementById('myUL');
  var child = document.getElementsByClassName("checked");
  var dem = 0;

    for(var i = 0; i < child.length; i++){


      var id = child[i].getAttribute("data-id");
      var item = localStorage.getItem('test');
      item = JSON.parse(item);
      if(item){
        delete item[id];
        item = JSON.stringify(item);
        localStorage.setItem('test', item);
      }

      parent.removeChild(child[i]);

      HoanThanh();
    }
    // Đếm số công việc đã hoàn thành
    var dem=0;
    for (var i = 0; i < child.length; i++){
        dem++;
    }
    document.getElementById("count").innerHTML = dem;

    // Ẩn - hiện nút Hoàn thành VÀ số đếm
    if (dem > 0) {
      document.getElementById("hiddenSpan").style.display = "block";
      document.getElementById("hidden3").style.display = "flex";
    }else{
      document.getElementById("hiddenSpan").style.display = "none";
      document.getElementById("hidden3").style.display = "none";
    }

    // Hiện bộ lọc 
    var ul_global = document.querySelector('ul');
    var li_global = ul_global.getElementsByTagName('LI');
    var dem_global = 0;
    for(var j=0; j < li_global.length; j++){
      dem_global++;
    }
    if(dem_global > 0){
      document.getElementById("hidden2").style.display = "block";
    }else{
      document.getElementById("hidden2").style.display = "none";
    }
}

  

