const {src, dest} = require("gulp");

const myPath = require("../config/path.js");





const js = () => {
    return src(myPath.js.src)
    .pipe(dest(myPath.js.dest))
}


module.exports = js;