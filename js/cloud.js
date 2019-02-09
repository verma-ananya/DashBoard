var jsonData;
var ans;
var temp;
var	temp2 = "";
var	fil = '';
var	year_value_cloud_1;
var	year_value_cloud_2;
var	value;
var	sw = 'All';
var option = ''
var val;
var vl;
var lu;
var univ = [];
var an;
var show;
var angel;

function postProcessing5(dataCloud) {
                                    jsonData = dataCloud;
                                    
                                    /*storeScaleValueCloud();
                                    cloud_drawTable(jsonData);*/
                                    
                                    
                                    Filter_cloud(); 

                                      
                                            }

function label_value(show_l,val_l){
	//light(show,val);
	//console.log(show_l,val_l)
/*	var raise = 0;
	var dict = [];
	var stre = return_swot();
	var rel = 0; 
	var lik = 0; 
	var ur,ti;
	var c1 = 0;
	var c2 = 0;*/

	
	cloud_frequency(show_l);
	Filter_cloud(show_l);
	topic_option(show_l,val_l);
	sector_option(show_l,val_l);
	pestle_option(show_l,val_l);
	region_option(show_l,val_l);
	country_option(show_l,val_l);
	//searchByItem_cloud(val);
	}

var relevanceArray_cloud   = ['vague', 'Early Stage', 'Gaining Traction', 'Evolving', 'Established', 'Expansionary', 'Growing'];
var likelihoodArray_cloud  = ['Potential', 'Possible', 'Probable', 'Business as usual'];

var meas = 'intensity' ;

function light(show,val){
	lu = show;
	vl = val;
	
}	



function topic_option(show,val){
	var dropdown = document.getElementById('topic_option');
	var index = document.getElementById('topic_option').selectedIndex;
	var stre = return_swot()
	//console.log(stre)
	if(index == -1)
		index = 0
	//console.log(index)
	dropdown.length = 0;

var defaultOption = document.createElement('option');
defaultOption.text = 'All';

dropdown.add(defaultOption);


var url = shapingTomorrowDataUrl;

fetch(url)  
  .then(  
    function(response) {  
      if (response.status !== 200) {  
        /*console.warn('Looks like there was a problem. Status Code: ' + 
          response.status); */ 
        return;  
      }

      // Examine the text in the response  
      response.json().then(function(jsonData) {  

        var option;
    	var tst = []
    	if(val == undefined || show=='topic' || val == 'All'){
    	for (var i = 0; i < jsonData.length; i++) {
    		if($("#toggle_cloud").is(':checked')){
    		if(!(tst.includes(jsonData[i].topic)) && (jsonData[i].topic !='' && jsonData[i].end_year <= year_value_cloud_2 && jsonData[i].end_year >= year_value_cloud_1) && (jsonData[i].swot == stre || stre == 'All')){
    			tst.push(jsonData[i].topic)
          option = document.createElement('option');
      	  option.text = jsonData[i].topic;
      	  option.value = jsonData[i].topic;
      	  dropdown.add(option);

    	} 
    	}
    	else{
    		if(!(tst.includes(jsonData[i].topic)) && (jsonData[i].topic !='' ) && (jsonData[i].swot == stre || stre == 'All')){
    			tst.push(jsonData[i].topic)
          option = document.createElement('option');
      	  option.text = jsonData[i].topic;
      	  option.value = jsonData[i].topic;
      	  dropdown.add(option);

    	} 
    	}//after

    	  } }
    	else {
    		for (var i = 0; i < jsonData.length; i++) {
    			if($("#toggle_cloud").is(':checked')){
    		if(!(tst.includes(jsonData[i].topic)) && (jsonData[i][show] == val) && (jsonData[i].topic !='' && jsonData[i].end_year <= year_value_cloud_2 && jsonData[i].end_year >= year_value_cloud_1) && (jsonData[i].swot == stre || stre == 'All')){
    			tst.push(jsonData[i].topic)
          option = document.createElement('option');
      	  option.text = jsonData[i].topic;
      	  option.value = jsonData[i].topic;
      	  dropdown.add(option);

    	} 
    }
    else{
    	if(!(tst.includes(jsonData[i].topic)) && (jsonData[i][show] == val) && (jsonData[i].topic !='' ) && (jsonData[i].swot == stre || stre == 'All')){
    			tst.push(jsonData[i].topic)
          option = document.createElement('option');
      	  option.text = jsonData[i].topic;
      	  option.value = jsonData[i].topic;
      	  dropdown.add(option);

    	} 
    }

    	//before
    	  } 

    	}
    	dropdown.selectedIndex = index;
      });  
    }  
  )  
  .catch(function(err) {  
   // console.error('Fetch Error -', err);  
  });

}	

function sector_option(show, val){
var dropdown1 = document.getElementById('sector_option');
var index1 = document.getElementById('sector_option').selectedIndex;
var stre = return_swot()
	if(index1 == -1)
		index1 = 0
dropdown1.length = 0;

var defaultOption1 = document.createElement('option');
defaultOption1.text = 'All';

dropdown1.add(defaultOption1);
dropdown1.selectedIndex = 0;

var url = shapingTomorrowDataUrl;

fetch(url)  
  .then(  
    function(response) {  
      if (response.status !== 200) {  
        /*console.warn('Looks like there was a problem. Status Code: ' + 
          response.status); */ 
        return;  
      }

      // Examine the text in the response  
      response.json().then(function(jsonData) {  
        var option;
    	var tst = []
    	if(val == undefined || show=='sector' || val == 'All'){
    	for (var i = 0; i < jsonData.length; i++) {
    		if($("#toggle_cloud").is(':checked')){
    		if(!(tst.includes(jsonData[i].sector)) && (jsonData[i].sector !='' && jsonData[i].end_year <= year_value_cloud_2 && jsonData[i].end_year >= year_value_cloud_1) && (jsonData[i].swot == stre || stre == 'All')){
    			tst.push(jsonData[i].sector)
          option = document.createElement('option');
      	  option.text = jsonData[i].sector;
      	  option.value = jsonData[i].sector;
      	  dropdown1.add(option);

    	} 
    	}
    	else{
    		if(!(tst.includes(jsonData[i].sector)) && (jsonData[i].sector !='' ) && (jsonData[i].swot == stre || stre == 'All')){
    			tst.push(jsonData[i].sector)
          option = document.createElement('option');
      	  option.text = jsonData[i].sector;
      	  option.value = jsonData[i].sector;
      	  dropdown1.add(option);

    	} 
    	}//after

    	  } }
    	else {
    		for (var i = 0; i < jsonData.length; i++) {
    			if($("#toggle_cloud").is(':checked')){
    		if(!(tst.includes(jsonData[i].sector)) && (jsonData[i][show] == val) && (jsonData[i].sector !='' && jsonData[i].end_year <= year_value_cloud_2 && jsonData[i].end_year >= year_value_cloud_1) && (jsonData[i].swot == stre || stre == 'All')){
    			tst.push(jsonData[i].sector)
          option = document.createElement('option');
      	  option.text = jsonData[i].sector;
      	  option.value = jsonData[i].sector;
      	  dropdown1.add(option);

    	} 
    }
    else{
    	if(!(tst.includes(jsonData[i].sector)) && (jsonData[i][show] == val) && (jsonData[i].sector !='' ) && (jsonData[i].swot == stre || stre == 'All')){
    			tst.push(jsonData[i].sector)
          option = document.createElement('option');
      	  option.text = jsonData[i].sector;
      	  option.value = jsonData[i].sector;
      	  dropdown1.add(option);

    	} 
    }

    	//before
    	  } 

    	}
    	dropdown1.selectedIndex = index1;
      });  
    }  
  )  
  .catch(function(err) {  
   // console.error('Fetch Error -', err);  
  });
}

