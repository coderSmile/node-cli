/**
 * Created by dfc on 2018/6/25
 */
const Table = require("tty-table");
const chalk = require("chalk");     // 终端设置颜色 格式
const clc = require('cli-color');  // 终端设置颜色 格式
// process.stdout.write(clc.reset);// 清除控制台
function tableHeader() {
    return [{
        value:"模板名称",
        width:20,
        headerAlign:'center'
    },{
        value:"模板地址",
        width:50,
        headerAlign:'center'
    },{
        value:"模板分支",
        width:20,
        headerAlign:'center'
    }];
}
function opts() {
    return {
        borderStyle:1,
        borderColor:"red",
        paddingBottom:0,
        headerAlign:"center",
        align:"center",
        color:"white",
        truncate:"..."
    };
}

function tableRender(config) {
    const keyArr = Object.keys(config);
    const newConfig = [];
    if(keyArr.length > 0){
        keyArr.forEach((item) => {
            if(item){
                newConfig.push([chalk.red(item),config[item].url,config[item].branch]);
            }
        });
        const t1 = Table(tableHeader(),newConfig,opts());
        console.log(t1.render());
    }else{
        console.log("警告：还没有模板");
    }
}

module.exports = tableRender;