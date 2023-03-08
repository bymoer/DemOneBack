import { MongoClient } from 'mongodb';

// put in env !
const uri = 'mongodb://mongo:27017'

//const client = createClient();
let client;

export const createClient = async () => {

    if(client != undefined) {
        return client;
    }

    client = new MongoClient(uri);
    return client;

}

export const testFind = async() => {

    try{
        let results = client.db('test').collection('BirdCollection').find();
        
        let resArr = results.toArray();

        (await resArr).forEach(element => {
            console.log(element)
        });

    } catch (e) {
        console.error(e)
    }
    
}