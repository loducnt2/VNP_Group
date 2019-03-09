
   /*- - - - - -- - Code Cũ  FIX -  - - - - -- -*/
   hienUl();
 function LuuUl(){
  if (typeof(Storage) !== "undefined") {
    var textUL = document.getElementById('myUL').innerHTML;
    localStorage.setItem('ul', textUL);
  } else {
      document.write('Trình duyệt của bạn không hỗ trợ local storage');
  }
}
function hienUl(){
  if (typeof(Storage) !== "undefined") {
    var textUL = localStorage.getItem('ul');
    document.getElementById('myUL').innerHTML = textUL;
  } else {
      document.write('Trình duyệt của bạn không hỗ trợ local storage');
  }
}


  var count = document.getElementsByClassName("checked");
  var dem=0;
  for (var i = 0; i < count.length; i++){
      dem++;
  }
  document.getElementById("count").innerHTML = dem;
  if (dem > 0) {
    document.getElementById("hidden3").style.display = "flex";
  }else{
    document.getElementById("hidden3").style.display = "none";
  }

  var ul_global = document.querySelector('ul');
  var li_global = ul_global.getElementsByTagName('LI');
  var dem_global = 0;
  for(var j=0; j < li_global.length; j++){
    dem_global++;
  }
  if(dem_global > 0){
    document.getElementById("hidden1").style.display = "flex";
    document.getElementById("hidden2").style.display = "block";
  }else{
    document.getElementById("hidden1").style.display = "none";
    document.getElementById("hidden2").style.display = "none";
  }

//THÊM CLASS "checked" VÀO THẺ li NÀO ĐƯỢC Click
var listUl = document.querySelector('ul');
  listUl.addEventListener('click', function(check){

   // thuộc tính target là của đối tượng check trên
    if (check.target.tagName === 'LI') {
      check.target.classList.toggle('checked');

        // Load lại số đếm công việc
        var count = document.getElementsByClassName("checked");
        var dem=0;
        for (var i = 0; i < count.length; i++){
            dem++;
        }
        document.getElementById("count").innerHTML = dem;
        if (dem > 0) {
          document.getElementById("hidden3").style.display = "flex";
        }else{
          document.getElementById("hidden3").style.display = "none";
        }
         LuuUl();
    }
      // Phương thức toggle() dùng để thực hiện luân phiên giữa việc hiện & ẩn một phần tử.
   
  });


      //  XOA
  //var xoa = document.querySelectorAll(".close");
  //var xoa = document.getElementsByClassName("close");
  //var i;
  //for(i=0; i<xoa.length; i++){
  //  xoa[i].onclick = function() {
   //   var div = this.parentElement;
   //   div.style.display = "none";
  //  }
 // }

  //   XÓA CÔNG VIỆC
  var xoa = document.getElementsByClassName("close");
  var i;
  for(i=0; i<xoa.length; i++){
    xoa[i].onclick = function() {
      var parent = document.getElementById('myUL');
      var div = this.parentElement;
      parent.removeChild(div);

      // ĐẾM SỐ CÔNG VIỆC ĐÃ HAONF THÀNH CÒN LẠI
      var count = document.getElementsByClassName("checked");
      var dem=0;
      for (var i = 0; i < count.length; i++){
          dem++;
      }
      document.getElementById("count").innerHTML = dem;
      LuuUl();
    }
    
  }
  

function newElement() {
    var li = document.createElement("li");
    var textClient = document.getElementById("myInput").value;
    var textLi = document.createTextNode(textClient);
    li.appendChild(textLi);
    if(textClient == ""){
      alert("Bạn chưa nhập công việc");
    }else{
      document.getElementById("myUL").appendChild(li);
      document.getElementById("myInput").value = "";
    }

    // Gán thẻ span XÓA cho các li mới đấy
    var span = document.createElement("span");
    var textSpan = document.createTextNode("X");
    span.appendChild(textSpan);
    span.className = "close";
    span.addEventListener("click", function(Delete){
      var parent = document.getElementById('myUL');
      var div = this.parentElement;
      parent.removeChild(div);
    });
    li.appendChild(span);

    //  HIỆN Số đếm công việc
    var ul_global = document.querySelector('ul');
    var li_global = ul_global.getElementsByTagName('LI');
    var dem_global = 0;
    for(var j=0; j < li_global.length; j++){
      dem_global++;
    }
    if(dem_global > 0){
      document.getElementById("hidden1").style.display = "flex";
      document.getElementById("hidden2").style.display = "block";
    }

    LuuUl();
}

