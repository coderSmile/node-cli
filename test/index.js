const fs = require('fs');
const path=require('path');
// 根据不同的系统判断行结尾字符
const EOL = (process.platform === 'win32' ? '\r\n' : '\n');
const currentPath=process.cwd();
fs.mkdir('./hello', 0777, function(err) {
    console.log(111);
});
fs.writeFile('./hello/index.html', 'hello node', function(err) {
    console.log('写入成功');
});
fs.readFile('./hello/index.html', 'utf8', function(err, data) {
    console.log(data);
});
// 读取目录同步
const files=fs.readdirSync(process.cwd());

// 异步读取文件，files返回所有的文件列表，
// 判断是文件还是文件夹
fs.readdir(currentPath, function(err, files) {
    if (err) {
        throw err;
        return;
    }
    files.forEach(function(file) {
        fs.stat(currentPath+'/'+file, function(err, stats) {
            if (stats.isFile()) {
                console.log('是一个文件');
            } else if (stats.isDirectory()) {
                console.log('是一个文件夹');
            }
        });
    });
});
// 监听一个文件变化，触发回调函数
fs.watchFile('./demo.html', function(curr, prev) {
    console.log(curr.mtime);
    console.log(prev.mtime);
});
// 解除对文件的监听
fs.unwatchFile('./demo.html');


