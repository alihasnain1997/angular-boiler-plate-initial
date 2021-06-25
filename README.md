# Getting Started With Schematics

This repository is a basic Schematic implementation that serves as a starting point to create and publish Schematics to NPM.

### Testing

To test locally, install `@angular-devkit/schematics-cli` globally and use the `schematics` command line tool. That tool acts the same as the `generate` command of the Angular CLI, but also has a debug mode.

Check the documentation with
```bash
schematics --help
```

### Unit Testing

`npm run test` will run the unit tests, using Jasmine as a runner and test framework.

### Publishing

To publish, simply do:

```bash
npm run build
npm publish
```

That's it!
 # Guide to use in project
 * use ***"npm run build"*** to build the schematics
* after building go to the project you want to add schematics
* use  ***"/path npm link"***
* path is the path to the schematics folder form your project folder
* use command ***"ng generate crud-resource:crud-resource"*** 
* enter the name for the module you want to create
* add routes in the app-routing module and authentication guard


# Notes
* make sure to save your changes before adding schematics, some files may be overwritten by the schematics
* make sure your socket-io-client version matches with the server otherwise socket will not work

