/*var x;
x=$(document);
x.ready(ese);
var c1=0, c2=0;

function ese() {
	$(function() {	
		for (var i=1; i<=4; i++) {
			var imagenes = ["1.jpg", "2.jpg"];
			var ter="#p";
			ter +=i;
			
			var cargatodo=ter+imagenes;
			var imagen=imagenes[Math.floor(Math.random() * imagenes.length)];
			$(ter).css({'background-image': 'url(./imagenes/' + imagen + ')'});
				if (imagen=="1.jpg") {	
					if (c1==2) {
						i--;
						c1--;
					}
					c1=c1+1;
				}	
				else {
					if (c2==2) {
						i--;
						c2--;
					}
					c2=c2+1;		
				}
		}
	});

}

	$(document).ready(function() {

	 
		$("#p1").click(function() {
			$("#b1").hide("slow", function() { 
			});
		});
		$("#p2").click(function() {
			$("#b2").hide("slow", function() { 
			});
		});
		$("#p3").click(function() {
			$("#b3").hide("slow", function() { 
			});
		});
		$("#p4").click(function() {
			$("#b4").hide("slow", function() { 
			});
		});
	});
*/


var x;
x=$(document);
x.ready(ese);


var vectorimagen=[];
valor1=0;
valor2=0;
xv1="";
xv2="";
turno=0;


function ese(){
	for (i=0;i<6;i++){
		vectorimagen[i]=i+".jpg";
		
	}
	k=0;
	for (i=6;i<12;i++)
	{
			vectorimagen[i]=k+".jpg";
			k++;
	}

var aux="";

	for (i=0;i<12;i++)
	{
			var aletorio= Math.round(Math.random()*11);

			aux= vectorimagen[i];
			vectorimagen[i]=vectorimagen[aletorio];
			vectorimagen[aletorio]=aux;
	}
	var j=1;
	for(i=0;i<12;i++){
			var z=$("#"+j+'a');
			z.attr("src",vectorimagen[i]);
			j++
	}

imagenhide();
mouse();
}



function imagenhide(){
	for (i=1;i<13;i++){
		var x=$("#"+i+"a");
		x.hide("fast");
	}
}

function mouse(){
	
	var uno=$("#1");
	uno.click(function(){
	 clic(1)
  	});

	var dos=$("#2");
	dos.click(function(){
	 clic(2)
  	});

  	var tres=$("#3");
	tres.click(function(){
	 clic(3)
  	});

  	var cuatro=$("#4");
	cuatro.click(function(){
	 clic(4)
  	});

  	var cinco=$("#5");
	cinco.click(function(){
	 clic(5)
  	});

	var seis=$("#6");
	seis.click(function(){
	 clic(6)
  	});

	var siete=$("#7");
	siete.click(function(){
	 clic(7)
  	});

	var ocho=$("#8");
	ocho.click(function(){
	 clic(8)
  	});

	var nueve=$("#9");
	nueve.click(function(){
	 clic(9)
  	});

	var diez=$("#10");
	diez.click(function(){
	 clic(10)
  	});

	var once=$("#11");
	once.click(function(){
	 clic(11)
  	});

	var doce=$("#12");
	doce.click(function(){
	 clic(12)
  	});


  
}

function clic(valor){
	var x=$("#"+valor+"a")
	x.show("slow");


		if (turno==0){
			valor1=x.attr("src");
			turno=1;
			xv1=x;
		}
		else{
			valor2=x.attr("src");
			turno=0;
			xv2=x;


			if (valor1!=valor2){
			xv1.hide("slow");
			xv2.hide("slow");
			}
		}

	

}
