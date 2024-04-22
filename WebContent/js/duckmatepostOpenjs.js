/**
 * 
 */
$(function() {
	//게시물 전체보기 영역 본문 생략 처리
	
	//게시물 클릭시
	$(document).on("click", ".eachPost a", function() {
		//클릭한 값 받아오기
		var postCategory = $(this).find(".postCategory").text();
		var postCategoryImg = null;
		if (postCategory == "IVE") {
			postCategoryImg = "../img/ive logo.png";
		} else if (postCategory == "ASTRO") {
			postCategoryImg = "../img/astro logo.png";
		} else if (postCategory == "aespa") {
			postCategoryImg = "../img/aespa logo.png";
		} else if (postCategory == "EXO") {
			postCategoryImg = "../img/exo logo.png";
		}
		var postImg = $(this).find(".postImgArea").attr("src");
		var postTitle = $(this).find(".postTitle").text();
		var postDate = $(this).find(".postDate").text();
		var postContents = $(this).find(".postContents div").text();
		var postLike = $(this).find(".postLike").text();

		// post 페이지 열기
		var nextpage = window.open("duckmatepost.html", "POCAMATE");
		$(nextpage).on("load", function() {
			$(nextpage.document).find("#postCategorySingerValue").val(postCategory);
			$(nextpage.document).find(".postCategorySingerImg").prop('src', postCategoryImg);
			$(nextpage.document).find(".postMainImgArea").prop('src', postImg);
			$(nextpage.document).find("#postTitleValue").val(postTitle);
			$(nextpage.document).find("#postDateValue").val(postDate);
			$(nextpage.document).find(".postContent").text(postContents);
			$(nextpage.document).find(".postHeartNum").text(postLike);
		});
	});
});