const {src, dest} = require("gulp");

const myPath = require("../config/path.js");

//plugins
const fileInclude = require("gulp-file-include"); // HTML шаблонизатор
const htmlmin = require("gulp-htmlmin"); 


const html = () => {
    return src(myPath.html.src)
    .pipe(fileInclude())
    .pipe(htmlmin({
        collapseWhitespace: true
    }))
    .pipe(dest(myPath.html.dest));
}

module.exports = html;