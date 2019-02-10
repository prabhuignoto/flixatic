module.exports = {
  apps : [{
    name: "flixatic-node-api",
    script: "ts-node ./src/app.ts",
    instances: "2",
    env: {
      NODE_ENV: "development",
    },
    env_production: {
      NODE_ENV: "production",
    }
  }]
}