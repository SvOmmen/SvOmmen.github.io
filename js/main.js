$(document).ready(function(){

//	default event

	defaultpage();	

	});	

//FUNCTIONS		
document.addEventListener('contextmenu', event => event.preventDefault());

//	clear divs function
	function clearAllDivs(){
		$('#centerleft').empty();
		$('#centerleft').removeAttr("class");
		$('#centerright').empty();
		$('#centerright').removeAttr("class");
		$('#left').empty();
		$('#right').empty();
		$('#centernav').empty();
		$('#centernav').removeAttr("class");		
		$('#center').empty();
		$('#center').removeAttr("class");
	}
//	content function
	function addContent(){
		document.getElementById(pickdiv).setAttribute("class", newclass)
		document.getElementById(pickdiv).innerHTML = content	
	}	

//	defaultpage function
	function defaultpage(){
		$('#center').empty();
		pickdiv = 'centerleft'
			newclass = 'info'
			content=
			'<div class="cardleft">'+
			'<div class="card-inner">'+
			'<div class="card-front"><button type="button" class="button" id="photos"><img src="images/photographing.jpg", width=100%></img></button></div>'+
			'<div class="card-back">Photography</div>'+
			'</div>'+
			'</div>'
			addContent();
		pickdiv = 'centerright'
			newclass = 'info'
			content=
			'<div class="cardright">'+
			'<div class="card-inner">'+
			'<div class="card-front"><button type="button" class="button" id="prints"><img src="images/printing.JPG", width=100%></img></button></div>'+
			'<div class="card-back">Monoprinting</div>'+
			'</div>'+
			'</div>'
			addContent();
		pickdiv = "centernav"
			newclass = "links"
			content = '<button type="title" class="titlebutton" id="titlebutton">Sandrien van Ommen</button>'+
						'<p> Geneva, Switzerland</p>'
			addContent();
		pickdiv = 'left'
			content =  '<div id="lefttext"><h3> Photography </h3></div>'+
		   '<div id="leftbuttons">'+
		   '<button type="button" class="menu" id="leafbugs">Leaf Bugs</button>'+
		   '<button type="button" class="menu" id="dragondamselflies">Dragons and Damsels</button>'+
		   '<button type="button" class="menu" id="smokeflowers">Smokey Flowers</button>'+
		   '<button type="button" class="menu" id="flowyfoliage">Flowy Foliage</button>'+
		   '<button type="button" class="menu" id="petalssun">Four Petals in the Sun</button>'+
		   '<button type="button" class="menu" id="daisies">Daisies</button>'+
		   '</div>'
			addContent();
		pickdiv = 'right'
			content =  '<div id="righttext"><h3> Monoprinting </h3></div>'+
		   '<div id="rightbuttons">'+
		   '<button type="button" class="menu" id="tonallayering">Tonal Layering</button>'+
		   '<button type="button" class="menu" id="alignment">Alignment</button>'+
		   '<button type="button" class="menu" id="mirrorimages">Mirror Images</button>'+
		   '<button type="button" class="menu" id="fauxcollages">Faux Collages</button>'+
		   '</div>'
			addContent();
	// titlebutton event
	$('#titlebutton').on('click', function(){
		titlebutton();
	});
	// leafbugs event
	$('#leafbugs').on('click', function(){
   	leafbugs();
	});
	// dragonflies event
	$('#dragondamselflies').on('click', function(){
   	dragondamselflies();
	});
	// smokeflowers event
	$('#smokeflowers').on('click', function(){
   	smokeflowers();
	});
	// flowyfoliage event
	$('#flowyfoliage').on('click', function(){
   	flowyfoliage();
	});
	// petalssun event
	$('#petalssun').on('click', function(){
   	petalssun();
	});
	// daisies event
	$('#daisies').on('click', function(){
   	daisies();
	});
	// tonallayering event
	$('#tonallayering').on('click', function(){
   	tonallayering();
	});
	// alignment event
	$('#alignment').on('click', function(){
   	alignment();
	});
	// mirrorimages event
	$('#mirrorimages').on('click', function(){
   	mirrorimages();
	});
	// fauxcollages event
	$('#fauxcollages').on('click', function(){
   	fauxcollages();
	});

	} 	
	
