$(document).ready(function(){
						   
	//$(".map").css("opacity","0.5");
	//$(".map").css("background","white");

	var i=0;

	$(".vec").click(function(){
		document.location.href = "biografias.html?Grupo=Vecinos";
	});

	$(".func").click(function(){
		document.location.href = "biografias.html?Grupo=Funcionarios";
	});


	$(".clero").click(function(){
		document.location.href = "biografias.html?Grupo=Clero";
	});
	
	$(".galera").click(function(){
		//document.location.href = "biografias.html?Grupo=Galera";
	});
	
	
	$(".map").click(function(){
		document.location.href = "mapas.html";
	});
	
	$(".jjp").click(function(){
							 //VALEN
		document.location.href = "biografia-sola.html?wachin=JuanJosePaso";
	});

	/*$("#TodoLegalPorAqui").click(function(){
			if(i>=19){
				document.location.href = "mapas/Shhh/NoLeDigasNada/TodoLegalPorAqui/Sweg/SWAG.html";
			}else{
				i++;
			}
	});

	setTimeout(function(){
		i=0;				
   	}, 10000);*/
	
	$(".sav").click(function(){
							 //VALEN
		document.location.href = "biografia-sola.html?wachin=CornelioSaavedra";
	});
	
	$(".mm").click(function(){
							 //VALEN
		document.location.href = "biografia-sola.html?wachin=MarianoMoreno";
	});
	
	$(".mb").click(function(){
		document.location.href = "biografia-sola.html?wachin=ManuelBelgrano";
	});
	
	$(".arc").click(function(){
		document.location.href = "transicion.html";
	});
	
	$(".votos").click(function(){
		document.location.href = "votos.html";
	});
	
	$(".gatos").click(function(){
		document.location.href = /*gastos*/"";
	});
	
	$(".credits").click(function(){
		document.location.href = "creditos.html";
	});
	
	$(".cabildantes").click(function(){
		document.location.href = "biografias.html?Grupo=Cabildantes";
	});

});