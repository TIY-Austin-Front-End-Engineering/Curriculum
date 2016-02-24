### Run Software Update
> We want the newest version of OS X and all updates before we move on.

Follow [these instructions](https://support.apple.com/en-us/HT201541) to update to the newest version of OS X.

### Chrome
> A fast free web browser with great web developer tools.

Use [this link](https://www.google.com/chrome/browser/desktop/index.html) to download and install Chrome on your computer.

##### Set chrome as your default web browser.
1. From the Apple menu, choose System Preferences, then click General.
2. Click the "Default web browser" pop-up menu and choose Chrome.

### Slack Desktop and Mobile Apps
> Slack is a chat tool that I will use to do all of our online communication.

Use [this link](https://itunes.apple.com/us/app/slack/id803453959?mt=12#) to install the Slack desktop app.

Go to your Applications folder and find Slack. Drag it into your dock.

Open up slack. It will prompt you to enter your teamdomain. Enter: *theironyardatx*

Enter your email address and password.

> You should have received an email with instructions on how to set up your account. If you did not, grab Travis or one of the instructors. 

##### Automatically open Slack on login
1. From the Apple menu, choose System Preferences, then click Users & Groups.
1. Make sure your user is selected on the left and then click Login Items on thr upper right.
1. Click the `+` button to add a new Login Item.
1. Select Slack from the Applications folder and click Add.

The teamdomain is *theironyardatx*. 

Also go to the app store on your mobile phone and install the slack app for your mobile device as well.

### iTerm
> iTerm2 is a replacement for Terminal and the successor to iTerm. It works on Macs with OS 10.5 (Leopard) or newer. iTerm2 brings the terminal into the modern age with features you never knew you always wanted.

1. Use [this link](http://iterm2.com/) to download iTerm2.
1. Drag the iTerm application into your Applications folder.
1. Drag the iTerm application from your Applications folder into your dock for easy access.

### Git
> Git is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency.

In iTerm2 type the command `git`. If it is not already installed, it will prompt you with instructions on how to install.

You should also identify yourself to git. Use the following commands:

```
git config --global user.name "Your Name"
git config --global user.email you@example.com
git config --global credential.helper osxkeychain
```

### oh my zsh
> Gives our terminal a facelift.

In iTerm2 run the following commands one by one:

```
sh -c "$(curl -fsSL https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"
```
```
curl https://gist.githubusercontent.com/alarner/cf808bc1eccaae7198c6/raw/dbla.zsh-theme > ~/.oh-my-zsh/themes/dbla.zsh-theme
```
```
sed -i '.zshrc_original' 's/robbyrussell/dbla/g' ~/.zshrc
```
```
sed -i '.zshrc_original' 's/plugins=(git)/plugins=(git sublime)/g' ~/.zshrc
```
```
source ~/.zshrc
```

### Homebrew
> Homebrew installs the stuff you need that Apple didn’t.

Use [this link](http://brew.sh/) and follow the instructions to install Homebrew. When the intructions reference the Terminal you can use iTerm2 that you just installed instead.

### Sublime Text 3
> Sublime Text is a sophisticated text editor for code, markup and prose. You'll love the slick user interface, extraordinary features and amazing performance.

Use [this link](http://www.sublimetext.com/3) to download Sublime Text 3 for OS X. It says that it's still in beta, but it's already very stable.

### Sublime Text 3 Package Manager
> The Sublime Text package manager that makes it exceedingly simple to find, install and keep packages up-to-date.

Use [this link](https://packagecontrol.io/installation) and follow the instructions to install the Sublime Text 3 package manager. You will need to use Sublime to install the package manager. Be sure to restart Sublime after installing the package manager.

### Various Sublime Packages
Use [this link](https://packagecontrol.io/docs/usage) to read up on how to install new packages using the Sublime Package Manager that you just installed.

Install the following package:

1. SublimeLinter
1. SublimeLinter-contrib-eslint
1. Babel
1. LoremIpsum
1. Sass

### Git Editor
> Change git to use Sublime as your editor

Run this command in iTerm `git config --global core.editor "subl -n -w"`

### node / npm
> Node.js is a platform built on Chrome's JavaScript runtime for easily building fast, scalable network applications. npm is the package manager for node.

Using iTerm run the command `brew install node`.

### tree
> Tree is a recursive directory listing command that produces a depth indented listing of files

Using iTerm run the command `brew install tree`.

### Hub
> hub is a command line tool that wraps git in order to extend it with extra features and commands that make working with GitHub easier.

Using iTerm2, type the following command: `brew install hub`

### npm packages
> A streaming build system.

Using iTerm run the following commands:
```
npm install -g eslint eslint-plugin-react
```
```
curl https://gist.githubusercontent.com/alarner/d7888d68e9228326a71b/raw/.eslintrc > ~/.eslintrc
```

### GitHub
> GitHub is where people build software. More than 10 million people use GitHub to discover, fork, and contribute to over 26 million projects.

Use [this link](https://github.com/join) to sign up for a GitHub account. You just need the free plan. On your profile upload a picture of yourself. This will help me to remember your name.

### Breadcrumbs
> Breadcrumbs is a question and answer tool where you can practice the things you've learned in the class, help your fellow students and get answers to your questions.

Use [this link](http://tiy.breadcrumbsqa.com/index/register) to sign up for a Breadcrumbs account. Follow at least the html, css and javascript tags.

### Personal Blocklist Chrome Extension
> Blocks domains/hosts from appearing in your Google search results.

1. Use [this link](https://chrome.google.com/webstore/detail/personal-blocklist-by-goo/nolijncfnkgaikbjbdaogikpmpbdcdef?hl=en) to install the personal block list.
2. Go to [http://www.w3schools.com/](http://www.w3schools.com/).
3. Click on the red circle with the hand picture and then click on the link "Block current host: w3schools.com"

### Postman Chrome Extension
> Postman helps you develop APIs faster.

Install [this chrome extension](https://chrome.google.com/webstore/detail/postman-rest-client-short/mkhojklkhkdaghjjfdnphfphiaiohkef?hl=en).


<!-- for next time:

	Xcode (not just Xcode tools)
	sublime preferences
	sublime packages
		- sass
		- sublime linter
		- sublimelinter-contrib-eslint
		- sublimelinter-contrib-htmlhint
		- w3c validator

-->

<!--
Install the following packages:

*


Sublime Package Control
	- sass
	- sublime linter
	- sublimelinter-contrib-eslint
	- sublimelinter-contrib-htmlhint
	- eslint
	- w3c validator

-->
