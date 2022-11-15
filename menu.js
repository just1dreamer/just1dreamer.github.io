	function showhome()
	{
		document.getElementById("content-home").style.display = "block";
		document.getElementById("content-foglalas").style.display = "none";
		document.getElementById("content-rolunk").style.display = "none";
	}
	function showfoglalas()
	{
		document.getElementById("content-home").style.display = "none";
		document.getElementById("content-foglalas").style.display = "block";
		document.getElementById("content-rolunk").style.display = "none";
	}
	function showrolunk()
	{
		document.getElementById("content-home").style.display = "none";
		document.getElementById("content-foglalas").style.display = "none";
		document.getElementById("content-rolunk").style.display = "block";
	}