const pathSrc = "./src";
const pathDest = "./docs";

module.exports = {
    root: pathDest,
    html: {
        src: pathSrc + "/html/*.html",
        watch: pathSrc + "/html/**/*.html",
        dest: pathDest,
    },

    scss: {
        src: pathSrc + "/sass/pages/**/*.{sass,scss}",
        watch: pathSrc + "/sass/**/*.{sass,scss}",
        dest: pathDest,
    },

    js: {
        src: pathSrc + "/script/*.js",
        watch: pathSrc + "/script/**/*.js",
        dest: pathDest,
    },

    img: {
        src: pathSrc + "/img/*.*",
        watch: pathSrc + "/img/**/*.",
        dest: pathDest + "/img",
    },

    audio: {
        src: pathSrc + "/audio/**/*.*",
        watch: pathSrc + "/audio/**/*.",
        dest: pathDest + "/audio",
    },
};