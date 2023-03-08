import express from 'express';
import { blabla } from './models/index.js';
import { testFind, createClient } from './mongodb/conn.js';
import { userAuthKey } from './config/auth.config.js';

const app = express();

const router = express.Router();

const port = 5000;

//const ROLES = dbHelper.ROLES;

console.log(userAuthKey);

router.get('/test', (req, res) => {
  res.send('<h1>TEST PAGE</h1><p>If you are seeing this page, you are hopefully just testing. Otherwise.....crap!</p>')
})

/*
router.get('/testdb', async (req, res) => {

  try {
    const client = await createClient();
    const db = client.db('test');
    const collection = db.collection('BirdCollection');
    const results = await collection.find().toArray();
    res.json(results);
  } catch (e) {
    console.log('Error: ', e);
  }

})
*/

router.get('/',(req, res) => {
  //console.log(dbHelper.booking);
  res.send('<h1>Hello world ! Index page here....ay</h1>')
})

app.use('/api', router);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});
