const {src, dest} = require("gulp");

const myPath = require("../config/path.js");

const terser = require("gulp-terser"); // js min



const js = () => {
    return src(myPath.js.src)
    .pipe(terser())
    .pipe(dest(myPath.js.dest))
}


module.exports = js;