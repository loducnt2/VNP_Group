
$(document).ready(function(){
	DemCV();
	hienUl();

	function createBykey(){
	    var n = new Date();
	    return n.getTime();
	}

	$("#newElement").click(function(){
		var test = localStorage.getItem("test");

		  var inputValue = $('#myInput').val();
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

		      //var myUL = $("#myUL");
		      /*$("#myUL").append("<li></li>");
		      $("#myUL li").attr("data-id", key);
		      //var textLi = attr(inputValue);
		      $("#myUL li").attr('value', inputValue);
		      //$("#myUL").append(li);
		      $("#myInput").val("");

		      var span = $(li).append("<span></span>");
		      var textSpan = "X";

		      $(span).append(textSpan);

		      $(span).addClass = "close";
		      $(li).append(span);*/

		      // XÓA
		      $(".close").click(function(){
		      	var div = $(this).parent();
		        $(div).remove();

		          var id = $(div).attr("data-id");
		          var item = localStorage.getItem('test');
		          item = JSON.parse(item);
		          if(item){
		            delete item[id];
		            item = JSON.stringify(item);
		            localStorage.setItem('test', item);
		          }
		          DemCV();
		      });

		      // Tick CHỌN
		      	/*$('#myUL li').click(function(){
					$(this).toggleClass('checked');

					var id = $(this).attr("data-id");
			      	var item = localStorage.getItem('test');
			      	item = JSON.parse(item);
			      	if(item){
			        	if($(this).hasClass("checked")){
			          		item[id].check = true;
			        	}else{
			          		item[id].check = false;
			        	}
			        	item = JSON.stringify(item);
			        	localStorage.setItem('test', item);
			      	}
			      	DemCV();
				});*/

		   	/*$("li").click(function(){
				var listUl = document.querySelector('ul');
			  	var CheckLi = listUl.getElementsByTagName('LI');

			  	$.each(CheckLi, function(i){
			  		CheckLi[i].onclick = function() {
				      	//console.log(this);
				      	if($(this).hasClass("checked")){
				        	this.classList.remove("checked");
				      	}else{
				        	this.className = "checked";
				      	}

				      	var id = $(this).attr("data-id");
				      	var item = localStorage.getItem('test');
				      	item = JSON.parse(item);
				      	if(item){
				        	if($(this).hasClass("checked")){
				          		item[id].check = true;
				        	}else{
				          		item[id].check = false;
				        	}
				        	item = JSON.stringify(item);
				        	localStorage.setItem('test', item);
				      	}

				      	//DemCV();
				    }
				})
			});*/

			DemCV();
		}
	});

	$('#myInput').keypress(function (key) {
		if (key.key==='Enter' && $(this).val()!='') {
			alert("asd");
			$("#myInput").val("");
		}
	})

	function hienUl(){
	  if (typeof(Storage) !== "undefined") {
	    var test = localStorage.getItem('test');
	    var Test2 = JSON.parse(test);

	    $.each(Test2, function(i){
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

	      // XÓA
		    $(".close").click(function(){
		        var div = $(this).parent();
		        $(div).remove();

		          var id = $(div).attr("data-id");
		          var item = localStorage.getItem('test');
		          item = JSON.parse(item);
		          if(item){
		            delete item[id];
		            item = JSON.stringify(item);
		            localStorage.setItem('test', item);
		          }
		          DemCV();
		      });

	    })
	    DemCV();
	  } else {
	     alert('Trình duyệt của bạn không hỗ trợ local storage');
	  }
	}

	function DemCV(){
		var checkLi = $(".checked");
		var dem = 0;
		$.each(checkLi, function(){
			dem++;
		})
		$("#count").text(dem);
	}

	$(document).on('click','#myUL li',function () {
		$(this).toggleClass('checked');

		var id = $(this).attr("data-id");
      	var item = localStorage.getItem('test');
      	item = JSON.parse(item);
      	if(item){
        	if($(this).hasClass("checked")){
          		item[id].check = true;
        	}else{
          		item[id].check = false;
        	}
        	item = JSON.stringify(item);
        	localStorage.setItem('test', item);
      	}
      	DemCV();
	});

	$("#TickAll").click(function(){
	  	var li_all = $('#myUL li');
	    $.each(li_all, function(){
	    	$(this).addClass("checked");
	    })

	    var item = localStorage.getItem('test');
	    Test2 = JSON.parse(item);
	    $.each(Test2, function(i){
	    	Test2[i].check = true;
		    item = JSON.stringify(Test2);
		    localStorage.setItem('test', item);
	    })
	   DemCV();
	});

	$("#Cancel").click(function(){
	  	var li_all = $('#myUL li');
	  	$.each(li_all, function(){
	  		$(this).removeClass("checked");
	  	})

	    var item = localStorage.getItem('test');
	    Test2 = JSON.parse(item);
	    $.each(Test2, function(i){
	    	Test2[i].check = false;
	      	item = JSON.stringify(Test2);
	      	localStorage.setItem('test', item);
	    })
	    DemCV();
	}); 

	$("#TatCa").click(function(){
		$('#myUL li').each(function () {
			$(this).css('display','block');
		});
	});

	$("#Active").click(function(){
		var li_tatca = $('#myUL li');
		var count = $(".checked");
		$.each(li_tatca, function(j){
			$(this).css('display','block');
		})

		$.each(count, function(j){
		   	$(this).css('display','none');
		})
	});

	$("#Complete").click(function(){
		var li_tatca = $('#myUL li');
		var count = $(".checked");
		$.each(li_tatca, function(j){
			$(this).css('display','none');
		})
	  	$.each(count, function(j){
		    $(this).css('display','block');
		})
	});

	$('#HoanThanh').click(function () {
		$('#myUL li').each(function () {

			$(this).hasClass('checked') ? $(this).remove():'';

			var id = $(this).attr("data-id");
	      	var item = localStorage.getItem('test');
	      	item = JSON.parse(item);
	      	if($(this).hasClass("checked")){
          		 delete item[id];
        	}
        	item = JSON.stringify(item);
        	localStorage.setItem('test', item);

        	DemCV();
		})
	});
	
});

