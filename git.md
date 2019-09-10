git log --pretty=oneline
git log  --pretty=oneline | tail -n 10

git branch -d branch_name ---> --delete
git branch -D branch_name ---> --delete-force


git checkout HEAD~2 - You can also check out arbitrary commits by passing the commit reference instead of a branch.


#### Amending the message of older or multiple commit messages
1. On the command line, navigate to the repository that contains the commit you want to amend.
2. git rebase -i HEAD~n
3. Replace pick with reword
4. Save and close the commit list file.
5. In each resulting commit file, type the new commit message, save the file, and close it.
6. git push --force


### GitHub tutorials
- [10 Common Git Problems and How to Fix Them](https://citizen428.net/10-common-git-problems-and-how-to-fix-them-e8d809299f08)
- [how to use git nice pictures](https://rachelcarmena.github.io/2018/12/12/how-to-teach-git.html)
- [Up your Git game and clean up your history](https://dev.to/christopherkade/up-your-git-game-and-clean-up-your-history-4j3j)