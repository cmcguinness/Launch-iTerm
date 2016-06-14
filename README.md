# Launch-iTerm
Short JavaScript to launch iTerm at a directory from Finder

## Overview
For some reason, my old Launch iTerm at folder script broke.  So I
wrote a new one, only in JavaScript rather than AppleScript.

You just right click a folder, and find the service.  Boom, you're
in iTerm at the directory.

## Installation
1. Launch Automator
2. Create a new service
3. Service receives selected folders in Finder
4. Action is Run JavaScript
5. Source is in the `iterm.js` file in this repository
6. Save as whatever you want to see on the services menu
