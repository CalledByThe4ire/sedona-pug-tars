'use strict';

// This is example of task function

const gulp = tars.packages.gulp;
const plumber = tars.packages.plumber;
const notifier = tars.helpers.notifier;

const tarsConfig = tars.config;
// Include browserSync, if you need to reload browser:
// const browserSync = tars.packages.browserSync;

const ghPages = require('gulp-gh-pages');

/**
 * Task description
 */
module.exports = function() {
    return gulp.task(
        'service:deploy',
        /*['required-task-name'],*/ function(done) {
            return (
                gulp
                    .src('./builds/**/*')
                    .pipe(
                        plumber({
                            errorHandler: function(error) {
                                notifier.error(
                                    'An error occurred while something.',
                                    error
                                );
                            }
                        })
                    )
                    // Do stuff here, like
                    // .pipe(less())
                    .pipe(ghPages())
                    // .pipe(
                    //     gulp.dest(/* path-string to destination directory. Only directory, not a file! */)
                    // )

                    // If you need to reload browser, uncomment the row below
                    // .pipe(browserSync.reload({ stream:true }))
                    .pipe(
                        // You can change text of success message
                        notifier.success('\'deploy\' task has been finished')
                    )
            );

            // You can return callback, if you can't return pipe
            // done(null);
        }
    );
};
