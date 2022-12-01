import svgSprite from "gulp-svg-sprite"

//преобразует все svg в один спрайт
export const svgSpriter = () =>{
    return app.gulp.src(`${app.path.src.svgicons}`, {}) 
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                title: "SVG",
                message: "Error: <%= error.message %>"
            })
        ))
        .pipe(svgSprite({
            mode: {
                stack: {
                    sprite: "../icons/icons.svg",
                    //создавать страницу с перечнем иконок(html страничка в папке stack)
                    example: true
                }
            }
        }))
        .pipe(app.gulp.dest(app.path.build.images));
}