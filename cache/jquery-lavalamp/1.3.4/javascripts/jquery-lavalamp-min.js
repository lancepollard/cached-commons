(function(a){a.fn.lavaLamp=function(c){c=a.extend({target:"li",fx:"swing",speed:500,click:function(){return true},startItem:"",autoReturn:true,returnDelay:0,setOnClick:true,homeTop:0,homeLeft:0,homeWidth:0,homeHeight:0,returnHome:false,autoResize:false},c||{});function b(d){var e=parseInt(d);return(isNaN(e)?0:e)}if(c.autoResize){a(window).resize(function(){a(c.target+".selectedLava").trigger("mouseenter")})}return this.each(function(){if(a(this).css("position")=="static"){a(this).css("position","relative")}if(c.homeTop||c.homeLeft){var i=a("<"+c.target+' class="homeLava"></'+c.target+">").css({left:c.homeLeft,top:c.homeTop,width:c.homeWidth,height:c.homeHeight,position:"absolute"});a(this).prepend(i)}var n=location.pathname+location.search+location.hash,d,h,f=a(c.target+"[class!=noLava]",this),e,l=0,k=0;d=a(c.target+".selectedLava",this);if(c.startItem!=""){d=f.eq(c.startItem)}if((c.homeTop||c.homeLeft)&&d.length<1){d=i}if(d.length<1){var j=0,m;f.each(function(){var o=$("a:first",this).attr("href");if(n.indexOf(o)>-1&&o.length>j){m=$(this);j=o.length}});if(j>0){d=m}}if(d.length<1){d=f.eq(0)}d=a(d.eq(0).addClass("selectedLava"));f.bind("mouseenter",function(){if(e){clearTimeout(e);e=null}g(a(this))}).click(function(o){if(c.setOnClick){d.removeClass("selectedLava");d=a(this).addClass("selectedLava")}return c.click.apply(this,[o,this])});h=a('<li class="backLava"><div class="leftLava"></div><div class="bottomLava"></div><div class="cornerLava"></div></li>').css("position","absolute").prependTo(this);l=b(h.css("borderLeftWidth"))+b(h.css("borderRightWidth"))+b(h.css("paddingLeft"))+b(h.css("paddingRight"));k=b(h.css("borderTopWidth"))+b(h.css("borderBottomWidth"))+b(h.css("paddingTop"))+b(h.css("paddingBottom"));if(c.homeTop||c.homeLeft){h.css({left:c.homeLeft,top:c.homeTop,width:c.homeWidth,height:c.homeHeight})}else{h.css({left:d.position().left,top:d.position().top,width:d.outerWidth()-l,height:d.outerHeight()-k})}a(this).bind("mouseleave",function(){var o=null;if(c.returnHome){o=i}else{if(!c.autoReturn){return true}}if(c.returnDelay){if(e){clearTimeout(e)}e=setTimeout(function(){g(o)},c.returnDelay)}else{g(o)}return true});function g(o){if(!o){o=d}h.stop().animate({left:o.position().left,top:o.position().top,width:o.outerWidth()-l,height:o.outerHeight()-k},c.speed,c.fx)}})}})(jQuery);