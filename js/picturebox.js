function click_handler(){
	$(".multiple-borders").click(function(){
		$(".project_box_small").removeClass("picture_box_shrink");
		$(".project_box_small").addClass("picture_box_grow");
		data_rel = $(this).attr("data-rel");
		$("#" + data_rel).delay(400).fadeIn();
	});
	$(".navibar_item").click(function(){
		if(! $(this).hasClass("selected")){
			$('.project_video').attr('src', $('.project_video').attr('src'));
			$(".project_box").fadeOut(100,
				function(){$(".project_box_small").removeClass("picture_box_grow");$(".project_box_small").addClass("picture_box_shrink");}
			);
		}				
	});
	$(".project_box_exit").click(function(){
		$('.project_video').attr('src', $('.project_video').attr('src'));
		$(".project_box").fadeOut(100,
			function(){$(".project_box_small").removeClass("picture_box_grow");$(".project_box_small").addClass("picture_box_shrink");}
		);
	});
}


$(document).ready(function(){
	click_handler();
});