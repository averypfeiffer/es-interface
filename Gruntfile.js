

'use strict';
var colors = require('colors');
var babel = require("babel-core");
var shell = require('shelljs');
var spawn = require('child_process').spawn;
var Future = require('fibers/future');
var fs = require('fs');
var path = require('path');
//semi constants
var templateFilePath;
var templateFileName;


var includePaths = [
  fs.realpathSync(__dirname + '/src'),
  fs.realpathSync(__dirname + '/node_modules'),
];

const opts = {
   NOTWEBPACK: false,
};
const q = require('querystring').encode({json: JSON.stringify(opts)});

module.exports = function(grunt) {
/* load grunt tasks */
grunt.loadNpmTasks('grunt-webpack');
require('load-grunt-tasks')(grunt);
  /* Project configuration */
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    "watch": {
        scripts: {
          files: ['src/**/*.js', 'src/**/*.json'],
          tasks: ['babel'],
          options: {
            spawn: false,
          },
        },
    },
    copy: {
      main: {
        files: [
           {expand: true, cwd: 'src/', src: ['**/*.html'], dest: 'dist/'},
        ],
      },
    },
    babel: {
        options: {
            sourceMap: false,
            presets: ['es2015']
        },
        dist: {
            files: [
              {
                expand: true,
                cwd: 'src/',
                src: ['**/*.js'],
                dest: 'dist/'
              }
            ]
        },
    }
  });


  grunt.registerTask('build-src', function() {
    console.log('starting the all other tasks');
    grunt.task.run(['babel']);
  });

  /* Default task(s) */
  grunt.registerTask('default', ["build-src", 'build-and-watch-views']);

};