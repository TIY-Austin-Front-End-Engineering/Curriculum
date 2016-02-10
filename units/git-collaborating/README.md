# Git Collaboration

### You should already know about
* [Git Introduction](../git-introduction/README.md)

##### Branches
One powerful feature of git is the ability to keep track of concurrent, but divergent, histories. This is done with **branches**. A branch is a particular path through the repository history that is made up of commits. Initially, a repository contains one branch (the 'master'). All branches can (eventaully) be traced back to the initial commit on the master branch.

![Git Branches](git/gitMergeFlow.png)

Most git workflows use branches to isolate features as they are being developed, which the figure above illustrates. At any point you can make (and switch to) a new branch with the `git checkout -b <branchName>` command. Making a new branch doesn't make a new commit - the new branch and previous branch will share any history until you make a new commit on either branch. Once you start making new commits, the branches will have divergent histories, and you will be able to switch back and forth between them to work on them in isolation. To switch back to a different branch use the `git checkout <branchName>` command. When you switch branches, git will automatically change your files to reflect the last commit of that branch.

##### Where's your HEAD at?
The current commit you are viewing is referred to as your 'head'. As you change branches with the `git checkout <branchName>` command, you move your head to the most recent commit on that branch. It is possible to checkout specific commits anywhere in your repository, on any branch, from any point in history, with the `git checkout` command as well - you just need to checkout a specific commit instead of a branch. Commits have ugly names, which you can discover by using the `git log` command. While viewing your log, you can copy the name of the commit you want to revert to. You can then quit the log (by typing `q`), and `git checkout <commit name>` to view the other commit. You will be warned that you are now in a "detached head state", which simply means that your 'head' is not at the end of a branch history, or associated with a specific branch, but rather attached to a specific commit. To get out of this 'detached' state, you must either check back into an existing branch, or choose to make a new, divergent history from this location by checking out a new branch from here.

##### Bringing it all Back Together
Creating branches is a powerful way to isolate your code as you develop different features, and keep clean code from catching bugs or breaking as features are being developed. But what do you do when you've finished a feature, and want to join it with another feature on another branch? This is where 'merging' comes in.
A **merge** is a new commit that combines the most recent commits of two different branches. When you run the `git merge <branchName>` command, it will compare the current branch with the <branchName> branch, and attempt to combine them together. Git will do this by making line by line comparisons of any changes that were made since the two branches stop sharing history.

If git finds differences between the two branches that it cannot reconcile (for example, each branch changes the same line of code to something different), it will inform you of the error and prompt you to fix it. This is called a **merge conflict** and it is very common. When you open the conflicting file(s) in your text editor, you will see funky highlighting that git has added to show you the conflict. It is up to you to delete or change the files so that they reflect the combination you want, and then save and commit the result.  

## More Resources
* A game to help you learn/visualize git: [Learn Git Branching](http://pcottle.github.io/learnGitBranching/)
