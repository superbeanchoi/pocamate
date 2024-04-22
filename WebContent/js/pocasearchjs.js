/**
 * 
 */
$(function() {

	//버튼 -> 호버시 이미지 변경 이벤트
	$('.moveLeft').hover(
		function() {
			$(this).find('img').attr('src', '../img/left move on icon.png');
		},
		function() {
			$(this).find('img').attr('src', '../img/left move off icon.png');
		}
	);
	$('.moveRight').hover(
		function() {
			$(this).find('img').attr('src', '../img/right move on icon.png');
		},
		function() {
			$(this).find('img').attr('src', '../img/right move off icon.png');
		}
	);
	$('.pocaDown').hover(
		function() {
			$(this).find('img').attr('src', '../img/down move on icon.png');
		},
		function() {
			$(this).find('img').attr('src', '../img/down move off icon.png');
		}
	);

	//StarArea 슬라이드 영역 설정
	var sliderWidth = $('.showStarArea ul li').outerWidth(); // 스타로고 너비
	var sliderLength = $('.showStarArea ul li').length; // 전체 스타로고 개수
	var slideArea = sliderWidth * sliderLength; // 슬라이드 영역 너비
	$('.showStarArea ul').css('width', slideArea);  // 슬라이드 영역 지정

	// moveleft/right 슬라이드 이벤트 실행
	$('.moveLeft').click(function() {
		slideLeft();
	});
	$('.moveRight').click(function() {
		slideRight();
	});

	//star별 조회 버튼 이벤트
	// 전체보기 버튼
	$(document).on('click', '.showAllStarBtn', function() {
		// 다른 버튼의 그림자 값을 삭제
		$('.showStarArea ul li button').css('box-shadow', 'none');
		// 클릭된 버튼에 그림자 값을 추가
		$(this).css('box-shadow', '0px 0px 10px 0px #222');

		$('.newpocaArea ul li').animate({ opacity: 0 }, function() {
			$(this).css('display', 'none');
		});
		$('.newpocaArea ul li').animate({ opacity: 100 }).slideDown(500);
	});

	// 각각 스타보기 버튼
	$(document).on('click', '.showStarBtn', function() {
		// 다른 버튼의 그림자 값을 삭제
		$('.showAllStarBtn').css('box-shadow', 'none');
		$('.showStarArea ul li button').not(this).css('box-shadow', 'none');
		// 클릭된 버튼에 그림자 값을 추가
		$(this).css('box-shadow', '0px 0px 10px 0px #222');

		// span 내부의 텍스트 가져오기
		var buttonText = $(this).closest('li').find('span').text();

		// 특정 조건일 때 pocaArea의 li에 노출
		if (buttonText.trim() === 'ASTRO') {
			$('.newpocaArea ul li').animate({ opacity: 0 }, function() {
				$(this).css('display', 'none');
			});
			$('.astro').animate({ opacity: 100 }).slideDown(500);
		} else if (buttonText.trim() === 'aespa') {
			$('.newpocaArea ul li').animate({ opacity: 0 }, function() {
				$(this).css('display', 'none');
			});
			$('.aespa').animate({ opacity: 100 }).slideDown(500);
		} else if (buttonText.trim() === 'BTS') {
			$('.newpocaArea ul li').animate({ opacity: 0 }, function() {
				$(this).css('display', 'none');
			});
			$('.bts').animate({ opacity: 100 }).slideDown(500);
		} else if (buttonText.trim() === 'EXO') {
			$('.newpocaArea ul li').animate({ opacity: 0 }, function() {
				$(this).css('display', 'none');
			});
			$('.exo').animate({ opacity: 100 }).slideDown(500);
		} else if (buttonText.trim() === 'IU') {
			$('.newpocaArea ul li').animate({ opacity: 0 }, function() {
				$(this).css('display', 'none');
			});
			$('.iu').animate({ opacity: 100 }).slideDown(500);
		} else if (buttonText.trim() === 'IVE') {
			$('.newpocaArea ul li').animate({ opacity: 0 }, function() {
				$(this).css('display', 'none');
			});
			$('.ive').animate({ opacity: 100 }).slideDown(500);
		} else if (buttonText.trim() === 'LE SSERAFIM') {
			$('.newpocaArea ul li').animate({ opacity: 0 }, function() {
				$(this).css('display', 'none');
			});
			$('.lesserafim').animate({ opacity: 100 }).slideDown(500);
		} else if (buttonText.trim() === 'NCT') {
			$('.newpocaArea ul li').animate({ opacity: 0 }, function() {
				$(this).css('display', 'none');
			});
			$('.nct').animate({ opacity: 100 }).slideDown(500);
		} else if (buttonText.trim() === 'NewJeans') {
			$('.newpocaArea ul li').animate({ opacity: 0 }, function() {
				$(this).css('display', 'none');
			});
			$('.newjeans').animate({ opacity: 100 }).slideDown(500);
		} else if (buttonText.trim() === 'Red Velvet') {
			$('.newpocaArea ul li').animate({ opacity: 0 }, function() {
				$(this).css('display', 'none');
			});
			$('.redvelvet').animate({ opacity: 100 }).slideDown(500);
		} else if (buttonText.trim() === 'SEVENTEEN') {
			$('.newpocaArea ul li').animate({ opacity: 0 }, function() {
				$(this).css('display', 'none');
			});
			$('.seventeen').animate({ opacity: 100 }).slideDown(500);
		}
	});

	//포카 검색
	$('.pocaSearchBtn').click(function() {
		//input값 가져오기
		var inputValue = $('.mainsearch input').val().toLowerCase();

		//검색결과 도출
		if (inputValue === '아스트로' || inputValue === 'astro' || inputValue === '차은우') {
			$('.newpocaArea ul li').animate({ opacity: 0 }, function() {
				$(this).css('display', 'none');
			});
			$('.astro').animate({ opacity: 100 }).slideDown(500);
		} else if (inputValue === '에스파' || inputValue === 'aespa' || inputValue === '카리나') {
			$('.newpocaArea ul li').animate({ opacity: 0 }, function() {
				$(this).css('display', 'none');
			});
			$('.aespa').animate({ opacity: 100 }).slideDown(500);
		} else if (inputValue === '방탄소년단' || inputValue === 'bts' || inputValue === '뷔' || inputValue === '정국') {
			$('.newpocaArea ul li').animate({ opacity: 0 }, function() {
				$(this).css('display', 'none');
			});
			$('.bts').animate({ opacity: 100 }).slideDown(500);
		} else if (inputValue === '엑소' || inputValue === 'exo' || inputValue === '백현') {
			$('.newpocaArea ul li').animate({ opacity: 0 }, function() {
				$(this).css('display', 'none');
			});
			$('.exo').animate({ opacity: 100 }).slideDown(500);
		} else if (inputValue === '아이유' || inputValue === 'iu') {
			$('.newpocaArea ul li').animate({ opacity: 0 }, function() {
				$(this).css('display', 'none');
			});
			$('.iu').animate({ opacity: 100 }).slideDown(500);
		} else if (inputValue === '아이브' || inputValue === 'ive' || inputValue === '장원영') {
			$('.newpocaArea ul li').animate({ opacity: 0 }, function() {
				$(this).css('display', 'none');
			});
			$('.ive').animate({ opacity: 100 }).slideDown(500);
		} else if (inputValue === '르세라핌' || inputValue === 'lesserafim' || inputValue === '허윤진') {
			$('.newpocaArea ul li').animate({ opacity: 0 }, function() {
				$(this).css('display', 'none');
			});
			$('.lesserafim').animate({ opacity: 100 }).slideDown(500);
		} else if (inputValue === '엔시티' || inputValue === 'nct' || inputValue === '태용') {
			$('.newpocaArea ul li').animate({ opacity: 0 }, function() {
				$(this).css('display', 'none');
			});
			$('.nct').animate({ opacity: 100 }).slideDown(500);
		} else if (inputValue === '뉴진스' || inputValue === 'newjeans' || inputValue === '하니') {
			$('.newpocaArea ul li').animate({ opacity: 0 }, function() {
				$(this).css('display', 'none');
			});
			$('.newjeans').animate({ opacity: 100 }).slideDown(500);
		} else if (inputValue === '레드벨벳' || inputValue === 'redvelvet' || inputValue === '아이린') {
			$('.newpocaArea ul li').animate({ opacity: 0 }, function() {
				$(this).css('display', 'none');
			});
			$('.redvelvet').animate({ opacity: 100 }).slideDown(500);
		} else if (inputValue === '세븐틴' || inputValue === 'seventeen' || inputValue === '정한') {
			$('.newpocaArea ul li').animate({ opacity: 0 }, function() {
				$(this).css('display', 'none');
			});
			$('.seventeen').animate({ opacity: 100 }).slideDown(500);
		} else {
			$('.newpocaArea ul li').animate({ opacity: 0 }, function() {
				$(this).css('display', 'none');
			});
			$('.newpocaArea ul li').animate({ opacity: 100 }).slideDown(500);
		}
		var starAreaOffset = $('.starArea').offset().top - 160;
		$('html, body').animate({
			scrollTop: starAreaOffset
		}, 'slow');
	});

	// 슬라이드 이벤트 함수
	function slideLeft() {
		// 마지막 슬라이드를 복제하여 첫번째에 추가
		var lastSlide = $('.showStarArea ul li:last');
		var clonedSlide = lastSlide.clone();
		clonedSlide.prependTo('.showStarArea ul');

		// 새로 추가된 li 안에 있는 button에 showStarBtn 클래스 추가
		clonedSlide.find('button').addClass('showStarBtn');

		// 슬라이드 영역을 오른쪽으로 이동시키고 애니메이션 적용
		$('.showStarArea ul').css({ marginLeft: -sliderWidth });
		$('.showStarArea ul').animate({ marginLeft: 0 }, 500, function() {
			// 애니메이션이 완료된 후에 마지막 슬라이드를 삭제
			$('.showStarArea ul li:last').remove();
		});
	}
	function slideRight() {
		// 첫 번째 슬라이드를 복제하여 마지막에 추가
		var firstSlide = $('.showStarArea ul li:first');
		var clonedSlide = firstSlide.clone();
		clonedSlide.appendTo('.showStarArea ul');

		// 새로 추가된 li 안에 있는 button에 showStarBtn 클래스 추가
		clonedSlide.find('button').addClass('showStarBtn');

		// 슬라이드 영역을 왼쪽으로 이동시키고 애니메이션 적용
		$('.showStarArea ul').animate({ marginLeft: -sliderWidth }, 500, function() {
			// 애니메이션이 완료된 후에 첫 번째 슬라이드를 삭제
			$('.showStarArea ul li:first').remove();
			$(this).css({ marginLeft: 0 });
		});
	}
	
	// Coming soon 팝업 열기
	$(".pocaDown").on("click", function() {
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