// 	leafbugs function
	function leafbugs(){
		clearAllDivs();
		pickdiv = 'center'
			content = 	'<input type="radio" id="item-1" name="items">'+
						'<input type="radio" id="item-2" name="items">'+
						'<input type="radio" id="item-3" name="items" checked>'+
						'<nav>'+
						'<label for="item-1"><img src="images/photos/thumb/IMG_57A6067_thumb.jpg" alt="Female Leaf Bug"></label>'+
						'<label for="item-2"><img src="images/photos/thumb/IMG_57A6080_thumb.jpg" alt="Male Leaf Bug"></label>'+
						'<label for="item-3"><img src="images/photos/thumb/IMG_57A6120_thumb.jpg" alt="The Egg"></label>'+
						'</nav>'+
						'<section id="grid" class="grid">'+
						'<div data-title="Female Leaf Bug">'+
							'<img src="images/photos/IMG_57A6067_web.jpg">'+
						'</div>'+
						'<div data-title="Male Leaf Bug">'+
							'<img src="images/photos/IMG_57A6080_web.jpg">'+
						'</div>'+
						'<div data-title="The Egg">'+
							'<img src="images/photos/IMG_57A6120_web.jpg">'+
						'</div>'+
						'</section>'
			addContent();
		pickdiv = 'centernav'
		newclass = 'links'
		content = '<button type="button" class="back" id="back">Back</button>'
		addContent();
	// Back event
	$('#back').on('click', function(){
   	back();
	});
	}
	
// 	dragondamselflies function
	function dragondamselflies(){
		clearAllDivs();
		pickdiv = 'center'
			content = 	'<input type="radio" id="item-1" name="items">'+
						'<input type="radio" id="item-2" name="items">'+
						'<input type="radio" id="item-3" name="items" checked>'+
						'<input type="radio" id="item-4" name="items">'+
						'<input type="radio" id="item-5" name="items">'+
						'<nav>'+
						'<label for="item-1"><img src="images/photos/thumb/IMG_7007_thumb.jpg" alt="Dragonfly Shadow"></label>'+
						'<label for="item-2"><img src="images/photos/thumb/IMG_7010_thumb.jpg" alt="Dragonfly Wings"></label>'+
						'<label for="item-3"><img src="images/photos/thumb/IMG_7031_thumb.jpg" alt="Dragonfly in the Sun"></label>'+
						'<label for="item-4"><img src="images/photos/thumb/IMG_7041_thumb.jpg" alt="Dragonfly Face"></label>'+
						'<label for="item-5"><img src="images/photos/thumb/IMG_7128_thumb.jpg" alt="Damselfy"></label>'+
						'</nav>'+
						'<section id="grid" class="grid">'+
						'<div data-title="Dragonfly Shadow">'+
							'<img src="images/photos/IMG_7007_web.jpg">'+
						'</div>'+
						'<div data-title="Dragonfly Wings">'+
							'<img src="images/photos/IMG_7010_web.jpg">'+
						'</div>'+
						'<div data-title="Dragonfly in the Sun">'+
							'<img src="images/photos/IMG_7031_web.jpg">'+
						'</div>'+
						'<div data-title="Dragonfly Face">'+
							'<img src="images/photos/IMG_7041_web.jpg">'+
						'</div>'+
						'<div data-title="Damselfly">'+
							'<img src="images/photos/IMG_7128_web.jpg">'+
						'</div>'+
						'</section>'
			addContent();
		pickdiv = 'centernav'
		newclass = 'links'
		content = '<button type="button" class="back" id="back">Back</button>'
		addContent();
	// Back event
	$('#back').on('click', function(){
   	back();
	});
	}

// 	smokeflowers function
	function smokeflowers(){
		clearAllDivs();
		pickdiv = 'center'
			content = 	'<input type="radio" id="item-1" name="items">'+
						'<input type="radio" id="item-2" name="items">'+
						'<input type="radio" id="item-3" name="items" checked>'+
						'<nav>'+
						'<label for="item-1"><img src="images/photos/thumb/IMG_57A6765_thumb.jpg" alt="Smokey Flowers 1"></label>'+
						'<label for="item-2"><img src="images/photos/thumb/IMG_57A6771_thumb.jpg" alt="Smokey Flowers 2"></label>'+
						'<label for="item-3"><img src="images/photos/thumb/IMG_57A6767_thumb.jpg" alt="Smokey Flowers 3"></label>'+
						'</nav>'+
						'<section id="grid" class="grid">'+
						'<div data-title="Smokey Flowers 1">'+
							'<img src="images/photos/IMG_57A6765_web.jpg">'+
						'</div>'+
						'<div data-title="Smokey Flowers 2">'+
							'<img src="images/photos/IMG_57A6771_web.jpg">'+
						'</div>'+
						'<div data-title="Smokey Flowers 3">'+
							'<img src="images/photos/IMG_57A6767_web.jpg">'+
						'</div>'+
						'</section>'
			addContent();
		pickdiv = 'centernav'
		newclass = 'links'
		content = '<button type="button" class="back" id="back">Back</button>'
		addContent();
	// Back event
	$('#back').on('click', function(){
   	back();
	});
	}
	
	
