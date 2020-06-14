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


for driver installation just copy files
cp iwlwifi-*.ucode /lib/firmware

### linux wifi problems
- [source](https://askubuntu.com/questions/618283/is-iwlwifi-or-iwldvm-or-wext-the-wireless-driver)
	$ modinfo iwlwifi | grep description
	description:    Intel(R) Wireless WiFi driver for Linux
	$ modinfo iwldvm | grep description
	description:    Intel(R) Wireless WiFi Link AGN driver for Linux
	$ modinfo iwldvm | grep depends
	depends:        iwlwifi,mac80211,cfg80211



	sudo lshw -C network
	*-network                 
       description: Wireless interface
       product: Wireless-AC 9260
       vendor: Intel Corporation
       physical id: 0
       bus info: pci@0000:06:00.0
       logical name: **wlp6s0**
       version: 29
       serial: 18:1d:ea:f3:f9:53
       width: 64 bits
       clock: 33MHz
       capabilities: pm msi pciexpress msix bus_master cap_list ethernet physical wireless
       configuration: broadcast=yes driver=iwlwifi driverversion=5.3.0-59-generic **firmware=46.6bf1df06.0** ip=192.168.0.103 latency=0 link=yes multicast=yes wireless=IEEE 802.11
       resources: irq:24 memory:fe200000-fe203fff
