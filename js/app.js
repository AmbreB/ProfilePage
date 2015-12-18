'use strict';
/*
$(function(){
	var getJSON = function(){
		$.getJSON('http://vps227573.ovh.net/u-13.json', function(json){
		var result = $('span[elt]'); 						// CA CREE UN PUTAIN DE TABLEAU
			for ( var i = 0; i < result.length; i++) { 		// On itère sur ce tableau result
				var attribut = $(result[i]).attr('elt');	// Récupère la valeur de l'attribut "elt"
				var value = json[attribut]; 				// Récupère la valeur dans le json correspondant à l'attribut
				$(result[i]).html(value); 					// Place dans le html la valeur correspondant à la clé
			}
		});
	}
	getJSON();
	$('a').on('click', function(){
		var adresse = $(this).attr('adresse');
		$('.colcenter').load(adresse);
		getJSON();
	});
});
$(function(){
	$.getJSON('http://vps227573.ovh.net/u-13.json', function(json){ // Recupérer ton JSON
		var fullName = "{{first_name}} {{last_name}}";				// Création du template en allant chercher la clé sur le JSON
		var infoFullName = Mustache.to_html(fullName, json);		// Appel de Mustache pour remplacer les valeurs du template par ceux du JSON
		$('.presentation h1').html(infoFullName);					// Va mettre la valeur dans la cible HTML					
	});
});
	var myTemplate = function(mymustache, cible, json){
		var template = mymustache;
		var info = Mustache.to_html(template, json);
		cible.html(info);
	}
	$.getJSON('http://vps227573.ovh.net/u-'+ id +'.json', function(json){
		myTemplate("{{first_name}} {{last_name}}", $('.presentation h1'), json);
		myTemplate("{{occupation}}", $('.presentation h2'), json);
		myTemplate("{{contact.email}}", $('span.mail'), json);
		myTemplate("{{contact.website}}", $('span.website'), json);
	});
});
*/

$(function(){

	$('body').on('click', 'a', function(){
		var adresse = $(this).attr('adresse');
		$('.colcenter').load(adresse);
	});

	var id = 13;
	var queryString = window.location.search.substring(1);
	if (queryString) {
		queryString = queryString.split("=");
		id = queryString[1];
	}

	$.getJSON('https://s.idsympa.com/u-'+ id +'.json', function(json){
	 	var template = $('#template').html();
	  	var rendered = Mustache.render(template, json);
	  	$('body').html(rendered);
  	});
  	$('body').on('click', '.contact', function(){
  		$('.popup, .overlay').removeClass('hide');
  	});
  	$('body').on('click', '.overlay',function(){
  		$('.popup, .overlay').addClass('hide');
  	});
});