# 序言

本书的目标读者：使用deepin linux的普通用户，并且愿意更加深入了解系统的高级用法。

## 免责声明

所有担保条款具有免责效力。所有商标均为其各自商标所有者的财产。

deepin 系统本身是一个变化的事物。这导致其文档难于及时更新并且正确。虽然是以 deepin 系统当前的 `v23` 作为写作该文档的基础，但当你阅读本文的时候，部分内容仍然可能已经过时。

请把本文档作为第二参考。本文档不能够代替任何官方指导手册。文档作者和文档贡献者对在本文档中的错误、遗漏或歧义，不承担责任后果

## 什么是deepin

deepin(原名Linux deepin)致力于为全球用户提供美观易用，安全可靠的Linux发行版。deepin项目于2008年发起，并在2009年发布了以linux deepin为名称的第一个版本。2014年4月更名为deepin，在中国常被称为“深度操作系统“。

deepin基于Qt技术开发了深度桌面环境和深度控制中心，并且开发了一系列面向日常使用的深度特色应用如深度商店、深度截图、深度音乐、深度影院等。深度操作系统非常注重易用的体验和美观的设计，对于多数用户来说，它易于安装和使用，能方便地进行工作与娱乐。

截止到 2020 年，深度操作系统下载超过 6000 万次，提供超过 50 种不同的语言版本，以及遍布六大洲的 140 多个镜像站点的升级服务。在全球开源操作系统排行榜上是排名最高的中国操作系统产品。

## 什么是深度开源社区

深度开源社区成立于2008年，是一个由开发者、设计师、普通成员及倡导者组成的开源社区——我们致力通过社区开发与协作，为所有人提供自由、开放的交流平台以及最好的开源操作系统！

无论你是一个经验丰富的开发者，有创意的设计师，还是一个普通用户，我们都欢迎你加入我们，为社区贡献一份属于你的力量！

深度开源社区以“开放、透明、自由、分享、协作”的理念，作为社区工作和交流的准则：
开放：不同背景、经验的人们都能加入我们并参与社区工作；
透明：不同规划决策、进展过程都将纳入社区，吸收大家的意见；
自由：确保我们的工作成果能被他人所自由使用；
分享：乐于分享，将我们的成果传递给更多人；
协作：倡导团队协作，发挥领导作用，使社区工作进展得更为有序

## 关于本文档

### 1. 指导原则

写作本文档时，遵循下列指导原则。

- 仅提供概览，而忽略边界情况。（Big Picture 原则）

- 保持文字简短紧凑。（KISS 原则）

- 不重复造轮子。（使用链接指向已有参考）

- 保持客观。

### 2. 预备知识

阅读本文档，你需要通过自己的努力去查找本文档未提及的问题答案。本文档仅仅提供有效的起点。

你必须自己从以下原始材料查找解决方案。

