# meanpractice

##Description
This repo will be used to test-run a local MEAN stack project following the following tutorials:
[hackhands](https://hackhands.com/how-to-get-started-on-the-mean-stack/)

##Instructions
These instructions will be used as notes on what I've done to get this working on Mac OS X Yosemite.

###Installation
####MongoDB
1. Visit [MongoDB](http://mongodb.org/downloads) and download the Mac OS X version.
2. Extract the file. You can do this with this command:
```
tar -zxvf mongodb-osx-x86_64-3.4.2.tgz
```
*Common sense check: if this isn't working, check to make sure your terminal is at the correct directory, and the file name matches before consulting the interwebs for their infinite knowledge*

3.Move the mongoDB directory to an appropriate location. Add it to your $PATH variable
```
export PATH=<mongodb-install-directory>/bin:$PATH
```
*In case you haven't done this before, this allows you to access the binaries included with MongoDB from anywhere in the terminal. You save the line above to your bash profile. To access it (because I hate vim) you can use the following command to open it:*
```
touch ~/.bash_profile; open ~/.bash_profile
```
4.Create a directory where MongoDB will save its data. By default, it should live in "/data/db". To store the information somewhere else, use `mongod --dbpath <path to data directory>`. Otherwise:
```
sudo chown -R $USER /data/db
```
####Node
*To be added, this part is a bit simpler and you're less likely to run into issues here*

###Starting a project
