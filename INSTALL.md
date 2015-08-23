### Chrome
> A fast free web browser with great web developer tools.

Use [this link](https://www.google.com/chrome/browser/desktop/index.html) to download and install Chrome on your computer. Set chrome as your default web browser.

### iTerm
> iTerm2 is a replacement for Terminal and the successor to iTerm. It works on Macs with OS 10.5 (Leopard) or newer. iTerm2 brings the terminal into the modern age with features you never knew you always wanted.

Use [this link](https://iterm2.com/downloads/stable/iTerm2_v2_0.zip) to download and then install iTerm2.

### Homebrew
> Homebrew installs the stuff you need that Apple didn’t.

Use [this link](http://brew.sh/) and follow the instructions to install Homebrew. When the intructions reference the Terminal you can use iTerm2 that you just installed instead.

### Git
> Git is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency.

In iTerm2 type the command `git`. If it is not already installed, it will prompt you with instructions on how to install.

### Sublime Text 3
> Sublime Text is a sophisticated text editor for code, markup and prose. You'll love the slick user interface, extraordinary features and amazing performance.

Use [this link](http://www.sublimetext.com/3) to download Sublime Text 3 for OS X. It says that it's still in beta, but it's already very stable.

### Sublime Text 3 Package Manager
> The Sublime Text package manager that makes it exceedingly simple to find, install and keep packages up-to-date.

Use [this link](https://packagecontrol.io/installation) and follow the instructions to install the Sublime Text 3 package manager. You will need to use Sublime to install the package manager. Be sure to restart Sublime after installing the package manager.

### Sublime Text 3 `subl` Command
> Sublime Text includes a command line tool, subl, to work with files on the command line. This can be used to open files and projects in Sublime Text, as well working as an EDITOR for unix tools, such as git and subversion.

1. Using iTerm, type the following command: `mkdir ~/bin`
2. Now type `nano ~/.bash_profile`. This will open up a command line text editor. You cannot use the mouse. You muse use the arrow keys to move around.
3. Add the following code at the very end of the file. Don't worry if the file is empty.

	```bash
	# set PATH so it includes user's private bin if it exists
	if [ -d "$HOME/bin" ] ; then
	    PATH="$HOME/bin:$PATH"
	fi
	```
4. To save your changes type `ctrl` + `x`. Then press the letter *y* and then press enter.
5. Use [this link](https://www.sublimetext.com/docs/3/osx_command_line.html) and follow the setup instructions to configure the `subl` command.

### node / npm
> Node.js is a platform built on Chrome's JavaScript runtime for easily building fast, scalable network applications. npm is the package manager for node.

Using iTerm run the command `brew install node`. Restart iTerm after you're done.

### npm packages
> A streaming build system.

Using iTerm run the command `npm install -g gulp yo mocha eslint htmlhint csslint alarner/generator-tiyfe`.

### Slack Desktop and Mobile Apps
> Slack brings all your communication together in one place. It's real-time messaging, archiving and search for modern teams.

Use [this link](https://itunes.apple.com/us/app/slack/id803453959?mt=12#) to install the Slack desktop app. Also go to the app store on your mobile phone and install the slack app for your mobile device as well.

<!--
### Various Sublime Packages
Use [this link](https://packagecontrol.io/docs/usage) to read up on how to install new packages using the Sublime Package Manager that you just installed.
-->

### GitHub
> GitHub is where people build software. More than 10 million people use GitHub to discover, fork, and contribute to over 26 million projects.

Use [this link](https://github.com/join) to sign up for a GitHub account. You just need the free plan. On your profile upload a picture of yourself. This will help me to remember your name.

### GitHub SSH Keys
> SSH keys are a way to identify trusted computers, without involving passwords.

Use [this link](https://help.github.com/articles/generating-ssh-keys/) and follow the instructions to set up SSH keys for your GitHub account.

### Breadcrumbs
> Breadcrumbs is a question and answer tool where you can practice the things you've learned in the class, help your fellow students and get answers to your questions.

Use [this link](http://tiy.breadcrumbsqa.com/index/register) to sign up for a Breadcrumbs account. Follow at least the html, css and javascript tags.

### Personal Blocklist Chrome Extension
> Blocks domains/hosts from appearing in your Google search results.

1. Use [this link](https://chrome.google.com/webstore/detail/personal-blocklist-by-goo/nolijncfnkgaikbjbdaogikpmpbdcdef?hl=en) to install the personal block list. 
2. Go to [http://www.w3schools.com/](http://www.w3schools.com/).
3. Click on the red circle with the hand picture and then click on the link "Block current host: w3schools.com"


<!--
Install the following packages:

* 


Sublime Package Control
	- sass
	- sublime linter
	- sublimelinter-contrib-eslint
	- sublimelinter-contrib-htmlhint
	- eslint
	- user settings configuration
	- w3c validator

-->