import browserSync from "browser-sync"; 
import myPath  from "../config/path.js";

//server 
const server = () => {
    browserSync.init({
        server: {
            baseDir: myPath.root
        }
    });
}

export default server;