// 	flowyfoliage function
	function flowyfoliage(){
		clearAllDivs();
		pickdiv = 'center'
			content = 	'<input type="radio" id="item-1" name="items">'+
						'<input type="radio" id="item-2" name="items">'+
						'<input type="radio" id="item-3" name="items" checked>'+
						'<input type="radio" id="item-4" name="items">'+
						'<input type="radio" id="item-5" name="items">'+
						'<input type="radio" id="item-6" name="items">'+
						'<nav>'+
						'<label for="item-1"><img src="images/photos/thumb/IMG_6894_thumb.jpg" alt="Flowy Foliage 1"></label>'+
						'<label for="item-2"><img src="images/photos/thumb/IMG_6898_thumb.jpg" alt="Flowy Foliage 2"></label>'+
						'<label for="item-3"><img src="images/photos/thumb/IMG_6901_thumb.jpg" alt="Flowy Foliage 3"></label>'+
						'<label for="item-4"><img src="images/photos/thumb/IMG_6902_thumb.jpg" alt="Flowy Foliage 4"></label>'+
						'<label for="item-5"><img src="images/photos/thumb/IMG_6907_thumb.jpg" alt="Flowy Foliage 5"></label>'+
						'<label for="item-6"><img src="images/photos/thumb/IMG_6909_thumb.jpg" alt="Flowy Foliage 6"></label>'+
						'</nav>'+
						'<section id="grid" class="grid">'+
						'<div data-title="Flowy Foliage 1">'+
							'<img src="images/photos/IMG_6894_web.jpg">'+
						'</div>'+
						'<div data-title="Flowy Foliage 2">'+
							'<img src="images/photos/IMG_6898_web.jpg">'+
						'</div>'+
						'<div data-title="Flowy Foliage 3">'+
							'<img src="images/photos/IMG_6901_web.jpg">'+
						'</div>'+
						'<div data-title="Flowy Foliage 4">'+
							'<img src="images/photos/IMG_6902_web.jpg">'+
						'</div>'+
						'<div data-title="Flowy Foliage 5">'+
							'<img src="images/photos/IMG_6907_web.jpg">'+
						'</div>'+
						'<div data-title="Flowy Foliage 6">'+
							'<img src="images/photos/IMG_6909_web.jpg">'+
						'</div>'+					
						'</section>'
			addContent();
		pickdiv = 'centernav'
		newclass = 'links'
		content = '<button type="button" class="back" id="back">Back</button>'
		addContent();
	// Back event
	$('#back').on('click', function(){
   	back();
	});
	}

// 	petalssun function
	function petalssun(){
		clearAllDivs();
		pickdiv = 'center'
			content = 	'<input type="radio" id="item-1" name="items">'+
						'<input type="radio" id="item-2" name="items">'+
						'<input type="radio" id="item-3" name="items" checked>'+
						'<input type="radio" id="item-4" name="items">'+
						'<input type="radio" id="item-5" name="items">'+
						'<input type="radio" id="item-6" name="items">'+
						'<nav>'+
						'<label for="item-1"><img src="images/photos/thumb/IMG_57A6653_thumb.jpg" alt="Pink Petals 1"></label>'+
						'<label for="item-2"><img src="images/photos/thumb/IMG_57A6655_thumb.jpg" alt="Pink Petals 2"></label>'+
						'<label for="item-3"><img src="images/photos/thumb/IMG_57A6659_thumb.jpg" alt="White Petals 1"></label>'+
						'<label for="item-4"><img src="images/photos/thumb/IMG_57A6669_thumb.jpg" alt="White Petals 2"></label>'+
						'<label for="item-5"><img src="images/photos/thumb/IMG_57A6677_thumb.jpg" alt="White Petals 3"></label>'+
						'<label for="item-6"><img src="images/photos/thumb/IMG_57A6684_thumb.jpg" alt="White Petals 4"></label>'+
						'</nav>'+
						'<section id="grid" class="grid">'+
						'<div data-title="Pink Petals 1">'+
							'<img src="images/photos/IMG_57A6653_web.jpg">'+
						'</div>'+
						'<div data-title="Pink Petals 2">'+
							'<img src="images/photos/IMG_57A6655_web.jpg">'+
						'</div>'+
						'<div data-title="White Petals 1">'+
							'<img src="images/photos/IMG_57A6659_web.jpg">'+
						'</div>'+
						'<div data-title="White Petals 2">'+
							'<img src="images/photos/IMG_57A6669_web.jpg">'+
						'</div>'+
						'<div data-title="White Petals 3">'+
							'<img src="images/photos/IMG_57A6677_web.jpg">'+
						'</div>'+
						'<div data-title="White Petals 4">'+
							'<img src="images/photos/IMG_57A6684_web.jpg">'+
						'</div>'+					
						'</section>'
			addContent();
		pickdiv = 'centernav'
		newclass = 'links'
		content = '<button type="button" class="back" id="back">Back</button>'
		addContent();
	// Back event
	$('#back').on('click', function(){
   	back();
	});
	}

