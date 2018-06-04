var isPopupOn = false;

$(function() {
	var wheelScroll="noPop";
	var scrollTarget = $('body,html');
	var deltaWaling="next";
	var scrollLeft = 0;
	scrollTarget.mousewheel(function(event, delta){
		console.log(isPopupOn);
  		if(isPopupOn) {
			event.preventDefault();
			event.stopPropagation();
			return;
		}
		if(!(navigator.appVersion.indexOf("Mac")!=-1)) {

			if(wheelScroll=="noPop"){
				$(this).stop().animate({scrollLeft: (this.scrollLeft-(delta * 600))}, 10,"linear");
			} else{
				if(delta<0) {$(".popup").stop().animate({scrollTop:"+=200"},100); deltaWaling="next"; }
					else {$(".popup").stop().animate({scrollTop:"-=200"},100); deltaWaling="prev"}
				}
				event.preventDefault();
			} else if (navigator.appVersion.indexOf("Mac")!=-1   ){
				if(wheelScroll=="noPop"){
					$(this).stop().animate({scrollLeft: (this.scrollLeft-(delta * 600 / 60 ))}, 1000,"linear");
				} else{
					if(delta<0) { $(".popup").stop().animate({scrollTop: "+=200"}, 100); deltaWaling="next" }
					else { $(".popup").stop().animate({scrollTop: "-=200"}, 100); deltaWaling="prev" }
				}
				event.preventDefault();
	 		}	 
  		} 
  	);

	/*
		Scene이 바뀌는 인덱스 계산
		Scene 크기가 정해지면 수정 
	*/
	var bgWidth = 6920;
	var sceneNum = 4;
  	var baseIdx = bgWidth / sceneNum;
  	var scrollIdx = [];

  	for(var i=0;i<sceneNum+1;i++) {
  		scrollIdx.push(baseIdx * i);
  	}

  	
	// //////////////////////////////////////////////////////////////////////
	// 팝업
	// 닫기버튼
	$(".pop_close").click(function(){
		isPopupOn = false;
		$(".pop1,.pop2,.pop3,.pop4,.pop5")
		.animate({top:"-1000px"}, 300,function(){
			$(".pop1,.pop2,.pop3,.pop4,.pop5,.pop01_wrapper1,.pop01_wrapper2").addClass("noshow");
		});
		$(".pop_bg").fadeOut(500).addClass("noshow");
		return;
	})
	

	// 팝업1 -1
	$(".pop1 >.pop_nav > ul >li:nth-child(1)").click(function(){
		isPopupOn = true;
		$(".pop01_wrapper1")
		.removeClass("noshow");
		$(".pop01_wrapper2")
		.addClass("noshow");
		$(".pop_nav > ul > .pop01_btn1")
		.addClass("on");
		$(".pop_nav > ul > .pop01_btn2")
		.removeClass("on");
	})
	// 팝업1-2
	$(".pop1 >.pop_nav > ul >li:nth-child(2)").click(function(){
		isPopupOn = true;
		$(".pop01_wrapper2")
		.removeClass("noshow");
		$(".pop01_wrapper1")
		.addClass("noshow");
		$(".pop_nav > ul > .pop01_btn2").addClass("on");
		$(".pop_nav > ul > .pop01_btn1").removeClass("on");
	})

	// 밤도깨비 야시장 맨처음 문열고 자세히보기
	$(".bd01").click(function(){
		isPopupOn = true;
		$(".pop_bg").fadeIn(600).removeClass("noshow");
		$(".pop1")
		.removeClass("noshow")
		.animate({top:"0px"}, 600);
		$(".pop01_wrapper1").removeClass("noshow");
		$(".pop01_wrapper2").addClass("noshow");
		$(".pop_nav > ul > .pop01_btn1").addClass("on");
		$(".pop_nav > ul > .pop01_btn2").removeClass("on");
	})
	// 캐릭터소개 컨테이너 클릭
	$(".con01").click(function(){
		isPopupOn = true;
		$(".pop_bg").fadeIn(600).removeClass("noshow");
		$(".pop1 .pop01_wrapper1").addClass("noshow");
		$(".pop1 .pop01_wrapper2").removeClass("noshow");
		$(".pop01_btn1").removeClass("on");
		$(".pop01_btn2").addClass("on");
		$(".pop1").removeClass("noshow").animate({top:"0px"}, 600);
	})

	// 문화비축기지 트럭 클릭시
	$(".truck01_h").click(function(){
		isPopupOn = true;
		$(".pop_bg").fadeIn(600).removeClass("noshow");
		$(".pop2,.pop02_wrapper1").removeClass("noshow");
		$(".pop2").animate({top:0}, 600);
		$(".pop3,.pop4,.pop5,pop02_wrapper2,pop02_wrapper3").addClass("noshow");
		$('html, body').css({'overflow': 'hidden', 'height': '100%'});
		$('#element').on('scroll mousewheel', function(event) {
		  event.preventDefault();
		  event.stopPropagation();
		  // return false;
		});
	})
	
	// 여의도 트럭 클릭
	$(".truck02_h").click(function(){
		isPopupOn = true;
		$(".pop_bg").fadeIn(600).removeClass("noshow");
		$(".pop3,.pop03_wrapper1").removeClass("noshow");
		$(".pop3").animate({top:0}, 600);
		$(".pop2,.pop4,.pop5").addClass("noshow");
	})
	// 청계천트럭 클릭
	$(".truck03_h").click(function(){
		isPopupOn = true;
		$(".pop_bg").fadeIn(600).removeClass("noshow");
		$(".pop4,.pop04_wrapper1").removeClass("noshow");
		$(".pop4").animate({top:0}, 600);
		$(".pop3,.pop2,.pop5").addClass("noshow");
	})
	// DDP 트럭 클릭
	$(".truck04_h").click(function(){
		isPopupOn = true;
		$(".pop_bg").fadeIn(600).removeClass("noshow");
		$(".pop5,.pop05_wrapper1").removeClass("noshow");
		$(".pop5").animate({top:0}, 600);
		$(".pop3,.pop4,.pop2").addClass("noshow");
	})


  	$(window).scroll(function() {
  		
  		scrollLeft = $(window).scrollLeft();



  		/*
  			scroll에 따른 메뉴 활성화
  		*/
  		if(scrollLeft >= scrollIdx[i] && scrollLeft < scrollIdx[i+1]) {
        	$('.naviJs > li').each(function(idx, item) {
        		$(this).removeClass('on');
        		if(i==idx) {
        			$(this).addClass('on');
        		} 
        	})
        }
    });

})
// //////////////// //////////////// //////////////// //////////////// //////////////// //////////////
	$(function(){	
		/*menu drop down*/
		function click(){
			var clickCount=0;
	
			$(".menu_down").click(function(){
				if(clickCount==0){
					$(".menu").animate({top: "+=160px"});
					$(".menu_border").animate({top: "+=110px"});
					clickCount+=1;
				}else{
					$(".menu").animate({top: "-=160px"});
					$(".menu_border").animate({top: "-=110px"});
					clickCount=0;
				}
			});
		}
		click();


		/*app_bar_spark*/
		function bgSequence(bgName, maxNum, sqSize, speed) {
		    var sqName = bgName;
		    var total = maxNum;
		    var posNum = sqSize;
		    var idx = 0;
		    var total = maxNum; // 전체 시퀀스
		    var posNum = sqSize; // 이동 범위
	
		    function bgAni() {
		        if (idx < total) {
		            idx++;
		            sqName.css({'background-position': 'center ' + (-posNum) + 'px'});
		            posNum += sqSize;
		        } else {
		            idx = 0;
		            posNum = sqSize;
		        }
		        setTimeout(bgAni, speed);
		    }
		    bgAni();
		}
		bgSequence($(".app_bar_spark"), 7, 140, 80);
		
		/*bd01-door move*/
		$(".bd01").hover(function(){$(".bd01-door02").animate({marginLeft:"-72px"});}, function(){$(".bd01-door02").animate({marginLeft:"0px"});});
		
		/*con01_door move*/
		$(".con01").hover(function(){$(".con01_door").animate({marginLeft:"45px"});}, function(){$(".con01_door").animate({marginLeft:"0px"});});
	
		/*truck hover effect*/
		$(".truck01, .truck01_h").hover(function(){$(".truck01_h").show();}, function(){$(".truck01_h").hide();});
	
		$(".truck02, .truck02_h").hover(function(){$(".truck02_h").show();}, function(){$(".truck02_h").hide();});
	
		$(".truck03, .truck03_h").hover(function(){$(".truck03_h").show();}, function(){$(".truck03_h").hide();});
	
		$(".truck04, .truck04_h").hover(function(){$(".truck04_h").show();}, function(){$(".truck04_h").hide();});
		

	
		// 각각 카테고리  이동하기	
		// pop02 -wrapper1
		$(".pop02_wrapper1>.pop_header>ul>li:nth-child(1)>p").click(function(){
			$(".pop02_wrapper2,.pop02_wrapper3").addClass("noshow");
			$(".pop02_wrapper1").removeClass("noshow");	
		})
		$(".pop02_wrapper1>.pop_header>ul>li:nth-child(2)>p").click(function(){
			$(".pop02_wrapper1,.pop02_wrapper3").addClass("noshow");
			$(".pop02_wrapper2").removeClass("noshow");
		})
		$(".pop02_wrapper1>.pop_header>ul>li:nth-child(3)>p").click(function(){
			$(".pop02_wrapper1,.pop02_wrapper2").addClass("noshow");
			$(".pop02_wrapper3").removeClass("noshow");
		})
		// wrapper2
		$(".pop02_wrapper2>.pop_header>ul>li:nth-child(1)>p").click(function(){
			$(".pop02_wrapper2,.pop02_wrapper3").addClass("noshow");
			$(".pop02_wrapper1").removeClass("noshow");	
		})
		$(".pop02_wrapper2>.pop_header>ul>li:nth-child(2)>p").click(function(){
			$(".pop02_wrapper1,.pop02_wrapper3").addClass("noshow");
			$(".pop02_wrapper2").removeClass("noshow");
		})
		$(".pop02_wrapper2>.pop_header>ul>li:nth-child(3)>p").click(function(){
			$(".pop02_wrapper1,.pop02_wrapper2").addClass("noshow");
			$(".pop02_wrapper3").removeClass("noshow");
		})
		// wrapper3
		$(".pop02_wrapper3>.pop_header>ul>li:nth-child(1)>p").click(function(){
			$(".pop02_wrapper2,.pop02_wrapper3").addClass("noshow");
			$(".pop02_wrapper1").removeClass("noshow");	
		})
		$(".pop02_wrapper3>.pop_header>ul>li:nth-child(2)>p").click(function(){
			$(".pop02_wrapper1,.pop02_wrapper3").addClass("noshow");
			$(".pop02_wrapper2").removeClass("noshow");
		})
		$(".pop02_wrapper3>.pop_header>ul>li:nth-child(3)>p").click(function(){
			$(".pop02_wrapper1,.pop02_wrapper2").addClass("noshow");
			$(".pop02_wrapper3").removeClass("noshow");
		})
	
		// pop03 -wrapper1
		$(".pop03_wrapper1>.pop_header>ul>li:nth-child(1)>p").click(function(){
			$(".pop03_wrapper2,.pop03_wrapper3").addClass("noshow");
			$(".pop03_wrapper1").removeClass("noshow");	
		})
		$(".pop03_wrapper1>.pop_header>ul>li:nth-child(2)>p").click(function(){
			$(".pop03_wrapper1,.pop03_wrapper3").addClass("noshow");
			$(".pop03_wrapper2").removeClass("noshow");
		})
		$(".pop03_wrapper1>.pop_header>ul>li:nth-child(3)>p").click(function(){
			$(".pop03_wrapper1,.pop03_wrapper2").addClass("noshow");
			$(".pop03_wrapper3").removeClass("noshow");
		})
		// wrapper2
		$(".pop03_wrapper2>.pop_header>ul>li:nth-child(1)>p").click(function(){
			$(".pop03_wrapper2,.pop03_wrapper3").addClass("noshow");
			$(".pop03_wrapper1").removeClass("noshow");	
		})
		$(".pop03_wrapper2>.pop_header>ul>li:nth-child(2)>p").click(function(){
			$(".pop03_wrapper1,.pop03_wrapper3").addClass("noshow");
			$(".pop03_wrapper2").removeClass("noshow");
		})
		$(".pop03_wrapper2>.pop_header>ul>li:nth-child(3)>p").click(function(){
			$(".pop03_wrapper1,.pop03_wrapper2").addClass("noshow");
			$(".pop03_wrapper3").removeClass("noshow");
		})
		// wrapper3
		$(".pop03_wrapper3>.pop_header>ul>li:nth-child(1)>p").click(function(){
			$(".pop03_wrapper2,.pop03_wrapper3").addClass("noshow");
			$(".pop03_wrapper1").removeClass("noshow");	
		})
		$(".pop03_wrapper3>.pop_header>ul>li:nth-child(2)>p").click(function(){
			$(".pop03_wrapper1,.pop03_wrapper3").addClass("noshow");
			$(".pop03_wrapper2").removeClass("noshow");
		})
		$(".pop03_wrapper3>.pop_header>ul>li:nth-child(3)>p").click(function(){
			$(".pop03_wrapper1,.pop03_wrapper2").addClass("noshow");
			$(".pop03_wrapper3").removeClass("noshow");
		})
	
		// pop04 -wrapper1
		$(".pop04_wrapper1>.pop_header>ul>li:nth-child(1)>p").click(function(){
			$(".pop04_wrapper2,.pop04_wrapper3").addClass("noshow");
			$(".pop04_wrapper1").removeClass("noshow");	
		})
		$(".pop04_wrapper1>.pop_header>ul>li:nth-child(2)>p").click(function(){
			$(".pop04_wrapper1,.pop04_wrapper3").addClass("noshow");
			$(".pop04_wrapper2").removeClass("noshow");
		})
		$(".pop04_wrapper1>.pop_header>ul>li:nth-child(3)>p").click(function(){
			$(".pop04_wrapper1,.pop04_wrapper2").addClass("noshow");
			$(".pop04_wrapper3").removeClass("noshow");
		})
		// wrapper2
		$(".pop04_wrapper2>.pop_header>ul>li:nth-child(1)>p").click(function(){
			$(".pop04_wrapper2,.pop04_wrapper3").addClass("noshow");
			$(".pop04_wrapper1").removeClass("noshow");	
		})
		$(".pop04_wrapper2>.pop_header>ul>li:nth-child(2)>p").click(function(){
			$(".pop04_wrapper1,.pop04_wrapper3").addClass("noshow");
			$(".pop04_wrapper2").removeClass("noshow");
		})
		$(".pop04_wrapper2>.pop_header>ul>li:nth-child(3)>p").click(function(){
			$(".pop04_wrapper1,.pop04_wrapper2").addClass("noshow");
			$(".pop04_wrapper3").removeClass("noshow");
		})
		// wrapper3
		$(".pop04_wrapper3>.pop_header>ul>li:nth-child(1)>p").click(function(){
			$(".pop04_wrapper2,.pop04_wrapper3").addClass("noshow");
			$(".pop04_wrapper1").removeClass("noshow");	
		})
		$(".pop04_wrapper3>.pop_header>ul>li:nth-child(2)>p").click(function(){
			$(".pop04_wrapper1,.pop04_wrapper3").addClass("noshow");
			$(".pop04_wrapper2").removeClass("noshow");
		})
		$(".pop04_wrapper3>.pop_header>ul>li:nth-child(3)>p").click(function(){
			$(".pop04_wrapper1,.pop04_wrapper2").addClass("noshow");
			$(".pop04_wrapper3").removeClass("noshow");
		})
	
		// pop05 -wrapper1
		$(".pop05_wrapper1>.pop_header>ul>li:nth-child(1)>p").click(function(){
			$(".pop05_wrapper2,.pop05_wrapper3").addClass("noshow");
			$(".pop05_wrapper1").removeClass("noshow");	
		})
		$(".pop05_wrapper1>.pop_header>ul>li:nth-child(2)>p").click(function(){
			$(".pop05_wrapper1,.pop05_wrapper3").addClass("noshow");
			$(".pop05_wrapper2").removeClass("noshow");
		})
		$(".pop05_wrapper1>.pop_header>ul>li:nth-child(3)>p").click(function(){
			$(".pop05_wrapper1,.pop05_wrapper2").addClass("noshow");
			$(".pop05_wrapper3").removeClass("noshow");
		})
		// wrapper2
		$(".pop05_wrapper2>.pop_header>ul>li:nth-child(1)>p").click(function(){
			$(".pop05_wrapper2,.pop05_wrapper3").addClass("noshow");
			$(".pop05_wrapper1").removeClass("noshow");	
		})
		$(".pop05_wrapper2>.pop_header>ul>li:nth-child(2)>p").click(function(){
			$(".pop05_wrapper1,.pop05_wrapper3").addClass("noshow");
			$(".pop05_wrapper2").removeClass("noshow");
		})
		$(".pop05_wrapper2>.pop_header>ul>li:nth-child(3)>p").click(function(){
			$(".pop05_wrapper1,.pop05_wrapper2").addClass("noshow");
			$(".pop05_wrapper3").removeClass("noshow");
		})
		// wrapper3
		$(".pop05_wrapper3>.pop_header>ul>li:nth-child(1)>p").click(function(){
			$(".pop05_wrapper2,.pop05_wrapper3").addClass("noshow");
			$(".pop05_wrapper1").removeClass("noshow");	
		})
		$(".pop05_wrapper3>.pop_header>ul>li:nth-child(2)>p").click(function(){
			$(".pop05_wrapper1,.pop05_wrapper3").addClass("noshow");
			$(".pop05_wrapper2").removeClass("noshow");
		})
		$(".pop05_wrapper3>.pop_header>ul>li:nth-child(3)>p").click(function(){
			$(".pop05_wrapper1,.pop05_wrapper2").addClass("noshow");
			$(".pop05_wrapper3").removeClass("noshow");
		})
	
	
	
		// // 문화비축기지 버튼
		$(".pop02_btn1").click(function(){
			return;
		})
		$(".pop02_btn2").click(function(){
			$(".pop3").removeClass("noshow").css("top","0px");
			$(".pop2").addClass("noshow").css("top","-1000px");
		})
		$(".pop02_btn3").click(function(){
			$(".pop4").removeClass("noshow").css("top","0px");
			$(".pop2").addClass("noshow").css("top","-1000px");
		})
		$(".pop02_btn4").click(function(){
			$(".pop5").removeClass("noshow").css("top","0px");
			$(".pop2").addClass("noshow").css("top","-1000px");	
		})
		// // 여의도 버튼
		$(".pop03_btn1").click(function(){
			$(".pop2").removeClass("noshow").css("top","0px");
			$(".pop3").addClass("noshow").css("top","-1000px");
		})
		$(".pop03_btn2").click(function(){
			return;
		})
		$(".pop03_btn3").click(function(){
			$(".pop4").removeClass("noshow").css("top","0px");
			$(".pop3").addClass("noshow").css("top","-1000px");
		})
		$(".pop03_btn4").click(function(){
			$(".pop5").removeClass("noshow").css("top","0px");
			$(".pop3").addClass("noshow").css("top","-1000px");	
		})
		// // 청계천 버튼
		$(".pop04_btn1").click(function(){
			$(".pop2").removeClass("noshow").css("top","0px");
			$(".pop4").addClass("noshow").css("top","-1000px");
		})
		$(".pop04_btn2").click(function(){
			$(".pop3").removeClass("noshow").css("top","0px");
			$(".pop4").addClass("noshow").css("top","-1000px");
		})
		$(".pop04_btn3").click(function(){
			return;		
		})
		$(".pop04_btn4").click(function(){
			$(".pop5").removeClass("noshow").css("top","0px");
			$(".pop4").addClass("noshow").css("top","-1000px");	
		})
		// // DDP 버튼
		$(".pop05_btn1").click(function(){
			$(".pop2").removeClass("noshow").css("top","0px");
			$(".pop5").addClass("noshow").css("top","-1000px");
		})
		$(".pop05_btn2").click(function(){
			$(".pop3").removeClass("noshow").css("top","0px");
			$(".pop5").addClass("noshow").css("top","-1000px");
		})
		$(".pop05_btn3").click(function(){
			$(".pop4").removeClass("noshow").css("top","0px");
			$(".pop5").addClass("noshow").css("top","-1000px");
		})
		$(".pop05_btn4").click(function(){
			return;
		})
	})
// //////////////// //////////////// //////////////// //////////////// //////////////// //////////////














