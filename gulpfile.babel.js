import gulp from "gulp"
import babel from "gulp-babel"
import terser from "gulp-terser" 
import htmlmin from "gulp-htmlmin"
import postcss from "gulp-postcss"
import autoprefixer from "autoprefixer"
import cssnano from "cssnano"
import hola from "gulp-imagemin"
import {gifsicle, mozjpeg, optipng,svgo} from "gulp-imagemin";

const css = [autoprefixer(),cssnano()]


gulp.task("htmlmin", () => {

    return gulp.src("./src/*.html")

    .pipe(htmlmin({
        collapseWhitespace: true,
        removeComments: true
    }))

    .pipe(gulp.dest("./public/"))

})

gulp.task("babel", () => {

    return gulp.src("./src/js/*.js")

    .pipe(terser())

    .pipe(gulp.dest("./public/js/"))
})

gulp.task("styles", () => {
    return gulp.src("./src/css/*.css")

    .pipe(postcss(css))

    .pipe(gulp.dest("./public/css/"))
})

gulp.task("imgmin", () => {

    return gulp.src("./src/assets/images/*")

    .pipe(hola([
        gifsicle({interlaced: true}),
            mozjpeg({quality: 75, progressive: true}),
            optipng({optimizationLevel: 5}),
            svgo()
    ]))

    .pipe(gulp.dest("./public/assets/images/"))
})

gulp.task("default", () => {
    
    gulp.watch( "./src/**/*.html", gulp.series("htmlmin"))
    gulp.watch("./src/css/**/*.css", gulp.series("styles"))
    gulp.watch("./src/js/**/*.js", gulp.series("babel"))
})