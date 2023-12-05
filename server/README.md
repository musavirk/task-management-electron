# TaskManagement

Desktop App for manage Tasks

## API

### Prerequisites

- [Git](https://git-scm.com/downloads)
- [NodeJS](https://nodejs.org/en/download)
- [MongoDB](https://www.mongodb.com/docs/manual/administration/install-community/)
- [Mongo Compass](https://www.mongodb.com/try/download/compass)

### Steps to run the API project.

- Navigate to your proffered working directory (Example: `cd Desktop/projects`)
- Make sure you are in the expected directory (`pwd` and `ls`)
- Clone the repository using SSH (`git@github.com:musavirk/task-management-electron.git`)
- Navigate to the API (`cd task-management-electron/server/api`)
- Install node dependencies (`npm i`)
- Copy environment variable file and edit the created `.env` file content (`cp .env.example .env`)
- Run the pre-commit hook config
  - `chmod +x pre-commit`
  - `mkdir -p .git/hooks`
  - `ln -s ../../pre-commit .git/hooks/pre-commit`
- Run the project (`npm start`)
- The app will be running on port number provided in the env file (`http://localhost:5000`)

### Error Logging & Monitoring

Errors are written to `error.log` file in the `api` directory.

### Code flow

`app.js` <--> `middlewares & routes` <--> `controllers` <--> `validations & services` <--> `models`

### Documentation

- Swagger based documentations are generated at `/docs` route (`http://localhost:5000/v1/docs`)
- Any new API should add the documentation schema on `config/swagger-component.yaml`
- Add your swagger annotation on your route file. (Example can be found at `routes/taskRoute.js`)

### Code formatting & best practices

- Make sure to install prettier extension on your code editor and enable format on save.
- Configure prettier as default formatter for each file type
- `.prettierrc` file is used to define the standards

### Data validation on API

All API should validate input data using [joi](https://joi.dev/) which need to be created on `validations` directory. The validation should be used on controller level.

### Database operations

All database operations are written on `services` directory by invoking mongoose schema from `models` directory.

### Tools used

- [NodeJS](https://nodejs.org/en/docs)
- [ExpressJS](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/docs/)
- [JOI](https://joi.dev/)
- [Swagger UI](https://www.npmjs.com/package/swagger-ui-express)
- [Swagger JS](https://github.com/Surnet/swagger-jsdoc)
- [Mongoose](https://mongoosejs.com/)
- [DotEnv](https://www.npmjs.com/package/dotenv)
- [Helmet](https://www.npmjs.com/package/helmet)
- [CORS](https://www.npmjs.com/package/cors)
- [Compression](https://www.npmjs.com/package/compression)
- [Morgan](https://www.npmjs.com/package/morgan)
- [Express Rate Limit](https://www.npmjs.com/package/express-rate-limit)
- [Nodemon](https://www.npmjs.com/package/nodemon)
