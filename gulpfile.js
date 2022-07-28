const {watch, series, parallel} = require("gulp");
const browserSync = require("browser-sync").create();

const myPath = require("./config/path.js");

//plugins
const html = require("./tasks/html.js");

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
  exports.watch = watcher;


  

  exports.dev = series(
    html, 
    parallel( watcher, server)
  );