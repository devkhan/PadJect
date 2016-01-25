console.log('Padject Chrome extension loading...');

var listener = new window.keypress.Listener();
var my_scope = this;
var my_combos = listener.register_many([
	{
		"keys"          : "ctrl .",
		"is_exclusive"  : true,
		"on_keydown"    : function() {
			console.log("You pressed ctrl+.(period) .");
			var bodyTag = document.getElementsByTagName("body")[0];
			var marginLeft = 
					!!window.getComputedStyle(bodyTag,null).getPropertyValue("margin-left").replace(/[^-\d\.]/g, '')?
					parseInt(window.getComputedStyle(bodyTag,null).getPropertyValue("margin-left").replace(/[^-\d\.]/g, ''), 10):
					0;
			var marginRight = 
					!!window.getComputedStyle(bodyTag,null).getPropertyValue("margin-right").replace(/[^-\d\.]/g, '')?
					parseInt(window.getComputedStyle(bodyTag,null).getPropertyValue("margin-right").replace(/[^-\d\.]/g, ''), 10):
					0;
			console.log("Margins of body tag: " + marginLeft + ", " + marginRight);

			var pageWidth = window.innerWidth
						|| document.documentElement.clientWidth
						|| document.body.clientWidth;

			console.log("Page width: " + pageWidth);

			if (marginLeft < 0.4 * pageWidth && marginRight < 0.4 * pageWidth) {
				bodyTag.style.marginLeft = (marginLeft + 20) + "px";
				bodyTag.style.marginRight = (marginRight + 20) + "px";
			};
		},
		"this"          : my_scope
	},
	{
		"keys"          : "ctrl ,",
		"is_exclusive"  : true,
		"on_keydown"    : function() {
			console.log("You pressed ctrl+,(comma) .");
			var bodyTag = document.getElementsByTagName("body")[0];
			var marginLeft = 
					!!window.getComputedStyle(bodyTag,null).getPropertyValue("margin-left").replace(/[^-\d\.]/g, '')?
					parseInt(window.getComputedStyle(bodyTag,null).getPropertyValue("margin-left").replace(/[^-\d\.]/g, ''), 10):
					0;
			var marginRight = 
					!!window.getComputedStyle(bodyTag,null).getPropertyValue("margin-right").replace(/[^-\d\.]/g, '')?
					parseInt(window.getComputedStyle(bodyTag,null).getPropertyValue("margin-right").replace(/[^-\d\.]/g, ''), 10):
					0;
			console.log("Margins of body tag: " + marginLeft + ", " + marginRight);
			
			var pageWidth = window.innerWidth
						|| document.documentElement.clientWidth
						|| document.body.clientWidth;
			
			console.log("Page width: " + pageWidth);

			if (marginLeft > 0 && marginRight > 0) {
				bodyTag.style.marginLeft = (marginLeft - 20) + "px";
				bodyTag.style.marginRight = (marginRight - 20) + "px";
			};
		},
		"this"          : my_scope
	}
/*    {
		"keys"          : "s",
		"is_exclusive"  : true,
		"on_keyup"      : function(event) {
			// Normally because we have a keyup event handler,
			// event.preventDefault() would automatically be called.
			// But because we're returning true in this handler,
			// event.preventDefault() will not be called.
			return true
		},
		"this"          : my_scope
	}
*/
]);

console.log('Padject Chrome extension loaded.');