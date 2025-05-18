const fs = require('fs');
const path = require('path');
// "type": "module",

// 要读取的目录路径
const directoryPath = '../views';

// 输出文件的路径
const outputFilePath = path.join(__dirname, 'output.json');

(async () => {
    try {
        // 读取目录内容

        fs.readdir(directoryPath, (err, files) => {
            if (err) {
                return console.error('Unable to scan directory: ' + err);
            }
            // 过滤出目录（文件夹），而不是文件
            const directories = files.filter(file => fs.statSync(path.join(directoryPath, file)).isDirectory());

            console.log('Directories in the specified directory:', directories);
            let res = []
            directories.forEach(dirname => {
                let temObj = {
                    path: `/${dirname}`,
                    name: dirname,
                    component: `() => import(../views/${dirname}/index.vue)`
                }
                res.push(temObj)
            })
            console.log(JSON.stringify(res))
            fs.writeFile(outputFilePath, JSON.stringify(res), function () {
                console.log('???')
            });
        });
    } catch (err) {
        console.error('Error occurred:', err);
    }
})();


// let s = 'ven', str = 'kvklkmkukekn';
// qiankun sigle - spa
// mickoApp 是京东的基于iframe
// 腾讯用的是 webComponent