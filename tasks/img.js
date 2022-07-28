const {src, dest} = require("gulp");

const myPath = require("../config/path.js");


const imagemin = require("gulp-imagemin");

const img = () => {
    return src(myPath.img.src)
    .pipe(imagemin(/*{
        verbose:true
    }*/))
    .pipe(dest(myPath.img.dest))
}


module.exports = img;