- Debian 网站 [https://www.debian.org 上的通用信息](https://www.debian.org)  （注意：从deepin v23开始 deepin将过度到独立上游，部分Debian网站提供的信息可能不适用，请注意甄别）

- `/usr/share/doc/package_name` 目录下的文档

- Unix 风格的 manpage: "dpkg -L package_name |grep '/man/man.*/'"

- GNU 风格的 info page: "dpkg -L package_name |grep '/info/'"

- Debian Wiki [https://wiki.debian.org/用于变化和特定的话题](https://wiki.debian.org/)

- deepin Wiki [https://wiki.deepin.org/用于变化和特定的话题](https://wiki.deepin.org/)

- 国际开放标准组织的 UNIX 系统主页 [http://www.unix.org 上的单一UNIX规范](http://www.unix.org/)

- 自由的百科全书：维基百科 [https://www.wikipedia.org](https://www.wikipedia.org)

- RFC文档 [http://www.rfc.ac.cn/](http://www.rfc.ac.cn/)

- Linux 文档项目TLDP，的HOWTO [http://tldp.org/](http://tldp.org/)

### 3. 排版约定

本文通过如下使用 `bash`(1) shell 命令例子的简要方式来提供信息。

```Shell
# command-in-root-account
$ command-in-user-account
```


这些 shell 提示符区分了所使用的帐户。为了可读性，在本手册中 shell 提示符相关的环境变量被设置为“`PS1='\$'`”和“`PS2=' '`。这与实际安装的系统所使用的 shell 提示符很有可能会不同。

所有的命令示例都是运行在英语语言环境“`LANG=zh_CN.UTF8`”下的。请不要期望命令示例中像 `command-in-root-account` 和 `command-in-user-account` 这样的占位符会被翻译。但是为了方便理解，后文中，如果没有特别提及，默认以user级别运行，如果需要以root权限运行，会加以说明或添加`sudo`前缀

这些**描述**列或类似信息在表格有一个**名词短语**，后面会紧跟[软件包短描述](https://www.debian.org/doc/manuals/developers-reference/best-pkging-practices#bpp-desc-basics)，这些短语会省略掉前面的"a"和"the"。它们也可以包含一个不定式短语作**名词短语**，在联机帮助的短命令描述约定后面不带 "to"。有些人可能觉得这看起来有点可笑，这里故意保留这种风格是为了让文档看起来尽可能的简单。这些**名词短语**在短命令描述约定里并不会采用首字母大写的方式。

在文本段落中引用的**命令片断**由markdown 代码片段进行标记，就像`aptitude safe-upgrade`。

在文本段落中引用的来自配置文件的**文本数据**由双引号括起来的打印机字体进行标记，就像"`deb-src`"。

**命令**和置于其后的圆括号内的手册页章节数（可选），由打字机字体进行标记，就像 `bash`(1)。我们鼓励您这样通过输入以下命令来获得信息。

```Shell
$ man 1 bash
```


**manpage** 会在打字机字体后面括号中显示 manpage 页章节号，如 `sources.list`(5)。建议你通过键入以下命令来获取帮助信息。

```Shell
$ man 5 sources.list
```


**info page** 页是由双引号之间的打字机字体来标注，如 `info make`。建议你通过键入以下的命令来获取帮助信息。

```Shell
$ info make
```


**文件名**将由双引号括起来的打印机字体进行标记，就像 "`/etc/passwd`"。对于配置文件，你可以输入下列的命令来获取它的信息。

```Shell
$ sensible-pager "/etc/passwd"
```


**目录名**将由双引号括起来的打印机字体进行标记，就像 "`/etc/apt`"。你可以输入下列的命令来浏览目录的内容。

```Shell
$ mc "/etc/apt/"
```


**软件包名称**将由打印机字体进行标记，就像 `vim`。你可以输入下列的命令来获取它的信息。

```Shell
$ dpkg -L vim
$ apt-cache show vim
$ aptitude show vim
```


一个**文档**可能通过文件名来指示它的位置，文件名将由双引号括起来的打印机字体进行标记，就像"`/usr/share/doc/base-passwd/users-and-groups.txt.gz`"和" `/usr/share/doc/base-passwd/users-and-groups.html` "，或通过它的 [URL](https://zh.wikipedia.org/wiki/Uniform_Resource_Locator)，就像 [https://www.debian.org](https://www.debian.org/)。你可以通过输入下列命令来阅读文档。

```Shell
$ zcat "/usr/share/doc/base-passwd/users-and-groups.txt.gz" | sensible-pager
$ sensible-browser "/usr/share/doc/base-passwd/users-and-groups.html"
$ sensible-browser "https://www.debian.org"
```


**环境变量**将由双引号括起来的打印机字体进行标记，并带有 "`$`" 前缀，就像 "`$TERM`"。你可以输入下列命令来获取它的当前值。

```Shell
$ echo "$TERM"
```


###5. 软件包大小

软件包的大小数据同样表明了对每个包的客观衡量。它基于“`apt-cache show`”或“`aptitude show`”命令（目前在`amd64` 架构的`不稳定`版）报告的“`安装大小`”。报告的大小单位是 KiB（[Kibibyte](https://zh.wikipedia.org/wiki/Kibibyte)=表示 1024 Bytes 的单位）。

###6. 给本文档报告 Bug

如果发现文档有任何问题，请直接在github中提出issue

## 一些对新使用者的提醒

这里给出对新用户的一些提醒信息：

- 及时备份你的数据

- 妥善保存你的密码和安全信息

- [KISS（保持简单而傻瓜式）](https://zh.wikipedia.org/wiki/KISS%E5%8E%9F%E5%88%99)

- 不要在系统中过度设计（overengineering）

- 阅读你的日志文件

- **第一条** 错误信息才是最重要的

- [RTFM（阅读手册与指导）](https://zh.wikipedia.org/wiki/RTFM)

- 在问问题前，先在互联网上搜索

- 当不是必须要使用 root 的时候，就不要使用 root

- 不要胡乱折腾软件包管理系统（不要混源）

- 不要输入任何你不理解的命令

- （在完全地检查过安全问题之前）不要随意修改文件权限

- 在**测试**过你所做的修改之前不要关闭 root shell

- 总是准备好备用启动介质（USB 启动盘、启动光盘等）

## 一些对新使用者的引导

维基百科文章"[Unix 哲学](https://en.wikipedia.org/wiki/Unix_philosophy)"列出了一些有趣的指导。

阅读本文档，你需要通过自己的努力去查找本文档未提及的问题答案。本文档仅仅提供有效的起点。

论坛提供了用户间很好的交流方式，如果想和开发者交流，请来github

## 鸣谢

本文档修改自[Debian 参考手册](https://www.debian.org/doc/manuals/debian-reference/index.zh-cn.html)。感谢 Debian 项目的所有贡献者。
