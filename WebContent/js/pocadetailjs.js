$(function() {

	// <즉시구매가로 바로 구매하기> 클릭 시 팝업 열기
	$(".buyNowBtn").on("click", function() {
		// 이미지가 판매 완료로 변경되었는지 확인
		if ($(".pocabuyingInfo > img").attr("src") === "../img/sell com btn icon.png") {
			// 팝업 배경 페이드인
			$(".popupBg").fadeIn(200);
			// 팝업 창 튕겨져 올라오기 애니메이션
			$(".selComPopupWrap").slideDown(200);
		} else {
			$(".popupBg").fadeIn("fast");
			$(".buyNowPopupWrap").slideDown(200);
		}
	});

	// <구매가 제시하기> 클릭 시 팝업 열기
	$(".priceproposeBtn").on("click", function() {
		if ($(".pocabuyingInfo > img").attr("src") === "../img/sell com btn icon.png") {
			// 팝업 배경 페이드인
			$(".popupBg").fadeIn(200);
			// 팝업 창 튕겨져 올라오기 애니메이션
			$(".selComPopupWrap").slideDown(200);
		} else {
			$(".popupBg").fadeIn(200);
			$(".priceproposePopupWrap").slideDown(200);
			// 희망 구매가 입력값 초기화
			$(".pricepropseInput").val("");
		}
	});

	// <즉시구매가로 바로 구매하기> 확인 클릭 시 팝업 닫기 & 판매 완료 처리 & 완료 팝업 열기
	$(".buyNowokBtn").on("click", function() {
		// 팝업 닫기
		$(".buyNowPopupWrap").slideUp(200);
		$(".buyEndPopupWrap").slideDown(200);
		// 이미지 변경
		$(".pocabuyingInfo > img").attr("src", "../img/sell com btn icon.png");
	});

	// <희망 구매가 제시하기> 확인 버튼 클릭 시 제시가 히스토리 추가 & 팝업 닫기
	$(".pricepropseokBtn").on("click", function() {
		// 현재 날짜 가져오기
		var today = new Date();
		var year = today.getFullYear();
		var month = String(today.getMonth() + 1).padStart(2, '0');
		var day = String(today.getDate()).padStart(2, '0');
		var date = year + '-' + month + '-' + day;
		// 입력값 가져오기
		var price = $(".pricepropseInput").val();
		// 쉼표 추가
		price = numberWithCommas(price);
		// 테이블에 행 추가
		var newRow = "<tr>"
			+ "<td>" + date + "</td>"
			+ "<td>" + price + "원</td>"
			+ "<td>" + $(".nickname span").text() + "</td>"
			+ "</tr>";
		$(".historyTable").append(newRow);
		//팝업 닫고 완료 팝업 열기
		$(this).closest(".popupWrap").slideUp(200);
		$(".proposeEndPopupWrap").slideDown(200);
	});

	//<마이 컬렉션에 추가하기>
	$(".myCollection > button").click(function() {
		var imgSrc = $(".myCollection > button > img").attr("src");
		if (imgSrc.includes("off")) {
			$(".myCollection > button > img").attr("src", "../img/my collection on icon.png").fadeIn();
			$(".popupBg").fadeIn(200);
			$(".myCollectionOnPopupWrap").slideDown(200);
		} else {
			$(".myCollection > button > img").attr("src", "../img/my collection off icon.png").fadeIn();
			$(".popupBg").fadeIn(200);
			$(".myCollectionOffPopupWrap").slideDown(200);
		}
	});

	// 취소 버튼 클릭 시 팝업 닫기
	$(".cancellBtn").on("click", function() {
		$(this).closest(".popupWrap").slideUp(200);
		$(".popupBg").fadeOut(200);
	});

	//<희망 구매가> Input에 구매가 작성
	document.getElementById("pricepropseInput").oninput = function() {
		onlynumber(this);
	}

	//입력값 숫자만 받는 함수
	var numForm = /^\d+$/;
	function onlynumber(count) {
		if (!numForm.test(count.value) && count.value.trim() !== '') {
			count.value = count.value.replace(/\D/g, '');
			count.value = '';
		}
	}

	// 천 단위마다 쉼표 추가하는 함수
	function numberWithCommas(x) {
		return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	}
});
