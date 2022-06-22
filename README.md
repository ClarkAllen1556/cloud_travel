<img width="200" height="200" src="https://travel.urbanlife.me/_nuxt/logo.73082633.jpg" class="jop-noMdConv">

***

# CloudTravel

CloudTravel is a mock hotel reservation site written using Vue 3, Nuxt 3, and Tailwind.

A live demo version of the site can be accessed over at, [travel.urbanlife.me](https://travel.urbanlife.me/).

## Local development setup

### Pre-setup

Clone the repository and install necessary dependencies.

```bash
# Clone the repository
git@github.com:ClarkAllen1556/cloud_travel.git

# From the project directory, install needed dependencies
npm install
```

### Development server

For development, you can spin up a local development server.

```bash
# Start a development server
npm run dev
```

### Production

Build the application for production using the following command. The production bundle will be placed under the `.output` directory

```bash
npm run build
```

The app can be deployed using [PM2](https://pm2.keymetrics.io/).

If you have PM2 installed, you can use the following command to launch a cluster.

```bash
pm2 start ecosystem.config.js
```

## Project details and future improvements

### Deployment

The project is continuously deployed via a Jenkins server running on a Raspberry Pi to an Ubuntu VPS. The app can be accessed at [travel.urbanlife.me](https://travel.urbanlife.me/).

### CORS issues

The API that the project uses, https://hiring.zumata.xyz, does not have `Access Control` headers configured, so to work around this, a proxy is used to route requests to the API service. The proxy used is [cors-anywhere](https://github.com/Rob--W/cors-anywhere/) and is running on Heroku at [urban-cors-plz.herokuapp.com](https://urban-cors-plz.herokuapp.com/).

### Future improvements

- [ ] Working filters and sort
_Current implementation of the filters are recorded in the application state using Nuxt's `useState` hook, but they are not being used._
- [ ] Responsive UI
_The app is not usable on mobile at the moment. The app is styled with Tailwind, so adding responsive styles should not be a massive undertaking._