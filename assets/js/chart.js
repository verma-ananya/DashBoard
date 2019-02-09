//console.log("Load");
google.load('visualization', '1', {packages: ['controls', "motionchart", "table"]});
setTimeout(function(){},100);
var jsonData;
var chosenshow;
var motion_stdarr;
var intensityArray = [];
var relmap={'1':'Vague','2':'Early Stage','3':'Gaining Traction','4':'Evolving','5':'Established','6':'Expansionary','7':'Growing'};
var likemap={'1':'Potential','2':'Possible','3':'Probable','4':'Business as usual'};
/*$.ajax({
        url: shapingTomorrowDataUrl,
        dataType: "json",
        async: true,
        success: function(data) {
        console.log("Data done");
        jsonData=data;
        createTable($('#chart_div').width(),400);
}
    });*/
/*$(document).ready(function(){*/






     function postProcessing3(data) {
         console.log('This is the motion graph');
       jsonData = data;
       createTable($('#cloud_div').width(),400);
     }
    
    /*getValues();
        function getValues(){
             $.ajax({
                url: shapingTomorrowDataUrl,
                dataType: 'json',
                success: postProcessing,
                async:true,
                cache:false
                });
        };*/
              // createTable($('#cloud_div').width(),400);
/*});*/
var myData=null;
function showRadio(){
    if(document.getElementById('motion_topic1').checked){
        document.getElementById('motion_topTenShow').innerHTML="<strong>Top Ten Topics</strong>";
        createTable($('#cloud_div').width(),400);
    }else if(document.getElementById('motion_sector1').checked){
        document.getElementById('motion_topTenShow').innerHTML="<strong>Top Ten Sector</strong>";
        createTable($('#cloud_div').width(),400);
    }else if(document.getElementById('motion_pestle1').checked){
        document.getElementById('motion_topTenShow').innerHTML="<strong>Top Ten Pestel</strong>";
        createTable($('#cloud_div').width(),400);
    }else if(document.getElementById('motion_region1').checked){
        document.getElementById('motion_topTenShow').innerHTML="<strong>Top Ten Region</strong>";
        createTable($('#cloud_div').width(),400);
    }else if(document.getElementById('motion_country1').checked){
        document.getElementById('motion_topTenShow').innerHTML="<strong>Top Ten Country</strong>";
        createTable($('#cloud_div').width(),400);
    }
    else if(document.getElementById('motion_swot1').checked){
        document.getElementById('motion_topTenShow').innerHTML="<strong>Top Ten SWOT</strong>";
        createTable($('#cloud_div').width(),400);
    }
}
function createTable(cWidth, CHeight) {
    chosenshow = document.querySelector('input[name = "show"]:checked').value;
    console.log(chosenshow);
        myData = getJsonData();
    //document.writeln("You entered " + gender + " for your gender<br>");
    var dash_container = document.getElementById('dashboard_div'),
    myDashboard = new google.visualization.Dashboard(dash_container);
//    var opt = '{"yLambda":1,"orderedByY":false,"uniColorForNonSelected":false,"colorOption":"2","showTrails":true,"time":"2016","xZoomedIn":false,"orderedByX":false,"sizeOption":"2","iconKeySettings":[],"xLambda":1,"xAxisOption":"_TIME","yZoomedDataMax":4,"playDuration":15000,"yAxisOption":"2","xZoomedDataMax":7258118400000,"yZoomedIn":false,"duration":{"multiplier":1,"timeUnit":"Y"},"iconType":"BUBBLE","nonSelectedAlpha":0.4,"dimensions":{"iconDimensions":["dim0"]},"yZoomedDataMin":1,"xZoomedDataMin":1451606400000}';
    var opt = '{"yLambda":1,"showTrails":true,"orderedByX":false,"sizeOption":"2","xZoomedDataMin":1,"yAxisOption":"3","yZoomedDataMin":1,"playDuration":15000,"dimensions":{"iconDimensions":["dim0"]},"xZoomedIn":false,"xAxisOption":"4","uniColorForNonSelected":false,"colorOption":"2","xZoomedDataMax":7,"yZoomedIn":false,"nonSelectedAlpha":0.4,"iconKeySettings":[],"orderedByY":false,"duration":{"timeUnit":"Y","multiplier":1},"yZoomedDataMax":4,"iconType":"BUBBLE","xLambda":1,"time":"2020"}';
    var topicPicker = new google.visualization.ControlWrapper({
        'controlType': 'CategoryFilter',
        'containerId': 'motion_topicdiv',
        'options': {
            'filterColumnIndex': 1,
            'ui': {
                'label': '',
                'allowTyping': true,
                'allowMultiple': false,
                'caption': 'All'
            }
        }
    });
    var categoryPicker = new google.visualization.ControlWrapper({
        'controlType': 'CategoryFilter',
        'containerId': 'motion_sectordiv',
        'options': {
            'filterColumnIndex': 7,
            'ui': {
                'label': '',
                'allowTyping': true,
                'allowMultiple': false,
                'caption': 'All'
            }
        }
    });
    var regionPicker = new google.visualization.ControlWrapper({
        'controlType': 'CategoryFilter',
        'containerId': 'motion_regiondiv',
        'options': {
            'filterColumnIndex': 8,
            'ui': {
                'label': '',
                'allowTyping': true,
                'allowMultiple': false,
                'caption': 'All'
            }
        }
    });
    var pestlePicker = new google.visualization.ControlWrapper({
        'controlType': 'CategoryFilter',
        'containerId': 'motion_pestlediv',
        'options': {
            'filterColumnIndex': 9,
            'ui': {
                'label': '',
                'allowTyping': true,
                'allowMultiple': false,
                'caption': 'All'
            }
        }
    });
    var riskoppPicker = new google.visualization.ControlWrapper({
        'controlType': 'CategoryFilter',
        'containerId': 'motion_riskoppdiv',
        'options': {
            'filterColumnIndex': 12,
            'ui': {
                'label': '',
                'allowTyping': true,
                'allowMultiple': false,
                'caption': 'All'
            }
        }
    });

    var countryPicker = new google.visualization.ControlWrapper({
        'controlType': 'CategoryFilter',
        'containerId': 'motion_countrydiv',
        'options': {
            'filterColumnIndex': 11,
            'ui': {
                'label': '',
                'allowTyping': true,
                'allowMultiple': false,
                'caption': 'All'
            }
        }
    });
    var myTable = new google.visualization.ChartWrapper({
        'chartType': 'Table',
        'containerId': 'motion_datatable',
        "options": {
            allowHtml: true,
            width: '100%',
            height: '100%'
        },
        'view': {'columns': [0, 1, 3, 4, 7,8,9,11,12]},
    });
    myDashboard.bind([topicPicker,categoryPicker, regionPicker, pestlePicker,countryPicker,riskoppPicker], myTable);
    var myLine = new google.visualization.ChartWrapper({
        'chartType': 'MotionChart',
        'containerId': 'cloud_div',
        'options': {
            width: cWidth,
            height: CHeight,
            state: opt
        },
        'view': {'columns': [1, 2, 4, 5, 6]},
        'dataTable': google.visualization.data.group(myData, [0],
                [{'column': 2, 'aggregation': google.visualization.data.avg, 'type': 'number'}])
    });
    myDashboard.bind([topicPicker,categoryPicker, regionPicker, pestlePicker, countryPicker,riskoppPicker], myLine);
    google.visualization.events.addListener(myTable, 'ready', function () {
        $('.google-visualization-table-table').DataTable(
            {
                columnDefs: [
                    {
                        render: function ( data, type, row ) {
                            return data;
                        },
                        targets: 0
                    },
                    { visible: false, }
                ]
            }
        );
    });
    google.visualization.events.addListener(pestlePicker, 'ready', function () {
        $('.charts-combobox input').css('width', '85%');
        $('.charts-menu').css({
            'height': '150px',
            'overflow': 'hidden',
            'overflow-y': 'scroll',
            'width': '71.5%'
        });
        $('.charts-menuitem').css({
            'padding': '4px 7em 4px 10px'
        });
    });
    google.visualization.events.addListener(riskoppPicker,'ready',function () {
        $('.charts-combobox input').css('width', '65%');
        $('.charts-menu').css({
            'height': '70px',
            'overflow': 'hidden',
            'overflow-y': 'scroll',
            'width': '71.5%',
            'margin-top': '4px'
        });
        $('.charts-menuitem').css({
            'padding': '4px 7em 4px 10px'
        });
    });

    google.visualization.events.addListener(countryPicker,'ready',function () {
        $('.charts-combobox input').css('width', '85%');
        $('.charts-menu').css({
            'height': '150px',
            'overflow': 'hidden',
            'overflow-y': 'scroll',
            'width': '71.5%'
        });
        $('.charts-menuitem').css({
            'padding': '4px 7em 4px 10px'
        });
    });

    google.visualization.events.addListener(myLine, 'ready', function () {
        $('#motion_guide_lnk').show();
        $('#motion_definition_lnk').show();
        $('#motion_feedback_lnk').show();
        $('#motion_filter-container').show();
    });
   motion_confidencecalc();
    myDashboard.draw(myData);
    //console.log("Done");
}
function getJsonData() {
    var data = getChartData(jsonData, 'end_year');
    var chartData = new google.visualization.DataTable();
    chartData.addColumn('string', 'Title');
    if(chosenshow=="topic"){
        chartData.addColumn('string', 'Topic');
    }
    else if(chosenshow=="sector")
        chartData.addColumn('string', 'Sector');
    else if(chosenshow=="region")
        chartData.addColumn('string', 'Region');
    else if(chosenshow=="pestle")
        chartData.addColumn('string', 'Pestle');
    else if(chosenshow=="country")
        chartData.addColumn('string', 'Country');
    else if(chosenshow=="swot")
        chartData.addColumn('string', 'swot');
    chartData.addColumn('number', 'Time');//end_year as date
    chartData.addColumn('string', 'Year');//end_year as date
    chartData.addColumn('number', 'Intensity');
    chartData.addColumn('number', 'Likelihood');
    chartData.addColumn('number', 'Relevance');
    chartData.addColumn('string', 'Sector');
    chartData.addColumn('string', 'Region');
    chartData.addColumn('string', 'PESTLE');
    chartData.addColumn('string', 'URL');
    chartData.addColumn('string', 'Country');
    chartData.addColumn('string','swot');
    chartData.addRows(data['chartData']);
    getAggregateIntensity(data['chartData']);
    //console.log(data['chartData']);
    return chartData;
}
function getChartData(jsonObj, dateCol) {
    var dataArr = [];
    var tableArr = [];
    for (i in jsonObj) {
        var rows = [];
        var tableRows = [];
        var data = jsonObj[i];
        if (data.title !== "") {
            rows.push('<a href='+data.url+' target=" _blank">'+data.title+'</a>');
        }
        if(chosenshow=="topic"){
            if (data.topic !== "") {
                rows.push(data.topic);
            }}
        else if(chosenshow=="sector"){
            if (data.sector !== "") {
                rows.push(data.sector);
            }}
        else if(chosenshow=="region"){
            if (data.region !== "") {
                rows.push(data.region);
            }}
        else if(chosenshow=="pestle") {
            if (data.pestle !== "") {
                rows.push(data.pestle);
            }}
        else if(chosenshow=="country") {
            if(data.country !== ""){
                rows.push(data.country);
            }
        } else if(chosenshow=="swot") {
            if(data.country !== ""){
                rows.push(data.swot);
            }
        }
        var year = formatDate(data[dateCol]);
        if (!isNaN(year)) {
            rows.push(year);
            rows.push(year + '');
        }
        var inten = parseInt(data.intensity);
        if (!isNaN(inten)) {
            rows.push(inten);
        }
        var likli = parseInt(data.likelihood);
        if (!isNaN(likli)) {
            rows.push(likli);
        }
        var relevance = data.relevance === "" ? 1 : parseInt(data.relevance);
        rows.push(relevance);
        rows.push(data.sector);
        rows.push(data.region);
        rows.push(data.pestle);
        rows.push(data.url);
        rows.push(data.country);
        rows.push(data.swot);
        //console.log(rows);
        if (rows.length == 13) {
            dataArr.push(rows);
        }
        }
    //console.log(dataArr);
    filterUniqueArray(chosenshow,jsonObj);
    return {'chartData': dataArr, 'tableData': tableArr};
}
function getAggregateIntensity(intensityArr){
    //console.log( intensityArr);
    var sum = 0;
    for(i in intensityArr){
        sum = sum+intensityArr[i][4];
        intensityArray.push(intensityArr[i][4]);
    }
    motion_stdarr = intensityArray;
}
function filterUniqueArray(property,data){
    var storeUniqueArray = [];
    var i;
    if(data !== undefined){
        for(i=0;i<data.length;i++){
            if(storeUniqueArray.indexOf(data[i][property])==-1){
                storeUniqueArray.push(data[i][property]);
            }
        }
    }

     //console.log(storeUniqueArray);
    filterJsonArray(storeUniqueArray,property,data);
}
function filterJsonArray(uniqueArray,property,data){
    var storeJsonArray = [];

    var j,k,l;
   // console.log(data);
    for (j=0;j<uniqueArray.length;j++){
        //console.log(uniqueArray[j]);
        var particularJsonArray = [];
        for (k=0;k<data.length;k++){
            if(uniqueArray[j] == data[k][property]){
            // console.log(data[k]);
             particularJsonArray.push(data[k]);
            }
        }
        //console.log(particularJsonArray);
        storeJsonArray.push(particularJsonArray);
    }
     //console.log(storeJsonArray);
    createCard(storeJsonArray,uniqueArray,chosenshow);
}
function createCard(jsonArray,propertyArray,chosenproperty){
    var relevanceAvgArray = [];
    var likelihoodAvgArray = [];
    var intensityAvgArray = [];
    var highestIntensityJson = []
    var i,j,k;
    var indexes =[];
    for (i=0;i<jsonArray.length;i++){
        var sumRelevanceValue = 0;
        var sumLikelihoodValue = 0;
        var sumIntensityValue = 0;
        var insertIntensity = [];
        var relevanceAvg,likelihoodAvg,intensityAvg;
        highestIntensityJson.push(getHighestIntensityJson(jsonArray[i]));
            for (j=0;j<jsonArray[i].length;j++){
                if(jsonArray[i][j]['relevance'] !== ''){
                    sumRelevanceValue = sumRelevanceValue+jsonArray[i][j]['relevance'];
                }
                if(jsonArray[i][j]['likelihood'] !== ''){
                    sumLikelihoodValue = sumLikelihoodValue+jsonArray[i][j]['likelihood'];
                }
                if(jsonArray[i][j]['intensity'] !== ''){
                    sumIntensityValue = sumIntensityValue+jsonArray[i][j]['intensity'];
                    insertIntensity.push(sumIntensityValue);
                }
                //sumIntensityValue = sumIntensityValue+jsonArray[i][j]['intensity'];

            }
            //console.log(insertIntensity);
            relevanceAvg = Math.round(sumRelevanceValue/(jsonArray[i].length));
            likelihoodAvg = Math.round(sumLikelihoodValue/jsonArray[i].length);
            intensityAvg = (sumIntensityValue/(jsonArray[i].length));
            relevanceAvgArray.push(relevanceAvg);
            likelihoodAvgArray.push(likelihoodAvg);
            intensityAvgArray.push(intensityAvg);

    }

    var temp = intensityAvgArray;
    indexes = getIndexes(temp);
    for (k=0;k<10;k++){
        if(propertyArray[indexes[k]]){
            var temp = "motion_text"+k;
            var temp1 = "motion_num"+k;
            var temp2 = "motion_link"+k;
            document.getElementById(temp).innerHTML=convert_case(propertyArray[indexes[k]]);
            document.getElementById(temp1).innerHTML=(intensityAvgArray[indexes[k]].toFixed(0)+" | "+relmap[relevanceAvgArray[indexes[k]]]+" | "+likemap[likelihoodAvgArray[indexes[k]]]+" | "+highestIntensityJson[indexes[k]]['end_year']);
            document.getElementById(temp2).href=highestIntensityJson[indexes[k]]['url'];
        }

    }
    //console.log(indexes);
}

