$(document).ready(function(){

//	default event

	defaultdiv();	

	});	

//FUNCTIONS		
//	clear divs function
	function clearAllDivs(){
		$('#center').empty();
		$('#center').removeAttr("class");
		$('#left').empty();
		$('#centernav').empty();
		$('#centernav').removeAttr("class");
	}
//	content function
	function addContent(){
		document.getElementById(pickdiv).setAttribute("class", newclass)
		document.getElementById(pickdiv).innerHTML = content	
	}	


//	defaultpage function
	function defaultdiv(){
		pickdiv = 'center'
			newclass = 'info'
			content=
			'<button type="title2" class="title2" id="title2">Rhythmic prediction in speech perception: are our brain waves in sync with our native language?<span class="tooltiptext">sandrienvo[at]gmail.com</span></button>'+
			'<a href="https://neurocenter-unige.ch/research-groups/anne-lise-giraud/"><img src="./images/logounige.png" alt="UNIGE" id="logo1"></a>'+
			'<a href="https://ec.europa.eu/programmes/horizon2020/en/what-horizon-2020"><img src="./images/MC_EU.jpg" alt="MSC eu" id="logo2"></a>'+
			'<a href="https://www.upf.edu/web/cbc"><img src="./images/logocbc.PNG" alt="CBC" id="logo3"></a>'+
			'<a href="https://www.uu.nl/en/research/utrecht-institute-of-linguistics-ots"><img src="./images/logouilots.jpg" alt="UiL OTS" id="logo4"></a>'+
			'<a href="https://incc-paris.fr/language-and-cognition/"><img src="./images/logoincc.png" alt="INCC" id="logo5"></a>'+
			'<BR><BR><BR><BR>'+
			'<center><p>This project has received funding from the European Union’s Horizon 2020 research and innovation programme under the Marie Sklodowska-Curie grant agreement No 892890</p></center>'+
			'<video width="100%" controls><source src="./images/entrainbrainsubt.mp4" type="video/mp4" poster src="./images/entrainbrain.jpg">Your browser does not support the video tag.</video>'
			addContent();
		pickdiv = "left"
		newclass = "links"
		content = 
			'<button type="title" class="titlebutton" id="titlebutton">Sandrien van Ommen, PhD<span class="tooltiptext">sandrienvo[at]gmail.com</span></button>'+
			'<BR><button type="lab" class="labbutton" id="labbutton" onclick="location.href=`https://neurocenter-unige.ch/research-groups/anne-lise-giraud/`">Marie Sklodowska Curie Fellow<BR> University of Geneva, Lab Anne-Lise Giraud<span class="tooltiptext">sandrien.vanommen[at]unige.ch</span></button>'+
			'<BR><button type="button" class="button" id="Projnow">Rhythmic Prediction</button>'+
			'<BR><button type="button" class="button" id="Work">Publications</button>'+
			'<BR><button type="button" class="button" id="CV">CV</button>'
			addContent();	
		pickdiv = "centernav"
		newclass = "links"
		content = '<div id="media"><button type="button" class="smallbutton" id="linkedin" onclick="location.href=`https://www.linkedin.com/in/sandrien-van-ommen-56021527`"></button><button type="button" class="smallbutton" id="osf" onclick="location.href=`https://osf.io/2p9vb`"></button><button type="button" class="smallbutton" id="researchgate" onclick="location.href=`https://www.researchgate.net/profile/Sandrien_Ommen`"></button><button type="button" class="smallbutton" id="googlecit" onclick="location.href=`https://scholar.google.com/citations?user=eS8HT4wAAAAJ`"></button><button type="button" class="smallbutton" id="github" onclick="location.href=`https://github.com/SvOmmen`"></button><button type="button" class="smallbutton" id="instagram" onclick="location.href=`https://www.instagram.com/sandrienvo`"></button><button type="button" class="smallbutton" id="twitter" onclick="location.href=`https://twitter.com/VanSandrien`"></button>'+
		'<button type = "button" class="button" id="terug">Back</button></div>'
		addContent();
//		Goback event embedded
		$('#terug').on('click', function(){
		defaultdiv();
		});
//		Goback event embedded
			$('#titlebutton').on('click', function(){
				defaultdiv();
			});	
	
// Current Project event
		$('#Projnow').on('click', function(){
    	projnow();
		});

// Work event
		$('#Work').on('click', function(){
    	work();
		});
// CV event
		$('#CV').on('click', function(){
    	CV();
		});

	}

