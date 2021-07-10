
const urlapi = "https://api.ekopz.id/api/visit";

var visited = 0

window.onload = function() {
	
    $.getJSON(urlapi, function(data) {
    	visited = data.data.visit;
		pegguna_aktif = data.data.pengguna;
		ko_perasi = data.data.koperasi;
		wil_ayah = data.data.wilayah;
        $("#visitor").html(visited);
		$("#pengguna-aktif").html(pegguna_aktif );
        $("#koperasi").html(ko_perasi);
		$("#wilayah").html(wil_ayah);
		
    });
}