function getHighestIntensityJson(data){
     var i,j;
     var max = 0;
     var temp =0;
     var dataArray = [];
     for(i=0;i<data.length;i++){
         dataArray.push(data[i]['intensity']);
     }
   //console.log(dataArray);
     for( j=0;j<dataArray.length;j++){
         if(max<dataArray[j]){
             max = dataArray[j];
             temp =j;
         }
     }
     //console.log(data[temp]);
     return data[temp];
}

function getIndexes(data){
    var i,j=1;
    var indexes = [];
    var temp = [];
    temp = mergeSort(data);
    temp = temp.reverse();
    for (k=0;k<10;k++){
        var value = data.indexOf(temp[k]);

        if(indexes.indexOf(value) == -1){
            indexes.push(data.indexOf(temp[k]));
        }else if(temp[k]==temp[k-1]){
            let nextValue = indexes[k-1];
            value=data.indexOf(temp[k],nextValue+1);
            //console.log(value);
           //console.log(data.indexOf(temp[k],value));
            indexes.push(data.indexOf(temp[k],value));
        }

    }
//console.log(data);
    //console.log(temp);
    //console.log(indexes);
    return indexes;
}
function formatDate(dateStr) {
    return parseInt(dateStr);
}
//Split the array into halves and merge them recursively
function mergeSort (arr) {
    if (arr.length === 1) {
        // return once we hit an array with a single item
        return arr
    }

    const middle = Math.floor(arr.length / 2) // get the middle item of the array rounded down
    const left = arr.slice(0, middle) // items on the left side
    const right = arr.slice(middle) // items on the right side

    return merge(
        mergeSort(left),
        mergeSort(right)
    )
}
// compare the arrays item by item and return the concatenated result
function merge (left, right) {
    let result = []
    let indexLeft = 0
    let indexRight = 0

    while (indexLeft < left.length && indexRight < right.length) {
        if (left[indexLeft] < right[indexRight]) {
            result.push(left[indexLeft])
            indexLeft++
        } else {
            result.push(right[indexRight])
            indexRight++
        }
    }

    return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight))
}

function convert_case(str) {
    var lower = str.toLowerCase();
    return lower.replace(/(^| )(\w)/g, function(x) {
        return x.toUpperCase();
    });
}




