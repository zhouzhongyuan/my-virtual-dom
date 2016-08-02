const gulp = require('gulp');
const eslint = require('gulp-eslint');
const gulpIf = require('gulp-if');
// const file = 'gulpfile.babel.js';
const file = './js/**/*.js';
gulp.task('lint', () =>
    gulp.src(file)
        .pipe(eslint())
        .pipe(eslint.format())
);
function isFixed(file) {
    return file.eslint && typeof file.eslint.output === 'string';
}
gulp.task('lint-fix', () => {
    return gulp.src(file)
        .pipe(eslint({ fix: true }))
        .pipe(eslint.format())
        .pipe(gulpIf(isFixed, gulp.dest('dist')));
});

const concat = require('gulp-concat');                            //- 多个文件合并为一个；
const minifyCss = require('gulp-minify-css');                     //- 压缩CSS为一行；
const rev = require('gulp-rev');                                  //- 对文件名加MD5后缀
// const revCollector = require('gulp-rev-collector');               //- 路径替换

gulp.task('concat', function() {                                //- 创建一个名为 concat 的 task
    gulp.src(['./node_modules/todomvc-common/base.css', './node_modules/todomvc-app-css/index.css'])    //- 需要处理的css文件，放到一个字符串数组里
        .pipe(concat('main.css'))                            //- 合并后的文件名
        // .pipe(minifyCss())                                      //- 压缩处理成一行
        .pipe(gulp.dest('./dist'));                             //- 输出文件本地
        // .pipe(rev.manifest())                                   //- 生成一个rev-manifest.json
        // .pipe(gulp.dest('./rev'));                              //- 将 rev-manifest.json 保存到 rev 目录内
});
