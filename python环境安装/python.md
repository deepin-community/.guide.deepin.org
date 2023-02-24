# 下载python安装包

## 官方安装包下载	

- #### 历史版本链接[Index of /ftp/python/](https://www.python.org/ftp/python/)

- #### 官网链接https://www.python.org/	

- 下载方式

![image-20230224084028899](.\img\image-20230224084028899.png)



python版本状态

![image-20230224084159285](.\img\image-20230224084159285.png)

python压缩包版本选择

![image-20230224084219479](.\img\image-20230224084219479.png)

python对于版本不同环境安装包下载

![image-20230224084538498](.\img\image-20230224084538498.png)

此处为python3.10压缩包以及不同系统的安装包

# 注部分版本官网只有linux安装包

### 例3.9.16版本![image-20230224093857365](.\img\image-20230224093857365.png)

将下载的压缩包解压至自定义文件夹

python环境变量

![image-20230224095030666](.\img\image-20230224095030666.png)

![image-20230224094453114](.\img\image-20230224094453114.png)

是自带的第三方库，需解压至当前文件夹

在python文件夹下下载pip包管理器

 curl https://bootstrap.pypa.io/get-pip.py -o get-pip.py

安装pip包管理器

python get-pip.py

设置python识别库目录

![image-20230224101041644](.\img\image-20230224101041644.png)

![image-20230224101104487](.\img\image-20230224101104487.png)

Lib\site-packages

设置pip环境变量

![image-20230224095101285](.\img\image-20230224095101285.png)



pip可用于下载第三方库

当环境变量配置完成后cmd中，执行python会显示版本号，我是python39是因为电脑本身就有python环境了，用来区分不同的环境，相对于的，文件夹内的python.exe要重命名

![image-20230224100007967](.\img\image-20230224100007967.png)

现在，已经可以在cmd中执行python语句了

![image-20230224100317138](.\img\image-20230224100317138.png)

可以利用pip下载查看第三方库

![image-20230224101159607](.\img\image-20230224101159607.png)

![image-20230224101231334](.\img\image-20230224101231334.png)

自带的镜像地址可能下载速度会很慢，可以使用阿里云镜像或者清华镜像

阿里云镜像使用 pip3.9 install 第三方库名称 -i https: / /mirrors.aliyun.com/pypi/simple/

![image-20230224101928726](.\img\image-20230224101928726.png)

清华镜像使用 pip3.9 install 第三方库名称 -i https :/ / pypi.tuna.tsinghua.edu.cn/simple 

![image-20230224102103939](.\img\image-20230224102103939.png)

![image-20230224102125685](.\img\image-20230224102125685.png)

设置默认镜像下载地址

pip config set global.index-url  镜像地址