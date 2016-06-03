module.exports = function (grunt) {

	grunt.initConfig({      

        concat: {
            dist: {                
                files: {
                    'dist/yc-mobiscroll.min.css': [
                        'css/mobiscroll.animation.css',
                        'css/mobiscroll.icons.css',
                        'css/mobiscroll.frame.css',
                        'css/mobiscroll.frame.ios.css',
                        'css/mobiscroll.scroller.css',
                        'css/mobiscroll.scroller.ios.css',
                        'css/mobiscroll.image.css',
                        'css/mobiscroll.custom.css',
                    ]
                }
            }
        },
        uglify: {
            target: {
                files: {
                    'dist/yc-mobiscroll.min.js': [
                        'js/mobiscroll.core.js',
                        'js/mobiscroll.frame.js',
                        'js/mobiscroll.scroller.js',
                        'js/mobiscroll.util.datetime.js',
                        'js/mobiscroll.datetimebase.js', 
                        'js/mobiscroll.datetime.js', 
                        'js/mobiscroll.select.js',
                        'js/mobiscroll.listbase.js',
                        'js/mobiscroll.image.js',
                        'js/mobiscroll.treelist.js',
                        'js/mobiscroll.frame.ios.js',
                        'js/i18n/mobiscroll.i18n.zh.js',
                    ]
                }
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');

    grunt.registerTask('default', ['concat','uglify']);
   
}