// 	Daisies function
	function daisies(){
		clearAllDivs();
		pickdiv = 'center'
			content = 	'<input type="radio" id="item-1" name="items" checked>'+
						'<input type="radio" id="item-2" name="items">'+
						'<input type="radio" id="item-3" name="items">'+
						'<nav>'+
						'<label for="item-1"><img src="images/photos/thumb/IMG_57A6820_thumb.jpg" alt="Daisies 1"></label>'+
						'<label for="item-2"><img src="images/photos/thumb/IMG_57A6828_thumb.jpg" alt="Daisies 2"></label>'+
						'<label for="item-3"><img src="images/photos/thumb/IMG_57A6830_thumb.jpg" alt="Daisies 3"></label>'+
						'</nav>'+
						'<section id="grid" class="grid">'+
						'<div data-title="Daisies 1">'+
							'<img src="images/photos/IMG_57A6820_web.jpg">'+
						'</div>'+
						'<div data-title="Daisies 2">'+
							'<img src="images/photos/IMG_57A6828_web.jpg">'+
						'</div>'+
						'<div data-title="Daisies 3">'+
							'<img src="images/photos/IMG_57A6830_web.jpg">'+
						'</div>'+
						'</section>'
			addContent();
		pickdiv = 'centernav'
		newclass = 'links'
		content = '<button type="button" class="back" id="back">Back</button>'
		addContent();
	// Back event
	$('#back').on('click', function(){
   	back();
	});
	}	
	
// 	tonallayering function
	function tonallayering(){
		clearAllDivs();
		pickdiv = 'center'
			content = 	'<input type="radio" id="item-1" name="items" checked>'+
						'<input type="radio" id="item-2" name="items">'+
						'<input type="radio" id="item-3" name="items">'+
						'<input type="radio" id="item-4" name="items">'+
						'<nav>'+
						'<label for="item-1"><img src="images/prints/thumb/IMG_7277_thumb.jpg" alt="Mantis"></label>'+
						'<label for="item-2"><img src="images/prints/thumb/IMG_7275_thumb.jpg" alt="Calathea Refracted"></label>'+
						'<label for="item-3"><img src="images/prints/thumb/IMG_7274_thumb.jpg" alt="Drinking Slug"></label>'+
						'<label for="item-4"><img src="images/prints/thumb/IMG_7268_thumb.jpg" alt="Terrarium Spray"></label>'+
						'</nav>'+
						'<section id="grid" class="grid">'+
						'<div data-title="Mantis">'+
							'<img src="images/prints/IMG_7277_web.jpg">'+
						'</div>'+
						'<div data-title="Calathea Refracted">'+
							'<img src="images/prints/IMG_7275_web.jpg">'+
						'</div>'+
						'<div data-title="Drinking Slug">'+
							'<img src="images/prints/IMG_7274_web.jpg">'+
						'</div>'+
						'<div data-title="Terrarium Spray">'+
							'<img src="images/prints/IMG_7268_web.jpg">'+
						'</div>'+
						'</section>'
			addContent();
		pickdiv = 'centernav'
		newclass = 'links'
		content = '<button type="button" class="back" id="back">Back</button>'
		addContent();
	// Back event
	$('#back').on('click', function(){
   	back();
	});
	}	

