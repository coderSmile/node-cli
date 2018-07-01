'use strict';
const co = require('co');
const prompt = require('co-prompt');
const config = require('../templates');
const chalk = require('chalk');
const fs = require('fs');
const path = require("path");
const filePath = path.resolve(__dirname,"..","templates.json");
module.exports = () => {
    co(function * () {
        // 接收用户输入的参数
        let tplName = yield prompt('模板名字: ');
        // 删除对应的模板
        if(config.tpl[tplName]){
            config.tpl[tplName] = undefined;
        }else{
            console.log(chalk.red('模板不存在'));
            process.exit();
        }
        // 写入文件
        fs.writeFile(filePath,JSON.stringify(config),'utf-8',(err) => {
            if(err){
                console.log(err);
            }
            console.log(chalk.green('删除成功\n'));
            process.exit();
        });
    });
};