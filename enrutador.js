function enrutar(manejador, ruta){

	console.log("ruta: " + ruta);
	if(typeof manejador[ruta] === 'function'){
		return manejador[ruta]();}
		else{

			console.log("no existe");
			return "no existe";

		}
}


exports.enrutar = enrutar;