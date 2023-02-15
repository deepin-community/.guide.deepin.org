

## 1.3.deepin terminal使用指南

deepin trmianal是深度社区自研的一款终端模拟器，功能简单而实用

### 1.3.1

## 1.4. 类 Unix 工作环境基础

虽然 MC 差不多可以让你做任何事情，但学会从 shell 提示下使用命令行工具也是非常重要的，可以让你变得熟悉类 Unix 工作环境。

### 1.4.1. 登录 shell

因登录 shell 可以被一些系统初始化程序使用，请谨慎的把登录 shell 保持为 `bash`或者其他POSIX shell 例如zsh ，并避免把它转换为 `chsh`。

|软件包|POSIX shell|说明|
|-|-|-|
|bash|是|Bash: GNU Bourne Again SHell (事实上的标准)|
|bash-completion|N/A|bash shell 编程补全|
|dash|是|Debian Almquist Shell, 擅长 shell 脚本|
|zsh|是|Z shell:有许多增强的标准 shell|
|tcsh|No|TENEX C Shell: 一个 Berkeley csh 的增强版本|
|mksh|是|Korn shell 的一个版本|
|csh|No|OpenBSD C Shell, Berkeley csh 的一个版本|
|sash|是|有内置命令的 Stand-alone shell (并不意味着标准的 "/bin/sh")|
|ksh|是|Korn shell的真正的 AT&T 版本|
|rc|No|AT&T Plan 9 rc shell 的一个实现|
|posh|是|Policy-compliant Ordinary SHell 策略兼容的普通 shell(pdksh 派生)|
|fish|No|fish旨在成为一个比其他shell交互性更强、用户体验更好的shell|

虽然类 POSIX 共享基本语法，但他们在 shell 变量和全局扩展等基本事情上，行为可以不同。细节请查阅他们的文档。

在本教程中，交互式的 shell 总是指 `bash`.

### 1.4.2. 定制 bash

你可以通过“`~/.bashrc`”来定制`bash`(1)的行为。

尝试下列例子。

```Shell
# enable bash-completion
if ! shopt -oq posix; then
  if [ -f /usr/share/bash-completion/bash_completion ]; then
    . /usr/share/bash-completion/bash_completion
  elif [ -f /etc/bash_completion ]; then
    . /etc/bash_completion
  fi
fi

# CD upon exiting MC
. /usr/lib/mc/mc.sh

# set CDPATH to a good one
CDPATH=.:/usr/share/doc:~:~/Desktop:~
export CDPATH

PATH="${PATH+$PATH:}/usr/sbin:/sbin"
# set PATH so it includes user's private bin if it exists
if [ -d ~/bin ] ; then
  PATH="~/bin${PATH+:$PATH}"
fi
export PATH

EDITOR=vim
export EDITOR
```


你可以在第 9 章 系统技巧中的第 9.3.6 节 “有颜色输出的命令”找到更多关于bash的定制技巧。

bash-completion 软件包能够让 bash 进行命令补全.

### 1.4.3. ZSH

zsh是我个人更为推荐的shell,在安装插件之后能实现自动补全，自动记忆以及高亮命令。

zsh几乎100%兼容bash的操作

具体教程不在这里赘述，请移步-→

### 1.4.4. 特殊按键

