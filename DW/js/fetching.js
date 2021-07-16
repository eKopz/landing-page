
const urlget = "https://api.ekopz.id/api/visit";
const urlpost = "https://api.ekopz.id/api/mitra";

const jenis_koperasi = document.getElementById('jenis_koperasi')

window.onload = function() {
	
    $.getJSON(urlget, function(data) {
		
		let opt = "<option disabled selected value>Jenis Koperasi</option>"
    	visited = data.data.visit;
		pegguna_aktif = data.data.pengguna;
		data_koperasi = data.data.koperasi;
		data_wilayah = data.data.wilayah;
		arr_koperasi = data.data.jenis_koperasi;
        $("#visitor").html(visited);
		$("#pengguna-aktif").html(pegguna_aktif );
        $("#koperasi").html(data_koperasi);
		$("#wilayah").html(data_wilayah);
		console.log(data)
		arr_koperasi.forEach(function(value, index, array){
			opt += "<option value=\"" + Number(value.id) +"\">"+ value.jenis + "</option>";
		})
		console.log(opt)
		jenis_koperasi.innerHTML = opt;
		
    });
	
}



const form = document.getElementById("formkoperasi")

form.addEventListener('submit', function(e){
	
	e.preventDefault()
	
	let formData = new FormData(this)
	var today = new Date();
	var dd = String(today.getDate()).padStart(2, '0');
	var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
	var yyyy = today.getFullYear();

	formData.append("permohonan_demo",mm + '/' + dd + '/' + yyyy)
	let data = JSON.stringify(Object.fromEntries(formData))
	console.log(data)
	fetch(urlpost, {
	  method: 'POST', // or 'PUT'
		//mode:'no-cors',
	  headers: {
		'Content-Type': 'application/json',
	  },
	  body: data,
	})
	.then(response => response.json())
	.then(data => {
	  console.log('Success:', data);
	})
	.catch((error) => {
	  console.error('Error:', error);
	});
	/*fetch(urlpost,{
		method:'post',
		body: JSON.stringify(Object.fromEntries(formData));
	}).then(function(res){
		return response.text();
	}).then(function(text){
		console.log(text)
	}).catch(function(error){
		console.error(error)
	})*/

})
