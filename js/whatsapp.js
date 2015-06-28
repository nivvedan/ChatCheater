$("html").on("DOMSubtreeModified", "div.block-compose > div.input-container > div.input", function(e) {
		var text = e.target.innerText;
		if (text.search("/hw ") != -1) {
			text = text.replace("/hw ", "Hello, World! ")
			e.target.innerText = text;
		}
	});
