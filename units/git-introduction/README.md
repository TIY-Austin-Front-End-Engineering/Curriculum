# Git Introduction

Git is a widely used open-source version control software. It is used to keep track of changes made to files and file structures within a project. It is also used to allow different people to contribute to and collaborate on a single project without stepping on toes. Using git, you are able to save the state of your files at any time, and return to that state at any time in the future.

Imagine you're writing a paper for school, and your teacher has asked you to turn in each draft for revision. You write your first draft, save it, and print it out to turn in.  A few days later, your teacher returns the paper to you with red scribbles all over it. You got back to your saved paper, make the revisions, save it with a new name, so you can go back to the original again later, if needed. You turn in your paper, and the process repeats itself. By the time your paper is finished, you have ten copies of it on your computer, all slightly different, and with different names!

Git allows you to keep track of each version of the paper, without having to make separate files or filenames each time you make changes you want to keep track of. It allows you to revisit your work exactly as it was at a previous point in history, or create divergent histories to work on different areas of a project simultaneously.

##### Repositories
Git keeps track of the files and file structure of a particular directory. The directory being tracked can contain any number of sub-directories and files, and any changes made to these files or sub-directories can be tracked for the life of the project. The data structure used to track file and sub-directory changes over time is referred to as a **repository**, and the data itself is stored in a `.git` directory, which git creates for you as soon as you create a new repository.

The location of your `.git` directory *matters*! It should be at the top level of your project directory. It will be able to track any siblings and their descendants, but nothing above it.

To create a new repository use the command `git init` inside the directory where you wish to track changes.

##### Commits (the basic git workflow)
Git does not remember *everything* you change. It doesn't store into memory every time you make a single keystroke (that would be absurd!), or even every time you create, save, or delete a file. In fact, git will only take a snapshot of your project if you explicitly tell it to, by making a **commit**. And, git is particular about which files it will pay attention to within your repository.

To find out the git status of the files in your project directory, use the `git status` command.

![Git Status Diagram](gitFileStatus.png)

Files in a repository can be in 4 states:
1. untracked
2. unmodified (nothing to commit)
3. modified (changes not staged, including deleting a tracked file)
4. staged (changes to be committed)

First and foremost, git only tracks changes in files that have been added to the repository. Git will notice if you add files to a project directory, and will inform you that there are 'untracked files' in your repo if you run `git status`. If you want to include files in your commits (which generally you do), you must 'track' them.

To add or remove specific files from tracking use the command `git add <filename>`, or `git rm <filename>`. Or, use `git add .` which will add everything in the current directory (but not remove anything that has been deleted).

Once a file is being tracked, git will automatically notice if you make changes to it. The 'changes' that git notices, more specifically, are any time you **save** a file and the contents of that file do not *exactly* match the contents of the file the last time you made a commit, or anytime you delete a file. When this occurs, git will mark that file as modified.

In order to make a new commit (a new saved point in the history of your project, to which you can return in the future), the files must have changed. Git requires that you 'stage' your changes before committing them, which ensures that you are only committing the changes you actually care about committing.

To add files to staging, use the `git add` command, just as you did to add them to tracking. Again, use `git status` to check if your files are ready to commit/staged or not.  

Finally, to make a new commit, use the command `git commit -m 'your message goes here'`. The `-m` flag allows you to write a 'message' for your commit. All commits must have a message (a brief description of the commit), but you can choose to add the message with a text editor in another step by omitting the flag.

##### Remote Repositories
Git also allows us to maintain references to **remote repositories**, or copies of our git repository that live in different locations. Those locations might be  in another directory on our machine (although this is a fairly unlikely usecase), or on a remote machine somewhere across the internet (which happens all the time). This is great because it allows us to back up our code, as well as easily share it with others. We can **clone** (aka copy) existing remote repositories to work on them locally, and sync our local version with the remote version with a few commands.

To create a new remote repository from your current local repository: use the command `hub create <optional_remote_repository_name>`. This creates a copy of your current repo on github.

To send updates to the remote repository from your local machine use the `git push` command. 

## Quick Guide

##### Setting up git
[Setting up git](https://git-scm.com/book/en/v2/Getting-Started-First-Time-Git-Setup)

##### Authorizing Github
[Authorizing Github](https://help.github.com/articles/generating-an-ssh-key/)

##### Starting a new project
1. `cd` into the directory where the project will live.
2. `git init` inside the directory to create a git repository for your project
3. `hub create <optional github repo name>` to create the corresponding repo on github
4. create the basic file structure for your project
5. `git add .` to add all the project files to tracking
6. `git commit -m 'initial commit'` to create your first commit and begin your repo history
7. `git push -u origin master` to push your files to github

##### Cloning an existing project
1. `cd` into the parent directory of the project you are cloning
2. `git clone <repo link> <optional project directory name>`
3. `cd` into the newly created directory

##### Making new commits on a project
Do this often! **DON'T WAIT UNTIL YOU FINISHED YOUR PROJECT**
1. `git status` to check which files have changed or been added/removed since last commit
2. `git add .` or `git add <filename>` to stage changes you wish to commit
3. (optional) `git rm <filename>` if there were deleted files you no longer wish to track
4. `git commit -m 'description of what changed since last commit'` to make the commit locally
5. `git push` to push your changes to github

##### Deleting a git repo that you made in error
**USE WITH EXTREME CAUTION!** Files will remain in their current state, but any history of their changes will be lost FOREVER.
1. `cd` into the directory where the repo lives.
2. `rm -rf .git` to remove the `.git` directory and delete the repo

## More Resources
* The Github training [cheatsheet](https://training.github.com/kit/downloads/github-git-cheat-sheet.pdf)
