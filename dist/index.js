import express from 'express';
import cookieSession from 'cookie-session';
import { dbConfig } from './config/db.config.js';
import { dbHelper } from './models/index.js';
const app = express();

// Importing router files
import userRouter from './routes/user.routes.js';
import authRouter from './routes/auth.routes.js';
const router = express.Router();
const port = 5000;
const Role = dbHelper.role;
dbHelper.mongoose.connect(`mongodb://${dbConfig.HOST}:${dbConfig.PORT}/${dbConfig.DB}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
  initial();
}).catch(err => {
  console.error('Connection error', err);
  process.exit();
});
const initial = async () => {
  const rolesInDb = await Role.find({});
  if (rolesInDb === undefined || null) {
    new Role({
      name: 'user'
    }).save().then(() => {
      console.log('\'user\' was added to DB');
    });
    new Role({
      name: 'moderator'
    }).save().then(() => {
      console.log('\'moderator\' was added to DB');
    });
    new Role({
      name: 'admin'
    }).save().then(() => {
      console.log('\'admin\' was added to DB');
    });
  }
  console.log(rolesInDb);
};
router.get('/', (req, res) => {
  res.send('<h1>Hello World</h1><p>The index of localhost.</p>');
});
app.use('/api', router);
app.use(express.json());
app.use(cookieSession({
  name: 'demone-session',
  secret: 'COOKIE_SECRET',
  httpOnly: true
}));

// Import of router files
app.use(userRouter);
app.use(authRouter);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});