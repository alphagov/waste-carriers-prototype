# register as a waste carrier prototype

A front-end prototype for the 'Register as a waste carrier' service on GOV.UK.

You can [view the prototype](http://alphagov.github.io/waste-carriers-prototype/) on GitHub.

To discuss these prototypes, [use the wiki](https://github.com/alphagov/waste-carriers-prototype/wiki).

## Dependencies

The prototype uses:

* [Ruby](https://www.ruby-lang.org/en/)
* the [Middleman](http://middlemanapp.com) static site generator
* the [Sass](http://sass-lang.com/) CSS extension language
* the [ERB](http://middlemanapp.com/basics/templates/) templating language
* the [GOV.UK Frontend Toolkit](https://github.com/alphagov/govuk_frontend_toolkit)

If you want to easily publish the prototype to GitHub pages you'll also need [Rake](http://rake.rubyforge.org/)

## Getting started

### 1. Clone this repository

Once you've cloned or forked the repository you'll need to initialise the GOV.UK Frontent Toolkit, which is included as a submodule. Run the following terminal commands from the project folder:

	git submodule init
	git submodule update


### 2. Preview the prototype on your local machine

Middleman comes with it's own development server. In the project folder, enter the following terminal command:

	middleman

This will start a local web server running at: `http://localhost:4567/`

You can create and edit files in the source folder and see the changes reflected on the preview web-server. Sass files will be automatically compiled as well.

### 3. Publish the static site

If you want to publish the prototype to GitHub Pages, there's a Rake task for that. Just type:

	rake publish