// Embedded events
// Current Project
	function projnow(){
			$('#center').empty();
			pickdiv = 'center'
			newclass =  "info"
			content=
			'<button type="title2" class="title2" id="title2">Rhythmic prediction in speech perception: are our brain waves in sync with our native language?<span class="tooltiptext">sandrienvo[at]gmail.com</span></button>'+
			'<a href="https://neurocenter-unige.ch/research-groups/anne-lise-giraud/"><img src="./images/logounige.png" alt="UNIGE" id="logo1"></a>'+
			'<a href="https://ec.europa.eu/programmes/horizon2020/en/what-horizon-2020"><img src="./images/MC_EU.jpg" alt="MSC eu" id="logo2"></a>'+
			'<a href="https://www.upf.edu/web/cbc"><img src="./images/logocbc.PNG" alt="CBC" id="logo3"></a>'+
			'<a href="https://www.uu.nl/en/research/utrecht-institute-of-linguistics-ots"><img src="./images/logouilots.jpg" alt="UiL OTS" id="logo4"></a>'+
			'<a href="https://incc-paris.fr/language-and-cognition/"><img src="./images/logoincc.png" alt="INCC" id="logo5"></a>'+
			'<BR><BR><BR><BR>'+
			'<center><p>This project has received funding from the European Union’s Horizon 2020 research and innovation programme under the Marie Sklodowska-Curie grant agreement No 892890</p></center>'+
			'<BR>'+
			'<p>Speech has rhythmic properties that widely differ across languages. <span style="color:grey">When we listen to foreign languages, we may perceive them to be more musical, or rather more rap-like than our own. Even if we are unaware of it, the rhythm and melody of language, what we call its prosody, reflects its linguistic structure. On one hand, prosody emphasizes content words and new information with stress and accents, which listeners can attend to. On the other hand, it is aligned to phrase edges, which helps listeners to divide speech into smaller bits to understand its structure. <BR><BR> Without prosody, speech would somehow be \'too fast\' to understand because we would have no cues to process it efficiently. In fact,</span> listeners even use prosody predictively to process speech efficiently. <span style="color:grey"> Because of prosody, listeners know when to expect the next word, the next bit of new information, or the end of the sentence. This way, they prepare their attention or already plan when to seamlessly start their own speaking turn. <BR><BR> So, the listener, or rather their brain, is actively predicting when important speech events will happen, using prosody. But it is still unclear how they do this.</span> One hypothesis is that the rhythm of speech, such as the alternation of stressed and unstressed syllables, helps listeners time their attention. <span style="color:grey"> Rhythm is repetitive, so it is an excellent cue to when something (the rhythmic thing) will happen again. <BR><BR> In fact, rhythm is omnipresent in nature, including in our own brain. </span>Currently, a huge research effort into the relation of these internal (brain) rhythms to external (world) rhythms is taking place  <span style="color:grey"> around the world, because knowledge about the synchronization of rhythms is key to understanding how we perceive and interact with our environment. The investigation of these rhythms has led to an important progress in our understanding of perception: perception is not passive but active. Perception is the continous process of updating our predictions.<BR><BR> </span> In the current project we investigate whether the synchronization of brain waves to speech prosody is responsible for what we know about the language-specific nature of speech perception. Additionally, by comparing listeners of different languages we will gain insight into whether this synchronization of rhythms is driven by our own experience. <span style="color:grey"> Do Spanish-language listeners have the same brain waves when hearing Spanish as Dutch-language listeners would when hearing Spanish? Or does their knowledge and experience change their internal brain waves, and therefore the way they perceive speech, and their ability to predict what will happen? Is this why other languages always sound so fast...?</span></p>'+
			'<center><a onclick="defaultdiv()"><img src="./images/entrainbrain.jpg" width="400" alt="animation" id="animation"></a>'+
			'<BR><BR>'
			addContent();
			}
