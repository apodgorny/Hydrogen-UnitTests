var H 		 = require('../../H'),
	exec 	 = require('child_process').exec,
	sCommand = 'H H.Temperature inF outC < ' + __dirname + '/F.txt';

exec(sCommand, function(sError, sStdout, sStderr) { 
	H.assert(
		sStdout.trim() == '-12.222222222222172\n37.77777777777783\n537.7777777777778',
		'terminal command operation'
	);
});