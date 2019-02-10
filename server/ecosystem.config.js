module.exports = {
  apps : [{
    name: "flixatic-node-api",
    script: "./src/app.ts",
    instances: "2",
    env: {
      NODE_ENV: "development",
    },
    env_production: {
      NODE_ENV: "production",
      UNOGS_API_1: "https://unogs-unogs-v1.p.rapidapi.com/api.cgi",
      UNOGS_API_2: "https://unogs-unogs-v1.p.rapidapi.com/aaapi.cgi",
      API_KEY: "UzUrpeo6BYmshiu0Edkelfwq4Xx7p1GcrYNjsnF01LaDGsEs9T"
    }
  }]
}