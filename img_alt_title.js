
const imgs = document.querySelectorAll("img");
imgs.forEach(function(img)
	{
		let imgname = img.src.replace(/^.*[\\\/]/, ''); 
		let file = imgname.split('-').join(' '); 

		if(img.alt==''){img.setAttribute('alt', file)}
		if(img.alt){if(img.title==''){img.setAttribute('title', img.alt)}}
	}
)

