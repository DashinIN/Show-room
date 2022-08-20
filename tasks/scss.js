import gulp from "gulp";

import myPath from "../config/path.js";


import autoprefixer from "gulp-autoprefixer";
import csso from "gulp-csso"; //css minifier
import rename from "gulp-rename";
import shorthand from "gulp-shorthand"; //css shothand styles

import dartSass from 'sass';
import gulpSass from 'gulp-sass';
const sass = gulpSass( dartSass );
    


import browserSync from "browser-sync";


const scss = () => {
    return gulp.src(myPath.scss.src /*, {sourcemaps:true}*/)
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(shorthand())
    .pipe(gulp.dest(myPath.scss.dest/*, {sourcemaps:true}*/))
    .pipe(rename({suffix:".min"}))
    .pipe(csso())
    .pipe(gulp.dest(myPath.scss.dest/*, {sourcemaps:true}*/ ))
    .pipe(browserSync.stream())
}
export default scss;
