module.exports = (grunt) => {
    'use strict';

    grunt.initConfig({

        repo: {
            assets: './assets',
            sources: './sources',
        },
        style: {
            assets: 'styles',
            sources: 'sass',
        },
        js: {
            assets: 'js',
            sources: 'js',
            exceptions: 'procedural-bundle.js',
        },
        jsFile: '<%= repo.sources %>/<%= js.sources %>/**/*.js',
        jsExceptions: '!<%= repo.sources %>/<%= js.sources %>/<%= js.execptions %>.js',

        extention: 'scss',

        pkg: grunt.file.readJSON('package.json'),

        sass: {
            dist: {
                options: {
                    style: 'compressed',
                    sourcemap: 'none',
                },
                files: [
                    {
                        expand: true,
                        cwd: '<%= repo.sources %>/<%= style.sources %>/',
                        src: ['**/*.<%= extention %>'],
                        dest: '<%= repo.assets %>/<%= style.assets %>/',
                        ext: '.css',
                    },
                ],
            },
        },

        postcss: {
            options: {
                map: false,

                processors: [
                    require('autoprefixer')({browsers: 'last 2 versions'}),
                    require('cssnano')(),
                ],
            },
            dist: {
                expand: true,
                cwd: '<%= repo.assets %>/<%= style.assets %>/',
                dest: '<%= repo.assets %>/<%= style.assets %>/',
                src: ['**/*.css'],
                ext: '.css',
            },
        },

        csscomb: {
            files: {
                expand: true,
                cwd: '<%= repo.assets %>/<%= style.assets %>/',
                src: ['**/*.css'],
                dest: '<%= repo.assets %>/<%= style.assets %>/',
                ext: '.css',
            },
        },

        babel: {
            options: {
                sourceMap: true,
                presets: ['env'],
            },
            dist: {
                files: {
                    '<%= repo.assets %>/<%= js.assets %>/bundle.js': ['<%= jsFile %>', '<%= jsExceptions %>'],
                },
            },
        },

        uglify: {
            options: {
                mangle: false,
                output: {
                    quote_style: 3,
                },
            },
            dist: {
                files: {
                    '<%= repo.assets %>/<%= js.assets %>/bundle.js': ['<%= repo.assets %>/<%= js.assets %>/**/*.js'],
                },
            },
        },

        watch: {
            configFiles: {
                files: 'Gruntfile.js',
                options: {
                    reload: true,
                },
            },
            styles: {
                files: '<%= repo.sources %>/<%= style.sources %>/**/*.<%= extention %>',
                tasks: ['sass'],
            },
            js: {
                files: ['<%= jsFile %>', '<%= jsExceptions %>'],
                tasks: ['babel', 'uglify'],
            },
        },
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-postcss');
    grunt.loadNpmTasks('grunt-csscomb');

    grunt.loadNpmTasks('grunt-babel');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('build', ['sass', 'csscomb', 'postcss', 'babel', 'uglify']);
};
