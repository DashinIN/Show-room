import gulp from "gulp";
import browserSync from "browser-sync"; 
import myPath from "../config/path.js";

//plugins
import fileInclude from "gulp-file-include"; // HTML шаблонизатор
import htmlmin from "gulp-htmlmin"; 



const html = () => {
    return gulp.src(myPath.html.src)
    .pipe(fileInclude()) 
    .pipe(htmlmin({
        collapseWhitespace: true
    }))
    .pipe(gulp.dest(myPath.html.dest))
    .pipe(browserSync.stream())
}

export default html;