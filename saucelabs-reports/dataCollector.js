var fs = require('fs');

function constructObjectIfNecessary(component, browser, name){
	var reports = summary.reports;
	if(!reports[component]){
		reports[component] = {};
	}
	
	if(!reports[component][name]){
		reports[component][name] = {};
	}
	
	if(!reports[component][name][browser]){
		reports[component][name][browser] = 0;
	}
}

var summary = {
	numTestRuns:0,
	reports:{}
};
var files = fs.readdirSync('reports');
summary.numTestRuns = files.length;

for(var i = 0; i < files.length; i+=1){
	var file = files[i];
	if(file.indexOf('.json') > -1){
		var opt = {
			encoding: "utf8"
		}
		
		var report = JSON.parse(fs.readFileSync('reports/' + file, opt));
		var failures = report.resultsDetailed;
		
		for (var j = 0; j < failures.length; j+=1){
			var failedTest = failures[j];
			var component = failedTest['component'];
			var browser = failedTest['browser'][1].replace(/\s/g, '') + failedTest['browser'][2];
			var name = failedTest['name'];
			constructObjectIfNecessary(component, browser, name);
			summary.reports[component][name][browser] +=1
		}
	}
}

fs.writeFileSync('testFailSummary.json', JSON.stringify(summary));