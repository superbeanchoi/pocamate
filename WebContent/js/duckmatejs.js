/**
 * 
 */
$(function() {
	//duckmateStarlogo 슬라이드 영역 설정
	var sliderHeight = $('.duckmateStarlogo ul li').outerHeight(); // 스타로고 너비
	var sliderLength = $('.duckmateStarlogo ul li').length; // 전체 스타로고 개수
	var slideArea = sliderHeight * sliderLength; // 슬라이드 영역 너비
	$('.duckmateStarlogo ul').css('height', slideArea);  // 슬라이드 영역 지정
	// moveUp/Down 슬라이드 이벤트 실행
	$('.starmoveup').click(function() {
		slideUp();
	});
	$('.starmovedown').click(function() {
		slideDown();
	});

	//star별 조회 버튼 이벤트
	// 각각 스타보기 버튼
	$(document).on('click', '.duckmateStarlogo button', function() {
		// 다른 버튼의 그림자 값을 삭제
		$('.duckmateStarlogo button img').not(this).css('box-shadow', 'none');
		// 클릭된 버튼에 그림자 값을 추가
		$(this).find("img").css('box-shadow', '0px 0px 10px 0px #222');

		// span 내부의 텍스트 가져오기
		var buttonText = $(this).find('span').text();

		// 특정 조건일 때 pocaArea의 li에 노출
		if (buttonText.trim() === 'IVE') {
			$('.eachPost').animate({ opacity: 0 }, function() {
				$(this).css('display', 'none');
			});
			$('.ivePost').animate({ opacity: 100 }).slideDown(500);
		} else if (buttonText.trim() === 'ASTRO') {
			$('.eachPost').animate({ opacity: 0 }, function() {
				$(this).css('display', 'none');
			});
			$('.astroPost').animate({ opacity: 100 }).slideDown(500);
		} else if (buttonText.trim() === 'aespa') {
			$('.eachPost').animate({ opacity: 0 }, function() {
				$(this).css('display', 'none');
			});
			$('.aespaPost').animate({ opacity: 100 }).slideDown(500);
		} else if (buttonText.trim() === 'EXO') {
			$('.eachPost').animate({ opacity: 0 }, function() {
				$(this).css('display', 'none');
			});
			$('.exoPost').animate({ opacity: 100 }).slideDown(500);
		} else if (buttonText.trim() === '전체보기') {
			$('.eachPost').animate({ opacity: 0 }, function() {
				$(this).css('display', 'none');
			});
			$('.eachPost').not('.elsePost').animate({ opacity: 100 }).slideDown(500);
		} else {
			$('.eachPost').animate({ opacity: 0 }, function() {
				$(this).css('display', 'none');
			});
			$('.elsePost').animate({ opacity: 100 }).slideDown(500);
			$('.postDown').css('display', 'none');
		}
	});

	// 슬라이드 이벤트 함수
	function slideUp() {
		// 마지막 슬라이드를 복제하여 첫번째에 추가
		var lastSlide = $('.duckmateStarlogo ul li:last');
		var clonedSlide = lastSlide.clone();
		clonedSlide.prependTo('.duckmateStarlogo ul');

		// 슬라이드 영역을 위쪽으로 이동시키고 애니메이션 적용
		$('.duckmateStarlogo ul').css({ marginTop: -sliderHeight });
		$('.duckmateStarlogo ul').animate({ marginTop: 0 }, 500, function() {
			// 애니메이션이 완료된 후에 마지막 슬라이드를 삭제
			$('.duckmateStarlogo ul li:last').remove();
		});
	}
	function slideDown() {
		// 첫 번째 슬라이드를 복제하여 마지막에 추가
		var firstSlide = $('.duckmateStarlogo ul li:first');
		var clonedSlide = firstSlide.clone();
		clonedSlide.appendTo('.duckmateStarlogo ul');

		// 슬라이드 영역을 아래쪽으로 이동시키고 애니메이션 적용
		$('.duckmateStarlogo ul').animate({ marginTop: -sliderHeight }, 500, function() {
			// 애니메이션이 완료된 후에 첫 번째 슬라이드를 삭제
			$('.duckmateStarlogo ul li:first').remove();
			$(this).css({ marginTop: 0 });
		});
	}

	//버튼 -> 호버시 이미지 변경 이벤트
	$('.starmoveup').hover(
		function() {
			$(this).find('img').attr('src', '../img/minup move on icon.png');
		},
		function() {
			$(this).find('img').attr('src', '../img/minup move off icon.png');
		}
	);
	$('.starmovedown').hover(
		function() {
			$(this).find('img').attr('src', '../img/mindown move on icon.png');
		},
		function() {
			$(this).find('img').attr('src', '../img/mindown move off icon.png');
		}
	);
	$('.postDown').hover(
		function() {
			$(this).find('img').attr('src', '../img/down move on icon.png');
		},
		function() {
			$(this).find('img').attr('src', '../img/down move off icon.png');
		}
	);

	// Coming soon 팝업 열기
	$(".postDown, .duckmateTitleArea button").on("click", function() {
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