
$(document).ready(function(){
	countWork();
	showUl();

	function createBykey(){
	    var n = new Date();
	    return n.getTime();
	}

	function createNewElement(){
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


		      /*var li = document.createElement("li");
		      li.setAttribute("data-id", key);
		      var textLi = document.createTextNode(inputValue);
		      li.appendChild(textLi);
		      document.getElementById("myUL").appendChild(li);
		      document.getElementById("myInput").value = "";

		      var span = document.createElement("span");
		      var textSpan = document.createTextNode("X");
		      span.appendChild(textSpan);
		      span.className = "close";
		      li.appendChild(span);*/

		      $("#myUL").append("<li></li>");
		      $("#myUL li:last-child").attr("data-id", key);
		      $("#myUL li:last-child").append(inputValue);
		      $("#myInput").val("");

		      $("#myUL li:last-child").append("<span></span>")
		      $("#myUL li:last-child span").append("X");
		      $("#myUL li:last-child span").addClass("close");

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
		          countWork();
		          countChecked();
	    			countListLI();
		      });

			countWork();
			countChecked();
			countListLI();
		}
	}
	$("#newElement").click(function(){
		createNewElement();
	});

	$('#myInput').keypress(function (key) {
		if (key.key==='Enter' && $(this).val()!='') {
			createNewElement();
		}
	})

	function showUl(){
	  if (typeof(Storage) !== "undefined") {
	    var test = localStorage.getItem('test');
	    var test2 = JSON.parse(test);

	    $.each(test2, function(i){
	    	//var li = document.createElement("li");
	      	var textLiStorage = test2[i].data;

	      	//li.setAttribute("data-id", test2[i].id) 

	      $("#myUL").append("<li></li>");
	      $("#myUL li:last-child").attr("data-id", test2[i].id);
	      $("#myUL li:last-child").append(textLiStorage);


	      	if(test2[i].check == true){
	        	$("#myUL li:last-child").addClass("checked");
	      	}

	      
	      $("#myUL li:last-child").append("<span></span>")
	      $("#myUL li:last-child span").append("X");
	      $("#myUL li:last-child span").addClass("close");

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
		          countWork();
		          countChecked();
	    		countListLI();
		      });

	    })
	    countWork();
	    countChecked();
	    countListLI();
	  } else {
	     alert('Trình duyệt của bạn không hỗ trợ local storage');
	  }
	}


	function countWork(){
		var liCheck = $(".checked");
		var checkNumber = 0;
		$.each(liCheck, function(){
			checkNumber++;
		});

		var listLi = $("#myUL li");
		var liNumber = 0;
		$.each(listLi, function(){
			liNumber++;
		})

		$("#count").text(liNumber - checkNumber);
	}

	function countChecked(){
		var liCheck = $(".checked");
		var number = 0;
		$.each(liCheck, function(){
			number++;
		});

		if(number > 0){
			$(".hidden3").css("display", "block");
		}else{
			$(".hidden3").css("display", "none");
		}
	}
	function countListLI(){
		var listLi = $("#myUL li");
		var liNumber = 0;
		$.each(listLi, function(){
			liNumber++;
		})

		if(liNumber > 0){
			$(".action").css("display", "flex");
		}else{
			$(".action").css("display", "none");
		}
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
      	countWork();
      	countChecked();
      	countListLI();
	});

	$("#TickAll").click(function(){
	  	var li_all = $('#myUL li');
	    $.each(li_all, function(){
	    	$(this).addClass("checked");
	    })

	    var item = localStorage.getItem('test');
	    test2 = JSON.parse(item);
	    $.each(test2, function(i){
	    	test2[i].check = true;
		    item = JSON.stringify(test2);
		    localStorage.setItem('test', item);
	    })
	   countWork();
	   countChecked();
	   countListLI();
	});

	$("#Cancel").click(function(){
	  	var li_all = $('#myUL li');
	  	$.each(li_all, function(){
	  		$(this).removeClass("checked");
	  	})

	    var item = localStorage.getItem('test');
	    test2 = JSON.parse(item);
	    $.each(test2, function(i){
	    	test2[i].check = false;
	      	item = JSON.stringify(test2);
	      	localStorage.setItem('test', item);
	    })
	    countWork();
	    countChecked();
	    countListLI();
	}); 

	$("#TatCa").click(function(){
		$('#myUL li').each(function () {
			$(this).css('display','block');
		});
	});

	$("#Active").click(function(){
		var liAll = $('#myUL li');
		var checkNumber = $(".checked");
		$.each(liAll, function(j){
			$(this).css('display','block');
		})

		$.each(checkNumber, function(j){
		   	$(this).css('display','none');
		})
	});

	$("#Complete").click(function(){
		var liAll = $('#myUL li');
		var checkNumber = $(".checked");
		$.each(liAll, function(j){
			$(this).css('display','none');
		})
	  	$.each(checkNumber, function(j){
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

        	countWork();
        	countChecked();
        	countListLI();
		})
	});

	// function hienUl(){
	//   if (typeof(Storage) !== "undefined") {
	//     var test = localStorage.getItem('test');
	//     var Test2 = JSON.parse(test);

	//     $.each(Test2, function(i){
	//     	var li = document.createElement("li");
	//       	var textLiStorage = Test2[i].data;

	//       	li.setAttribute("data-id", Test2[i].id)  

	//       	if(Test2[i].check == true){
	//         	li.className = "checked";
	//       	}

	//       // Tao the span Xóa
	//       var textLi = document.createTextNode(textLiStorage);
	//       li.appendChild(textLi);
	//       document.getElementById("myUL").appendChild(li);

	//       var span = document.createElement("span");
	//       var textSpan = document.createTextNode("X");
	//       span.appendChild(textSpan);
	//       span.className = "close";
	//       li.appendChild(span);

	//       // XÓA
	// 	    $(".close").click(function(){
	// 	        var div = $(this).parent();
	// 	        $(div).remove();

	// 	          var id = $(div).attr("data-id");
	// 	          var item = localStorage.getItem('test');
	// 	          item = JSON.parse(item);
	// 	          if(item){
	// 	            delete item[id];
	// 	            item = JSON.stringify(item);
	// 	            localStorage.setItem('test', item);
	// 	          }
	// 	          DemCV();
	// 	      });

	//     })
	//     DemCV();
	//   } else {
	//      alert('Trình duyệt của bạn không hỗ trợ local storage');
	//   }
	// }
	
});

