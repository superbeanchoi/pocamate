$(function() {
	// 포토카드 이미지 클릭 시
	$(document).on("click", ".photocard", function() {
		//클릭한 값 받아오기
		var imgSrc = $(this).attr("src");
		var pocaTitle = null;
		if (imgSrc == "../img/lesserafim img.png") {
			pocaTitle = "The First Moment of LE SSERAFIM Digital Souvenir";
		} else if (imgSrc == "../img/seventeen img.png") {
			pocaTitle = "헹가래[Heng:garæ] Photo Card";
		} else if (imgSrc == "../img/iu img.png") {
			pocaTitle = "The GOLDEN HOUR Concert MD Photo Card";
		} else if (imgSrc == "../img/astro img.png") {
			pocaTitle = "All Night(전화해) 공개방송 Photo Card";
		} else if (imgSrc == "../img/nct img.png") {
			pocaTitle = "Chain Photo Card";
		} else if (imgSrc == "../img/newjeans img.png") {
			pocaTitle = "The 2nd EP Get Up  Photo Card";
		} else if (imgSrc == "../img/bts v img.png") {
			pocaTitle = "LOVE YOURSELF Tear ver.U Photo Card";
		} else if (imgSrc == "../img/redvelvet img.png") {
			pocaTitle = "Rookie Photo Card";
		} else if (imgSrc == "../img/ive img.png") {
			pocaTitle = "I've IVE Photo Card";
		} else if (imgSrc == "../img/bts jk img.png") {
			pocaTitle = "ARMYPEDIA puzzle Photo card";
		} else if (imgSrc == "../img/aespa img.png") {
			pocaTitle = "Pink Christmas Random Pack Photo card";
		} else if (imgSrc == "../img/exo img.png") {
			pocaTitle = "EXOcial Club - Cream Soda POPUP LUCKYDRAW";
		}
		var singerLogo = $(this).siblings(".singerinfo").find(".singerlogo").attr("src");
		var singerGroup = $(this).siblings(".singerinfo").find("span:first").text();
		var singerName = $(this).siblings(".singerinfo").find("span:last").text();
		var buyNowPrice = $(this).siblings(".singeramount").find(".buyNowPrice").text();
		var maxPrice = $(this).siblings(".singeramount").find(".maxPrice").text();

		// pocadetail 페이지 열기
		var nextpage = window.open("pocadetail.html", "POCAMATE");
		$(nextpage).on("load", function() {
			$(nextpage.document).find("#photocardImg").prop('src', imgSrc);
			$(nextpage.document).find("#singerlogoImg").prop('src', singerLogo);
			$(nextpage.document).find("#pocaTitleValue").val(pocaTitle);
			$(nextpage.document).find("#singerGroupValue").val(singerGroup);
			$(nextpage.document).find("#singerNameValue").val(singerName);
			$(nextpage.document).find("#buyNowPriceValue").val(buyNowPrice);
			$(nextpage.document).find("#maxPriceValue").val(maxPrice);
		});
	});
});
