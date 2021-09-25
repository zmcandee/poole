(function(document) {
	  const $ = s => document.querySelector(s);
	  const toggle = $('#sidebar-toggle');
	  const sidebar = $('#sidebar');
	  const checkbox = $('#sidebar-checkbox');

	  document.addEventListener('click', function(e) {
		      var target = e.target;

		      if(!checkbox.checked ||
			             sidebar.contains(target) || 
			             target === checkbox || 
			             toggle.contains(target)) return;

		      e.preventDefault();
		      checkbox.checked = false;
		    }, false);
})(document);