// Project
	function work(){
			$('#center').empty();
			pickdiv = 'center'
			newclass =  "info"
			content=
			'<p><button class="refbutton" onclick="location.href=`./documents/Darribaetal(2021)Differenttimescales.pdf`"><span style="color: grey">Accepted</span> Darriba, A, van Ommen, S., Hsu, Y-F, Waszak, F. Visual predictions operate on different time-scales. Journal of Cognitive Neuroscience</button><button type="button" class="brain"></button><button type="button" class="vision"></button><BR><button class="refbutton" onclick="location.href=`https://www.sciencedirect.com/science/article/abs/pii/S0749596X2030022X`"><span style="color: grey">2020</span> van Ommen, S., Boll-Avetisyan, N., Larraza, S., Wellmann, C., Bijeljac-Babic, R., Hohle, B.;Nazzi, T. Language-specific prosodic acquisition: a comparison of phrase boundary perception by French- and German-learning infants. Journal of Memory and Language 112, 104108</button><button type="button" class="acquisition"></button><button type="button" class="prosody"></button><BR><button class="refbutton" onclick="location.href=`./documents/BollAvetisyanetal(2018)NeuralResponseDevelopment.pdf`"><span style="color: grey">2018</span> Boll-Avetisyan, N., Nixon, J., Lentz, T., Liu, L., van Ommen, S., Coltekin, C., and van Rij,J. Neural response development during distributional learning, Proceedings of Interspeech 2018,Iderabad, India.</button><button type="button" class="brain"></button><button type="button" class="prosody"></button><BR><button class="refbutton" onclick="location.href=`./documents/Nixonetal(2018)Shortterm.pdf`"><span style="color:grey">2018</span> Nixon, J.S, Boll-Avetisyan, N. Lentz, T. O., van Ommen, S., Keij, B., Coltekin, C., Liu, L.,and van Rij, J. Short-term exposure enhances perception of both between- and within-category acoustic information. Proceedings of Speech Prosody 2018.</button><button type="button" class="brain"></button><button type="button" class="prosody"></button><BR><button type="button" class="refbutton" onclick="location.href=`./documents/Heloetal(2017)Semanticconsistency.pdf`"><span style="color: grey">2017</span> Helo, A., van Ommen, S., Pannasch, S., Danteny-Dordoigne, L., Rama, P. Influence of semantic consistency and perceptual features on visual attention during scene viewing in toddlers, Infant Behavior and Development, 49, 248-266.</button><button type="button" class="vision"></button><BR><button class="refbutton" onclick="location.href=`./documents/vanOmmen(2016)Listentothebeat.pdf`"><span style="color:grey">2016</span> van Ommen, S. Listen to the beat: A cross-linguistic perspective on the use of stress in segmentation.Doctoral dissertation, Utrecht University. Published by LOT (Landelijke Onderzoeksschool Taalwetenschap).</button><button type="button" class="prosody"></button><BR><button class="refbutton" onclick="location.href=`./documents/Nerbonneetal(2013)Measuringsociallymotivatedpronunciationdifferences.pdf`"><span style="color:grey">2013</span> Nerbonne, J., van Ommen, S., Gooskens, C.G. and Wieling, M. Measuring socially motivated pronunciation differences, In: Lars Boring and Aju Saxena (eds.) Approaches to Measuring Linguistic Differences, Mouton De Gruyter.</button><button type="button" class="distance"></button><BR><button class="refbutton" onclick="location.href=`./documents/Nerbonneetal(2013)Acorpusofregionaldutchspeech.pdf`"><span style="color:grey">2013</span> Nerbonne, J., van Ommen, S., Gooskens, C.G. and Impe, L. A corpus of regional Dutch speech.In: Charlotte Gooskens and Renee van Bezooijen (eds.) Phonetics in Europe. Perception and production, Peter Lang.</button><button type="button" class="distance"></button><BR><button class="refbutton" onclick="location.href=`./documents/vanOmmenetal(2013)Lenition.pdf`"><span style="color:grey">2013</span> van Ommen, S., P. Hendriks, D. G. Gilbers, V. J. J. H van Heuven and C. S. Gooskens. Is diachronic lenition a factor in the asymmetry in intelligibility between Danish and Swedish? Lingua 137, 193-213.</button><button type="button" class="intelligibility"></button><BR><button class="refbutton" onclick="location.href=`./documents/vanOmmenKager(2012)Progressiveuseofmetricalcues.pdf`"><span style="color:grey">2012</span> van Ommen, S. and R.W.J. Kager. Progressive Use of Metrical Cues: a Cross-linguistic Study.In: Proceedings of NLPCS 2012, 9th International Workshop on Natural Language Processing and Cognitive Science, Wroclaw, Poland, p. 74-84.</button><button type="button" class="prosody"></button><BR><button class="refbutton" onclick="location.href=`./documents/vanOmmenetal(2007)Heeelelangevocalen.pdf`"><span style="color:grey">2007</span> van Ommen, S., J. Hoeksema and D.G. Gilbers. Heeeeele lange vocalen: een onderzoek naar emfatische rekking, TABU, 36-1/2, 39-64</button><button type="button" class="speech"></p>' 
			addContent();
			// Publication subsets event
			const divs = document.querySelectorAll('.prosody');
			divs.forEach(el => el.addEventListener('click', event => {
			prospub();
			}));
			const divs2 = document.querySelectorAll('.speech');
			divs2.forEach(el => el.addEventListener('click', event => {
			speechpub();
			}));
			const divs3 = document.querySelectorAll('.brain');
			divs3.forEach(el => el.addEventListener('click', event => {
			brainpub();
			}));
			const divs4 = document.querySelectorAll('.intelligibility');
			divs4.forEach(el => el.addEventListener('click', event => {
			intelpub();
			}));
			const divs5 = document.querySelectorAll('.acquisition');
			divs5.forEach(el => el.addEventListener('click', event => {
			acpub();
			}));
			const divs6 = document.querySelectorAll('.distance');
			divs6.forEach(el => el.addEventListener('click', event => {
			distpub();
			}));
			const divs7 = document.querySelectorAll('.vision');
			divs7.forEach(el => el.addEventListener('click', event => {
			visionpub();
			}));
	}				
