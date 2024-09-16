// 以下两行注释仅用于记录系统启动速度，读者可自行斟酌。
const port = 3000;
// console.time(`Service http://localhost:${port} Start Time`);

const app = require("./src/index.js");

app.listen(port, () => {
    // console.timeEnd(`Service http://localhost:${port} Start Time`);
    console.log(`Service http://localhost:${port}`);
});
