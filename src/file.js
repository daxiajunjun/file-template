 let fs = require('fs');

 /**
  * 采用递归的方法创建多级目录
  * @param {any} dirpath 目录路径
  * @param {any} filepath 文件路径
  * @param {any} initContent 初始化内容
  * @returns
  *
  * @memberOf CreateNG
  */
 function createFileAndInit(dirPath, filepath, initContent) {
   createDir(dirPath); // 递归的创建文件目录
   createFile(filepath, initContent); // 创建文件的类型
 }
 /**
  * 采用递归的方法创建多级目录
  * @param {any} dirpath
  * @param {any} basePath
  * @returns
  *
  * @memberOf CreateNG
  */
 function createDir(dirPath) {
   if (dirPath.split('\\').length > 1) {
     createDir(dirPath.substr(0, dirPath.lastIndexOf('\\')));
   }
   return mkdir(dirPath);
 }

 /**
  *
  * @param {any} dir 创建的文件目录
  * @returns
  *
  * @memberOf CreateNG
  */
 function mkdir(dir) {
   if (fs.existsSync(dir)) {
     return;
   } else {
     fs.mkdirSync(dir);
   }
 }
/**
* 创建文件，并写入初始化内容
*
* @param {any} path 文件绝对路径
* @param {any} initContent 文件初始化内容
* @returns
*
* @memberOf CreateNG
*/
 function createFile(path, initContent) {
   if (fs.existsSync(path)) {
     return;
   } else {
     fs.open(path, 'a', (err, fd) => {
       if (err) console.log(err);
       fs.write(fd, initContent, (err) => {
         if (err) console.log(err);
         fs.close(fd);
       });
     });
   }
 }

 module.exports = {
   createFileAndInit: createFileAndInit,
   createDir: createDir,
   mkdir: mkdir,
   createFile: createFile
 };
