function run(input, parameters) {
	// Uncomment this code to trigger a break in the debugger
	// debugger
	
	//	Step one: figure out the folder we were launched from.
	//	Why is this so painful? I have no idea. Maybe I missed something!
	var finder = Application('finder');
	var sel = finder.selection();
	var url = sel[0].getProperty('url').get();
	var dir = url.substring(7);
	//	Because we get a URL, spaces have been replaced by %20s.  Un-do that...
	dir = dir.replace(/%20/g,' ');
	
	//	Now launch iterm, navagate to the right directory
	var iTerm = Application("iTerm2");
	var win = iTerm.createWindowWithDefaultProfile();
	var tab = win.currentTab();
	var ses = tab.currentSession();
	ses.write({text: 'cd "' + dir + '"'});

	return "";
}