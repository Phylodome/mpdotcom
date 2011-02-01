$(function() {      

 content = document.querySelector('#Work');
 playContent = document.querySelector('#Play');
 workInfo = document.querySelector('#workInfo');
 playInfo = document.querySelector('#playInfo');

    $("#Work").click(function() {
		window.console && console.log(this)
		$.blockUI.defaults.overlayCSS.opacity = .0; 
        $.blockUI({ 
                    // disable vertical centering 
                    centerY: false,  
                    // apply css props as desired 
                    css: { top: '10px', left: '20px',opacity: 0 } 
                });
        setTimeout("$('.twtr-hd h4').css('font-size','19px !important');",500);
        setTimeout("$('.twtr-hd h4').css('font-weight','normal');",500);
		setTimeout("$('.twtr-hd h4').css('font-family','Josefin Sans Std Light')",500);
        if ($(this).hasClass("leftOut")  && $('#Play').hasClass("right")) {
          playInfo.className = 'hideInfo';
          $(this).switchClass("leftOut","left", 500);
          $("#Play").switchClass("right","rightOut",500);
          $("#workInfo").switchClass("hideInfo","showInfo",1001);
          //$("#playshader").switchClass("noshade","shade",1001);
        } else if ($(this).hasClass("right") && $('#Play').hasClass("left")){
            this.className = "left";
        	playContent.className = "rightOut";
        	$("#workInfo").switchClass("hideInfo","showInfo",500);
        	//$("#playshader").addClass("shade");
        } else if ($(this).hasClass("left") && $('#Play').hasClass("rightOut")) {
        	workInfo.className = 'hideInfo';
        	$("#Play").switchClass("rightOut","left",500);
        	$(this).switchClass("left","right",501);
        } else {
            $(this).switchClass("left","right",500);
			workInfo.className = 'hideInfo';
        }
        $.unblockUI();
      });
      
	$("#Play").click(function() { 
		window.console && console.log(this)
        $.blockUI.defaults.overlayCSS.opacity = .0; 
        $.blockUI({ 
                    // disable vertical centering 
                    centerY: false,  
                    // apply css props as desired 
                    css: { top: '10px', left: '20px',opacity: 0 } 
                });
        setTimeout("$('.twtr-hd h4').css('font-size','21px !important');",500)
        setTimeout("$('.twtr-hd h4').css('font-weight','bold');",500)
        setTimeout("$('.twtr-hd h4').css('font-family','Reenie Beanie')",500)
		if ($(this).hasClass("rightOut")  && $('#Work').hasClass("left")) {
            workInfo.className = 'hideInfo';
            $(this).switchClass("rightOut","right", 500);
            $("#Work").switchClass("left","leftOut",500);
            $("#playInfo").switchClass("hideInfo","showInfo",1001);
        } else if ($(this).hasClass("left") && $('#Work').hasClass("right")) {
        	this.className = "right";
			content.className = 'leftOut';
        	$("#playInfo").switchClass("hideInfo","showInfo",500);
        } else if ($(this).hasClass("right") && $('#Work').hasClass("leftOut")) {
        	playInfo.className = 'hideInfo';
            $("#Work").switchClass("leftOut","right",500);
        	$(this).switchClass("right","left",501);
        } else {
            $(this).switchClass("right","left",500);
			playInfo.className = 'hideInfo';
        }
        $.unblockUI();
      });
      
     $("#Work, #Play").hover(function() {
         $(this).addClass("hover");
      }, function() {
      	$(this).removeClass("hover");
      });
});