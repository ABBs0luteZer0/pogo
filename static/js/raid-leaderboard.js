function populateRaidData(){
	var myObj, txt="";

	myObj = JSON.parse(raidDataObj);

	myObj.sort(function (a, b) {
		if(a.ongoing==b.ongoing){
			if(a.level==b.level){
				return a.raidBoss.localeCompare(b.raidBoss);
			}else{
				return b.level.localeCompare(a.level);
			}
		}else{
			return b.ongoing.localeCompare(a.ongoing);
		}
	});

	for (x in myObj) {
		txt += "<tr><td><img src='https://serebii.net/pokemongo/pokemon/"
			+myObj[x].raidBoss
			+".png'/><br/><h6>";
		var y;
		for(y=0; y<myObj[x].level; y++){
			txt += "⭐";
		}
		txt += "</h6></td>";

		if(myObj[x].solo!=""){
			txt += "<td><span class='rounded-circle solo'>"
				+ myObj[x].solo +"</span></td>";
		}else{
			txt += "<td>&nbsp;</td>";
		}
		if(myObj[x].duo!=""){
			txt += "<td><span class='rounded-circle duo'>"
				+ myObj[x].duo +"</span></td>";
		}else{
			txt += "<td>&nbsp;</td>";
		}
		if(myObj[x].trio!=""){
			txt += "<td><span class='rounded-circle trio'>"
				+ myObj[x].trio +"</span></td>";
		}else{
			txt += "<td>&nbsp;</td>";
		}
		if(myObj[x].quadro!=""){
			txt += "<td><span class='rounded-circle quadro'>"
			+ myObj[x].quadro +"</span></td>";
		}else{
			txt += "<td>&nbsp;</td>";
		}
		
		txt += "<td></td></tr>";
	}
	document.getElementById("rLeaderTable").innerHTML = txt;
}