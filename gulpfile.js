const {watch, series, parallel} = require("gulp");
const browserSync = require("browser-sync").create();

const myPath = require("./config/path.js");

//tasks
const html = require("./tasks/html.js");
const scss = require("./tasks/scss.js");

//clear



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
}
  
  exports.html = html;
  exports.scss = scss;
  exports.watch = watcher;


  

  exports.dev = series(
    parallel(html, scss),
    parallel( watcher, server)
  );