function runScript(e) {
    //See notes about 'which' and 'key'
    if (e.keyCode == 13) {
        newElement();
    }
}

// Đếm số công việc đã hoàn thành
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
    parent.removeChild(child[i]);
    //child[i].style.display = "none";
    /*var div = this.parentElement;
    div.style.display = "none";*/

    // Đếm số công việc đã hoàn thành
    var dem=0;
    for (var i = 0; i < child.length; i++){
        dem++;
    }
    document.getElementById("count").innerHTML = dem;

    // Ẩn - hiện nút Hoàn thành
    if (dem > 0) {
      document.getElementById("hidden3").style.display = "flex";
    }else{
      document.getElementById("hidden3").style.display = "none";
    }

  LuuUl();
  }
}

function TickAll(){
  var list_all = document.querySelector('ul');
  var li_all = list_all.getElementsByTagName('LI');

   for(var j=0; j < li_all.length; j++){

      li_all[j].className = "checked";

      // Đếm số công việc đã làm được
      var count = document.getElementsByClassName("checked");
      var dem=0;
      for (var i = 0; i < count.length; i++){
          dem++;
      }
      document.getElementById("count").innerHTML = dem;

      //  Ẩn - hiện nút Hoàn thành tùy theo số công việc
      if (dem > 0) {
        document.getElementById("hidden3").style.display = "flex";
      }else{
        document.getElementById("hidden3").style.display = "none";
      }
   }
    LuuUl();
}

function Cancel(){
  var list_all = document.querySelector('ul');
  var li_all = list_all.getElementsByTagName('LI');

   for(var j=0; j < li_all.length; j++){

      li_all[j].classList.remove("checked");

      // Đếm số công việc đã làm được
      var count = document.getElementsByClassName("checked");
      var dem=0;
      for (var i = 0; i < count.length; i++){
          dem++;
      }
      document.getElementById("count").innerHTML = dem;

      //  Ẩn - hiện nút Hoàn thành tùy theo số công việc
      if (dem > 0) {
        document.getElementById("hidden3").style.display = "flex";
      }else{
        document.getElementById("hidden3").style.display = "none";
      }
   }
    LuuUl();
}



    /*- - - - - -- - Code Cũ -  - - - - -- -*/

