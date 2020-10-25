git log --pretty=oneline
git log  --pretty=oneline | tail -n 10

git branch -d branch_name ---> --delete
git branch -D branch_name ---> --delete-force

git log --pretty=format:"%h - %an, %ar : %s" | tail -n 10
git stash show -p stash@{1}

git checkout --track origin/somebranch


git checkout HEAD~2 - You can also check out arbitrary commits by passing the commit reference instead of a branch.


#### Amending the message of older or multiple commit messages
1. On the command line, navigate to the repository that contains the commit you want to amend.
2. git rebase -i HEAD~n
3. Replace pick with reword
4. Save and close the commit list file.
5. In each resulting commit file, type the new commit message, save the file, and close it.
6. git push --force
- [amending](https://help.github.com/en/articles/changing-a-commit-message)

git log --follow -p -- <file> - Show the entire history of a file (including history beyond renames):

### GitHub tutorials
- [10 Common Git Problems and How to Fix Them](https://citizen428.net/10-common-git-problems-and-how-to-fix-them-e8d809299f08)
- [how to use git nice pictures](https://rachelcarmena.github.io/2018/12/12/how-to-teach-git.html)
- [Up your Git game and clean up your history](https://dev.to/christopherkade/up-your-git-game-and-clean-up-your-history-4j3j)


git revert -m 1 [commit-hash]

### rename local and remote branch
git checkout <old_name>					- Start by switching to the local branch which you want to rename:
git branch -m <new_name>				- Rename the local branch by typing:
git push origin -u <new_name>			- Push the <new_name> local branch and reset the upstream branch:
git push origin --delete <old_name>		- Delete the <old_name> remote branch:



$ git log --pretty=%P -n 1 <commit>
$ git show -s --pretty=%P <commit>

git outputs parents according to their number: the first (leftmost) hash is for the first parent, and so on.
```js
 $ git log -1 395f65d
 commit 395f65d438b13fb1fded88a330dc06c3b0951046
 Merge: 9901923 d28790d
 ...
 ```


 there is file `.attributes` containing *** text=clrf** - in this case i had to add **git config --global core.autocrlf input** to my global config file because git saw all files as modified --> [core.autocrlf docs](https://adaptivepatchwork.com/2012/03/01/mind-the-end-of-your-line/)




 ### git squash
-[squash-commits-into-one](https://www.internalpointers.com/post/squash-commits-into-one-git)