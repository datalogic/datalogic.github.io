This repository contains the source code for
http://10.139.190.112/doc/datalogicadcsrl.github.io.

The source is automatically compiled
and deployed by a jenkins job, so any modification to this repo is
reflected to the actual website.

## Local development

__NOTICE:__ This is not the correct way to install ruby and rubygems, if you are using
ruby for other projects, the following steps may break your apps compatibility. Though
this is the fastest way to get started

Install ruby (install ruby 1.9 and greater for jekyll compatibility):

```
sudo apt-get install ruby1.9.3
```

Install rubygems (https://rubygems.org/pages/download):

```
sudo apt-get install rubygems
```

Install jekyll:
```
sudo gem install --no-ri --no-rdoc jekyll -v 2.5.3
```
Install rouge:
```
sudo gem install --no-ri --no-rdoc rouge
```

You need a javascript interpreter as jekyll also compile javascript files (coffeescript),
if you don't have any, please install nodejs or something else:
```
sudo apt-get install nodejs
```

Run jekyll and open your browser at http://localhost:4000, jekyll starts a webserver
to serve the folder \_site/ where the compiled HTML is stored:

```
cd datalogicadcsrl-github-io/
jekyll serve --watch --trace --config _config.yml,_config_dev.yml
```

Notice that the \_config\_dev.yml config file is needed in development environments only
to setup a different base url

Any modification done on the source files (but \_config.yml) will be compiled
automatically (due to --watch).
