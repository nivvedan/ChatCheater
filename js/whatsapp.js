$("html").on("DOMSubtreeModified", "div.block-compose div.input", function(e) {
		var text = e.target.innerText;

		$.each(shortcuts, function (i, shortcut) {
			if (text.search("\\" + shortcut["shortcut"] + " ") != -1) {
				text = text.replace("\\" + shortcut["shortcut"], shortcut["text"])
				e.target.innerText = text;
			}
		});
	});