function pestle_option(show,val){
var dropdown2 = document.getElementById('pestle_option');
var index2 = document.getElementById('pestle_option').selectedIndex;
var stre = return_swot()
	if(index2 == -1)
		index2 = 0
			dropdown2.length = 0;

var defaultOption2 = document.createElement('option');
defaultOption2.text = 'All';

dropdown2.add(defaultOption2);
dropdown2.selectedIndex = 0;

var url = shapingTomorrowDataUrl;

fetch(url)  
  .then(  
    function(response) {  
      if (response.status !== 200) {  
        /*console.warn('Looks like there was a problem. Status Code: ' + 
          response.status);  */
        return;  
      }

      // Examine the text in the response  
      response.json().then(function(jsonData) {  
        var option;
    	var tst = []
    	if(val == undefined || show=='pestle' || val == 'All'){
    	for (var i = 0; i < jsonData.length; i++) {
    		if($("#toggle_cloud").is(':checked')){
    		if(!(tst.includes(jsonData[i].pestle)) && (jsonData[i].pestle !='' && jsonData[i].end_year <= year_value_cloud_2 && jsonData[i].end_year >= year_value_cloud_1) && (jsonData[i].swot == stre || stre == 'All')){
    			tst.push(jsonData[i].pestle)
          option = document.createElement('option');
      	  option.text = jsonData[i].pestle;
      	  option.value = jsonData[i].pestle;
      	  dropdown2.add(option);

    	} 
    	}
    	else{
    		if(!(tst.includes(jsonData[i].pestle)) && (jsonData[i].pestle !='' ) && (jsonData[i].swot == stre || stre == 'All')){
    			tst.push(jsonData[i].pestle)
          option = document.createElement('option');
      	  option.text = jsonData[i].pestle;
      	  option.value = jsonData[i].pestle;
      	  dropdown2.add(option);

    	} 
    	}//after

    	  } }
    	else {
    		for (var i = 0; i < jsonData.length; i++) {
    			if($("#toggle_cloud").is(':checked')){
    		if(!(tst.includes(jsonData[i].pestle)) && (jsonData[i][show] == val) && (jsonData[i].pestle !='' && jsonData[i].end_year <= year_value_cloud_2 && jsonData[i].end_year >= year_value_cloud_1) && (jsonData[i].swot == stre || stre == 'All')){
    			tst.push(jsonData[i].pestle)
          option = document.createElement('option');
      	  option.text = jsonData[i].pestle;
      	  option.value = jsonData[i].pestle;
      	  dropdown2.add(option);

    	} 
    }
    else{
    	if(!(tst.includes(jsonData[i].pestle)) && (jsonData[i][show] == val) && (jsonData[i].pestle !='' ) && (jsonData[i].swot == stre || stre == 'All')){
    			tst.push(jsonData[i].pestle)
          option = document.createElement('option');
      	  option.text = jsonData[i].pestle;
      	  option.value = jsonData[i].pestle;
      	  dropdown2.add(option);

    	} 
    }

    	//before
    	  } 

    	}
    	dropdown2.selectedIndex = index2;
      });  
    }  
  )  
  .catch(function(err) {  
//console.error('Fetch Error -', err);  
  });
}

function country_option(show, val){
var dropdown3 = document.getElementById('country_option');
var index3 = document.getElementById('country_option').selectedIndex;
var stre = return_swot()
	if(index3 == -1)
		index3 = 0
			dropdown3.length = 0;

var defaultOption3 = document.createElement('option');
defaultOption3.text = 'All';

dropdown3.add(defaultOption3);
dropdown3.selectedIndex = 0;

var url = shapingTomorrowDataUrl;

fetch(url)  
  .then(  
    function(response) {  
      if (response.status !== 200) {  
        /*console.warn('Looks like there was a problem. Status Code: ' + 
          response.status);  */
        return;  
      }

      // Examine the text in the response  
      response.json().then(function(jsonData) {  
        var option;
    	var tst = []
    	if(val == undefined || show=='country' || val == 'All'){
    	for (var i = 0; i < jsonData.length; i++) {
    		if($("#toggle_cloud").is(':checked')){
    		if(!(tst.includes(jsonData[i].country)) && (jsonData[i].country !='' && jsonData[i].end_year <= year_value_cloud_2 && jsonData[i].end_year >= year_value_cloud_1) && (jsonData[i].swot == stre || stre == 'All')){
    			tst.push(jsonData[i].country)
          option = document.createElement('option');
      	  option.text = jsonData[i].country;
      	  option.value = jsonData[i].country;
      	  dropdown3.add(option);

    	} 
    	}
    	else{
    		if(!(tst.includes(jsonData[i].country)) && (jsonData[i].country !='' ) && (jsonData[i].swot == stre || stre == 'All')){
    			tst.push(jsonData[i].country)
          option = document.createElement('option');
      	  option.text = jsonData[i].country;
      	  option.value = jsonData[i].country;
      	  dropdown3.add(option);

    	} 
    	}//after

    	  } }
    	else {
    		for (var i = 0; i < jsonData.length; i++) {
    			if($("#toggle_cloud").is(':checked')){
    		if(!(tst.includes(jsonData[i].country)) && (jsonData[i][show] == val) && (jsonData[i].country !='' && jsonData[i].end_year <= year_value_cloud_2 && jsonData[i].end_year >= year_value_cloud_1) && (jsonData[i].swot == stre || stre == 'All')){
    			tst.push(jsonData[i].country)
          option = document.createElement('option');
      	  option.text = jsonData[i].country;
      	  option.value = jsonData[i].country;
      	  dropdown3.add(option);

    	} 
    }
    else{
    	if(!(tst.includes(jsonData[i].country)) && (jsonData[i][show] == val) && (jsonData[i].country !='' ) && (jsonData[i].swot == stre || stre == 'All')){
    			tst.push(jsonData[i].country)
          option = document.createElement('option');
      	  option.text = jsonData[i].country;
      	  option.value = jsonData[i].country;
      	  dropdown3.add(option);

    	} 
    }

    	//before
    	  } 

    	}
    	dropdown3.selectedIndex = index3;
      });  
    }  
  )  
  .catch(function(err) {  
  //  console.error('Fetch Error -', err);  
  });
}

var test;
zingchart.label_click = function(p) {
 //console.log(p.text);
 
 var test = p.text
 for(var i = 0; i< angel.length; i++){
 	if(test == angel[i].measure){
 			document.getElementById('cloud_label_value').innerHTML = "<h3 align='center' class='m-t-0' style='text-transform: capitalize' id='argument'>" +p.text + "</h3>" +
 																		"<p align = 'center'>" + angel[i].freq + " | " + relevanceArray_cloud[parseInt(angel[i].relevance) - 1] + " | " + likelihoodArray_cloud[parseInt(angel[i].likelihood) - 1] + "</p>" +
 																		"<a target='_blank' href=" + angel[i].url + ">" + angel[i].title + "</a><br>" +
 																		"<br><a href='#cloud_table'><p style='float: right; cursor: pointer' onclick=searchByItem_cloud(\""+test+"\")>...more</p></a>" 
 }
 	}
}

