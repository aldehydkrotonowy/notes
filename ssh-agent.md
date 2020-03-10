
$ ssh-agent -s (start agenta)
SSH_AUTH_SOCK=/tmp/ssh-TsOpH27013/agent.27013; export SSH_AUTH_SOCK;
SSH_AGENT_PID=27014; export SSH_AGENT_PID;
echo Agent pid 27014;


#### start the ssh-agent in the background (inny sposób?)
$ eval $(ssh-agent -s)
> Agent pid 59566

ssh-add ~/.ssh/id_rsa

$ ssh-add -D
All identities removed.

# kill the ssh-agent
$ eval $(ssh-agent -s -k)
Agent pid 24329 killed

or kill PID

ps x | grep ssh-agent

$ ssh-add -l -> list of all keys avaliable in the ssh agent (fingerprint)
$ ssh-add -L -> list of all keys avaliable in the ssh agent (public key part of each key)

#generowanie klucza
ssh-keygen -t ecdsa -b 521 -f ~/.ssh/[key-name] -C [comment]

#Algoritm
ssh-rsa	ssh-keygen -t rsa (this is the default)

	ssh-ed25519		ssh-keygen -t ed25519
	ecdsa-sha2-nistp256	ssh-keygen -t ecdsa -b 256
	ecdsa-sha2-nistp384	ssh-keygen -t ecdsa -b 384
	ecdsa-sha2-nistp521	ssh-keygen -t ecdsa -b 521

trzeba dodać host do C:\Program Files\Git\etc\ssh\ssh_config takie coś
	Host github.com
	 Hostname github.com
	 IdentityFile ~/.ssh/plik.pub
	 User git