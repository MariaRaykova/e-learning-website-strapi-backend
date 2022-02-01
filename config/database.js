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
// });
module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: process.env.DATABASE_HOST,
      port: process.env.DATABASE_PORT,
      database: process.env.DATABASE_NAME,
      user: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      // ssl: env.bool('DATABASE_SSL', true), //тук смених със следното, иначе излизаше грешка
      ssl: { rejectUnauthorized: false },
    }
  }
});
// module.exports = ({ env }) => ({
//   connection: {
//     client: "postgres",
//     connection: {
//       host: env(
//         "DATABASE_HOST",
//         "ec2-52-2-245-64.compute-1.amazonaws.com"
//       ),
//       port: env.int("DATABASE_PORT", 5432),
//       database: env("DATABASE_NAME", "den2vt2drdffn6"),
//       user: env("DATABASE_USERNAME", "qdribgsqzoxkso"),
//       password: env(
//         "DATABASE_PASSWORD",
//         "3746bea71e38ccc05fc24d7b29d8c23bf988b7f47b982c10e114b47d647346ba"
//       ),
//       // ssl: env.bool('DATABASE_SSL', true), //тук смених със следното, иначе излизаше грешка
//       ssl: { rejectUnauthorized: false },
//     }
//   }
// });