function region_option(show,val){
	var dropdown4 = document.getElementById('region_option');
	var index4 = document.getElementById('region_option').selectedIndex;
	var stre = return_swot();
	if(index4 == -1)
		index4 = 0
			dropdown4.length = 0;

var defaultOption4 = document.createElement('option');
defaultOption4.text = 'All';

dropdown4.add(defaultOption4);
dropdown4.selectedIndex = 0;

var url = shapingTomorrowDataUrl;

fetch(url)  
  .then(  
    function(response) {  
      if (response.status !== 200) {  
        /*console.warn('Looks like there was a problem. Status Code: ' + 
          response.status);  */
        return;  
      }

      // Examine the text in the response  
      response.json().then(function(jsonData) {  
        var option;
    	var tst = []
    	if(val == undefined || show=='region' || val == 'All'){
    	for (var i = 0; i < jsonData.length; i++) {
    		if($("#toggle_cloud").is(':checked')){
    		if(!(tst.includes(jsonData[i].region)) && (jsonData[i].region !='' && jsonData[i].end_year <= year_value_cloud_2 && jsonData[i].end_year >= year_value_cloud_1) && (jsonData[i].swot == stre || stre == 'All')){
    			tst.push(jsonData[i].region)
          option = document.createElement('option');
      	  option.text = jsonData[i].region;
      	  option.value = jsonData[i].region;
      	  dropdown4.add(option);

    	} 
    	}
    	else{
    		if(!(tst.includes(jsonData[i].region)) && (jsonData[i].region !='' ) && (jsonData[i].swot == stre || stre == 'All')){
    			tst.push(jsonData[i].region)
          option = document.createElement('option');
      	  option.text = jsonData[i].region;
      	  option.value = jsonData[i].region;
      	  dropdown4.add(option);

    	} 
    	}//after

    	  } }
    	else {
    		for (var i = 0; i < jsonData.length; i++) {
    			if($("#toggle_cloud").is(':checked')){
    		if(!(tst.includes(jsonData[i].region)) && (jsonData[i][show] == val) && (jsonData[i].region !='' && jsonData[i].end_year <= year_value_cloud_2 && jsonData[i].end_year >= year_value_cloud_1) && (jsonData[i].swot == stre || stre == 'All')){
    			tst.push(jsonData[i].region)
          option = document.createElement('option');
      	  option.text = jsonData[i].region;
      	  option.value = jsonData[i].region;
      	  dropdown4.add(option);

    	} 
    }
    else{
    	if(!(tst.includes(jsonData[i].region)) && (jsonData[i][show] == val) && (jsonData[i].region !='' ) && (jsonData[i].swot == stre || stre == 'All')){
    			tst.push(jsonData[i].region)
          option = document.createElement('option');
      	  option.text = jsonData[i].region;
      	  option.value = jsonData[i].region;
      	  dropdown4.add(option);

    	} 
    }

    	//before
    	  } 

    	}
    	dropdown4.selectedIndex = index4;
      });  
    }  
  )  
  .catch(function(err) {  
   // console.error('Fetch Error -', err);  
  });
}