// Work
	function prospub(){
		$('#center').empty();
			pickdiv = 'center'
			newclass =  "info"
			content=
			'<p><img src="./gifs/prosody.gif" alt="Prosody" class="center"><BR><button class="refbutton" onclick="location.href=`https://www.sciencedirect.com/science/article/abs/pii/S0749596X2030022X`"><span style="color: grey">2020</span> van Ommen, S., Boll-Avetisyan, N., Larraza, S., Wellmann, C., Bijeljac-Babic, R., Hohle, B.;Nazzi, T. Language-specific prosodic acquisition: a comparison of phrase boundary perception by French- and German-learning infants. Journal of Memory and Language 112, 104108</button><button type="button" class="acquisition"></button><button type="button" class="prosody"></button><BR><button class="refbutton" onclick="location.href=`./documents/BollAvetisyanetal(2018)NeuralResponseDevelopment.pdf`"><span style="color: grey">2018</span> Boll-Avetisyan, N., Nixon, J., Lentz, T., Liu, L., van Ommen, S., Coltekin, C., and van Rij,J. Neural response development during distributional learning, Proceedings of Interspeech 2018,Iderabad, India.</button><button type="button" class="brain"></button><button type="button" class="prosody"></button><BR><button class="refbutton" onclick="location.href=`./documents/Nixonetal(2018)Shortterm.pdf`"><span style="color:grey">2018</span> Nixon, J.S, Boll-Avetisyan, N. Lentz, T. O., van Ommen, S., Keij, B., Coltekin, C., Liu, L.,and van Rij, J. Short-term exposure enhances perception of both between- and within-category acoustic information. Proceedings of Speech Prosody 2018.</button><button type="button" class="brain"></button><button type="button" class="prosody"></button><BR><button class="refbutton" onclick="location.href=`./documents/vanOmmen(2016)Listentothebeat.pdf`"><span style="color:grey">2016</span> van Ommen, S. Listen to the beat: A cross-linguistic perspective on the use of stress in segmentation.Doctoral dissertation, Utrecht University. Published by LOT (Landelijke Onderzoeksschool Taalwetenschap).</button><button type="button" class="prosody"></button><BR><button class="refbutton" onclick="location.href=`./documents/vanOmmenKager(2012)Progressiveuseofmetricalcues.pdf`"><span style="color:grey">2012</span> van Ommen, S. and R.W.J. Kager. Progressive Use of Metrical Cues: a Cross-linguistic Study.In: Proceedings of NLPCS 2012, 9th International Workshop on Natural Language Processing and Cognitive Science, Wroclaw, Poland, p. 74-84.</button><button type="button" class="prosody"></button></p>' 
			addContent();
			// Publication subsets event
			const divs = document.querySelectorAll('.prosody');
			divs.forEach(el => el.addEventListener('click', event => {
			prospub();
			}));
			const divs2 = document.querySelectorAll('.speech');
			divs2.forEach(el => el.addEventListener('click', event => {
			speechpub();
			}));
			const divs3 = document.querySelectorAll('.brain');
			divs3.forEach(el => el.addEventListener('click', event => {
			brainpub();
			}));
			const divs4 = document.querySelectorAll('.intelligibility');
			divs4.forEach(el => el.addEventListener('click', event => {
			intelpub();
			}));
			const divs5 = document.querySelectorAll('.acquisition');
			divs5.forEach(el => el.addEventListener('click', event => {
			acpub();
			}));
			const divs6 = document.querySelectorAll('.distance');
			divs6.forEach(el => el.addEventListener('click', event => {
			distpub();
			}));
			const divs7 = document.querySelectorAll('.vision');
			divs7.forEach(el => el.addEventListener('click', event => {
			visionpub();
			}));
    	}
	function speechpub(){
		$('#center').empty();
			pickdiv = 'center'
			newclass =  "info"
			content=
			'<p><img src="./gifs/speech.gif" alt="Speech" class="center"><BR></button><button class="refbutton" onclick="location.href=`./documents/vanOmmenetal(2007)Heeelelangevocalen.pdf`"><span style="color:grey">2007</span> van Ommen, S., J. Hoeksema and D.G. Gilbers. Heeeeele lange vocalen: een onderzoek naar emfatische rekking, TABU, 36-1/2, 39-64</button><button type="button" class="speech"></p>'
			addContent();
			// Publication subsets event
			const divs = document.querySelectorAll('.prosody');
			divs.forEach(el => el.addEventListener('click', event => {
			prospub();
			}));
			const divs2 = document.querySelectorAll('.speech');
			divs2.forEach(el => el.addEventListener('click', event => {
			speechpub();
			}));
			const divs3 = document.querySelectorAll('.brain');
			divs3.forEach(el => el.addEventListener('click', event => {
			brainpub();
			}));
			const divs4 = document.querySelectorAll('.intelligibility');
			divs4.forEach(el => el.addEventListener('click', event => {
			intelpub();
			}));
			const divs5 = document.querySelectorAll('.acquisition');
			divs5.forEach(el => el.addEventListener('click', event => {
			acpub();
			}));
			const divs6 = document.querySelectorAll('.distance');
			divs6.forEach(el => el.addEventListener('click', event => {
			distpub();
			}));
			const divs7 = document.querySelectorAll('.vision');
			divs7.forEach(el => el.addEventListener('click', event => {
			visionpub();
			}));
	}
	function intelpub(){
		$('#center').empty();
			pickdiv = 'center'
			newclass =  "info"
			content=
			'<p><img src="./gifs/intelligibility.gif" alt="Intelligibility" class="center"><BR><button class="refbutton" onclick="location.href=`./documents/vanOmmenetal(2013)Lenition.pdf`"><span style="color:grey">2013</span> van Ommen, S., P. Hendriks, D. G. Gilbers, V. J. J. H van Heuven and C. S. Gooskens. Is diachronic lenition a factor in the asymmetry in intelligibility between Danish and Swedish? Lingua 137, 193-213.</button><button type="button" class="intelligibility"></button></p>'
			addContent();
			// Publication subsets event
			const divs = document.querySelectorAll('.prosody');
			divs.forEach(el => el.addEventListener('click', event => {
			prospub();
			}));
			const divs2 = document.querySelectorAll('.speech');
			divs2.forEach(el => el.addEventListener('click', event => {
			speechpub();
			}));
			const divs3 = document.querySelectorAll('.brain');
			divs3.forEach(el => el.addEventListener('click', event => {
			brainpub();
			}));
			const divs4 = document.querySelectorAll('.intelligibility');
			divs4.forEach(el => el.addEventListener('click', event => {
			intelpub();
			}));
			const divs5 = document.querySelectorAll('.acquisition');
			divs5.forEach(el => el.addEventListener('click', event => {
			acpub();
			}));
			const divs6 = document.querySelectorAll('.distance');
			divs6.forEach(el => el.addEventListener('click', event => {
			distpub();
			}));
			const divs7 = document.querySelectorAll('.vision');
			divs7.forEach(el => el.addEventListener('click', event => {
			visionpub();
			}));
	}
	function visionpub(){
		$('#center').empty();
			pickdiv = 'center'
			newclass =  "info"
			content=
			'<p><img src="./gifs/vision.gif" alt="Vision" class="center"><BR><button class="refbutton" onclick="location.href=`./documents/Darribaetal(2021)Differenttimescales.pdf`"><span style="color: grey">Accepted</span> Darriba, A, van Ommen, S., Hsu, Y-F, Waszak, F. Visual predictions operate on different time-scales. Journal of Cognitive Neuroscience</button><button type="button" class="brain"></button><button type="button" class="vision"></button><BR><button type="button" class="refbutton" onclick="location.href=`./documents/Heloetal(2017)Semanticconsistency.pdf`"><span style="color: grey">2017</span> Helo, A., van Ommen, S., Pannasch, S., Danteny-Dordoigne, L., Rama, P. Influence of semantic consistency and perceptual features on visual attention during scene viewing in toddlers, Infant Behavior and Development, 49, 248-266.</button><button type="button" class="vision"></button></p>'
			addContent();
			// Publication subsets event
			const divs = document.querySelectorAll('.prosody');
			divs.forEach(el => el.addEventListener('click', event => {
			prospub();
			}));
			const divs2 = document.querySelectorAll('.speech');
			divs2.forEach(el => el.addEventListener('click', event => {
			speechpub();
			}));
			const divs3 = document.querySelectorAll('.brain');
			divs3.forEach(el => el.addEventListener('click', event => {
			brainpub();
			}));
			const divs4 = document.querySelectorAll('.intelligibility');
			divs4.forEach(el => el.addEventListener('click', event => {
			intelpub();
			}));
			const divs5 = document.querySelectorAll('.acquisition');
			divs5.forEach(el => el.addEventListener('click', event => {
			acpub();
			}));
			const divs6 = document.querySelectorAll('.distance');
			divs6.forEach(el => el.addEventListener('click', event => {
			distpub();
			}));
			const divs7 = document.querySelectorAll('.vision');
			divs7.forEach(el => el.addEventListener('click', event => {
			visionpub();
			}));
	}
	function distpub(){
		$('#center').empty();
			pickdiv = 'center'
			newclass =  "info"
			content=
			'<p><img src="./gifs/distance.gif" alt="Distance" class="center"><BR><button class="refbutton" onclick="location.href=`./documents/Nerbonneetal(2013)Measuringsociallymotivatedpronunciationdifferences.pdf`"><span style="color:grey">2013</span> Nerbonne, J., van Ommen, S., Gooskens, C.G. and Wieling, M. Measuring socially motivated pronunciation differences, In: Lars Boring and Aju Saxena (eds.) Approaches to Measuring Linguistic Differences, Mouton De Gruyter.</button><button type="button" class="distance"></button><BR><button class="refbutton" onclick="location.href=`./documents/Nerbonneetal(2013)Acorpusofregionaldutchspeech.pdf`"><span style="color:grey">2013</span> Nerbonne, J., van Ommen, S., Gooskens, C.G. and Impe, L. A corpus of regional Dutch speech.In: Charlotte Gooskens and Renee van Bezooijen (eds.) Phonetics in Europe. Perception and production, Peter Lang.</button><button type="button" class="distance"></button></p>'
			addContent();
			// Publication subsets event
			const divs = document.querySelectorAll('.prosody');
			divs.forEach(el => el.addEventListener('click', event => {
			prospub();
			}));
			const divs2 = document.querySelectorAll('.speech');
			divs2.forEach(el => el.addEventListener('click', event => {
			speechpub();
			}));
			const divs3 = document.querySelectorAll('.brain');
			divs3.forEach(el => el.addEventListener('click', event => {
			brainpub();
			}));
			const divs4 = document.querySelectorAll('.intelligibility');
			divs4.forEach(el => el.addEventListener('click', event => {
			intelpub();
			}));
			const divs5 = document.querySelectorAll('.acquisition');
			divs5.forEach(el => el.addEventListener('click', event => {
			acpub();
			}));
			const divs6 = document.querySelectorAll('.distance');
			divs6.forEach(el => el.addEventListener('click', event => {
			distpub();
			}));
			const divs7 = document.querySelectorAll('.vision');
			divs7.forEach(el => el.addEventListener('click', event => {
			visionpub();
			}));
	}
	function brainpub(){
		$('#center').empty();
			pickdiv = 'center'
			newclass =  "info"
			content=
			'<p><img src="./gifs/brain.gif" alt="Brain" class="center"><BR><button class="refbutton" onclick="location.href=`./documents/Darribaetal(2021)Differenttimescales.pdf`"><span style="color: grey">Accepted</span> Darriba, A, van Ommen, S., Hsu, Y-F, Waszak, F. Visual predictions operate on different time-scales. Journal of Cognitive Neuroscience</button><button type="button" class="brain"></button><button type="button" class="vision"></button><BR><button class="refbutton" onclick="location.href=`./documents/BollAvetisyanetal(2018)NeuralResponseDevelopment.pdf`"><span style="color: grey">2018</span> Boll-Avetisyan, N., Nixon, J., Lentz, T., Liu, L., van Ommen, S., Coltekin, C., and van Rij,J. Neural response development during distributional learning, Proceedings of Interspeech 2018,Iderabad, India.</button><button type="button" class="brain"></button><button type="button" class="prosody"></button><BR><button class="refbutton" onclick="location.href=`./documents/Nixonetal(2018)Shortterm.pdf`"><span style="color:grey">2018</span> Nixon, J.S, Boll-Avetisyan, N. Lentz, T. O., van Ommen, S., Keij, B., Coltekin, C., Liu, L.,and van Rij, J. Short-term exposure enhances perception of both between- and within-category acoustic information. Proceedings of Speech Prosody 2018.</button><button type="button" class="brain"></button><button type="button" class="prosody"></button></p>'
			addContent();
			// Publication subsets event
			const divs = document.querySelectorAll('.prosody');
			divs.forEach(el => el.addEventListener('click', event => {
			prospub();
			}));
			const divs2 = document.querySelectorAll('.speech');
			divs2.forEach(el => el.addEventListener('click', event => {
			speechpub();
			}));
			const divs3 = document.querySelectorAll('.brain');
			divs3.forEach(el => el.addEventListener('click', event => {
			brainpub();
			}));
			const divs4 = document.querySelectorAll('.intelligibility');
			divs4.forEach(el => el.addEventListener('click', event => {
			intelpub();
			}));
			const divs5 = document.querySelectorAll('.acquisition');
			divs5.forEach(el => el.addEventListener('click', event => {
			acpub();
			}));
			const divs6 = document.querySelectorAll('.distance');
			divs6.forEach(el => el.addEventListener('click', event => {
			distpub();
			}));
			const divs7 = document.querySelectorAll('.vision');
			divs7.forEach(el => el.addEventListener('click', event => {
			visionpub();
			}));
	}
	function acpub(){
	$('#center').empty();
		pickdiv = 'center'
		newclass =  "info"
		content=
		'<p><img src="./gifs/acquisition.gif" alt="Acquisition" class="center"><BR><button class="refbutton" onclick="location.href=`./documents/vanOmmenetal(2020)Languagespecificprosody.pdf`"><span style="color: grey">2020</span> van Ommen, S., Boll-Avetisyan, N., Larraza, S., Wellmann, C., Bijeljac-Babic, R., Hohle, B.;Nazzi, T. Language-specific prosodic acquisition: a comparison of phrase boundary perception by French- and German-learning infants. Journal of Memory and Language 112, 104108</button><button type="button" class="acquisition"></button><button type="button" class="prosody"></button></p>'
		addContent();
			// Publication subsets event
			const divs = document.querySelectorAll('.prosody');
			divs.forEach(el => el.addEventListener('click', event => {
			prospub();
			}));
			const divs2 = document.querySelectorAll('.speech');
			divs2.forEach(el => el.addEventListener('click', event => {
			speechpub();
			}));
			const divs3 = document.querySelectorAll('.brain');
			divs3.forEach(el => el.addEventListener('click', event => {
			brainpub();
			}));
			const divs4 = document.querySelectorAll('.intelligibility');
			divs4.forEach(el => el.addEventListener('click', event => {
			intelpub();
			}));
			const divs5 = document.querySelectorAll('.acquisition');
			divs5.forEach(el => el.addEventListener('click', event => {
			acpub();
			}));
			const divs6 = document.querySelectorAll('.distance');
			divs6.forEach(el => el.addEventListener('click', event => {
			distpub();
			}));
			const divs7 = document.querySelectorAll('.vision');
			divs7.forEach(el => el.addEventListener('click', event => {
			visionpub();
			}));
	}
// 	CV function
	function CV(){
		pickdiv = 'center'
		newclass = "info"
		content = 	
		'<button class="CV" onclick="location.href=`./documents/CV_SvO.pdf`"></button>'
		addContent();	
	}  