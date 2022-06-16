module.exports = {
  apps: [
    {
      name: 'CloudTravel',
      exec_mode: 'cluster',
      instances: '1',
      script: './.output/server/index.mjs',
    },
  ],
};
