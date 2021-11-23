/**
 * 配置说明请参考文档:
 * https://hongqiye.com/doc/mockm/config/option.html
 * @type {import('mockm/@types/config').Config}
 */
module.exports = {
  static: [
    { // 测试 netlify 部署
      fileDir: `./dist`,
      path: `/`,
    },
    { // 测试 gitee/github 部署
      fileDir: `./dist`,
      path: `/md`,
    },
  ],
}
