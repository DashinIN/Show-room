import gulp from "gulp";
import browserSync from "browser-sync"; 
import myPath from "../config/path.js";




const audio = () => {
    return gulp.src(myPath.audio.src)
    .pipe(gulp.dest(myPath.audio.dest))
    .pipe(browserSync.stream())
}

export default audio ;
