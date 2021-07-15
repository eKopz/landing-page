
const urlget = "https://api.ekopz.id/api/visit";
const urlpost = "http://localhost:8080/koperasi"
window.onload = function() {
	
    $.getJSON(urlget, function(data) {
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

/*
const form = document.getElementById("formkoperasi")

form.addEventListener('submit', function(e){
	
	e.preventDefault()

	let formData = new FormData(this)
	let data = JSON.stringify(Object.fromEntries(formData))
	console.log(data)
	fetch(urlpost, {
	  method: 'POST', // or 'PUT'
		mode:'no-cors',
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
	})

})*/
