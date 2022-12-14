/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1656008621588_1037';

  // add your middleware config here
  config.middleware = [];

  config.adminAddress = '0x04C535c9F175cB8980B43617fB480412c7E341E4'

  config.contractAddress = '0xeB1Ee1A3536a7ddC37c14C59bB333f0E104e037a'

  config.primaryKey = process.env.PRIVATE_KEY

  config.web3Url = 'https://testnet.sapphire.oasis.dev'

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  config.mysql = {
    // 单数据库信息配置
    client: {
      // host
      host: '127.0.0.1',
      // 端口号
      port: '3306',
      // 用户名
      user: 'root',
      // 密码
      password: 'root',
      // 数据库名
      database: 'burstPoint',
    },
    // 是否加载到 app 上，默认开启
    app: true,
    // 是否加载到 agent 上，默认关闭
    agent: false,
  };

  config.cluster = {
    listen:{
      path:'',
      port: 80,
      hostname: '0.0.0.0',
    }
  }

  config.redis = {
    client: {
      port: '6379',
      // host: 'ec-project-cb.1ck6sb.ng.0001.usw2.cache.amazonaws.com',
      host: '127.0.0.1',
      password: '',
      // password: 'hA0SXfKZJP',
      db: 0,
    },
  }

  config.cors = {
    origin : '*',
    allowMethods: 'GET, HEAD, PUT, POST, DELETE, PATCH, OPTIONS'
  }

  return {
    ...config,
    ...userConfig,
  };
};
