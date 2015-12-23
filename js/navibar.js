function getMissingIcon(){
	icons = [];
	$(".navibar_item").each(function(){
		iconid = $(this).attr("id");
		if($("#" + iconid + ":visible").length == 0){
			icons.push( iconid); 
		}
	});
	return icons;
}
global_select = ""
function hover_effects(){
	$(".navibar_item").hover(function() {
	  		$(this).animate({opacity: 1}, 500);
	  		if(! $(this).hasClass("selected")){
	 			$(this).css( 'cursor', 'pointer' );
	 		}else{
	 			$(this).css( 'cursor', 'default' );
	 		}
	  		
	 }, function(){
	 		if(! $(this).hasClass("selected")){
	 			$(this).animate({opacity: 0.3}, 500);
	 		}
	 });		
}
click = true;
function click_handeler(){
	$(".navibar_item").click(function(){
		data_rel = $(this).attr("data-rel");
		if(click){
			click = false
			$('html, body').animate({
			    scrollTop: $("#" + data_rel).offset().top
			}, 1000, function(){click = true});
		}
	});	
}

function space_out_icons(){
	total = 0
	console.log("test");
	$(".navibar_item").each(function(){
		console.log($(this))
		iconid = $(this).attr("id");
		if($("#" + iconid + ":visible").length != 0){
			width = $(this).width();
			$(this).css("left",total);
			total = total + width + 20;
		}
	});
	//$(".navibar").css("width",total);
}
function get_icon(section_id){
	output = ""
	$(".navibar_item").each(function(){
		if($(this).attr("data-rel") == section_id){
			console.log("pro")
			console.log($(this).attr("data-rel"));
			output = $(this).attr("id");
		}
	});
	return output;
}
function update_icons(){

	$(document).scroll(function(){
		window_top = $(document).scrollTop();
		
		closest_sections = null;
		distance =[];
		min_distance = 0;
		$(".section").each(function(){
			distance.push([Math.abs($(this).offset().top - window_top),$(this).attr("id")]);
		});
		for (i =0; i<distance.length; i++){
			if(i==0){
				min_distance = distance[i][0]
				closest_sections = distance[i][1]
			}else{
				if (min_distance >= distance[i][0]){
					min_distance = distance[i][0]
					closest_sections = distance[i][1]
				}
			}
		}
		check = 1;

		global_select = closest_sections;
		console.log(closest_sections);
		icon = get_icon(closest_sections);	

		$(".navibar_item").each(function(){
				if($(this).hasClass("selected")){
					$(this).removeClass("selected");
				} 
				$(this).css('opacity',0.3);
		});
		$("#"+icon).toggleClass("selected");
		$("#"+icon).css('opacity',1);



	});
}
$(document).ready(function(){
		//space_out_icons();
		hover_effects();
		click_handeler();
		update_icons()
});