# meanpractice

##Description
This repo will be used to test-run a local MEAN stack project following the following tutorials:
[hackhands](https://hackhands.com/how-to-get-started-on-the-mean-stack/)

##Instructions
These instructions will be used as notes on what I've done to get this working on Mac OS X Yosemite.

###Starting a project
1. Make a git repo and clone it into the parent directory
```
git clone <url-provided-by-github>
```

2. Run `npm init`. This creates a package.json file and walks you through the attributes of it.
*[Here](http://stackoverflow.com/questions/17127964/what-does-grunt-test-command-do-on-npm-init) is an explanation of the test command property (which you can edit later)*

3. Run `npm install express --save` to download express and add it to your list of dependencies in your package.json file.
*express is a [web application framework](https://en.wikipedia.org/wiki/Web_framework). This automates a lot of the overhead associated with web development... so you don't have to*

4. Run `npm install gulp --save` to do the same with gulp. This is your task runner.

5. Angular will come later, we will be using the Google CDN to serve it. Here is the script tag for Angular:
```
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.3.0-rc.4/angular.min.js"></script>
```


