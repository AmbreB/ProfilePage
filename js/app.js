'use strict';
$(function(){
	$('a').on('click', function(){
		var adresse = $(this).attr('adresse');
		$('.colcenter').load(adresse);
	});
});

$.getJSON('js/user13.json', function(json){
	var result = $('span[elt]'); 					// CA CREE UN PUTAIN DE TABLEAU
	for ( var i = 0; i < result.length; i++) { 		// On itère sur ce tableau result
		var attribut = $(result[i]).attr('elt');	// Récupère la valeur de l'attribut "elt"
		var value = json[attribut]; 				// Récupère la valeur dans le json correspondant à l'attribut
		$(result[i]).html(value); 					// Place dans le html la valeur correspondant à la clé
	}
});
