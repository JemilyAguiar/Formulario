function Formulario() {
		
	 //dados do cliente
	 let nome = document.getElementById('nome').value;
	 let telefone  = document.getElementById('telefone').value;
	 let email = document.getElementById('email').value;
	 let dataReceb = document.getElementById('dataReceb').value;
	
	
   //dados do equipamento 
	 let tipoAparelho = document.getElementById('tipoAparelho').value;
	 let marca = document.getElementById('marca').value;
	 let modelo = document.getElementById('modelo').value;
	 let codigoS = document.getElementById('codigoS').value;


   //Descrição 
	 let desc = document.getElementById('desc').value;
	 
   //Relatação do problema 	 
	 let prob = document.getElementById('prob').value;
	 
	 //Diagnóstico Técnico 
	 let diagTec = document.getElementById('diagTec').value;
	 
   //Solução 
	 let solProb = document.getElementById('solProb').value;
	 
	 //data de entrega
	 let dataEntrega = document.getElementById('dataEntrega').value;
	 
	 //Ficha
	 document.write("<h2> Dados do Cliente <br> </h2>" + "Nome: " + nome + "<br>");
	 
	 document.write("<br>" + "Telefone: " + telefone + "<br>");
	 
	 document.write("<br>" + "E-mail: " + email + "<br>");
	 
	 document.write("<br>" + "Data de Recebimento: " + dataReceb + "<br>");
	 
	 document.write("<h2>Dados do Equipamento<br> </h2>" + "Tipo de Aparelho:" + tipoAparelho + "<br>");
	 
	 document.write("<br>" + "Marca do Aparelho:" + marca + "<br>");
	 
	 document.write("<br>" + "Modelo:" + modelo + "<br>");
	 
	 document.write("<br>" + "Código de Série:" + codigoS + "<br>");
	 
	 document.write("<h2> Diagnóstico Técnico <br> </h2>" + diagTec + "<br>");
	
	 document.write("<h2> Solução do Problema <br> </h2>" + solProb + "<br>");
	
	 document.write("<h2> Data de entrega <br> </h2>" + dataEntrega + "<br>");
	
	//pdf 
	document.write("<center> <input type='button' value='Imprimir' onClick='window.print()' /></center>");

}