// 	alignment function
	function alignment(){
		clearAllDivs();
		pickdiv = 'center'
			content = 	'<input type="radio" id="item-1" name="items" checked>'+
						'<nav>'+
						'<label for="item-1"><img src="images/prints/thumb/IMG_7297_thumb.jpg" alt="Bed Room"></label>'+
						'</nav>'+
						'<section id="grid" class="grid">'+
						'<div data-title="Bedroom">'+
							'<img src="images/prints/IMG_7297_web.jpg">'+
						'</div>'+
						'</section>'
			addContent();
		pickdiv = 'centernav'
		newclass = 'links'
		content = '<button type="button" class="back" id="back">Back</button>'
		addContent();
	// Back event
	$('#back').on('click', function(){
   	back();
	});
	}	
	
// 	mirrorimages function
	function mirrorimages(){
		clearAllDivs();
		pickdiv = 'center'
			content = 	'<input type="radio" id="item-1" name="items">'+
						'<input type="radio" id="item-2" name="items">'+
						'<input type="radio" id="item-3" name="items" checked>'+
						'<input type="radio" id="item-4" name="items">'+
						'<nav>'+
						'<label for="item-1"><img src="images/prints/thumb/IMG_7288_thumb.jpg" alt="Workers"></label>'+
						'<label for="item-2"><img src="images/prints/thumb/IMG_7286_thumb.jpg" alt="Lovers"></label>'+
						'<label for="item-3"><img src="images/prints/thumb/IMG_7294_thumb.jpg" alt="Plants 1"></label>'+
						'<label for="item-4"><img src="images/prints/thumb/IMG_7292_thumb.jpg" alt="Plants 2"></label>'+
						'</nav>'+
						'<section id="grid" class="grid">'+
						'<div data-title="Workers">'+
							'<img src="images/prints/IMG_7288_web.jpg">'+
						'</div>'+
						'<div data-title="Lovers">'+
							'<img src="images/prints/IMG_7286_web.jpg">'+
						'</div>'+
						'<div data-title="Plants 1">'+
							'<img src="images/prints/IMG_7294_web.jpg">'+
						'</div>'+
						'<div data-title="Plants 2">'+
							'<img src="images/prints/IMG_7292_web.jpg">'+
						'</div>'+
						'</section>'
			addContent();
		pickdiv = 'centernav'
		newclass = 'links'
		content = '<button type="button" class="back" id="back">Back</button>'
		addContent();
	// Back event
	$('#back').on('click', function(){
   	back();
	});
	}

// 	fauxcollages function
	function fauxcollages(){
		clearAllDivs();
		pickdiv = 'center'
			content = 	'<input type="radio" id="item-1" name="items" checked>'+
						'<input type="radio" id="item-2" name="items">'+
						'<nav>'+
						'<label for="item-1"><img src="images/prints/thumb/IMG_7284_thumb.jpg" alt="Stairs"></label>'+
						'<label for="item-2"><img src="images/prints/thumb/IMG_7282_thumb.jpg" alt="Bug in Magazine"></label>'+
						'</nav>'+
						'<section id="grid" class="grid">'+
						'<div data-title="Stairs">'+
							'<img src="images/prints/IMG_7284_web.jpg">'+
						'</div>'+
						'<div data-title="Bug in Magazine">'+
							'<img src="images/prints/IMG_7282_web.jpg">'+
						'</div>'+
						'</section>'
			addContent();
		pickdiv = 'centernav'
		newclass = 'links'
		content = '<button type="button" class="back" id="back">Back</button>'
		addContent();
	// Back event
	$('#back').on('click', function(){
   	back();
	});
	}

//titlebutton function
	function titlebutton(){
		clearAllDivs();
		pickdiv = 'center'
		content = '<div class="contact"> <p>Contact me at</p><BR><h2>sandrienvanommen [at] gmail.com</h2><BR><p>to inquire about</p> <BR><BR> '+
					'<ul>'+
					'<li>The acquisition of high quality prints in your preferred size</li>'+
					'<li>The acquisition of original artworks</li>'+
					'<li>Photographic coverage of your event</li>'+
					'<li>The commission of an original artwork</li>'+
					'<li>The photography of a subject of your choice</li>'+
					'<li>A monoprinting workshop or lesson cycle</li>'+
					'</ul>'+
					'</div>'
			addContent();
		$('#centernav').empty();
		$('#centernav').removeAttr("class");
		pickdiv = 'centernav'
		newclass = 'links'
		content = '<button type="button" class="back" id="back">Back</button>'
		addContent();
	// Back event
	$('#back').on('click', function(){
   	back();
	});
	}
// Back function
	function back(){
		clearAllDivs();
		defaultpage();	
	}		
		