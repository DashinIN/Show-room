import gulp from "gulp"; //gulp instumetns


import myPath from "./config/path.js"; // paths to folders

//tasks
import html from "./tasks/html.js";
import scss from "./tasks/scss.js";
import js from "./tasks/js.js";
import img from "./tasks/img.js";
import audio from "./tasks/audio.js";
import server from "./tasks/server.js";





//watch
const watcher = () => {
    gulp.watch(myPath.html.watch, html);
    gulp.watch(myPath.scss.watch, scss);
    gulp.watch(myPath.js.watch, js);
    gulp.watch(myPath.img.watch, img);
    gulp.watch(myPath.audio.watch, audio);
}
  

const build = gulp.series(
  gulp.parallel(html, scss, js, img, audio)
);

const dev = gulp.series(
  build,
  gulp.parallel( watcher, server)
);

//export for gulp 

  export {html};
  export {scss };
  export {js };
  export {img };
  export {audio };

  export {watcher};



//dev 

  export {dev}; 
  export {build};