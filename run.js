function runNextTest(aTests, n) {
	n = n || 0;
	if (n >= aTests.length) {
		console.log('Done!');
		process.exit();
	}
	var oChildProcess = require('child_process');
	oChildProcess.exec('node ' + aTests[n].path, function (sError, sOutput) {
		var sDots = ' ' + ('.........................................................................').slice(- 80 + aTests[n].name.length) + ' ',
			sOutput = sOutput ? '\n' + sOutput : '',
			sError  = sError ? '\n' + sError.message : '';
			
		if (sError) {
			console.log('RUNNING ' + aTests[n].name + sDots + 'FAILURE', sOutput, sError);
			process.exit();
		} else {
			console.log('RUNNING ' + aTests[n].name + sDots + 'SUCCESS', sOutput);
			runNextTest(aTests, ++ n);
		}
	});
}

function compileTestList(sTestDir) {
	var oFs 		= require('fs'),
		aDirTests 	= oFs.readdirSync(sTestDir),
		sTestPath,
		aTests		= [];
	
	for (var n=0; n<aDirTests.length; n++) {
		if (aDirTests[n].match(/^test\./)) {
			sTestPath = sTestDir + '/' + aDirTests[n] + '/test.js';
			if (oFs.existsSync(sTestPath)) {
				aTests.push({
					name: aDirTests[n],
					path: sTestPath
				})
			}
		}
	}
	return aTests;
}

function runTests(sTestDir) {
	runNextTest(compileTestList(sTestDir));
}

runTests(__dirname);
	