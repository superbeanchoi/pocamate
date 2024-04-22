/**
 * 
 */
$(function() {
	//좋아요 버튼 클릭 이벤트
	$('.postEtc button').click(function() {
		var $icon = $(this).find('img');
		var $postHeartNum = $('.postHeartNum');
		//좋아요 처리
		if ($icon.attr('src') === '../img/my collection off icon.png') {
			$icon.attr('src', '../img/my collection on icon.png');
			var heartNum = parseInt($postHeartNum.text());
			$postHeartNum.text(heartNum + 1);
		}
		//좋아요 취소
		else if ($icon.attr('src') === '../img/my collection on icon.png') {
			$icon.attr('src', '../img/my collection off icon.png');
			var heartNum = parseInt($postHeartNum.text());
			$postHeartNum.text(heartNum - 1);
		}
	});

	//댓글 입력하기 이벤트
	$('.myCommentBtn').click(function() {
		// 댓글 작성 내용 가져오기
		var commentText = $('.myCommentText').val();

		// 댓글 작성 시간 가져오기
		var today = new Date();
		var year = today.getFullYear();
		var month = String(today.getMonth() + 1).padStart(2, '0');
		var day = String(today.getDate()).padStart(2, '0');
		var hours = String(today.getHours()).padStart(2, '0');
		var minutes = String(today.getMinutes()).padStart(2, '0');
		var date = year + '-' + month + '-' + day + ' ' + hours + ':' + minutes;

		// 작성자 닉네임 가져오기
		var commentName = $(".mynickname").text();

		// 댓글 추가
		var postComment = $("<div class='postComment'></div>");
		var commentWritterArea = $("<div class='commentWritterArea'></div>");
		var writterProfile = $("<div class='writterProfile commentwritterProfile'></div>");
		var profileImage = $("<img src='../img/profile icon.png'/>");
		var writterName = $("<span>" + commentName + "</span>");
		var commentDate = $("<span class='commentDate'>" + date + "</span>");
		var commentsubmenu = $("<button class='commentsubmenu'><img src='../img/submenu icon.png'/></button>");
		var postCommentText = $("<div class='postCommentText'>" + commentText + "</div>");
		var commentDeleteBtn = $("<button class='commentDetailtBtn commentDeletegoBtn'>삭제하기</button>");

		// 생성한 요소들을 구조에 맞게 추가
		postComment.append(commentWritterArea);
		postComment.append(postCommentText);
		postComment.append(commentDeleteBtn);
		commentWritterArea.append(writterProfile);
		commentWritterArea.append(commentDate);
		commentWritterArea.append(commentsubmenu);
		writterProfile.append(profileImage);
		writterProfile.append(writterName);
		$('.postCommentAll').prepend(postComment);

		//TextArea 비워주기
		$('.myCommentText').val('');

		// 댓글 수 증가
		var postComment = $('.postCommentNum');
		var postCommentNum = parseInt(postComment.text());
		postComment.text(postCommentNum + 1);
		
		$('.commentDetailtBtn').hide();

	});
	
	//신고하기, 삭제하기 버튼 열기
	$(document).on('click', '.commentsubmenu', function() {
		var postComment = $(this).closest('.postComment');
		var commentDetailtBtn = postComment.find('.commentDetailtBtn');
		$('.commentDetailtBtn').not(commentDetailtBtn).slideUp(100);
		commentDetailtBtn.slideToggle(100);
	});
	
	// 클릭한 버튼의 정보를 저장할 변수
    var clickedButtonInfo;
	
	//신고하기 팝업 열기
	$(document).on('click', '.commentReportgoBtn', function() {
		clickedButtonInfo = $(this).closest('.postComment');
		$(".popupBg").fadeIn(200);
		$(".commentReportPopupWrap").slideDown(200);
	});
	
	//신고하기 이벤트
	$(document).on('click', '.commentReportBtn', function() {
		$(".commentReportOKPopupWrap").slideDown(200);
		$(this).closest(".popupWrap").slideUp(200);
		if (clickedButtonInfo) {
            clickedButtonInfo.addClass('report');
            clickedButtonInfo = null;
        }
	});
	
	//삭제하기 팝업 열기
	$(document).on('click', '.commentDeletegoBtn', function() {
		clickedButtonInfo = $(this).closest('.postComment');
		$(".popupBg").fadeIn(200);
		$(".commentDeletePopupWrap").slideDown(200);
	});
	
	//삭제하기 이벤트
	$(document).on('click', '.commentDeleteBtn', function() {
		$(".commentDeleteOKPopupWrap").slideDown(200);
		$(this).closest(".popupWrap").slideUp(200);
		
		//댓글 삭제
		if (clickedButtonInfo) {
		    clickedButtonInfo.remove();
		    clickedButtonInfo = null;
		}
		
		// 댓글 수 하락
		var postComment = $('.postCommentNum');
		var postCommentNum = parseInt(postComment.text());
		postComment.text(postCommentNum - 1);
	});
	

	// Coming soon 팝업 열기
	$(".submenu").on("click", function() {
		// 팝업 배경 페이드인
		$(".popupBg").fadeIn(200);
		// 팝업 창 튕겨져 올라오기 애니메이션
		$(".comingSoonWrap").slideDown(200);
	});

	// 취소 버튼 클릭 시 팝업 닫기
	$(".cancellBtn").on("click", function() {
		$(this).closest(".popupWrap").slideUp(200);
		$(".popupBg").fadeOut(200);
		$('.commentDetailtBtn').hide();
	});

});