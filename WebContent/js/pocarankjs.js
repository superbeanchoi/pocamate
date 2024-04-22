$(function() {

	//탭기능
	var contents = $(".contents");
	var tabmenu = contents.find(".tabmenu button");
	var panelArea = contents.find(".panelArea");
	var panelWidth = $(".panelArea>div").width();
	var currentIndex = 0;

	tabmenu.click(function() {
		var currentTabmenu = $(this);
		var targetIndex = currentTabmenu.index();
		var marginLeft = -panelWidth * targetIndex;

		tabmenu.removeClass("tabmenuCliked");
		currentTabmenu.addClass("tabmenuCliked");

		panelArea.animate({ marginLeft: marginLeft }, 500);
		currentIndex = targetIndex;
	});
	
	//포카별 시세 그래프
	var pocarankdata = [];
	$('#pocarankdata tbody tr').each(function() {
		var row = $(this).find('th').text();
		var values = $(this).find('td').map(function() {
			return parseInt($(this).text()) || 0;
		}).get();
		pocarankdata.push({ 'y': row, 'a': values[0], 'b': values[1], 'c': values[2], 'd': values[3], 'e': values[4], 'f': values[5], 'g': values[6], 'h': values[7], 'i': values[8], 'j': values[9] });
	});
	
	//스타별 시세 그래프
	var starrankdata = [];
	$('#starrankdata tbody tr').each(function() {
		var row = $(this).find('th').text();
		var values = $(this).find('td').map(function() {
			return parseInt($(this).text()) || 0;
		}).get();
		starrankdata.push({ 'y': row, 'a': values[0], 'b': values[1], 'c': values[2], 'd': values[3], 'e': values[4], 'f': values[5], 'g': values[6], 'h': values[7], 'i': values[8], 'j': values[9] });
	});

	//포카별 시세 바형 그래프 생성
	Morris.Bar({
		element: 'pocarank-barchart',
		data: pocarankdata,
		xkey: 'y',
		ykeys: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'],
		labels: ['aespa 카리나', 'EXO 백현', 'NCT 태용', 'IU 아이유', 'IVE 장원영', 'LE SSERAFIM 허윤진', 'SEVENTEEN 정한', 'BTS 뷔', 'BTS 정국', 'ASTRO 차은우'],
		hideHover: true, // 호버 효과 비활성화
		barColors: ['#8AAAE5', '#8AAAE5', '#8AAAE5', '#8AAAE5', '#8AAAE5', '#8AAAE5', '#8AAAE5', '#CD7F32', '#A3A3A3', '#D5A11E'],
		hoverCallback: function(index, options, content, row) {
			// 바의 인덱스에 따라 다른 툴팁 반환
			switch (index) {
				case 0:
					return "<div style='text-align: center; padding: 5px; background-color: #8AAAE5; color: white;'>" + row.y + ": " + row.a + "</div>";
				case 1:
					return "<div style='text-align: center; padding: 5px; background-color: #8AAAE5; color: white;'>" + row.y + ": " + row.b + "</div>";
				case 2:
					return "<div style='text-align: center; padding: 5px; background-color: #8AAAE5; color: white;'>" + row.y + ": " + row.c + "</div>";
				case 3:
					return "<div style='text-align: center; padding: 5px; background-color: #8AAAE5; color: white;'>" + row.y + ": " + row.d + "</div>";
				case 4:
					return "<div style='text-align: center; padding: 5px; background-color: #8AAAE5; color: white;'>" + row.y + ": " + row.e + "</div>";
				case 5:
					return "<div style='text-align: center; padding: 5px; background-color: #8AAAE5; color: white;'>" + row.y + ": " + row.f + "</div>";
				case 6:
					return "<div style='text-align: center; padding: 5px; background-color: #8AAAE5; color: white;'>" + row.y + ": " + row.g + "</div>";
				case 7:
					return "<div style='text-align: center; padding: 5px; background-color: #CD7F32; color: white;'>" + row.y + ": " + row.h + "</div>";
				case 8:
					return "<div style='text-align: center; padding: 5px; background-color: #A3A3A3; color: white;'>" + row.y + ": " + row.i + "</div>";
				case 9:
					return "<div style='text-align: center; padding: 5px; background-color: #D5A11E; color: white;'>" + row.y + ": " + row.j + "</div>";
				default:
					return "";
			}
		},
		stacked: true,
		gridTextSize: 14
	});
	//스타별 시세 바형 그래프 생성
	Morris.Bar({
		element: 'starrank-barchart',
		data: starrankdata,
		xkey: 'y',
		ykeys: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'],
		labels: ['Red Velvet 아이린', 'New Jeans 하니', 'EXO 백현', 'IVE 장원영', 'BTS 뷔', 'SEVENTEEN 정한', 'aespa 카리나', 'IU 아이유', 'BTS 정국', 'ASTRO 차은우'],
		hideHover: true, // 호버 효과 비활성화
		barColors: ['#8AAAE5', '#8AAAE5', '#8AAAE5', '#8AAAE5', '#8AAAE5', '#8AAAE5', '#8AAAE5', '#CD7F32', '#A3A3A3', '#D5A11E'],
		hoverCallback: function(index, options, content, row) {
			// 바의 인덱스에 따라 다른 툴팁 반환
			switch (index) {
				case 0:
					return "<div style='text-align: center; padding: 5px; background-color: #8AAAE5; color: white;'>" + row.y + ": " + row.a + "</div>";
				case 1:
					return "<div style='text-align: center; padding: 5px; background-color: #8AAAE5; color: white;'>" + row.y + ": " + row.b + "</div>";
				case 2:
					return "<div style='text-align: center; padding: 5px; background-color: #8AAAE5; color: white;'>" + row.y + ": " + row.c + "</div>";
				case 3:
					return "<div style='text-align: center; padding: 5px; background-color: #8AAAE5; color: white;'>" + row.y + ": " + row.d + "</div>";
				case 4:
					return "<div style='text-align: center; padding: 5px; background-color: #8AAAE5; color: white;'>" + row.y + ": " + row.e + "</div>";
				case 5:
					return "<div style='text-align: center; padding: 5px; background-color: #8AAAE5; color: white;'>" + row.y + ": " + row.f + "</div>";
				case 6:
					return "<div style='text-align: center; padding: 5px; background-color: #8AAAE5; color: white;'>" + row.y + ": " + row.g + "</div>";
				case 7:
					return "<div style='text-align: center; padding: 5px; background-color: #CD7F32; color: white;'>" + row.y + ": " + row.h + "</div>";
				case 8:
					return "<div style='text-align: center; padding: 5px; background-color: #A3A3A3; color: white;'>" + row.y + ": " + row.i + "</div>";
				case 9:
					return "<div style='text-align: center; padding: 5px; background-color: #D5A11E; color: white;'>" + row.y + ": " + row.j + "</div>";
				default:
					return "";
			}
		},
		stacked: true,
		gridTextSize: 14
	});


});
