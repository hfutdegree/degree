function holltonList(url,listClass){
	$(listClass).each(function(){
		var Url=url;
		var Data;
		var temp_html;
		var oOne = $(this).find(".one");
		var oTwo = $(this).find(".two");
		var oThree = $(this).find(".three");
		var oFour = $(this).find(".four");
		
		//初始化one
		var one = function(){
			$.each(Data,function(i,one){
				temp_html+="<option value='"+one.o+"'>"+one.o+"</option>";
			});
			oOne.html(temp_html);
			two();
		};
		//赋值two
		var two = function(){
			temp_html = ""; 
			var i = oOne.get(0).selectedIndex;
			$.each(Data[i].t,function(i,two){
				temp_html+="<option value='"+two.tt+"'>"+two.tt+"</option>";
			});
			oTwo.html(temp_html);
			three();
		};
		//赋值three
		var three = function(){
			temp_html = ""; 
			var i = oOne.get(0).selectedIndex;
			var j = oTwo.get(0).selectedIndex;
			if(typeof(Data[i].t[j].th) == "undefined"){
				oThree.css("display","none");
			}else{
				oThree.css("display","inline");
				$.each(Data[i].t[j].th,function(i,three){
					temp_html+="<option value='"+three.thh+"'>"+three.thh+"</option>";
				});
				oThree.html(temp_html);
				four();
			};
		};
		//赋值four
		var four = function(){
			temp_html = ""; 
			var i = oOne.get(0).selectedIndex;
			var j = oTwo.get(0).selectedIndex;
			var k = oThree.get(0).selectedIndex;
			if(typeof(Data[i].t[j].th[k].f) == "undefined"){
				oFour.css("display","none");
			}else{
				oFour.css("display","inline");
				$.each(Data[i].t[j].th[k].f,function(i,four){
					temp_html+="<option value='"+four.ff+"'>"+four.ff+"</option>";
				});
				oFour.html(temp_html);
			};
		};

		oOne.change(function(){
			two();
		});

		oTwo.change(function(){
			three();
		});

		oThree.change(function(){
			four();
		});
		
		//获取json数据
		$.getJSON(url,function(data){
			Data = data;
			one();
		});
	});
}