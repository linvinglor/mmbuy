1. 开启数据库服务器 慢慢买项目数据库使用mongodb 
    1. 进入mongodb 
    2. 进入里面的data文件夹 
    3. 如果data文件夹下 有 mongod.lock  就删掉（如果不删数据库无法开启）
    4. 回到mongodb 找到 mongostart.bat 双击打开
      如果出现Wed Jun 13 20:37:45.474 [websvr] admin web console waiting for connections on port 28017
      Wed Jun 13 20:37:45.475 [initandlisten] waiting for connections on port 27017 表示成功
2. 开启API接口的服务器
     1. 找到mongodb文件夹旁边的 MMBApiServer文件夹
     2. 进入MMBApiServer文件夹 进入src文件夹
     3. 找到start.bat  双击打开

3. 打开慢慢买项目文档 
  1.随便找一个API接口 打开即可 如果有数据表示成功 如果没数据但是没报错可能是没有传入参数
