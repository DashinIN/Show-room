const {src, dest} = require("gulp");

const myPath = require("../config/path.js");




const audio = () => {
    return src(myPath.audio.src)
   
    .pipe(dest(myPath.audio.dest))
}


module.exports = audio;