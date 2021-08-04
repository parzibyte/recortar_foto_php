document.addEventListener("DOMContentLoaded", () => {
	const $btnSubir = document.querySelector("#subir");
	const $imagen = document.querySelector("#imagen");

	let cropper = new Cropper($imagen, {
		responsive: false, // <-- Si no se pone en false, la imagen se mueve cuando cambia el tamaño de la ventana
	});

	$btnSubir.onclick = async () => {
		if (!cropper) {
			return;
		}
		// Obtener el canvas recortado
		const canvas = cropper.getCroppedCanvas();

		// Convertir la imagen a Base64 y ponerlo en el enlace
		const data = canvas.toDataURL("image/png");
		const fd = new FormData();
		fd.append("imagen", data); // Se llama "imagen", en PHP lo recuperamos con $_POST["imagen"]
		const respuestaHttp = await fetch("imagen.php", {
			method: "POST",
			body: fd,
		});
		const nombreImagenSubida = await respuestaHttp.json();
		console.log("La imagen ha sido enviada y tiene el nombre de: " + nombreImagenSubida);

	};

});