在 [类Unix](https://zh.wikipedia.org/wiki/Unix-like) 环境，有一些具有特殊含义的按键。请注意，普通的Linux字符控制台，只有左手边的 `Ctrl` 和 `Alt` 键可以正常工作。其中有几个值得记住的按键。

|快捷键|描述|
|-|-|
|Ctrl-U|删除光标前到行首的字符|
|Ctrl-H|删除光标前的一个字符|
|Ctrl-D|终止输入（如果你在使用 shell，则退出 shell）|
|Ctrl-C|终止一个正在运行的程序|
|Ctrl-Z|通过将程序移动到后台来暂停程序|
|Ctrl-S|停止屏幕输出|
|Ctrl-Q|激活屏幕输出|
|Ctrl-Alt-Del|重启/关闭系统，参见 inittab(5)|
|左 Alt 键（可选择同时按下 Windows-key）|Emacs 和相似 UI 的元键（meta-key）|
|Up-arrow 向上方向键|开始在bash 中查看命令历史|
|Ctrl-R|开始在 bash 的增量命令历史中搜索|
|Tab|在 bash 命令行中补全文件名|
|Ctrl-V Tab|在 bash 命令行中输入 Tab 而不是进行补全|

### 1.4.5. 鼠标操作

[Debian 系统针对文本的鼠标操作混合 2 种风格](https://specifications.freedesktop.org/clipboards-spec/clipboards-latest.txt)，外加一些新的方法：

- 传统的 Unix 鼠标操作方式：

  - 使用 3 个按钮（单击）

  - 使用主要键

  - 由 X 应用，如 `xterm`，以及文本应用在控制台中使用

- 现代 GUI（图形用户界面）鼠标操作方式：

  - 使用 2 个按钮（拖动 + 单击）

  - 使用主要键和剪贴板

  - 用于现代的 GUI（图形用户界面）应用，比如 `deepin-terminal`

|操作|响应|
|-|-|
|左击并拖动鼠标|主要键的选择作为选择范围|
|单击左键|主要键的位置作为选择范围的开头|
|单击右键（传统方式）|主要键的位置作为选择范围的结尾|
|单击右键（现代方式）|依赖上下文的菜单（剪切、拷贝、粘贴）|
|点击中键或者 Shift-Ins|在光标处插入主要键的选择|
|Ctrl-X|剪切主要键的选择到剪贴板|
|Ctrl-C (在终端是 Shift-Ctrl-C )|拷贝主要键的选择到剪贴板|
|Ctrl-V (在终端是 Shift-Ctrl-V )|粘贴剪切板的内容到光标处|

这里，主要键的选择会高亮文本范围。在终端程序内，使用 `Shift-Ctrl-C` 来代替，这样可以避免终止一个运行的程序。

在现代滚轮鼠标上的中央滚轮，被认为是中间键，并可以被当做中间键使用。在 2 键鼠标系统的情况下，同时按左键和右键就相当于按中间键。

为了在 Linux 字符控制台中使用鼠标，您需要让 `gpm`(8) 作为后台守护进程（daemon）运行。

### 1.4.6. 分页程序

`less`(1) 命令是一个增强版的分页程序（文件内容查看器）。它按照指定的命令参数或标准输出来读取文件。在用 `less` 命令查看的时候如果需要帮助可以按 “`h`”。它的功能比 `more`(1) 命令更丰富，通过在脚本的开头执行 "`eval $(lesspipe)`" 或 "`eval $(lessfile)`" 它的功能还能变得更加强大。详细请参考 "`/usr/share/doc/less/LESSOPEN`"。 "`-R`" 选项可以实现原始的字符输出还可以启用 ANSI 颜色转义序列。详细请参考 `less`(1)。

### 1.4.7. 文本编辑器

在使用类 Unix 系统过程中， 各种类似于[Vim](https://zh.wikipedia.org/wiki/Vim_(text_editor)) 或 [Emacs](https://zh.wikipedia.org/wiki/Emacs)的工具，你应该精通其中的一个。

我认为习惯于使用 Vim 命令是一个明智的选择，因为 Linux/Unix 系统里一般都附带了 Vi 编辑器。 (实际上最初的 `vi` 以及后来的 `nvi` 这类工具程序很常见。因为在 Vim 里提供了`F1`帮助键，在同类工具中它的功能更强大，所以我选择 Vim 而不是其它新出的一些工具。)

假设你不是用 [Emacs](https://zh.wikipedia.org/wiki/Emacs) 就是用 [XEmacs](https://zh.wikipedia.org/wiki/XEmacs) 作为你的编辑器，其实还有更好的选择，尤其是在编程的时候。 Emacs 还有很多其他的特点，包括新手导读，目录编辑器，邮件客户端等等。当编写脚本或程序的时候，它能自动识别当前工作模式所对应的格式，让使用更加便利。一些人甚至坚持认为 Linux 系统里最需要配备的就是 Emacs。花十分钟来学习 Emacs 可以为后面的工作剩下更多时间。在此强烈推荐学习使用 Emacs 时候直接使用 GNU Emacs 参考手册。

在实践应用中所有这些程序都会有一个教程，输入 "`vim`" 和F1键就可以启动Vim。建议你最好阅读一下前面的 35 行。移动光标到 "`|tutor|`" 并按 `Ctrl-]` 就可以看到在线培训教程。

其实很多人初次接触vim的时候觉得vim有点反人类，一开始连退出都不知道在那里，但是用熟悉了就真香了。

好的编辑器，像 Vim 和 Emacs，可以处理 UTF-8 及其它不常用编码格式的文本。有个建议就是在 GUI（图形用户界面） 环境下使用 UTF-8 编码，并安装要求的程序和字体。编辑器里可以选择独立于 GUI（图形用户界面）环境的编码格式。关于多字节文本可以查阅参考文档。

GUI文本编辑器deepin内置了deepin-editor,是非常好用的，还有宇宙第一ide——装了插件的vscode（见vscode的词条）

### 1.4.8. 设置默认文本编辑器

Debian 有许多不同的编辑器。我们建议安装上面提到的 `vim` 软件包。

Debian 通过命令“`/usr/bin/editor`”提供了对系统默认编辑器的统一访问，因此其它程序（例如 `reportbug`(1)）可以调用它。你可以通过下列命令改变它。

```Shell
$ sudo update-alternatives --config editor
```


对于新手，我建议使用“`/usr/bin/vim.basic`”代替“`/usr/bin/vim.tiny`”，因为它支持格式高亮。

### 1.4.9.使用

使用vim我个人认为是很难在这一点页面说完的，所以本着不重复造轮子的思想，在这放出基本命令和优质中文教程：

|模式|按键|操作|
|-|-|-|
|普通|:help|only|
|普通|:e filename.ext|打开新的缓冲区来编辑 filename.ext|
|普通|:w|把目前的缓冲区改写到原始文件|
|普通|:w filename.ext|写入当前缓冲区到 filename.ext|
|普通|:q|退出 vim|
|普通|:q!|强制退出 vim|
|普通|:only|关闭所有其它分割打开的窗口|
|普通|:set nocompatible?|检查 vim 是否在完全的 nocompatible 模式|
|普通|:set nocompatible|设置 vim 到完全的 nocompatible 模式|
|普通|i|进入 插入 模式|
|普通|R|进入 替代 模式|
|普通|v|进入 可视 模式|
|普通|V|进入 可视 行 模式|
|普通|Ctrl-V|进入 可视 块 模式|
|除了 TERMINAL-JOB 外|ESC-键|进入 普通 模式|
|普通|:term|进入 TERMINAL-JOB 模式|
|TERMINAL-NORMAL|i|进入 TERMINAL-JOB 模式|
|TERMINAL-JOB|Ctrl-W N (或者 Ctrl-\ Ctrl-N)|进入 TERMINAL-NORMAL 模式|
|TERMINAL-JOB|Ctrl-W :|在TERMINAL-NORMAL 模式里进入Ex-模式|

请使用 "`vimtutor`" 程序来学习 `vim`，通过一个交互式的指导课程。

`vim` 程序基于 **模式** 输入的按键来改变它的行为。在 `插入`-模式和 `替代`-模式下，输入的按键大部分进入了缓冲区。移动光标大部分在 `普通`-模式下完成。交互选择在 `可视`-模式下完成。在`普通`-模式下输入 "`:`" ，改变它的 **模式** 进入到 `Ex`-模式。 `Ex`-接受命令。

### 1.4.10. 记录 shell 活动



shell 命令的输出有可能滚动出了屏幕，并可能导致你无法再查看到它。将shell活动记录到文件中再来回顾它是个不错的主意。当你执行任何系统管理任务时，这种记录是必不可少的。

记录 shell 活动的基本方法是在`script`(1)下运行 shell。

尝试下列例子

```Shell
$ script
Script started, file is typescript
```


在`script`下使用任何 shell 命令。

按`Ctrl-D`来退出`script`。

```Shell
$ vim typescript
```


### 1.4.11. 基本的 Unix 命令

让我们来学习基本的 Unix 命令。在这里，我指的是一般意义上的“UNIX”。任何 UNIX 克隆系统通常都会提供等价的命令。deepin 系统也不例外。如果有一些命令不像你想的那样起作用，请不要担心。如果 shell 中使用了别名，其对应的命令输出会不同。这些例子并不意味着要以这个顺序来执行。

尝试使用非特权用户账号来使用下列的命令。

|命令|说明|
|-|-|
|pwd|显示当前/工作目录的名称|
|whoami|显示当前的用户名|
|id|显示当前用户的身份（名称、uid、gid和相关组）|
|file foo|显示“foo”文件的文件类型|
|type -p commandname|显示命令的文件所处位置“commandname”|
|which commandname|同上|
|type commandname|显示“commandname”命令的相关信息|
|apropos key-word|查找与“key-word”有关的命令|
|man -k key-word|同上|
|whatis commandname|用一行解释 “commandname” 命令|
|man -a commandname|显示“commandname”命令的解释（Unix 风格）|
|info commandname|显示“commandname”命令相当长的解释（GNU风格）|
|ls|显示目录内容（不包含以 . 点号开头的文件和目录）|
|ls -a|显示目录内容（包含所有文件和目录）|
|ls -A|显示目录内容（包含几乎所有文件和目录，除了“..”和“.”）|
|ls -la|显示所有的目录内容，并包含详细的信息|
|ls -lai|显示所有的目录内容，并包含inode和详细的信息|
|ls -d|显示当前目录下的所有目录|
|tree|使用树状图显示目录内容|
|lsof foo|列出处于打开状态的文件 "foo"|
|lsof -p pid|列出被某进程打开的文件: "pid"|
|mkdir foo|在当前目录中建立新目录“foo”|
|rmdir foo|删除当前目录中的“foo”目录|
|cd foo|切换到当前目录下或变量“$CDPATH”中的“foo”目录|
|cd /|切换到根目录|
|cd|切换到当前用户的家目录|
|cd /foo|切换到绝对路径为“/foo”的目录|
|cd ..|切换到上一级目录|
|cd ~foo|切换到用户“foo”的家目录|
|cd -|切换到之前的目录|
|</etc/motd pager|使用默认的分页程序来显示“/etc/motd”的内容|
|touch junkfile|建立一个空文件“junkfile”|
|cp foo bar|将一个现有文件“foo”复制到一个新文件“bar”|
|rm junkfile|删除文件“junkfile”|
|mv foo bar|将一个现有文件“foo”重命名成“bar”（“bar”必须不存在）|
|mv foo bar|将一个现有文件“foo”移动到新的位置“bar/foo”（必须存在“bar”目录）|
|mv foo bar/baz|移动一个现有文件“foo”到新位置并重命名为“bar/baz”（必须存在“bar”目录，且不存在“bar/baz文件”）|
|chmod 600 foo|使其他人无法读写现有文件“foo”（并且所有人都无法执行该文件）|
|chmod 644 foo|使其他人对现有文件“foo”可读但不可写（并且所有人都无法执行该文件）|
|chmod 755 foo|使其他人对“foo”可读而不可写（并且所有人都能执行该文件）|
|find . -name pattern|使用 shell “pattern” 查找匹配的文件名（速度较慢）|
|locate -d . pattern|使用 shell “pattern” 查找匹配的文件名（速度较快，使用定期生成的数据库）|
|grep -e "pattern" *.html|在当前目录下以“.html”结尾的所有文件中，查找匹配“pattern”的文件并显示|
|top|全屏显示进程信息，输入“q”退出|
|ps aux|pager|
|ps -ef|pager|
|ps aux|grep -e "[e]xim4*"|
|ps axf|pager|
|kill 1234|杀死ID为“1234”的进程|
|gzip foo|使用 Lempel-Ziv 编码（LZ77）将“foo”压缩为“foo.gz”|
|gunzip foo.gz|将“foo.gz”解压为“foo”|
|bzip2 foo|使用 Burrows-Wheeter 块排序压缩算法和 Huffman 编码将“foo”压缩为“foo.bz2”（压缩效果比gzip更好）|
|bunzip2 foo.bz2|将“foo.bz2”解压为“foo”|
|xz foo|使用 Lempel-Ziv-Markov 链算法将“foo”压缩为“foo.xz”（压缩效果比bzip2更好）|
|unxz foo.xz|将“foo.xz”解压为“foo”|
|tar -xvf foo.tar|从“foo.tar”档案中提取文件|
|tar -xvzf foo.tar.gz|从被gzip压缩过的“foo.tar.gz”档案中提取文件|
|tar -xvjf foo.tar.bz2|从“foo.tar.bz2”档案中提取文件|
|tar -xvJf foo.tar.xz|从“foo.tar.xz”档案中提取文件|
|tar -cvf foo.tar bar/|将目录“bar/”中的内容打包到“foo.tar”档案中|
|tar -cvzf foo.tar.gz bar/|将目录 “bar/” 中的内容打包并压缩成 “foo.tar.gz” 文件|
|tar -cvjf foo.tar.bz2 bar/|将目录“bar/”中的内容打包到“foo.tar.bz2”档案中|
|tar -cvJf foo.tar.xz bar/|将目录”bar/“中的内容打包到”foo.tar.xz“档案中|
|zcat README.gz|pager|
|zcat README.gz > foo|将“README.gz”解压后的内容输出到文件“foo”中|
|zcat README.gz >> foo|将“README.gz”解压后的内容添加到文件“foo”的末尾（如果文件不存在，则会先建立该文件）|

Unix 有一个惯例，以“.”开头的文件将被隐藏。它们一般为包含了配置信息和用户首选项的文件。

  对于cd命令，参见builtins(7)。

  基本的 Debian 系统的默认分页程序是 more(1)，它无法往回滚动。通过命令 “apt-get install less" 安装 less 软件包后，less(1) 会成为默认的分页程序，它可以通过方向键往回滚动。

  "[" 和"]" 在正则表达式 "ps aux | grep -e "[e]xim4*"" 命令中，可以避免grep在结果中排除它自己， 正则表达式中的 "4*" 意思是空或字符"4" ，这样可以让 grep 既找到 "exim" 也找到 "exim4"。 虽然 "*" 可以用于命令名称匹配和正则表达式中，但是它们的含义是不一样的。欲详细了解正则表达式可以参考 grep(1)。

作为训练，请使用上述的命令来遍历目录并探究系统。如果你有任何有关控制台命令的问题，请务必阅读手册。

尝试下列例子

```Shell
$ man man
$ man bash
$ man builtins
$ man grep
$ man ls
```


手册的风格可能让人有点难以习惯，因为它们都相当简洁，尤其是比较老旧、非常传统的那些手册。但是，一旦你习惯了它，你来欣赏它们的简洁。

请注意，许多 类 Unix 命令（包含来自 GNU 和 BSD 的）都可以显示简短的帮助信息，你可以使用下列的其中一种方式来查看它（有时不带任何参数也可以）。

```Shell
commandname --help
$ commandname -h
```


## 1.5. 简单 shell 命令

现在，你对如何使用 deepin 系统已经有一些感觉了。让我们更深入了解 deepin 系统的命令执行机制。在这里，我将为新手做一般的讲解。精确的解释参见`bash`(1)。

一般的命令由有序的组件构成。

- 设置变量值（可选）

- 命令名

- 参数（可选）

- 重定向（可选：`>`, `>>` , `<`, `<<` 等等）

- 控制操作（可选：`&&` ， `||` ， 换行符 , `;` , `&` , `(` , `)`）

### 1.5.1. 命令执行和环境变量

一些[环境变量](https://zh.wikipedia.org/wiki/Environment_variable)的值会改变部分 Unix 命令的行为。

环境变量的默认值由 PAM 系统初始化，其中一些会被某些应用程序重新设定。

- PAM（可插拔身份验证模块）系统的模块，比如 `pam_env` 模块，可以通过 `/etc/pam.conf`"、 "`/etc/environment`"和"`/etc/default/locale`"设置环境变量。

- 显示管理器（例如`gdm3`）可以通过"`~/.profile`"给 GUI（图形用户界面）会话重新设定环境变量。

- 用户特有的程序初始化时，可以重新设置在 "`~/.profile`"、"`~/.bash_profile`" 和 "`~/.bashrc`" 中设置的环境变量。

### 1.5.2. “`$LANG`”变量

默认的语言环境是在 "`$LANG`" 环境变量中定义，它在安装的时候配置为 "`LANG=xx_YY.UTF-8`"，或者在接下来的 GUI（图形用户界面）中配置，例如在 GNOME 中是，"设置" → "区域 & 语言" → "语言" / "格式"。

目前建议最好用变量 "`$LANG`" 来配置系统环境变量，只有在逼不得已的情况下才用 `$LC_*`" 开头的变量

`$LANG`” 变量的完整的语言环境值由3部分组成：“`xx_YY.ZZZZ`”。

|语言环境值|说明|
|-|-|
|xx|ISO 639 语言代码（小写）例如“en”|
|YY|ISO 3166 国家代码（大写）例如“US”|
|ZZZZ|编码，总是设置为“UTF-8”|

|语言环境推荐|语言（地区）|
|-|-|
|en_US.UTF-8|英语（美国）|
|en_GB.UTF-8|英语（大不列颠）|
|fr_FR.UTF-8|法语（法国）|
|de_DE.UTF-8|德语（德国）|
|it_IT.UTF-8|意大利语（意大利）|
|es_ES.UTF-8|西班牙语（西班牙）|
|ca_ES.UTF-8|加泰隆语（西班牙）|
|sv_SE.UTF-8|瑞典语（瑞典）|
|pt_BR.UTF-8|葡萄牙语（巴西）|
|ru_RU.UTF-8|俄语（俄国）|
|zh_CN.UTF-8|汉语（中华人民共和国）|
|zh_TW.UTF-8|汉语（中国台湾省）|
|ja_JP.UTF-8|日语（日本）|
|ko_KR.UTF-8|韩语（韩国）|
|vi_VN.UTF-8|越南语（越南）|

使用 shell 命令行按顺序执行下列典型的命令。

```Shell
$ echo $LANG
en_US.UTF-8
$ date -u
Wed 19 May 2021 03:18:43 PM UTC
$ LANG=fr_FR.UTF-8 date -u
mer. 19 mai 2021 15:19:02 UTC
```


这里，`date`(1)程序执行时使用了不同的语言环境值

- 第一个命令，“`$LANG`” 设置为系统的默认[语言环境](https://zh.wikipedia.org/wiki/Locale)值 “`en_US.UTF-8`”。

- 第二个命令，“`$LANG`”设置为法语的 UTF-8 [语言环境](https://zh.wikipedia.org/wiki/Locale)值“`fr_FR.UTF-8`”。

大多数的命令在执行时并没有预先定义环境变量。对于上面的例子，你也可以选择如下的方式。

```Shell
$ LANG=fr_FR.UTF-8
$ date -u
mer. 19 mai 2021 15:19:24 UTC
```


对于语言环境配置的细节，参见 [第 8.1 节 “语言环境”](https://www.debian.org/doc/manuals/debian-reference/ch08.zh-cn.html#_the_locale)

### 1.5.3. "`$PATH`" 变量

当你在 Shell 里输入命令的时候，Shell 会在 "`$PATH`" 变量所包含的目录列表里进行搜索，"`$PATH`" 变量的值也叫作 Shell 的搜索路径。

可以在 Bash 脚本文件 "`~/.bash_profile`" 或 "`~/.bashrc`" 中改变 "`$PATH`" 环境变量的值。

在zsh中为`~/.zshrc`

### 1.5.4. "`$HOME`" 变量

很多命令在用户目录中都存放了用户指定的配置，然后通过配置的内容来改变它的执行方式，用户目录通常用 "`$HOME`" 变量来指定。

|"$HOME" 变量的值|程序运行环境|
|-|-|
|/|初始进程执行的程序（守护进程）|
|/root|root 用户权限 Shell 执行的程序|
|/home/normal_user|普通用户权限Shell执行的程序|
|/home/normal_user|普通用户 GUI 桌面菜单执行的程序|
|/home/normal_user|用 root 用户权限来执行程序 "sudo program"|
|/root|用 root 用户权限执行程序 "sudo -H program"|

Shell 扩展 "~/" 为转入当前用户的主目录，也就是"$HOME/"。Shell 扩展 "~foo/" 为foo 的目录，也就是 "/home/foo/"。

### 1.5.5. 命令行选项

一些命令附带参数。这些参数以 "`-`" 或 "`--`" 开头，通常称之为选项，用来控制命令的执行方式。

```Shell
$ date
Thu 20 May 2021 01:08:08 AM JST
$ date -R
Thu, 20 May 2021 01:08:12 +0900
```


这里的命令参数 "`-R`" 改变 `date`(1) 命令输出为 [RFC2822](http://tools.ietf.org/html/rfc2822) 标准的日期字符格式。

### 1.5.6. Shell 通配符



经常有这种情况你期望命令成串自动执行而不需要挨个输入，将文件名扩展为 **glob**，(有时候被称为 **通配符**)，以此来满足这方面的需求。

|shell glob 模式|匹配规则描述|
|-|-|
|*|不以 "." 开头的文件名(段)|
|.*|以 "." 开头的文件名(段)|
|?|精确字符|
|[…]|包含在括号中的任意字符都可以作为精确字符|
|[a-z]|"a" 到 "z" 之间的任意一个字符都可以作为精确字符|
|[^…]|除了包含在括号中的任意字符 ( " 1^ 2"除外 )，其它字符都可以作为精确字符|



尝试下列例子

```Shell
$ mkdir junk; cd junk; touch 1.txt 2.txt 3.c 4.h .5.txt ..6.txt
$ echo *.txt
1.txt 2.txt
$ echo *
1.txt 2.txt 3.c 4.h
$ echo *.[hc]
3.c 4.h
$ echo .*
. .. .5.txt ..6.txt
$ echo .*[^.]*
.5.txt ..6.txt
$ echo [^1-3]*
4.h
$ cd ..; rm -rf junk
```


参见 `glob`(7)。

与 shell 通用的文件名匹配方式不同， 使用 " `-name` " 选项的 `find` (1)，其 shell 模式" `*` " ，匹配以" `.` "开始的文件名.（新[ POSIX ](https://zh.wikipedia.org/wiki/POSIX)的特性)

BASH 可以使用内置的 shopt 选项如 " `dotglob` "，" `noglob` "," `nocaseglob` "," `nullglob` "," `extglob` "定制全局行为,使用 `bash` ( 1 )查看详细说明。

### 1.5.7. 命令的返回值

每个命令都会返回它的退出状态（变量：“`$?`”）作为返回值。

|命令的退出状态|数字返回值|逻辑返回值|
|-|-|-|
|success|zero, 0|TRUE|
|error|non-zero, -1|FALSE|

尝试下列例子。

```Shell
$ [ 1 = 1 ] ; echo $?
0
$ [ 1 = 2 ] ; echo $?
1
```


### 1.5.8. 典型的顺序命令和 shell 重定向

让我们试着记住下面 Shell 命令里部分命令行所使用的命令习语。

|命令常见用法|说明|
|-|-|
|command &|在子 shell 的后台 中执行 command|
|command1|command2|
|command1 2>&1|command2|
|command1 ; command2|依次执行 command1 和 command2|
|command1 && command2|执行 command1；如果成功，按顺序执行 command2（如果 command1 和 command2 都执行成功了，返回 success ）|
|command1||
|command > foo|将 command 的标准输出重定向到文件 foo（覆盖）|
|command 2> foo|将 command 的标准错误重定向到文件 foo（覆盖）|
|command >> foo|将 command 的标准输出重定向到文件 foo（附加）|
|command 2>> foo|将 command 的标准错误重定向到文件 foo（附加）|
|command > foo 2>&1|将 command 的标准输出和标准错误重定向到文件 foo|
|command < foo|将 command 的标准输入重定向到文件 foo|
|command << delimiter|将 command 的标准输入重定向到下面的命令行，直到遇到“delimiter”（here document）|
|command <<- delimiter|将 command 的标准输入重定向到下面的命令行，直到遇到“delimiter”（here document，命令行中开头的制表符会被忽略|

deepin 系统是一个多任务的操作系统。后台任务让用户能够在一个 shell 中执行多个程序。后台进程的管理涉及 shell 的内建命令：`jobs`、`fg`、`bg` 和 `kill`。请阅读 bash(1) 中的章节：“SIGNALS”、“JOB CONTROL” 和 “`builtins`(1)”。

尝试下列例子

```Shell
$ </etc/motd pager
```


```Shell
$ pager </etc/motd
```


```Shell
$ pager /etc/motd
```


```Shell
$ cat /etc/motd | pager
```


尽管4个 shell 重定向的例子都会显示相同的结果，但最后一个例子毫无意义地运行了额外的 `cat` 命令浪费了资源。

shell 允许你使用 `exec` 通过任意一个文件描述符来打开文件。

```Shell
$ echo Hello >foo
$ exec 3foo 4bar  # open files
$ cat <&3 >&4       # redirect stdin to 3, stdout to 4
$ exec 3<&- 4>&-    # close files
$ cat bar
Hello
```


预定义的文件描述符0-2。

|设备|说明|文件描述符|
|-|-|-|
|stdin|标准输入|0|
|stdout|标准输出|1|
|stderr|标准错误|2|

### 1.5.9. 命令别名

你可以为经常使用的命令设置一个别名。

尝试下列例子

```Shell
$ alias la='ls -la'
```


现在，“`la`”是“`ls -al`”的简写形式，并同样会以长列表形式列出所有的文件。

你可以使用 `alias` 来列出所有的别名（参见 `bash`(1) 中的“SHELL BUILTIN COMMANDS”）。

```Shell
$ alias
...
alias la='ls -la'
```


你可以使用 `type` 来确认命令的准确路径或类型（参见 `bash`(1) 中的“SHELL BUILTIN COMMANDS”）。

尝试下列例子

```Shell
$ type ls
ls is hashed (/bin/ls)
$ type la
la is aliased to ls -la
$ type echo
echo is a shell builtin
$ type file
file is /usr/bin/file
```


`ls` 在最近被使用过，而 “`file`” 没有，因此 “`ls`” 标记为 “hashed”（被录入哈希表），即 shell 有一个内部的记录用来快速访问 “`ls`” 所处的位置。

记住 alia命令定义的别名仅在当前shell有效，如果关闭或重启shell则不会保留别名。如果想长久保留，请将其写入坏境变量中。

## 1.6. 类 Unix 的文本处理

在类 Unix 的工作环境中，文本处理是通过使用管道组成的标准文本处理工具链完成的。这是另一个重要的 Unix 创新。

### 1.6.1. Unix 文本工具

这里有一些在类 Unix 系统中经常使用到的标准文本处理工具。

- 没有使用正则表达式：

  - cat(1) 连接文件并输出全部的内容。

  - tac(1) 连接文件并反向输出。

  - cut(1) 选择行的一部分并输出。

  - head(1) 输出文件的开头。

  - tail(1) 输出文件的末尾。

  - sort(1) 对文本文件的行进行排序。

  - uniq(1) 从已排序的文件中移除相同的行。

  - tr(1) 转换或删除字符。

  - diff(1) 对文件的行进行对比。

- 默认使用基础正则表达式（ BRE ）：

  - ed(1) 是一个原始行编辑器。

  - sed(1) 是一个流编辑器。

  - grep(1) 匹配满足 pattern 的文本。

  - vim(1) 是一个屏幕编辑器。

  - emacs(1) 是一个屏幕编辑器。（有些扩展的 BRE ）

  使用扩展的正则表达式（ ERE ）：

- 使用扩展的正则表达式（ ERE ）：

  - awk(1) 进行简单的文本处理。

  - egrep(1) 匹配满足多个 pattern 的文本。

  - tcl(3tcl) 可以进行任何你想得到的文本处理：参见 re_syntax(3)经常与 tk(3tk) 一起使用。

  - perl(1) 可以进行任何你想得到的文本处理。参见 perlre(1)

  - pcregrep 软件包中的 pcregrep(1) 可以匹配满足 Perl 兼容正则表达式（PCRE） 模式的文本。

  - ripgrep 是对grep最佳的替代，命令是rg

  - 带有 re 模块的 python(1) 可以进行任何你想得到的文本处理。参见“/usr/share/doc/python/html/index.html”。

- 如果你不确定这些命令究竟做了什么，请使用“man command” 来自己把它搞清楚吧。

推荐文本工具：neovim batcat ripgrep

### 1.6.2. 正则表达式

本指南不想过多介绍正则表达式，如果你学习的编程语言有对于正则表达式的介绍，那么你可以略过这一段。

但是正则表达式在很多命令行软件中都有应用。

[https://www.runoob.com/regexp/regexp-tutorial.html](https://www.runoob.com/regexp/regexp-tutorial.html)
