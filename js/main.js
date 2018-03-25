jQuery(document).ready(function($){
	var contentSections = $('.cd-section'),
		navigationItems = $('#cd-vertical-nav a');

	updateNavigation();
	$(window).on('scroll', function(){
		updateNavigation();
	});

	//smooth scroll to the section
	navigationItems.on('click', function(event){
        event.preventDefault();
        smoothScroll($(this.hash));
    });
    //smooth scroll to second section
    $('.cd-scroll-down').on('click', function(event){
        event.preventDefault();
        smoothScroll($(this.hash));
    });

    //open-close navigation on touch devices
    $('.touch .cd-nav-trigger').on('click', function(){
    	$('.touch #cd-vertical-nav').toggleClass('open');
  
    });
    //close navigation on touch devices when selectin an elemnt from the list
    $('.touch #cd-vertical-nav a').on('click', function(){
    	$('.touch #cd-vertical-nav').removeClass('open');
    });

	function updateNavigation() {
		contentSections.each(function(){
			$this = $(this);
			var activeSection = $('#cd-vertical-nav a[href="#'+$this.attr('id')+'"]').data('number') - 1;
			if ( ( $this.offset().top - $(window).height()/2 < $(window).scrollTop() ) && ( $this.offset().top + $this.height() - $(window).height()/2 > $(window).scrollTop() ) ) {
				navigationItems.eq(activeSection).addClass('is-selected');
			}else {
				navigationItems.eq(activeSection).removeClass('is-selected');
			}
		});
	}

	function smoothScroll(target) {
        $('body,html').animate(
        	{'scrollTop':target.offset().top},
        	600
    	);
	}

//Custom functions

//	clear divs function
	function cleardiv(){
		document.getElementById(pickdiv).innerHTML = ""	
	}

	//	content function
	function addContent(){
		document.getElementById(pickdiv).innerHTML = content	
	}	
	
//	defaultpage function
	function defaultdiv(){
		pickdiv = 'Otherpage'
		cleardiv();
		content = 
		'<p>'+
		'<button type="button" class="button" id="Pictures">Photos</button>'+
		'<button type="button" class="button" id="Animations">Animations</button>'+
		'<button type="button" class="button" id="Websites">Websites</button>'+
		'<button type="button" class="button" id="Links">Links</button>'+
		'</p>'
		addContent();
		pickdiv = 'pubpage'
		cleardiv();
		content = 
		'<p>'+
		'<button type="button" class="button" id="Prosaq">Prosody Acquisition</button>'+
		'<button type="button" class="button" id="Prosproc">Prosodic Processing</button>'+
		'<button type="button" class="button" id="Mutualint">Mutual Intelligibility</button><br>'+
		'<button type="button" class="button" id="Lingdist">Linguistic Distance</button>'+
		'<button type="button" class="button" id="Emphlength">Emphatic Lengthening</button>'+
		'<button type="button" class="button" id="Visworld">Visual World</button>'+
		'<button type="button" class="button" id="Brain">Brain</button>'
		'</p>'
		addContent();
		
/// buttons on the titlepage
// Linkedin event
		$('#linkedin').on('click', function(){
			window.open('https://www.linkedin.com/in/sandrien-van-ommen-56021527/');
		});

// osf event
		$('#osf').on('click', function(){
			window.open('https://osf.io/2p9vb/');
		});

// researchgate event
		$('#researchgate').on('click', function(){
			window.open('https://www.researchgate.net/profile/Sandrien_Ommen');
		});

// googlecit event
		$('#googlecit').on('click', function(){
			window.open('https://scholar.google.com/citations?hl=nl&user=eS8HT4wAAAAJ');
		});
		
// github event
		$('#github').on('click', function(){
			window.open('https://github.com/SvOmmen');
		});

//buttons on the publication page
//Prosaq event
		$('#Prosaq').on('click', function(){
			prosaq();
			});

//Prosproc event
		$('#Prosproc').on('click', function(){
			Prosproc();
			});

//Mutualint event
		$('#Mutualint').on('click', function(){
			mutualint();
			});
			
//Linguisticdist event
		$('#Lingdist').on('click', function(){
			lingdist();
			});

//emphlength event
		$('#Emphlength').on('click', function(){
			emphlength();
			});
//visworld event
		$('#Visworld').on('click', function(){
			visworld();
			});
//brain event
		$('#Brain').on('click', function(){
			brain();
			});
					
// buttons on the 'other' page		
//	Pictures event
		$('#Pictures').on('click', function(){
			pictures();
			});

//	Animations event
//		$('#Animations').on('click', function(){
//			animations();
//			});

//	Links event
		$('#Links').on('click', function(){
			linkspag();
			});
//	Websites event
		$('#Websites').on('click', function(){
			websites();
			});
	}	

// Prosaq function
	function prosaq(){
		pickdiv = 'pubpage'
		cleardiv();
			content =
			'<table>'+
			'<tr>' + '<td class="year">Under Review'+'</td>'+ 
			'<td>Ommen, S. van, Boll-Avetisyan, N., Larraza, S., Bijeljac-Babic, R., H&#246hle, B. and T. Nazzi <br> <a href="pubs/vanOmmenetal(under review)ProsodicdevFrench.pdf" target=>Language-specific prosodic acquisition: a comparison of phrase boundary perception by French- and German-learning infants</a>'+'</td>'+
			'</tr>' +
			'</table>'+
			'<p>'+
			'<button type="button" class="button" id="Back">Back</button>'+
			'</p>'
		addContent()
		//	Back event
		$('#Back').on('click', function(){
			defaultdiv();
			});
	}		

// Prosproc function
	function Prosproc(){
		pickdiv = 'pubpage'
		cleardiv();
			content =
			'<table>'+
			'<tr>' + '<td class="year">2018'+'</td>'+ 
			'<td>Nixon, J.S ,Boll-Avetisyan, N. Lentz, T. O., van Ommen, S. Keij, B., Çöltekin, Ç, Liu, L., & van Rij, J. <br><a href="pubs/Nixonetal(2018)Shortterm.pdf" target=>Short-term exposure enhances perception of both between- and within-category acoustic information. Proceedings of Speech Prosody 2018. In press.'+'</td>'+
			'</tr>' +
			'<tr>' + '<td class="year">2016'+'</td>'+ 
			'<td>Ommen, S. van <br> <a href="pubs/vanOmmen(2016)Listentothebeat.pdf" target=>Listen to the beat: A cross-linguistic perspective on the use of stress in segmentation </a>'+'Doctoral dissertation, Utrecht University. Published by LOT (Landelijke Onderzoeksschool Taalwetenschap)'+'</td>'+
			'</tr>' +
			'<tr>'+
			'<td class="year">2012</td>'+ 
			'<td>Ommen, S. van and R.W.J. Kager. <br><a href="pubs/vanOmmenKager(2012)Progressiveuseofmetricalcues.pdf" target=>Progressive Use of Metrical Cues: a Cross-linguistic Study.</a> In: Proceedings of NLPCS 2012, 9th International Workshop on Natural Language Processing and Cognitive Science, Wroclaw, Poland, p. 74-84.'+
			'</td>'+
			'</tr>'+
			'</table>'+
			'<p>'+
			'<button type="button" class="button" id="Back">Back</button>'+
			'</p>'
		addContent()
		//	Back event
		$('#Back').on('click', function(){
			defaultdiv();
			});
	}		

// Mutualint function
	function mutualint(){
		pickdiv = 'pubpage'
		cleardiv();
			content =
			'<table>'+
			'<tr>' + '<td class="year">2013'+'</td>'+ 
			'<td>Ommen, S. van, P. Hendriks, D. G. Gilbers, V. J. J. H van Heuven and C. S. Gooskens.<br> <a href="pubs/vanOmmenetal(2013)Lenition.pdf" target=>Is lenition a factor in the asymmetry in intelligibility between Danish and Swedish?</a>'+' Lingua 137, 193-213' +'</td>'+
			'</tr>' +
			'</table>'+
			'<p>'+
			'<button type="button" class="button" id="Back">Back</button>'+
			'</p>'
		addContent()
		//	Back event
		$('#Back').on('click', function(){
			defaultdiv();
			});
	}		


// Linguistidist function
	function lingdist(){
		pickdiv = 'pubpage'
		cleardiv();
			content =
			'<table>'+
			'<tr>'+
			'<td class="year">2013</td>'+ 
			'<td>Nerbonne, J., S. van Ommen, C.G. Gooskens and L. Impe. <br><a href="pubs/Nerbonneetal(2013)AcorpusofregionalDutchspeech.pdf" target=>A corpus of regional Dutch speech.</a> In: Charlotte Gooskens and Renee van Bezooijen (eds.) Phonetics in Europe. Perception and production, Peter Lang.</td>'+
			'</tr>'+
			'<tr><td class="year">2013</td>'+ 
			'<td>Nerbonne, J., S. van Ommen, C.G. Gooskens and M. Wieling. <br><a href="pubs/Nerbonneetal(2013)Measuringsociallymotivatedpronunciationdifferences.pdf" target=>Measuring socially motivated pronunciation differences</a>, in: Lars Boring and Aju Saxena (eds.) Approaches to Measuring Linguistic Differences, Mouton De Gruyter.</td>'+
			'</tr>'+
			'</table>'+
			'<p>'+
			'<button type="button" class="button" id="Back">Back</button>'+
			'</p>'
		addContent()
		//	Back event
		$('#Back').on('click', function(){
			defaultdiv();
			});
	}
	
// Emphlength function
	function emphlength(){
		pickdiv = 'pubpage'
		cleardiv();
			content =
			'<table>'+
			'<tr>'+
			'<td class="year">2007</td>' +
			'<td>Ommen, S. van, J. Hoeksema and D.G. Gilbers. <br><a href="pubs/vanOmmenetal(2007)Heeelelangevocalen.pdf" target=>Heeeeele lange vocalen: een onderzoek naar emfatische rekking</a>, TABU, 36-1/2, 39-64'+
			'</td>'+
			'</tr>'+
			'</table>'+
			'<p>'+
			'<button type="button" class="button" id="Back">Back</button>'+
			'</p>'
		addContent()
		//	Back event
		$('#Back').on('click', function(){
			defaultdiv();
			});
	}
	
// Visworld function
	function visworld(){
		pickdiv = 'pubpage'
		cleardiv();
			content =
			'<table>'+
			'<tr>'+
			'<td class="year">2017</td>' +
			'<td>Helo, A., Ommen, S. van, Pannasch, S., Danteny-Dordoigne, L., Rämä, P. <br><a href="pubs/Heloetal(2017)Semanticconsistency.pdf" target=>Influence of semantic consistency and perceptual features on visual attention during scene viewing in toddlers</a>, Infant Behavior and Development, 49, 248-266'+
			'</td>'+
			'</tr>'+
			'</table>'+
			'<p>'+
			'<button type="button" class="button" id="Back">Back</button>'+
			'</p>'
		addContent()
		//	Back event
		$('#Back').on('click', function(){
			defaultdiv();
			});
	}
	
// Animations function
	function animations(){
		cleardiv();
			pickdiv = 'Otherpage'
			content =
			'<p>'+
			'<button type="button" id="vosje" class="gif"></button>' +
			'<button type="button" id="gibbon" class="gif"></button>' +
			'<button type="button" id="pirouette" class="gif"></button>' +
			'<button type="button" id="slakje" class="gif"></button>' +
			
			'<button type="button" class="button" id="Back">Back</button>'+
			'</p>'
		addContent()
		//	Back event
		$('#Back').on('click', function(){
			defaultdiv();
			});
	}		
	
	
// Links function
	function linkspag(){
		cleardiv();
			pickdiv = 'Otherpage'
			content =
			'<p>'+
			'<a href="http://www.nporadio1.nl/nieuws-en-co/onderwerpen/346470-wetenschap-het-ritme-van-taal" target=>Interview on Dutch radio</a><br>'+
			'<button type="button" class="button" id="Back">Back</button>'+
			'</p>'
		addContent()
		//	Back event
		$('#Back').on('click', function(){
			defaultdiv();
			});
	}		
// 	Websites function
	function websites(){
		cleardiv();
			pickdiv = 'Otherpage'
			content = 
			'<p>'+
			'<a href="http://svommen.github.io" target=>Sandrien van Ommen</a><br>'+
			'<a href="http://www.gaaikeeuwema.nl" target=>Visual artist Gaaike Euwema</a><br>'+
			'<a href="http://www.hum.uu.nl/medewerkers/s.vanommen/ELiTU.html" target=>Experimental Linguistics Talks Utrecht</a><br>'+
			'<button type="button" class="button" id="Back">Back</button>'+
			'</p>'
		addContent()
		//	Back event
		$('#Back').on('click', function(){
			defaultdiv();
			});
		}
defaultdiv()
});
