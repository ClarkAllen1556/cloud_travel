module.exports = {
  apps: [
    {
      name: 'CloudTravel',
      exec_mode: 'cluster',
      instances: '1',
      script: './.output/server/index.mjs',
      env: {
        NITRO_PORT: 3101,
      },
    },
  ],
};
