$('.button').click(function() {

	var objects = ['assets/img/black1.png',
					'assets/img/black2.png',
					'assets/img/black3.png',
					'assets/img/black4.png',
					'assets/img/red1.png',
					'assets/img/red2.png',
					'assets/img/red3.png',
					'assets/img/red4.png',
					'assets/img/purple1.png',
					'assets/img/purple2.png',
					'assets/img/purple3.png',
					'assets/img/purple4.png',
					'assets/img/yellow1.png',
					'assets/img/yellow2.png',
					'assets/img/yellow3.png',
					'assets/img/yellow4.png',
					'assets/img/lb1.png',
					'assets/img/lb2.png',
					'assets/img/lb3.png',
					'assets/img/lb4.png',
					'assets/img/db1.png',
					'assets/img/db2.png',
					'assets/img/db3.png',
					'assets/img/db4.png',
					'assets/img/green1.png',
					'assets/img/green2.png',
					'assets/img/green4.png',
					'assets/img/green3.png',
					'assets/img/black1.png',
					'assets/img/black2.png',
					'assets/img/black4.png',
		
					];


	var random_object_number = Math.floor(Math.random() * objects.length);
	var object_to_use = objects[random_object_number];
	
	
	var result = '';

	if (random_object_number < 33) { 
		result = '<div class="object"><img src="' + object_to_use + '" /></div>';
		} else {
		result = '<div class="object ' + color_to_use + '">' + object_to_use + '</div>';
		}

	$('.content').prepend(result);
});