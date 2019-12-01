Unhandled rejection Error: EACCES: permission denied, open '/home/norbert/.npm/_cacache/index-v5/cd/f6/043b7bf3ca70506f520273ec16fa0316aa9269b2ee01429bb3298c94e053'

--> Restore ownership of the user's npm related folders, to the current user, like this:

sudo chown -R $USER:$GROUP ~/.npm
sudo chown -R $USER:$GROUP ~/.config

or

sudo chown -R $(whoami) ~/.npm
sudo chown -R $(whoami) ~/.config