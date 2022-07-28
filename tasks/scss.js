const {src, dest} = require("gulp");

const myPath = require("../config/path.js");


const autoprefixer = require("gulp-autoprefixer");
const csso = require("gulp-csso"); //css minifier
const rename = require("gulp-rename");
const shorthand = require("gulp-shorthand"); //css shothand styles
const groupCssMediaQueries = require("gulp-group-css-media-queries"); //sort media queries
const sass =  require("gulp-sass")(require("sass"));


const scss = () => {
    return src(myPath.scss.src /*, {sourcemaps:true}*/)
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(shorthand())
    .pipe(groupCssMediaQueries())
    .pipe(dest(myPath.scss.dest/*, {sourcemaps:true}*/))
    .pipe(rename({suffix:".min"}))
    .pipe(csso())
    .pipe(dest(myPath.scss.dest/*, {sourcemaps:true}*/ ))
}


module.exports = scss;