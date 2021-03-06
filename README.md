[![Build Status](https://travis-ci.org/xetys/uni-todo-full-stack.svg?branch=master)](https://travis-ci.org/xetys/uni-todo-full-stack)

# TodoApp

## How the project has been developed

The entire development of this application from zero to deploy on a productive cloud took 7 minutes.
You can watch it here:

[![Develop and deploy an Todo application using JHipster 3.2](https://img.youtube.com/vi/0nuujPb53Xc/0.jpg)](https://www.youtube.com/watch?v=0nuujPb53Xc "Develop and deploy an Todo application using JHipster 3.2 ")
**(2x speed recommended)**

# Online demo

you can find a installed demo here [http://todo-app-uni.stytex.cloud/][03a06597]

  [03a06597]: http://todo-app-uni.stytex.cloud/ "Todo app demo"

This application was generated using JHipster, you can find documentation and help at [https://jhipster.github.io](https://jhipster.github.io).

## Development

Before you can build this project, you must install and configure the following dependencies on your machine:

1. [Node.js][]: We use Node to run a development web server and build the project.
   Depending on your system, you can install Node either from source or as a pre-packaged bundle.

After installing Node, you should be able to run the following command to install development tools (like
[Bower][] and [BrowserSync][]). You will only need to run this command when dependencies change in package.json.

    npm install
We use [Bower][] as our asset dependency manager. Install the Bower command-line globally with:
    npm install -g bower

We use [Gulp][] as our build system. Install the Gulp command-line tool globally with:

    npm install -g gulp

We use [Docker][] for container virtualization and deployment. To run the app with docker on port 8080 run:

    ./gradlew -x test build bootRepackage buildDocker
     docker run -it --name todo-app -p 8080:80 todoapp

### Attention

For a better dokku deployment the dev profile is configured to run on port 80. Change these settings in src/main/resources/config/application-dev.yml
or use docker to run the app locally as mentioned above.

Run the following commands in two separate terminals to create a blissful development experience where your browser
auto-refreshes when files change on your hard drive.

``` sh
./gradlew # or ./gradlew -x test build bootRepackage buildDocker && docker run -it --name todo-app -p 8080:80 todoapp
gulp
```

Bower is used to manage CSS and JavaScript dependencies used in this application. You can upgrade dependencies by
specifying a newer version in `bower.json`. You can also run `bower update` and `bower install` to manage dependencies.
Add the `-h` flag on any command to see how you can use it. For example, `bower update -h`.


## Building for production

To optimize the TodoApp client for production, run:

    ./gradlew -Pprod clean bootRepackage

This will concatenate and minify CSS and JavaScript files. It will also modify `index.html` so it references
these new files.

To ensure everything worked, run:

    java -jar build/libs/*.war --spring.profiles.active=prod

Then navigate to [http://localhost](http://localhost) in your browser.

## Testing

Unit tests are run by [Karma][] and written with [Jasmine][]. They're located in `src/test/javascript/` and can be run with:

    gulp test



## Continuous Integration

To setup this project in Jenkins, use the following configuration:

* Project name: `TodoApp`
* Source Code Management
    * Git Repository: `git@github.com:xetys/uni-todo-full-stack.git`
    * Branches to build: `*/master`
    * Additional Behaviours: `Wipe out repository & force clone`
* Build Triggers
    * Poll SCM / Schedule: `H/5 * * * *`
* Build
    * Invoke Gradle script / Use Gradle Wrapper / Tasks: `-Pprod clean test bootRepackage`
* Post-build Actions
    * Publish JUnit test result report / Test Report XMLs: `build/test-results/*.xml`

[Xetys GitHub]: https://github.com/xetys/uni-todo-full-stack
[JHipster]: https://jhipster.github.io/
[Node.js]: https://nodejs.org/
[Bower]: http://bower.io/
[Gulp]: http://gulpjs.com/
[BrowserSync]: http://www.browsersync.io/
[Karma]: http://karma-runner.github.io/
[Jasmine]: http://jasmine.github.io/2.0/introduction.html
[Protractor]: https://angular.github.io/protractor/
[Docker]: https://www.docker.com/
