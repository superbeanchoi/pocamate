/**
 * 
 */
$(function() {

	//버튼 -> 호버시 이미지 변경 이벤트
	$('.pageOpenBtn').hover(
		function() {
			$(this).find('img').attr('src', 'img/arrow on icon.png');
		},
		function() {
			$(this).find('img').attr('src', 'img/arrow icon.png');
		}
	);

	// 클릭 시 페이지 이동
	$('.pocaSearchOpenBtn').click(function() {
		window.location.href = 'html/pocasearch.html';
	});
	$('.duckMateOpenBtn').click(function() {
		window.location.href = 'html/duckmate.html';
	});
	$('.pocarankOpenBtn').click(function() {
		window.location.href = 'html/pocarank.html';
	});

	//HOT POCA 자동 슬라이드
	var sliderWidth = $('.pocaSlide ul li').outerWidth(); // 포카 너비
	var sliderLength = $('.pocaSlide ul li').length; // 전체 포카 개수
	var slideArea = sliderWidth * sliderLength; // 슬라이드 영역 너비
	var sliderTime = 3000; // 슬라이드 시간

	// 슬라이드 영역 지정
	$('.pocaSlide ul').css('width', slideArea);

	// 슬라이드 애니메이션 이벤트 함수
	function animateSlide() {
		$('.pocaSlide ul').animate({ marginLeft: -sliderWidth }, 1000, function() {
			// 첫번째 슬라이드를 제거하고 마지막 슬라이드를 오른쪽에 추가
			$(this).css({ marginLeft: 0 }).find('li:last').after($(this).find('li:first'));
		});
	}

	// 슬라이드 시간 설정
	var slideTime = setInterval(animateSlide, sliderTime);

	// 마우스 호버 시 슬라이드 중지, 마우스 아웃시 슬라이드 실행 
	$('.pocaSlide ul').hover(function() {
		clearInterval(slideTime);
	}, function() {
		slideTime = setInterval(animateSlide, sliderTime);
	});

	// 로그인 페이지 오픈/클로즈
	$('.loginbtn').click(function() {
		$(".loginPopupBg").fadeIn(200);
		$(".loginPopupWrap").slideDown(200);
	});
	$('.loginCloseBtn').click(function() {
		$(".loginPopupWrap").slideUp(200);
		$(".loginPopupBg").fadeOut(200);
	});

	//로그인 완료
	$('.loginBtn').click(function() {
		
		var emailInput = $('#emailtext').val().trim();
		var pwInput = $('#pwtext').val().trim();

		if (emailInput!=="" && pwInput!=="") {
			event.preventDefault(); 
			$(".loginbtn, .newmembtn").addClass("clearheader");
			$(".nickname, .sir, .profilebtn").removeClass("clearheader");
			$(".loginPopupWrap").slideUp(200);
			$(".loginPopupBg").fadeOut(200);
		}
	});
	
	// <포토카드 판매하기, 포토카드 구매가이드> 클릭 시 팝업 열기
	$(".btnContents > button, .newmembtn>button").on("click", function() {
		// 팝업 배경 페이드인
		$(".popupBg").fadeIn(200);
		// 팝업 창 튕겨져 올라오기 애니메이션
		$(".comingSoonWrap").slideDown(200);
	});
	
	// 취소 버튼 클릭 시 팝업 닫기
	$(".cancellBtn").on("click", function() {
		$(this).closest(".popupWrap").slideUp(200);
		$(".popupBg").fadeOut(200);
	});
});