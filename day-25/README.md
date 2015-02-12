[Table of Contents](/README.md)

# Day 25: Git Branching and Merging + Design Talk

## Goals
- Learn some more advanced git concepts.
	- git merge
	- git diff
	- git branch
- Learn some basic design concepts.

You are half way done with new feature for your project and an urgent bug fix request comes in. You switch to working on the bug fix, but don't want to push out your half finished new feature too. How do you handle this?

1. git stash your current changes.
2. git branch hotfix-01
3. git checkout hotfix-01
4. make the fix
5. add and commit changes
6. git remote update
7. git merge origin/master
8. git push origin hotfix-01
9. git checkout master
10. git merge origin/hotfix-01
11. git push origin master

You and a co-worker are each working on a new feature for a website. Your co-worker finishes their feature and pushes it live. Later that day you finish your work. How do you integrate your work with the work that they have already done?

1. git branch aaron-feature
2. git checkout aaron-feature
3. add and commit changes
4. git remote update
5. git merge origin/master
6. git push origin aaron-feature
7. git checkout master
8. git merge origin/aaron-feature
9. git push origin master

You've accidentally created a git repo inside of another repo. How do you deal with removing the submodules?

1. On your local machine, move the folder that has the submodule somewhere else (just in-case something bad happens)
2. In the terminal in your main repo root directory git add --all
3. git commit -m "remove submodule"
4. git push
5. Submodule should be gone. If you actually wanted those files added to your repo then copy them back without any of the .git files or directories.

Cutting a new branch from another branch (other than master).

1. git checkout -b new-branch existing-branch

# Assignment
1. Build out the HTML and CSS (using Sass) for the following website. The image assets can be [found here](/day-25/assignment/images) and the font being used is [Open Sans](http://www.google.com/fonts/specimen/Open+Sans). 
	- [Breakpoint 1](/day-25/assignment/breakpoints/1.png)
	- [Breakpoint 2](/day-25/assignment/breakpoints/2.png)
	- [Breakpoint 3](/day-25/assignment/breakpoints/3.png)
2. Read up on Angular.
	- [/ Developer Guide / Introduction](https://docs.angularjs.org/guide/introduction)
	- [Everything you need to understand to start with AngularJS](http://stephanebegaudeau.tumblr.com/post/48776908163/everything-you-need-to-understand-to-start-with)