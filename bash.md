```sh
#!/bin/bash
# -E Specifies the hash algorithm for displaying key fingerprints.
# -l Lists fingerprints of all identities currently represented by the agent.
env=~/.ssh/agent.env

agent_load_env () { test -f "$env" && . "$env" >| /dev/null ; }

agent_start () {
    (umask 077; ssh-agent >| "$env")
    . "$env" >| /dev/null ;
}

agent_load_env

# agent_run_state: 0=agent running w/ key; 1=agent w/o key; 2= agent not running
agent_run_state=$(ssh-add -l >| /dev/null 2>&1; echo $?)

if [ ! "$SSH_AUTH_SOCK" ] || [ $agent_run_state = 2 ]; then
  echo "Initialising new SSH agent..."
  agent_start
  ssh-add ~/.ssh/aldehydkrotonowy/dellAcce
elif [ "$SSH_AUTH_SOCK" ] && [ $agent_run_state = 1 ]; then
  echo "ssh-agent is running bu has no identities. Adding dellAcce identity"
  ssh-add ~/.ssh/aldehydkrotonowy/dellAcce
else
 echo "ssh-agent is setup and ready"
 echo "checking"
 ssh-add -l -E sha256
fi

unset env
```