function Filter_cloud(ans){



var temp;
var	temp2;
var	fil;

var	value;
var	sw = 'All';
/*var option = '';*/
var val;
var vl;
var lu;
var an;
var show;
					an = ans;
					
					setTimeout(function(){
						storeScaleValueCloud();
						cloud_drawTable(jsonData);
						
					}, 1000);
					
					if(ans=='All' || ans=='Strength' || ans=='Weakness' || ans=='Opportunity' || ans=='Threat'){
						var sw = ans;
					}
					else if(ans == undefined)
						{
						fil='topic';
						cloud_frequency();
						light(show,val);
						topic_option(lu,vl);
						sector_option(lu,vl);
						pestle_option(lu,vl);
						country_option(lu,vl);
						region_option(lu,vl);

				}
					else if(ans=='intensity' || ans=='likelihood' || ans=='relevance'){
						meas = ans;
					}
					else{
						fil = ans;
					}
					
						
				if(fil =='topic' ){
					
						if(vl==undefined || vl == 'All'){

							temp = ''
							temp2 = ''
							for(var i=0;i<jsonData.length;i++){
								if($("#toggle_cloud").is(':checked')){
							
								if (jsonData[i].end_year >= year_value_cloud_1 && jsonData[i].end_year <= year_value_cloud_2){
									if(sw == 'All'){
										temp = jsonData[i].topic
								        temp2 = temp2.concat(" ",temp)
							    		}
							    	else if(jsonData[i].end_year >= year_value_cloud_1 && jsonData[i].end_year <= year_value_cloud_2 && jsonData[i].swot == sw){
										temp = jsonData[i].topic
								        temp2 = temp2.concat(" ",temp)

							}

							
							}
						}
						else{
							if(sw == 'All'){
										temp = jsonData[i].topic
								        temp2 = temp2.concat(" ",temp)
							    		}
							    	else if( jsonData[i].swot == sw){
										temp = jsonData[i].topic
								        temp2 = temp2.concat(" ",temp)

							}

							
							
						}
							//here
							}

							}
							else{
								temp = ''
								temp2 = ''
								for(var i=0;i<jsonData.length;i++){
									if($("#toggle_cloud").is(':checked')){
							
								if (jsonData[i].end_year >= year_value_cloud_1 && jsonData[i].end_year <= year_value_cloud_2 && jsonData[i][lu]==vl){
									if(sw == 'All'){
										temp = jsonData[i].topic
								        temp2 = temp2.concat(" ",temp)
								        }
							    	else if(jsonData[i].end_year >= year_value_cloud_1 && jsonData[i].end_year <= year_value_cloud_2 && jsonData[i].swot == sw && jsonData[i][lu]==vl){
										temp = jsonData[i].topic
								        temp2 = temp2.concat(" ",temp)
								        

							}

							
							}
}
else{
	if (jsonData[i][lu]==vl){
									if(sw == 'All'){
										temp = jsonData[i].topic
								        temp2 = temp2.concat(" ",temp)
								        }
							    	else if(jsonData[i].swot == sw && jsonData[i][lu]==vl){
										temp = jsonData[i].topic
								        temp2 = temp2.concat(" ",temp)
								        

							}

							
							}
}
							}
								
							}

							}


				else if(fil =='sector' ){
						if(vl==undefined || vl == 'All'){

							temp = ''
							temp2 = ''
							for(var i=0;i<jsonData.length;i++){
								if($("#toggle_cloud").is(':checked')){
							
								if (jsonData[i].end_year >= year_value_cloud_1 && jsonData[i].end_year <= year_value_cloud_2){
									if(sw == 'All'){
										temp = jsonData[i].sector
								        temp2 = temp2.concat(" ",temp)
							    		}
							    	else if(jsonData[i].end_year >= year_value_cloud_1 && jsonData[i].end_year <= year_value_cloud_2 && jsonData[i].swot == sw){
										temp = jsonData[i].sector
								        temp2 = temp2.concat(" ",temp)

							}

							
							}
						}
						else{
							if(sw == 'All'){
										temp = jsonData[i].sector
								        temp2 = temp2.concat(" ",temp)
							    		}
							    	else if( jsonData[i].swot == sw){
										temp = jsonData[i].topic
								        temp2 = temp2.concat(" ",temp)

							}

							
							
						}
							//here
							}

							}
							else{
								temp = ''
								temp2 = ''
								for(var i=0;i<jsonData.length;i++){
									if($("#toggle_cloud").is(':checked')){
							
								if (jsonData[i].end_year >= year_value_cloud_1 && jsonData[i].end_year <= year_value_cloud_2 && jsonData[i][lu]==vl){
									if(sw == 'All'){
										temp = jsonData[i].sector
								        temp2 = temp2.concat(" ",temp)
								        }
							    	else if(jsonData[i].end_year >= year_value_cloud_1 && jsonData[i].end_year <= year_value_cloud_2 && jsonData[i].swot == sw && jsonData[i][lu]==vl){
										temp = jsonData[i].sector
								        temp2 = temp2.concat(" ",temp)
								        

							}

							
							}
}
else{
	if (jsonData[i][lu]==vl){
									if(sw == 'All'){
										temp = jsonData[i].sector
								        temp2 = temp2.concat(" ",temp)
								        }
							    	else if(jsonData[i].swot == sw && jsonData[i][lu]==vl){
										temp = jsonData[i].sector
								        temp2 = temp2.concat(" ",temp)
								        

							}

							
							}
}
							}
								
							}

							}

					
				else if(fil =='pestle' ){
						if(vl==undefined || vl == 'All'){

							temp = ''
							temp2 = ''
							for(var i=0;i<jsonData.length;i++){
								if($("#toggle_cloud").is(':checked')){
							
								if (jsonData[i].end_year >= year_value_cloud_1 && jsonData[i].end_year <= year_value_cloud_2){
									if(sw == 'All'){
										temp = jsonData[i].pestle
								        temp2 = temp2.concat(" ",temp)
							    		}
							    	else if(jsonData[i].end_year >= year_value_cloud_1 && jsonData[i].end_year <= year_value_cloud_2 && jsonData[i].swot == sw){
										temp = jsonData[i].pestle
								        temp2 = temp2.concat(" ",temp)

							}

							
							}
						}
						else{
							if(sw == 'All'){
										temp = jsonData[i].pestle
								        temp2 = temp2.concat(" ",temp)
							    		}
							    	else if( jsonData[i].swot == sw){
										temp = jsonData[i].pestle
								        temp2 = temp2.concat(" ",temp)

							}

							
							
						}
							
							}

							}
							else{
								temp = ''
								temp2 = ''
								for(var i=0;i<jsonData.length;i++){
									if($("#toggle_cloud").is(':checked')){
							
								if (jsonData[i].end_year >= year_value_cloud_1 && jsonData[i].end_year <= year_value_cloud_2 && jsonData[i][lu]==vl){
									if(sw == 'All'){
										temp = jsonData[i].pestle
								        temp2 = temp2.concat(" ",temp)
								        }
							    	else if(jsonData[i].end_year >= year_value_cloud_1 && jsonData[i].end_year <= year_value_cloud_2 && jsonData[i].swot == sw && jsonData[i][lu]==vl){
										temp = jsonData[i].pestle
								        temp2 = temp2.concat(" ",temp)
								        

							}

							
							}
}
else{
	if (jsonData[i][lu]==vl){
									if(sw == 'All'){
										temp = jsonData[i].pestle
								        temp2 = temp2.concat(" ",temp)
								        }
							    	else if(jsonData[i].swot == sw && jsonData[i][lu]==vl){
										temp = jsonData[i].pestle
								        temp2 = temp2.concat(" ",temp)
								        

							}

							
							}
}
							}
								
							}

							}

					
					else if(fil =='country' ){
						if(vl==undefined || vl == 'All'){

							temp = ''
							temp2 = ''
							for(var i=0;i<jsonData.length;i++){
								if($("#toggle_cloud").is(':checked')){
							
								if (jsonData[i].end_year >= year_value_cloud_1 && jsonData[i].end_year <= year_value_cloud_2){
									if(sw == 'All'){
										temp = jsonData[i].country
								        temp2 = temp2.concat(" ",temp)
							    		}
							    	else if(jsonData[i].end_year >= year_value_cloud_1 && jsonData[i].end_year <= year_value_cloud_2 && jsonData[i].swot == sw){
										temp = jsonData[i].country
								        temp2 = temp2.concat(" ",temp)

							}

							
							}
						}
						else{
							if(sw == 'All'){
										temp = jsonData[i].country
								        temp2 = temp2.concat(" ",temp)
							    		}
							    	else if( jsonData[i].swot == sw){
										temp = jsonData[i].country
								        temp2 = temp2.concat(" ",temp)

							}

							
							
						}
							//here
							}

							}
							else{
								temp = ''
								temp2 = ''
								for(var i=0;i<jsonData.length;i++){
									if($("#toggle_cloud").is(':checked')){
							
								if (jsonData[i].end_year >= year_value_cloud_1 && jsonData[i].end_year <= year_value_cloud_2 && jsonData[i][lu]==vl){
									if(sw == 'All'){
										temp = jsonData[i].country
								        temp2 = temp2.concat(" ",temp)
								        }
							    	else if(jsonData[i].end_year >= year_value_cloud_1 && jsonData[i].end_year <= year_value_cloud_2 && jsonData[i].swot == sw && jsonData[i][lu]==vl){
										temp = jsonData[i].country
								        temp2 = temp2.concat(" ",temp)
								        

							}

							
							}
}
else{
	if (jsonData[i][lu]==vl){
									if(sw == 'All'){
										temp = jsonData[i].country
								        temp2 = temp2.concat(" ",temp)
								        }
							    	else if(jsonData[i].swot == sw && jsonData[i][lu]==vl){
										temp = jsonData[i].country
								        temp2 = temp2.concat(" ",temp)
								        

							}

							
							}
}
							}
								
							}

							}

					
					else if(fil =='region' ){
						if(vl==undefined || vl == 'All'){

							temp = ''
							temp2 = ''
							for(var i=0;i<jsonData.length;i++){
								if($("#toggle_cloud").is(':checked')){
							
								if (jsonData[i].end_year >= year_value_cloud_1 && jsonData[i].end_year <= year_value_cloud_2){
									if(sw == 'All'){
										temp = jsonData[i].region
								        temp2 = temp2.concat(" ",temp)
							    		}
							    	else if(jsonData[i].end_year >= year_value_cloud_1 && jsonData[i].end_year <= year_value_cloud_2 && jsonData[i].swot == sw){
										temp = jsonData[i].region
								        temp2 = temp2.concat(" ",temp)

							}

							
							}
						}
						else{
							if(sw == 'All'){
										temp = jsonData[i].region
								        temp2 = temp2.concat(" ",temp)
							    		}
							    	else if( jsonData[i].swot == sw){
										temp = jsonData[i].region
								        temp2 = temp2.concat(" ",temp)

							}

							
							
						}
							//here
							}

							}
							else{
								temp = ''
								temp2 = ''
								for(var i=0;i<jsonData.length;i++){
									if($("#toggle_cloud").is(':checked')){
							
								if (jsonData[i].end_year >= year_value_cloud_1 && jsonData[i].end_year <= year_value_cloud_2 && jsonData[i][lu]==vl){
									if(sw == 'All'){
										temp = jsonData[i].region
								        temp2 = temp2.concat(" ",temp)
								        }
							    	else if(jsonData[i].end_year >= year_value_cloud_1 && jsonData[i].end_year <= year_value_cloud_2 && jsonData[i].swot == sw && jsonData[i][lu]==vl){
										temp = jsonData[i].region
								        temp2 = temp2.concat(" ",temp)
								        

							}

							
							}
}
else{
	if (jsonData[i][lu]==vl){
									if(sw == 'All'){
										temp = jsonData[i].region
								        temp2 = temp2.concat(" ",temp)
								        }
							    	else if(jsonData[i].swot == sw && jsonData[i][lu]==vl){
										temp = jsonData[i].region
								        temp2 = temp2.concat(" ",temp)
								        

							}

							
							}
}
							}
								
							}

							}


window.fil = fil;


	//cloud_drawTable(jsonData)
	var myConfig = {
      type: 'wordcloud',
      
      options: {
        text: temp2,
        minLength: 4,
        //ignore: ["America", "American", "Applause", "Because", "because", "could", "don’t", "people", "That’s", "that’s", "Their", "their", "there", "these", "thing", "those", "through", "We’re", "we’re", "where", "would"],
        
        maxLength:30,
        aspect: 'spiral',
        maxItems: 10000,
        /*stepAngle: 30,
        stepRadius: 40,*/
        rotate: true,

        colorType: 'random',
        //palette: ['#D32F2F', '#5D4037', '#1976D2', '#E53935', '#6D4C41', '#1E88E5', '#F44336', '#795548', '#2196F3', '#EF5350', '#8D6E63', '#42A5F5'],

        style: {
          fontFamily: 'Crete Round',
          cursor: 'pointer',

        hoverState: {
        alpha: 0.3,
        backgroundColor: '#F44336',

        borderRadius: 12,
        textAlpha: 1,
        
          },
          tooltip: {
                
                text:'Frequency: %hits',
              	visible: true,

              
              alpha: 1,
              backgroundColor: '#B39DDB',
              borderColor: '#7C4DFF',
              borderRadius: 2,
              borderWidth: 2,
              fontColor: '#651FFF',
              fontFamily: 'Georgia',
              fontSize: 16,
              fontWeight: 'strong',
              lineStyle: 'dashdot',
              textAlpha: 1,
          }
        }
      }
    };
 




 zingchart.render({
                                    id: 'cloud_div',
                                    data: myConfig,
                                    height: 400,
                                    width: '100%',
                                    hideprogresslogo: true,
                            
                                  });

						

/*var test;
zingchart.label_click = function(p) {

 
 var test = p.text;
 for(var i = 0; i< angel.length; i++){
 	if(test == angel[i].measure){
 			document.getElementById('cloud_label_value').innerHTML = "<h3 align='center' class='m-t-0' style='text-transform: capitalize' id='argument'>" +p.text + "</h3>" +
 																		"<p align = 'center'>" + angel[i].freq + " | " + relevanceArray_cloud[parseInt(angel[i].relevance) - 1] + " | " + likelihoodArray_cloud[parseInt(angel[i].likelihood) - 1] + "</p>" +
 																		"<a target='_blank' href=" + angel[i].url + ">" + angel[i].title + "</a>" +
 																		"<a href='#cloud_table'><p style='float: right; cursor: pointer' onclick=searchByItem_cloud(\""+test+"\")>...more</p></a>" 
}
}
}*/


}



