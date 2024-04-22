/**
 * 
 */
$(function() {
	// Coming soon 팝업 열기
	$(".profileArea button, .payArea button, .collectionArea button").on("click", function() {
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