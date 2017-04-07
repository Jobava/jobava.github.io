function slideshow(localstate={slideindex: 0, elem: null, urls: []} ) {
	if (localstate.urls.length === 0) {
		localstate.urls = getPictureURLs();
	}
	if (localstate.elem === null) {
		localstate.elem = document.getElementById("sky");
	}
	return {slideindex: localstate.slideindex, elem: localstate.elem, urls: localstate.urls};
}

function advanceSlide(localstate) {
	if (localstate.slideindex === (localstate.urls.length - 1)) {
		return slideshow({slideindex: 0, elem: localstate.elem, urls: localstate.urls});	
	} else {
		return slideshow({slideindex: localstate.slideindex + 1, elem: localstate.elem, urls: localstate.urls});
	}
}

function rewindSlide(localstate) {
	if (localstate.slideindex === 0) {
		return slideshow({slideindex: (localstate.urls.length - 1), elem: localstate.elem, urls: localstate.urls});	
	} else {
		return slideshow({slideindex: localstate.slideindex - 1, elem: localstate.elem, urls: localstate.urls});
	}
}

function getURL(localstate) {
	return localstate.urls[state.slideindex];
}

function renderCurrent(localstate) {
	localstate.elem.setAttribute("src", "pictures/" + getURL(state));
}

var state = slideshow();

document.onclick = function(e) {
	state = advanceSlide(state);
	renderCurrent(state);
}
