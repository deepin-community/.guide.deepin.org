
import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "deepin指南",
  description: "指南的目标读者：使用deepin linux的普通用户，并且愿意更加深入了解系统的高级用法",

  themeConfig: {
    sidebar: [
      {
        text: "目录",
        items: [
          { text: "目录", link: "/目录/目录" },
        ],
      },
      {
        text: "deepin进阶教程",
        items: [
          {
            text: "GNU/Linux教程",
            items: [
              { text: "简介", link: "/deepin进阶教程/1.GNU-linux教程/简介" },
              { text: "控制台基础", link: "/deepin进阶教程/1.GNU-linux教程/1.1.控制台基础" },
              { text: "类Unix系统", link: "/deepin进阶教程/1.GNU-linux教程/1.2.类Unix系统" },
              { text: "类Unix工作环境基础", link: "/deepin进阶教程/1.GNU-linux教程/1.4.类Unix工作环境基础" },
              { text: "简单shell命令", link: "/deepin进阶教程/1.GNU-linux教程/1.5.简单shell命令" },
              { text: "类Unix的文本处理", link: "/deepin进阶教程/1.GNU-linux教程/1.6.类Unix的文本处理" },
              { text: "环境变量", link: "/deepin进阶教程/1.GNU-linux教程/1.7.环境变量" },
            ],
          },
          {
            text: "deepin软件包管理",
            items: [
              { text: "简介", link: "/deepin进阶教程/2.deepin软件包管理/简介" },
              { text: "Debian软件包管理前提", link: "/deepin进阶教程/2.deepin软件包管理/2.1.Debian软件包管理前提.md" },
              { text: "基础软件包管理操作", link: "/deepin进阶教程/2.deepin软件包管理/2.2.基础软件包管理操作" },
              {text: "为deepin添加来自debian或ubuntu的软件包", link: "/deepin进阶教程/2.deepin软件包管理/2.3.为deepin添加来自debian或ubuntu的软件包" },
              {text: "高级软件包管理操作", link: "/deepin进阶教程/2.deepin软件包管理/2.4.高级软件包管理操作" },
              {text: "Debian软件包内部管理", link: "/deepin进阶教程/2.deepin软件包管理/2.5.Debian软件包内部管理" },
              {text: "从损坏的系统中恢复", link: "/deepin进阶教程/2.deepin软件包管理/2.6.从损坏的系统中恢复" },
              {text: "软件包管理技巧", link: "/deepin进阶教程/2.deepin软件包管理/2.7.软件包管理技巧" },
            ],
          },
          {
            text: "系统初始化",
            items: [
              { text: "启动过程概述", link: "/deepin进阶教程/3.系统初始化/3.1.启动过程概述" },
              { text: "Systemd初始化", link: "/deepin进阶教程/3.系统初始化/3.2.Systemd初始化" },
              { text: "内核消息", link: "/deepin进阶教程/3.系统初始化/3.3.内核消息" },
              { text: "系统消息", link: "/deepin进阶教程/3.系统初始化/3.4.系统消息" },
              { text: "系统管理", link: "/deepin进阶教程/3.系统初始化/3.5.系统管理" },
              { text: "其他系统监控", link: "/deepin进阶教程/3.系统初始化/3.6.其他系统监控" },
              { text: "定制Systemd", link: "/deepin进阶教程/3.系统初始化/3.7.定制Systemd" },
              { text: "udev系统", link: "/deepin进阶教程/3.系统初始化/3.8.udev系统" },
            ],
          },
          {
            text: "数据管理",
            items: [
              { text: "共享,拷贝和存档", link: "/deepin进阶教程/10.数据管理/10.1.共享,拷贝和存档" },
              { text: "备份和恢复", link: "/deepin进阶教程/10.数据管理/10.2.备份和恢复" },
              { text: "数据安全基础", link: "/deepin进阶教程/10.数据管理/10.3.数据安全基础" },
              { text: "Git", link: "/deepin进阶教程/10.数据管理/10.4.Git" },
            ],
          },
          {
            text: "编程开发",
            items: [
              { text: "C++编程环境搭建", link: "deepin进阶教程/11.编程开发/11.1.C++编程环境搭建" },
              { text: "golang编程环境搭建", link: "deepin进阶教程/11.编程开发/11.2.golang编程环境搭建" },
              { text: "dotnet编程环境搭建", link: "deepin进阶教程/11.编程开发/11.3.dotnet编程环境搭建" },
              { text: "rust编程环境搭建", link: "deepin进阶教程/11.编程开发/11.4.rust编程环境搭建" },
              { text: "DTK编程环境开发", link: "deepin进阶教程/11.编程开发/11.5.DTK编程环境开发" },
              { text: "nodejs编程环境搭建", link: "deepin进阶教程/11.编程开发/11.6.nodejs编程环境搭建" },
            ],
          },
        ],
      },
      {
        text: "文档贡献指南",
        items: [
          { text: "文档贡献指南", link: "/文档贡献指南/文档贡献指南" },
        ],
      },
    ],
  },
});
