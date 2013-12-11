/**
		Originally created by Alejandro Perez Ordoyo AKA Patchiyama.

		Created to help people who love to have thin html or the one that doesnt like complications.
		
		INSTRUCTIONS: Just place the files in the same folder that the html page is.
			- AUDIO. I suggest using MP3, OGG. You can use WAV files too. It will use the best for the browser.
			- VIDEO. MP4, OGG. You can use WEBM files too. It will use the best as well.
		To add it to your HTML use this template:

		<div class = 'easymedia' id = 'type_name_width_height'>

		 - id explanation:
		 	type = can be "audio" or "video" (without quotes, according to your file)
		 	name = name of the files (all files must have the same name)
		 	width and height = the width and height of the video, it will NOT change anything in the audio, you can even skip them.
**/

var medias = document.getElementsByTagName("div");											//Select all div
for(var i = 0; i < medias.length; i++){
	try{
		if(medias[i].getAttribute('class').toString() == 'easymedia'){							//Select just easymedia divs
			var mediaNow = medias[i].getAttribute('id');
			mediaNow = mediaNow.split('_');
			console.log(mediaNow);
			var div = document.getElementById(medias[i].getAttribute('id'));
			if(mediaNow[0].toString() == 'audio'){
				div.innerHTML = div.innerHTML
					+ '<audio controls>'
  						+ '<source src="' + mediaNow[1] + '.mp3" type="audio/mp3">'
  						+ '<source src="' + mediaNow[1] + '.ogg" type="audio/ogg">'
  						+ '<source src="' + mediaNow[1] + '.wav" type="audio/wav">'
						+ 'Your browser does not support the audio element.'
					+ '</audio>';
			}else{
				div.innerHTML = div.innerHTML
					+'<video width="' + mediaNow[2] + '" height="' + mediaNow[3] + '" controls>'
  						+ '<source src="' + mediaNow[1] + '.mp4" type="video/mp4">'
  						+ '<source src="' + mediaNow[1] + '.ogg" type="video/ogg">'
  						+ '<source src="' + mediaNow[1] + '.webm" type="video/webm">'
						+ 'Your browser does not support the video element.'
					+ '</video>';
			}
		}
	}catch(e){

	}
}
