var slider = [
	{src: 'img/stand.jpg', classed: 'first'},
	{src: 'img/sand.jpg', classed: 'second'},
	{src: 'img/boat.jpg', classed: 'third'},
	{src: 'img/bote.jpg', classed: 'fourth'},
	{src: 'img/pipe.jpg', classed: 'fifth'}
];


	var mid = Math.floor(slider.length/2);

	$(document).ready(function(){ 
		
		var classy = document.getElementsByClassName(slider[mid].classed)[0];
		console.log(classy);
		$(classy).addClass('selectedImg');
		

	});



var shifted = {

	left: function() {
		var classy = document.getElementsByClassName(slider[mid].classed)[0];

		if(mid < slider.length - 1){
			mid = mid + 1;
		}
		else {
			mid = 0;
		}

		$(classy).removeClass('selectedImg');
		classy = document.getElementsByClassName(slider[mid].classed)[0];
		$(classy).addClass('selectedImg');

	//	console.log(slider.indexOf(slider[mid]));
		var num = slider.indexOf(slider[mid]);
		//console.log(slider[mid]);
		//slider.push(slider[mid]);
		//slider.splice(num, 1);
		
	//	setTimeout(shifted.left, 2000);

		
	},

	right: function() {
		var classy = document.getElementsByClassName(slider[mid].classed)[0];
		
		$(classy).removeClass('selectedImg');
		mid = mid - 1;
		if(mid < 0){
			mid = slider.length - 1;
		}

		classy = document.getElementsByClassName(slider[mid].classed)[0];
		$(classy).addClass('selectedImg');
		//$(classy).css('opacity', 1);


	}
};

var picDimensions = {

	init: function() {

		for(var i=0; i<slider.length; i++){

			var abs = Math.abs(mid - i);
			var opac = 1 - ((abs * 0.28) + 0.35);
			var maxHeight = (slider.length * 33);
			var height = maxHeight - (abs * 20);
		

			slider[i].opacity = opac;
			slider[i].height = height;

		}
	}
};

picDimensions.init();


ko.applyBindings();