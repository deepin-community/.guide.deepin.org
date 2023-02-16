export default {
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
            text: "1.GNU/Linux教程",
            items: [
              { text: "简介", link: "/deepin进阶教程/1.GNU-linux教程/简介" },
              { text: "1.1.控制台基础", link: "/deepin进阶教程/1.GNU-linux教程/1.1.控制台基础" },
              { text: "1.2.类Unix系统", link: "/deepin进阶教程/1.GNU-linux教程/1.2.类Unix系统" },
              { text: "1.4.类Unix工作环境基础", link: "/deepin进阶教程/1.GNU-linux教程/1.4.类Unix工作环境基础" },
              { text: "1.5.简单shell命令", link: "/deepin进阶教程/1.GNU-linux教程/1.5.简单shell命令" },
              { text: "1.6.类Unix的文本处理", link: "/deepin进阶教程/1.GNU-linux教程/1.6.类Unix的文本处理" }, 1
            ],
          },
          {
            text: "2.deepin软件包管理",
            items: [
              { text: "简介", link: "/deepin进阶教程/2.deepin软件包管理/简介" },
              { text: "2.1.Debian软件包管理前提", link: "/deepin进阶教程/2.deepin软件包管理/2.1.Debian软件包管理前提.md" },
            ],
          }
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
};
