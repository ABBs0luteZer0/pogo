function sortBy(sortColumn){
	//alert("["+sortColumn+"]");
	var myObj, x, txt = "";
	
	
	myObj = JSON.parse(playerDataObj);

	//
	if(sortColumn=='stardust'){
		myObj.sort(function (a, b) {
    		return b.stardust.localeCompare(a.stardust);
		});
		$('#stardust h5').removeClass( "inactive" );
		$('#xp h5').addClass( "inactive" );
		$('#l40date h5').addClass( "inactive" );

		val1=myObj[0].stardust;
		val2=myObj[1].stardust;
		val3=myObj[2].stardust;
	}else if(sortColumn == 'xp'){
		myObj.sort(function (a, b) {
    			return b.xp.localeCompare(a.xp);
		});
		$('#xp h5').removeClass( "inactive" );
		$('#stardust h5').addClass( "inactive" );
		$('#l40date h5').addClass( "inactive" );

		val1=myObj[0].xp;
		val2=myObj[1].xp;
		val3=myObj[2].xp;
	}else{
		myObj.sort(function (a, b) {
			try {
				var aParts = a.l40date.split("/");
	   			var d1 = new Date(aParts[1] + "/" + aParts[0] + "/" + aParts[2]);
				
				var bParts = b.l40date.split("/");
	   			var d2 = new Date(bParts[1] + "/" + bParts[0] + "/" + bParts[2]);

	   			return d1 - d2;
   			} catch (_error) {
			  alert("Player ("+a.ign+" or "+b.ign+") has not added L40 date correctly");
			}
		});
		$('#l40date h5').removeClass( "inactive" );
		$('#stardust h5').addClass( "inactive" );
		$('#xp h5').addClass( "inactive" );

		val1=myObj[0].l40date;
		 // + "<small class='text-muted'>(" + myObj[0].startdate + ")</small>";
		val2=myObj[1].l40date;
		 // + "<small class='text-muted'>(" + myObj[1].startdate + ")</small>";
		val3=myObj[2].l40date;
		 // + "<small class='text-muted'>(" + myObj[2].startdate + ")</small>";
	}
	// Set the data
	document.getElementById("RankingTable1").innerHTML = 
    			"<h6>"+myObj[0].ign+"</h6><h6>"+val1+"</h6>";
	document.getElementById("RankingTable2").innerHTML = 
				"<h6>"+myObj[1].ign+"</h6><h6>"+val2+"</h6>";
	document.getElementById("RankingTable3").innerHTML = 
				"<h6>"+myObj[2].ign+"</h6><h6>"+val3+"</h6>";
    for (x in myObj) {
    	if(x>2){
    		if(sortColumn=='stardust'){
				valCurr=myObj[x].stardust;
			}else if(sortColumn == 'xp'){
				valCurr=myObj[x].xp;
			}else{
				valCurr=myObj[x].l40date+ 
					"<small class='text-muted'>(" + myObj[x].startdate + ")</small>";
			}
    		txt +=   "<tr>"
    			+   "<td width='12%'>#" + (parseInt(x,10)+1) + "</td>"
    			+   "<td width='48%'>" + myObj[x].ign + "</td>"
        		+	"<td>" + valCurr +"</td>"
      			+ "</tr>";
      	}	
    }
    document.getElementById("RankingTableAll").innerHTML = txt;
}
function populatePlayerLeaderBoard(){
	sortBy('l40date');
}