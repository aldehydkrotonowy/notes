- Type the following dpkg command to see installed compilers and version:
dpkg --list | grep compiler
apt-cache search Compiler | grep -i --color c++
/usr/include/c++/4.4/vector

- check python version
ls /usr/bin/python* --- all versioons installed
/usr/bin/python --version --- current version

- list all alternative versions of python
update-alternatives --list python

- choose which version you want
update-alternatives --config python

- other commands
sudo update-alternatives --install /usr/bin/python3 python /usr/bin/python3.6 1
sudo update-alternatives --install /usr/bin/python3 python /usr/bin/python3.7 2
pip freeze 


- zip pass
fcrackzip -b -c 1 -l 4 -u "file name.zip"

### Linux/Ubuntu
- [kernel source code](https://elixir.bootlin.com/linux/v3.14/source/include/linux/syscalls.h#L175)
- [ssh generation howto](https://www.ssh.com/ssh/keygen/)