function customLoader(source, sourceMap, state) {
    console.log(...arguments);
    // this.callback(new Error('错误测试'));
    this.callback(null, source, sourceMap);
    return ;
}
customLoader.pitch = function () {
    console.log('customrLoaer2 pitch trigger', ...arguments);
    return 'require("./a.less")';
};

module.exports = customLoader;