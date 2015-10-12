module.exports = function(config){
  config.set({

    basePath : './',

    files : [
      'src/assets/libs/angular/angular.js',
      'src/assets/libs/angular-bootstrap/ui-bootstrap-tpls.js',
      'src/assets/libs/angular-cookies/angular-cookies.min.js',
      'src/assets/libs/angular-ui-router/release/angular-ui-router.min.js',
      'src/app/**/*.js'
    ],

    autoWatch : true,

    frameworks: ['jasmine'],

    browsers : ['Chrome'],

    plugins : [
            'karma-chrome-launcher',
            'karma-jasmine',
            'karma-junit-reporter'
            ],

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

  });
};
