		  window.URL = window.URL || window.webkitURL;
		  var fileElem = document.getElementById("fileElem"),
		      fileList = document.getElementById("fileList");
		  function handleFiles(obj) {
		    var files = obj.files,
		      img = new Image();
		    if(window.URL){
		      img.src = window.URL.createObjectURL(files[0]); 
		      img.onload = function(e) {
		         window.URL.revokeObjectURL(this.src); 
		      }
		      fileList.innerHTML = "";      
		      fileList.appendChild(img);
		      fileList.style.display = "block";
		    }else if(window.FileReader){
		      var reader = new FileReader();
		      reader.readAsDataURL(files[0]);
		      reader.onload = function(e){
		        img.src = this.result;
		        fileList.innerHTML = "";
		        fileList.appendChild(img);
		        fileList.style.display = "block";       
		      }
		    }else{
		      obj.select();
		      obj.blur();
		      var nfile = document.selection.createRange().text;
		      document.selection.empty();
		      img.src = nfile;
		      img.onload=function(){
		        fileList.innerHTML = "";
		        fileList.appendChild(img);
		        fileList.style.display = "block";       
		      }
		    }
		  }

		  $(function(){
		    $("#fileList").height(parseInt($(window).height()-$("#fileList").offset().top-40))
		    $("#fileList").mousemove(function(e){
		      var dx,dy;
		      pageX = e.pageX;
		      pageY = e.pageY;
		      offsetX = $(this).offset().left;
		      offsetY = $(this).offset().top;
		      scrollX = $(this).scrollLeft();      
		      scrollY = $(this).scrollTop();
		      dx = parseInt(pageX - offsetX + scrollX);
		      dy = parseInt(pageY - offsetY + scrollY);
		      $("#dx").text(dx);
		      $("#dy").text(dy);
		    })
		  })	