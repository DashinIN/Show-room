import gulp from "gulp";
import browserSync from "browser-sync"; 
import myPath from "../config/path.js";


import imagemin from "gulp-imagemin";

const  img = () => {
    return gulp.src(myPath.img.src)
    .pipe(imagemin(/*{
        verbose:true
    }*/))
    .pipe(gulp.dest(myPath.img.dest))
    .pipe(browserSync.stream())
}

export default  img 
