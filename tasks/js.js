import gulp from "gulp";
import browserSync from "browser-sync"; 
import myPath  from "../config/path.js";


const js = () => {
    return gulp.src(myPath.js.src)
    .pipe(gulp.dest(myPath.js.dest))
    .pipe(browserSync.stream())
}

export default js;