const {watch, series, parallel} = require("gulp"); //gulp instumetns
const browserSync = require("browser-sync").create(); 

const myPath = require("./config/path.js"); // paths to folders

//tasks
const html = require("./tasks/html.js");
const scss = require("./tasks/scss.js");
const js = require("./tasks/js.js");
const img = require("./tasks/img.js");
const audio = require("./tasks/audio.js");


//server 
const server = () => {
    browserSync.init({
        server: {
            baseDir: myPath.root
        }
    });
}


//watch
const watcher = () => {
    watch(myPath.html.watch, html).on("all", browserSync.reload);
    watch(myPath.scss.watch, scss).on("all", browserSync.reload);
    watch(myPath.js.watch, js).on("all", browserSync.reload);
    watch(myPath.img.watch, img).on("all", browserSync.reload);
    watch(myPath.audio.watch, audio).on("all", browserSync.reload);
}
  


//export for gulp 

  exports.html = html;
  exports.scss = scss;
  exports.js = js;
  exports.img = img;
  exports.audio = audio;

  exports.watch = watcher;



//dev 

  exports.dev = series(
    parallel(html, scss, js, img, audio),
    parallel( watcher, server)
  );