function cloud_swot(){
						sw = document.getElementById('cloud_riskopp').value		
						Filter_cloud(sw)	
						searchByItem_cloud(sw)
						return_swot(sw)
												
}

function return_swot(){
							sw = document.getElementById('cloud_riskopp').value
							return sw
}

function measures_cloud(){
						meas =document.getElementById('cloud_measures_selector').value
						Filter_cloud(meas)
}

function storeScaleValueCloud() {
    var data = jsonData;
    var scale = document.getElementById('cloud_measures_selector').value;
    var store_scale_value = [];
    for (var i = 0; i < data.length; i++) {
        store_scale_value.push(data[i][scale]);
    }
    //console.log(store_scale_value);
    cloud_calculate_confidence(store_scale_value);
}

function cloud_calculate_confidence(data) {
    var temp;
    if (document.getElementById('cloud_90conf').checked) {
        temp = data.stdDeviation(0.9);
    } else if (document.getElementById('cloud_95conf').checked) {
        temp = data.stdDeviation(0.95);
        // console.log(data.stdDeviation());
    } else if (document.getElementById('cloud_99conf').checked) {
        temp = data.stdDeviation(0.99);
    }
    if (temp !== undefined) {
        document.getElementById('cloud_standard').innerHTML = " <p class='tooltip1'>CL<span class='tooltiptext'>The confidence level is the probability that the value of a parameter falls within a specified range of values</span></p> = " + temp['confidence'] * 100 + "% | "
            + "<p class='tooltip1'> &mu;<span class='tooltiptext'>The mean is the average of the numbers: a calculated 'central' value of a set of numbers</span></p> = " + parseFloat(data.mean()).toFixed(1)
            + " | <p class='tooltip1'>&sigma;<span class='tooltiptext'>The standard deviation is a measure of how spread out numbers are</span></p> = " + parseFloat(data.stdDeviation()).toFixed(1)
            + " | <p class='tooltip1'>Lower<span class='tooltiptext'>Minimum estimated value of standard deviation</span></p> = " + parseFloat(temp['lower']).toFixed(1)
            + " | <p class='tooltip1'>Upper<span class='tooltiptext'>Maximum estimated value of standard deviation</span></p> = " + parseFloat(temp['upper']).toFixed(1);
    }
    if(isNaN(temp['lower'])){
        alert('There were very few records from that search. You need to adjust your search or filter or control parameters. You can do this from the original search or filter and controls interface.')
    }
}

$("#cloud_table").dataTable({
    "bAutoWidth": false, // Disable the auto width calculation
    "aoColumns": [
        {"sWidth": "48%"}, // 1st column width
        {"sWidth": "10%"}, // 2nd column width
        {"sWidth": "6%"},
        {"sWidth": "6%"},
        {"sWidth": "10%"},
        {"sWidth": "10%"},
        {"sWidth": "10%"}, // 3rd column width and so on
        {"sWidth": "10%"}
       
    ],
    "aaSorting": [[3, "desc"]]
});

function searchByItem_cloud(argument) {
    var t = $('#cloud_table').DataTable();
    if(argument == 'All')
    	t.search("").draw();
    else
    	t.search(argument).draw();
}

function cloud_drawTable(jsonData) {
    var t = $('#cloud_table').DataTable();
    t.clear();
    for (var i = 0; i < jsonData.length; i++) {
    	if($("#toggle_cloud").is(':checked')){
    	if (jsonData[i].end_year >= year_value_cloud_1 && jsonData[i].end_year <= year_value_cloud_2)
                //console.log(data[i].title);
                t.row.add([
                    '<a href=' + jsonData[i].url + ' target="_blank">' + jsonData[i].title + '</a>',
                    jsonData[i].topic,
                    jsonData[i].end_year,
                    jsonData[i].intensity,
                    jsonData[i].sector,
                    jsonData[i].region,
                    jsonData[i].pestle,
                    jsonData[i].swot
                ]).draw(true);
            }
        
        else{
        	 t.row.add([
                    '<a href=' + jsonData[i].url + ' target="_blank">' + jsonData[i].title + '</a>',
                    jsonData[i].topic,
                    jsonData[i].end_year,
                    jsonData[i].intensity,
                    jsonData[i].sector,
                    jsonData[i].region,
                    jsonData[i].pestle,
                    jsonData[i].swot
                ]).draw(true);
        }
    
}
}