/*
var count = document.getElementsByClassName("checked");
  var dem=0;
  for (var i = 0; i < count.length; i++){
      dem++;
  }
  document.getElementById("count").innerHTML = dem;
  if (dem > 0) {
    document.getElementById("hidden3").style.display = "flex";
  }else{
    document.getElementById("hidden3").style.display = "none";
  }

  var ul_global = document.querySelector('ul');
  var li_global = ul_global.getElementsByTagName('LI');
  var dem_global = 0;
  for(var j=0; j < li_global.length; j++){
    dem_global++;
  }
  if(dem_global > 0){
    document.getElementById("hidden1").style.display = "flex";
    document.getElementById("hidden2").style.display = "block";
  }else{
    document.getElementById("hidden1").style.display = "none";
    document.getElementById("hidden2").style.display = "none";
  }

//THÊM CLASS "checked" VÀO THẺ li NÀO ĐƯỢC Click
var listUl = document.querySelector('ul');
  listUl.addEventListener('click', function(check){

   // thuộc tính target là của đối tượng check trên
    if (check.target.tagName === 'LI') {
      check.target.classList.toggle('checked');

        // Load lại số đếm công việc
        var count = document.getElementsByClassName("checked");
        var dem=0;
        for (var i = 0; i < count.length; i++){
            dem++;
        }
        document.getElementById("count").innerHTML = dem;
        if (dem > 0) {
          document.getElementById("hidden3").style.display = "flex";
        }else{
          document.getElementById("hidden3").style.display = "none";
        }
    }
      // Phương thức toggle() dùng để thực hiện luân phiên giữa việc hiện & ẩn một phần tử.
   
  });


      //  XOA
  //var xoa = document.querySelectorAll(".close");
  //var xoa = document.getElementsByClassName("close");
  //var i;
  //for(i=0; i<xoa.length; i++){
  //  xoa[i].onclick = function() {
   //   var div = this.parentElement;
   //   div.style.display = "none";
  //  }
 // }

  //   XÓA CÔNG VIỆC
  var xoa = document.getElementsByClassName("close");
  var i;
  for(i=0; i<xoa.length; i++){
    xoa[i].onclick = function() {
      var parent = document.getElementById('myUL');
      var div = this.parentElement;
      parent.removeChild(div);
    }
  }
  

function newElement() {
    var li = document.createElement("li");
    var textClient = document.getElementById("myInput").value;
    var textLi = document.createTextNode(textClient);
    li.appendChild(textLi);
    if(textClient == ""){
      alert("Bạn chưa nhập công việc");
    }else{
      document.getElementById("myUL").appendChild(li);
      document.getElementById("myInput").value = "";
    }

    // Gán thẻ span XÓA cho các li mới đấy
    var span = document.createElement("span");
    var textSpan = document.createTextNode("X");
    span.appendChild(textSpan);
    span.className = "close";
    span.addEventListener("click", function(Delete){
      var parent = document.getElementById('myUL');
      var div = this.parentElement;
      parent.removeChild(div);
    });
    li.appendChild(span);

    //  HIỆN Số đếm công việc
    var ul_global = document.querySelector('ul');
    var li_global = ul_global.getElementsByTagName('LI');
    var dem_global = 0;
    for(var j=0; j < li_global.length; j++){
      dem_global++;
    }
    if(dem_global > 0){
      document.getElementById("hidden1").style.display = "flex";
      document.getElementById("hidden2").style.display = "block";
    }
}

function runScript(e) {
    //See notes about 'which' and 'key'
    if (e.keyCode == 13) {
        newElement();
    }
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
    parent.removeChild(child[i]);

    var count = document.getElementsByClassName("checked");
    var dem=0;
    for (var i = 0; i < count.length; i++){
        dem++;
    }
    document.getElementById("count").innerHTML = dem;

    if (dem > 0) {
      document.getElementById("hidden3").style.display = "flex";
    }else{
      document.getElementById("hidden3").style.display = "none";
    }

  }
}

function TickAll(){
  var list_all = document.querySelector('ul');
  var li_all = list_all.getElementsByTagName('LI');

   for(var j=0; j < li_all.length; j++){

      li_all[j].className = "checked";

      // Đếm số công việc đã làm được
      var count = document.getElementsByClassName("checked");
      var dem=0;
      for (var i = 0; i < count.length; i++){
          dem++;
      }
      document.getElementById("count").innerHTML = dem;

      //  Ẩn - hiện nút Hoàn thành tùy theo số công việc
      if (dem > 0) {
        document.getElementById("hidden3").style.display = "flex";
      }else{
        document.getElementById("hidden3").style.display = "none";
      }

   }
}

function Cancel(){
  var list_all = document.querySelector('ul');
  var li_all = list_all.getElementsByTagName('LI');

   for(var j=0; j < li_all.length; j++){

      li_all[j].classList.remove("checked");

      // Đếm số công việc đã làm được
      var count = document.getElementsByClassName("checked");
      var dem=0;
      for (var i = 0; i < count.length; i++){
          dem++;
      }
      document.getElementById("count").innerHTML = dem;

      //  Ẩn - hiện nút Hoàn thành tùy theo số công việc
      if (dem > 0) {
        document.getElementById("hidden3").style.display = "flex";
      }else{
        document.getElementById("hidden3").style.display = "none";
      }

   }
}
*/