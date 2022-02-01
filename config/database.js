// module.exports = ({ env }) => ({
//   connection: {
//     client: 'postgres',
//     connection: {
//       host: env('DATABASE_HOST', '127.0.0.1'),
//       port: env.int('DATABASE_PORT', 5432),
//       database: env('DATABASE_NAME', 'd86hdnj7mdpjeu'),
//       user: env('DATABASE_USERNAME', ''),
//       password: env('DATABASE_PASSWORD', '4fa65869713d083eb99c7fa7369f546c5925af4b0874aceb8523a0a4a7c19938'),
//       ssl: env.bool('DATABASE_SSL', true),
//     },
//   },
// // });
// module.exports = ({ env }) => ({
//   connection: {
//     client: "postgres",
//     connection: {
//       host: process.env.DATABASE_HOST,
//       port: process.env.DATABASE_PORT,
//       database: process.env.DATABASE_NAME,
//       user: process.env.DATABASE_USERNAME,
//       password: process.env.DATABASE_PASSWORD,
//       // ssl: env.bool('DATABASE_SSL', true), //тук смених със следното, иначе излизаше грешка
//       ssl: { rejectUnauthorized: false },
//     }
//   }
// });
module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env(
        "DATABASE_HOST",
        "ec2-34-197-181-65.compute-1.amazonaws.com"
      ),
      port: env.int("DATABASE_PORT", 5432),
      database: env("DATABASE_NAME", "de44osmgva9j2b"),
      user: env("DATABASE_USERNAME", "ulwmawiedcbvpi"),
      password: env(
        "DATABASE_PASSWORD",
        "d37e7ff2d0f4d8405e07a742e8a7021f0114d2c87183d9774378c14eddff781a"
      ),
      // ssl: env.bool('DATABASE_SSL', true), //тук смених със следното, иначе излизаше грешка
      ssl: { rejectUnauthorized: false },
    }
  }
});

