This repository contains the source code for
[](http://10.139.190.112/doc/datalogicadcsrl.github.io). The source is automatically compiled
and deployed by a jenkins job, so any modification to this repo is
reflected to the actual website.

## Local development
Install ruby (install ruby 1.9 and greater for jekyll compatibility):

```
sudo apt-get install ruby1.9.3
```

Install rubygems (https://rubygems.org/pages/download):

```
sudo apt-get install rubygems
```

Run jekyll and open your browser at localhost:4000, jekyll starts a webserver
to serve the folder \_site/ where the compiled HTML is stored:

```
cd datalogicadcsrl-github-io/
jekyll serve --watch
```

Any modification done on the source files (but \_config.yml) will be compiled
automatically (due to --watch).