function cloud_frequency(awe){
	var ot = 'All'
	//console.log(awe)
	if(awe == undefined)
		option = 'topic'
	else if(awe == 'All') 
		var ot = 'All'
	else if(awe == 'Strength' || awe == 'Weakness' || awe == 'Opportunity' || awe == 'Threat')
		var ot = awe
	else
		option = awe

	//var ot = return_swot()
	

var dict = []	
var ind
var count = 1
var v 
var inc = 1
var inform = jsonData;
var f


if(option == 'topic'){
	for(var i=0;i<inform.length;i++){

	if($("#toggle_cloud").is(':checked')){
	if ((inform[i].end_year >= year_value_cloud_1 && inform[i].end_year <= year_value_cloud_2 && inform[i].topic!= "") && (vl=='All' ||inform[i][lu]==vl)){
	 if(ot == 'All'){
		if(dict.length == 0){
			dict.push({
				"measure" : inform[i].topic,
				"freq" : count

					})
				}
		
		else {	ind = 1
				//console.log(dict.length)
				for(var j=0;j<dict.length;j++){
					if(inform[i].topic == dict[j].measure){
						dict[j].freq  = parseInt(dict[j].freq, 10) + inc
						ind = 0
						
						
					}
					
				}
				switch(ind){
					case 0: break;

					case 1: dict.push({
								"measure" : inform[i].topic,
								"freq" : count
										})
					}
				
				}
			
			}
	else if(inform[i].swot == ot){
		if(dict.length == 0){
			dict.push({
				"measure" : inform[i].topic,
				"freq" : count

					})
				}
		
		else {	ind = 1
				//console.log(dict.length)
				for(var j=0;j<dict.length;j++){
					if(inform[i].topic == dict[j].measure){
						dict[j].freq  = parseInt(dict[j].freq, 10) + inc
						ind = 0
						
						
					}
					
				}
				switch(ind){
					case 0: break;

					case 1: dict.push({
								"measure" : inform[i].topic,
								"freq" : count
										})
					}
				
				}
			
			}
		}
	}
	else{
			if ((inform[i].topic!= "") && (vl=='All' ||inform[i][lu]==vl)){
	 if(ot == 'All'){
		if(dict.length == 0){
			dict.push({
				"measure" : inform[i].topic,
				"freq" : count

					})
				}
		
		else {	ind = 1
				//console.log(dict.length)
				for(var j=0;j<dict.length;j++){
					if(inform[i].topic == dict[j].measure){
						dict[j].freq  = parseInt(dict[j].freq, 10) + inc
						ind = 0
						
						
					}
					
				}
				switch(ind){
					case 0: break;

					case 1: dict.push({
								"measure" : inform[i].topic,
								"freq" : count
										})
					}
				
				}
			
			}
	else if(inform[i].swot == ot){
		if(dict.length == 0){
			dict.push({
				"measure" : inform[i].topic,
				"freq" : count

					})
				}
		
		else {	ind = 1
				//console.log(dict.length)
				for(var j=0;j<dict.length;j++){
					if(inform[i].topic == dict[j].measure){
						dict[j].freq  = parseInt(dict[j].freq, 10) + inc
						ind = 0
						
						
					}
					
				}
				switch(ind){
					case 0: break;

					case 1: dict.push({
								"measure" : inform[i].topic,
								"freq" : count
										})
					}
				
				}
			
			}
		}
	}
		

		

		}



			var d = [dict]
			//console.log(d)
			topTenCloud(d)
		}




else if(option == 'sector'){
	for(var i=0;i<inform.length;i++){
		if($("#toggle_cloud").is(':checked')){
		if ((inform[i].end_year >= year_value_cloud_1 && inform[i].end_year <= year_value_cloud_2 && inform[i].sector!= "") && (vl=='All' ||inform[i][lu]==vl)){
		if(ot == 'All'){			
		if(dict.length == 0){
			dict.push({
				"measure" : inform[i].sector,
				"freq" : count

					})
				}
		
		else {	ind = 1
				//console.log(dict.length)
				for(var j=0;j<dict.length;j++){
					if(inform[i].sector == dict[j].measure){
						dict[j].freq  = parseInt(dict[j].freq, 10) + inc
						ind = 0
						
						
					}
					
				}
				switch(ind){
					case 0: break;

					case 1: dict.push({
								"measure" : inform[i].sector,
								"freq" : count
										})
					}
				
				}
			}
		else if(inform[i].swot == ot){
			if(dict.length == 0){
			dict.push({
				"measure" : inform[i].sector,
				"freq" : count

					})
				}
		
		else {	ind = 1
				//console.log(dict.length)
				for(var j=0;j<dict.length;j++){
					if(inform[i].sector == dict[j].measure){
						dict[j].freq  = parseInt(dict[j].freq, 10) + inc
						ind = 0
						
						
					}
					
				}
				switch(ind){
					case 0: break;

					case 1: dict.push({
								"measure" : inform[i].sector,
								"freq" : count
										})
					}
				
				}
			}
			}
		}

			else{
					if ((inform[i].sector!= "") && (vl=='All' ||inform[i][lu]==vl)){
		if(ot == 'All'){			
		if(dict.length == 0){
			dict.push({
				"measure" : inform[i].sector,
				"freq" : count

					})
				}
		
		else {	ind = 1
				//console.log(dict.length)
				for(var j=0;j<dict.length;j++){
					if(inform[i].sector == dict[j].measure){
						dict[j].freq  = parseInt(dict[j].freq, 10) + inc
						ind = 0
						
						
					}
					
				}
				switch(ind){
					case 0: break;

					case 1: dict.push({
								"measure" : inform[i].sector,
								"freq" : count
										})
					}
				
				}
			}
		else if(inform[i].swot == ot){
			if(dict.length == 0){
			dict.push({
				"measure" : inform[i].sector,
				"freq" : count

					})
				}
		
		else {	ind = 1
				//console.log(dict.length)
				for(var j=0;j<dict.length;j++){
					if(inform[i].sector == dict[j].measure){
						dict[j].freq  = parseInt(dict[j].freq, 10) + inc
						ind = 0
						
						
					}
					
				}
				switch(ind){
					case 0: break;

					case 1: dict.push({
								"measure" : inform[i].sector,
								"freq" : count
										})
					}
				
				}
			}
			}
		}
			}
		
			var d = [dict]
			//console.log(d)
			topTenCloud(d)
		}



else if(option == 'pestle'){
	for(var i=0;i<inform.length;i++){
		if($("#toggle_cloud").is(':checked')){
		if ((inform[i].end_year >= year_value_cloud_1 && inform[i].end_year <= year_value_cloud_2 && inform[i].pestle!= "") && (vl=='All' ||inform[i][lu]==vl)){
		if(ot = 'All'){			
		if(dict.length == 0){
			dict.push({
				"measure" : inform[i].pestle,
				"freq" : count

					})
				}
		
		else {	ind = 1
				//console.log(dict.length)
				for(var j=0;j<dict.length;j++){
					if(inform[i].pestle == dict[j].measure){
						dict[j].freq  = parseInt(dict[j].freq, 10) + inc
						ind = 0
						
						
					}
					
				}
				switch(ind){
					case 0: break;

					case 1: dict.push({
								"measure" : inform[i].pestle,
								"freq" : count
										})
					}
				
				}
			}
			else if(inform[i].swot == ot){			
		if(dict.length == 0){
			dict.push({
				"measure" : inform[i].pestle,
				"freq" : count

					})
				}
		
		else {	ind = 1
				//console.log(dict.length)
				for(var j=0;j<dict.length;j++){
					if(inform[i].pestle == dict[j].measure){
						dict[j].freq  = parseInt(dict[j].freq, 10) + inc
						ind = 0
						
						
					}
					
				}
				switch(ind){
					case 0: break;

					case 1: dict.push({
								"measure" : inform[i].pestle,
								"freq" : count
										})
					}
				
				}
			}
			
			}}
			else{
if (( inform[i].pestle!= "") && (vl=='All' ||inform[i][lu]==vl)){
		if(ot = 'All'){			
		if(dict.length == 0){
			dict.push({
				"measure" : inform[i].pestle,
				"freq" : count

					})
				}
		
		else {	ind = 1
				//console.log(dict.length)
				for(var j=0;j<dict.length;j++){
					if(inform[i].pestle == dict[j].measure){
						dict[j].freq  = parseInt(dict[j].freq, 10) + inc
						ind = 0
						
						
					}
					
				}
				switch(ind){
					case 0: break;

					case 1: dict.push({
								"measure" : inform[i].pestle,
								"freq" : count
										})
					}
				
				}
			}
			else if(inform[i].swot == ot){			
		if(dict.length == 0){
			dict.push({
				"measure" : inform[i].pestle,
				"freq" : count

					})
				}
		
		else {	ind = 1
				//console.log(dict.length)
				for(var j=0;j<dict.length;j++){
					if(inform[i].pestle == dict[j].measure){
						dict[j].freq  = parseInt(dict[j].freq, 10) + inc
						ind = 0
						
						
					}
					
				}
				switch(ind){
					case 0: break;

					case 1: dict.push({
								"measure" : inform[i].pestle,
								"freq" : count
										})
					}
				
				}
			}
			
			}
			}
		}
			var d = [dict]
			//console.log(d)
			topTenCloud(d)
		}


else if(option == 'country'){
	for(var i=0;i<inform.length;i++){
		if($("#toggle_cloud").is(':checked')){
		if ((inform[i].end_year >= year_value_cloud_1 && inform[i].end_year <= year_value_cloud_2 && inform[i].country!= "") && (vl=='All' ||inform[i][lu]==vl)){
		if(ot == 'All'){			
		if(dict.length == 0){
			dict.push({
				"measure" : inform[i].country,
				"freq" : count

					})
				}
		
		else {	ind = 1
				//console.log(dict.length)
				for(var j=0;j<dict.length;j++){
					if(inform[i].country == dict[j].measure){
						dict[j].freq  = parseInt(dict[j].freq, 10) + inc
						ind = 0
						
						
					}
					
				}
				switch(ind){
					case 0: break;

					case 1: dict.push({
								"measure" : inform[i].country,
								"freq" : count
										})
					}
				
				}
			
			}
			else if(inform[i].swot == ot){			
		if(dict.length == 0){
			dict.push({
				"measure" : inform[i].country,
				"freq" : count

					})
				}
		
		else {	ind = 1
				//console.log(dict.length)
				for(var j=0;j<dict.length;j++){
					if(inform[i].country == dict[j].measure){
						dict[j].freq  = parseInt(dict[j].freq, 10) + inc
						ind = 0
						
						
					}
					
				}
				switch(ind){
					case 0: break;

					case 1: dict.push({
								"measure" : inform[i].country,
								"freq" : count
										})
					}
				
				}
			
			}
			
		}
	}
	else{
		if (( inform[i].country!= "") && (vl=='All' ||inform[i][lu]==vl)){
		if(ot == 'All'){			
		if(dict.length == 0){
			dict.push({
				"measure" : inform[i].country,
				"freq" : count

					})
				}
		
		else {	ind = 1
				//console.log(dict.length)
				for(var j=0;j<dict.length;j++){
					if(inform[i].country == dict[j].measure){
						dict[j].freq  = parseInt(dict[j].freq, 10) + inc
						ind = 0
						
						
					}
					
				}
				switch(ind){
					case 0: break;

					case 1: dict.push({
								"measure" : inform[i].country,
								"freq" : count
										})
					}
				
				}
			
			}
			else if(inform[i].swot == ot){			
		if(dict.length == 0){
			dict.push({
				"measure" : inform[i].country,
				"freq" : count

					})
				}
		
		else {	ind = 1
				//console.log(dict.length)
				for(var j=0;j<dict.length;j++){
					if(inform[i].country == dict[j].measure){
						dict[j].freq  = parseInt(dict[j].freq, 10) + inc
						ind = 0
						
						
					}
					
				}
				switch(ind){
					case 0: break;

					case 1: dict.push({
								"measure" : inform[i].country,
								"freq" : count
										})
					}
				
				}
			
			}
			
		}
	}
	}
			var d = [dict]
			//console.log(d)
			topTenCloud(d)
		}

else if(option == 'region'){
	for(var i=0;i<inform.length;i++){
		if($("#toggle_cloud").is(':checked')){
		if ((inform[i].end_year >= year_value_cloud_1 && inform[i].end_year <= year_value_cloud_2 && inform[i].region!= "") && (vl=='All' ||inform[i][lu]==vl)){
		if(ot == 'All'){				
		if(dict.length == 0){
			dict.push({
				"measure" : inform[i].region,
				"freq" : count

					})
				}
		
		else {	ind = 1
				//console.log(dict.length)
				for(var j=0;j<dict.length;j++){
					if(inform[i].region == dict[j].measure){
						dict[j].freq  = parseInt(dict[j].freq, 10) + inc
						ind = 0
						
						
					}
					
				}
				switch(ind){
					case 0: break;

					case 1: dict.push({
								"measure" : inform[i].region,
								"freq" : count
										})
					}
				
				}
			}

			else if(ot == inform[i].swot){				
		if(dict.length == 0){
			dict.push({
				"measure" : inform[i].region,
				"freq" : count

					})
				}
		
		else {	ind = 1
				//console.log(dict.length)
				for(var j=0;j<dict.length;j++){
					if(inform[i].region == dict[j].measure){
						dict[j].freq  = parseInt(dict[j].freq, 10) + inc
						ind = 0
						
						
					}
					
				}
				switch(ind){
					case 0: break;

					case 1: dict.push({
								"measure" : inform[i].region,
								"freq" : count
										})
					}
				
				}
			}
			
		}
	}
		else{
			if ((inform[i].region!= "") && (vl=='All' ||inform[i][lu]==vl)){
		if(ot == 'All'){				
		if(dict.length == 0){
			dict.push({
				"measure" : inform[i].region,
				"freq" : count

					})
				}
		
		else {	ind = 1
				//console.log(dict.length)
				for(var j=0;j<dict.length;j++){
					if(inform[i].region == dict[j].measure){
						dict[j].freq  = parseInt(dict[j].freq, 10) + inc
						ind = 0
						
						
					}
					
				}
				switch(ind){
					case 0: break;

					case 1: dict.push({
								"measure" : inform[i].region,
								"freq" : count
										})
					}
				
				}
			}

			else if(ot == inform[i].swot){				
		if(dict.length == 0){
			dict.push({
				"measure" : inform[i].region,
				"freq" : count

					})
				}
		
		else {	ind = 1
				//console.log(dict.length)
				for(var j=0;j<dict.length;j++){
					if(inform[i].region == dict[j].measure){
						dict[j].freq  = parseInt(dict[j].freq, 10) + inc
						ind = 0
						
						
					}
					
				}
				switch(ind){
					case 0: break;

					case 1: dict.push({
								"measure" : inform[i].region,
								"freq" : count
										})
					}
				
				}
			}
			}
		
			}
			var d = [dict]
			//console.log(d)
			topTenCloud(d)

		}

}





function topTenCloud(dict_freq) {
angel = []
for(var i=0; i<dict_freq[0].length;i++){
	if(dict_freq[0][i].measure != ''){
	angel.push({
						"measure" : dict_freq[0][i].measure,
						"freq" :dict_freq[0][i].freq,

						"intensity":'',
						'relevance':'',
						'likelihood':'',
						'url':'',
						'title':''
	})
	}
}

angel = cloud_aggregate(angel,option)
angel.sort(sort_by_cloud('freq',true,parseInt));

console.log(fil)
if(window.fil=='country')
	document.getElementById('cloud_topTenShow').innerHTML = "<strong style='font-size: large; text-transform: capitalize; margin-left: 12px' > Top Ten Countries</strong>"	
else if(window.fil=='')
  document.getElementById('cloud_topTenShow').innerHTML = "<strong style='font-size: large; text-transform: capitalize; margin-left: 12px' > Top Ten Topics</strong>"  

else
	document.getElementById('cloud_topTenShow').innerHTML = "<strong style='font-size: large; text-transform: capitalize; margin-left: 12px'> Top Ten "+ window.fil+"s</strong>"

    for (var j = 0; j < 10; j++) {
        var temp1 = "cloud_link" + j;
        var temp2 = "cloud_text" + j;
        var temp3 = "cloud_num" + j;
        if (j < angel.length) {
            document.getElementById(temp1).style.display = 'block';
            document.getElementById(temp1).href = angel[j]['url'];
            document.getElementById(temp2).innerHTML = "<p style='text-transform: capitalize' >" +(angel[j].measure) + "</p>";
            document.getElementById(temp3).innerHTML = (angel[j].freq + ' | ' + relevanceArray_cloud[angel[j]['relevance'] - 1] + ' | ' + likelihoodArray_cloud[angel[j]['likelihood'] - 1] );
        } else {
            document.getElementById(temp1).style.display = 'none';
            document.getElementById(temp2).innerHTML = '';
            document.getElementById(temp3).innerHTML = '';
        }
    }
}

function sort_by_cloud(field, reverse, primer) {
    var key = primer ?
        function (x) {
            return primer(x[field])
        } :
        function (x) {
            return x[field]
        };
    reverse = !reverse ? 1 : -1;
    return function (a, b) {
        return a = key(a), b = key(b), reverse * ((a > b) - (b > a));
    }
}



function cloud_aggregate(array,option){
var st = return_swot()

 if(option == 'topic'){
 	
	for(var i=0;i<array.length;i++){
		
		var sum = 0
		var sum1 = 0
		var avg = 0
		var avg1 = 0
		var c = 0
		var c1 = 0
		
			for(var j=0;j<jsonData.length;j++){
				if(st == 'All' && option == 'topic' && jsonData[j].topic != ''){
				if(array[i].measure == jsonData[j].topic){
					array[i]['url'] = jsonData[j]['url']
					array[i]['title'] = jsonData[j]['title']
					if(jsonData[j].relevance != ''){
					sum  = parseInt(jsonData[j].relevance,10) + sum
					c = c+ 1
					
				}
					
					if(jsonData[j].likelihood != ''){
						sum1  = parseInt(jsonData[j].likelihood,10) + sum1
						c1 = c1 + 1
					}
				}
			}

			else if(jsonData[j].swot == st && option == 'topic' && jsonData[j].topic != '' ){
				if(array[i].measure == jsonData[j].topic){
					array[i]['url'] = jsonData[j]['url']
					array[i]['title'] = jsonData[j]['title']
					if(jsonData[j].relevance != ''){
					sum  = parseInt(jsonData[j].relevance,10) + sum
					c = c + 1}
					if(jsonData[j].likelihood != ''){
						sum1  = parseInt(jsonData[j].likelihood,10) + sum1
						c1 = c1 + 1
					}
				}
			}
		}
			avg = sum / c//parseInt(array[i].freq,10)
			array[i].relevance = Math.round(avg)
			avg1 = sum1 / c1//parseInt(array[i].freq,10)
			array[i].likelihood = Math.round(avg1)
			

	}
}

  else if(option == 'sector'){
	for(var i=0;i<array.length;i++){
		var sum = 0
		var sum1 = 0
		var avg = 0
		var avg1 = 0
		var c = 0
		var c1 = 0
			for(var j=0;j<jsonData.length;j++){
				if(st == 'All' && option == 'sector' && jsonData[j].sector != ''){
				if(array[i].measure == jsonData[j].sector){
					array[i]['url'] = jsonData[j]['url']
					array[i]['title'] = jsonData[j]['title']
					if(jsonData[j].relevance != ''){
					sum  = parseInt(jsonData[j].relevance,10) + sum
					c = c + 1
				}
					if(jsonData[j].likelihood != ''){
						sum1  = parseInt(jsonData[j].likelihood,10) + sum1
						c1 = c1 + 1
					}
					
				}
			}
			else if(jsonData[j].swot == st && option == 'sector' && jsonData[j].sector != ''){
				if(array[i].measure == jsonData[j].sector){
					array[i]['url'] = jsonData[j]['url']
					array[i]['title'] = jsonData[j]['title']
					if(jsonData[j].relevance != ''){
					sum  = parseInt(jsonData[j].relevance,10) + sum
					c = c + 1
				}
					if(jsonData[j].likelihood != ''){
						sum1  = parseInt(jsonData[j].likelihood,10) + sum1
						c1  = c1 + 1
					}
				}
			}

			}
			avg = sum / c
			array[i].relevance = Math.round(avg)
			avg1 = sum1 / c1
			array[i].likelihood = Math.round(avg1)
			
	}
}

else if(option == 'pestle'){
	for(var i=0;i<array.length;i++){
		var sum = 0
		var sum1 = 0
		var avg = 0
		var avg1 = 0
		var c = 0
		var c1 = 0
			for(var j=0;j<jsonData.length;j++){
			 if(st == 'All' && option == 'pestle' && jsonData[j].pestle != ''){
				if(array[i].measure == jsonData[j].pestle){
					array[i]['url'] = jsonData[j]['url']
					array[i]['title'] = jsonData[j]['title']
					if(jsonData[j].relevance != ''){
					sum  = parseInt(jsonData[j].relevance,10) + sum
					c = c + 1
				}
					if(jsonData[j].likelihood != ''){
						sum1  = parseInt(jsonData[j].likelihood,10) + sum1
						c1 = c1 + 1
					}
				}
			}
			else if(jsonData[j].swot == st && option == 'pestle' && jsonData[j].pestle != ''){
				if(array[i].measure == jsonData[j].pestle){
					array[i]['url'] = jsonData[j]['url']
					array[i]['title'] = jsonData[j]['title']
					if(jsonData[j].relevance != ''){
					sum  = parseInt(jsonData[j].relevance,10) + sum
					c = c + 1
				}
					if(jsonData[j].likelihood != ''){
						sum1  = parseInt(jsonData[j].likelihood,10) + sum1
						c1 = c1 + 1
					}
				}
			}
		}
			avg = sum / c
			array[i].relevance = Math.round(avg)
			avg1 = sum1 / c1
			array[i].likelihood = Math.round(avg1)
			
	}
}

else if(option == 'country'){
	for(var i=0;i<array.length;i++){
		var sum = 0
		var sum1 = 0
		var avg = 0
		var avg1 = 0
		var c = 0
		var c1 = 0
			for(var j=0;j<jsonData.length;j++){
				if(st == 'All' && option == 'country' && jsonData[j].country != ''){
				if(array[i].measure == jsonData[j].country){
					array[i]['url'] = jsonData[j]['url']
					array[i]['title'] = jsonData[j]['title']
					if(jsonData[j].relevance != ''){
					sum  = parseInt(jsonData[j].relevance,10) + sum
					c = c + 1
				}
					if(jsonData[j].likelihood != ''){
						sum1  = parseInt(jsonData[j].likelihood,10) + sum1
						c1 = c1 + 1
					}
				}
			}
			else if(jsonData[j].swot == st && option == 'country' && jsonData[j].country != ''){
				if(array[i].measure == jsonData[j].country){
					array[i]['url'] = jsonData[j]['url']
					array[i]['title'] = jsonData[j]['title']
					if(jsonData[j].relevance != ''){
					sum  = parseInt(jsonData[j].relevance,10) + sum
					c = c + 1
				}
					if(jsonData[j].likelihood != ''){
						sum1  = parseInt(jsonData[j].likelihood,10) + sum1
						c1 = c1 + 1
					}
				}
			}
			}
			avg = sum / c
			array[i].relevance = Math.round(avg)
			avg1 = sum1 / c1
			array[i].likelihood = Math.round(avg1)
			
	}
}

 else if(option == 'region'){
	for(var i=0;i<array.length;i++){
		var sum = 0
		var sum1 = 0
		var avg = 0
		var avg1 = 0
		var c = 0
		var c1 = 0
			for(var j=0;j<jsonData.length;j++){
				if(st == 'All' && option == 'region' && jsonData[j].region != ''){
				if(array[i].measure == jsonData[j].region){
					array[i]['url'] = jsonData[j]['url']
					array[i]['title'] = jsonData[j]['title']
					if(jsonData[j].relevance != ''){
					sum  = parseInt(jsonData[j].relevance,10) + sum
					c = c + 1
				}
					if(jsonData[j].likelihood != ''){
						sum1  = parseInt(jsonData[j].likelihood,10) + sum1
						c1 = c1 + 1
					}
				}
			}
			else if(jsonData[j].swot == st && option == 'region' && jsonData[j].region != ''){
				if(array[i].measure == jsonData[j].region){
					array[i]['url'] = jsonData[j]['url']
					array[i]['title'] = jsonData[j]['title']
					if(jsonData[j].relevance != ''){
					sum  = parseInt(jsonData[j].relevance,10) + sum
					c =c + 1
				}
					if(jsonData[j].likelihood != ''){
						sum1  = parseInt(jsonData[j].likelihood,10) + sum1
						c1 = c1 + 1
					}
				}
			}
			}
			avg = sum / c
			array[i].relevance = Math.round(avg)
			avg1 = sum1 / c1
			array[i].likelihood = Math.round(avg1)
			
	}
}
	
	return array
}


	
}





	





