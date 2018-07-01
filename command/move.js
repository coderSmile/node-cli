const co = require('co');
const prompt = require('co-prompt');
const chalk = require('chalk');
const copyDir = require('copy-dir');
const fs = require('fs');

module.exports = () => {
    co(function * () {
        let source = yield prompt('当前项目路径:    ');
        if(!fs.existsSync(source)){
            console.log(chalk.red('当前项目路径不存在！'));
            process.exit();
        }
        let target = yield prompt('目标文件夹:  ');
        if(!fs.existsSync(target)){
            console.log(chalk.red('目标文件夹不存在！'));
            process.exit();
        }
        copyDir(source,target,(stat,filepath,filename) => {
            console.log(stat);
            return !(stat === 'directory' && (filename === '.git' || filename === 'node_modules'));
        },(err) => {
            if(err){
                console.log(err);
            }else{
                console.log(chalk.green('\n √ 项目移动成功！'));
            }
            process.exit();
        });
    });
};
