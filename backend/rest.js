
/////////////////////////////////////
const express = require('express');
const bodyParser = require('body-parser');
const DiaryEntryModel = require('./entry-schema');
const mongoose = require('mongoose');
const UserModel = require('./user-model');
const bcrypt = require('bcrypt');
const router = express.Router();
const app = express();
const cors=require('cors');
const helpModel = require('./help');
const signupModel = require('./entry-schema');
const { error } = require('console');

mongoose.connect('mongodb://localhost:27017/firstApp')    ;
const db=mongoose.connection;
db.once('open', () => {
    console.log('Connected to MongoDB');
});

db.on('error', err => {
    console.log('Error connecting to MongoDB: ', err);
});

app.listen(3000, () => {
    console.log("Serveur démarré");
});
app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
res.setHeader('Access-Control-Allow-Origin', '*');
res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
next();
})
////////////////------------------------LES FONCTIONS DE Help------------------------------///////////////////
//lister 
app.get('/help/lister', async (req, res) => {
    try {
       const listHelps = await helpModel.find({}).exec();
       return res.status(200).json({ listHelps });
    } catch (error) {
       console.error('Error:', error);
       return res.status(500).json({ error: 'Internal Server Error' });
    }
 });
 
 
//ajouter
app.post('/help/ajouter', async (req, res) => {
    try {  
        // Logique pour récupérer tous les utilisateurs
        const Helpobj = {
            content: req.body.content,
            //date: new Date(req.body.date)
        };

        const Helps = new helpModel(Helpobj);
        const createdHelps = await Helps.save();

        if (createdHelps) {
            return res.status(200).json({ createdHelps });
        }
    } catch (error) {
        console.error('Error:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
});
  
app.get('/help/:id/supprimer', async (req, res) => {
    try {
       const id = req.params.id;
       const deletedHelp = await helpModel.findByIdAndRemove(id).exec();
 
       if (deletedHelp) {
          return res.status(200).json({ message: 'Suppression effectuée' });
       } else {
          return res.status(404).json({ message: 'Aucune aide trouvée avec cet ID' });
       }
    } catch (error) {
       console.error('Error:', error);
       return res.status(500).json({ error: 'Internal Server Error' });
    }
 });
 //modifier
 app.post('/help/:id/modifier', async (req, res) => {
    try {
        const id = req.params.id;
        const modifobj = {
            content: req.body.content,
            //date: new Date(req.body.date),
        };

        const modifiedHelp = await helpModel.findByIdAndUpdate(id, modifobj).exec();

        if (modifiedHelp) {
            return res.status(200).json({ message: 'Modification effectuée' });
        } else {
            return res.status(404).json({ message: 'Aucune aide trouvée avec cet ID' });
        }
    } catch (error) {
        console.error('Error:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;
  ////////////////

//////////////////////////////////////////--------------------FIN HELP-------------------/////////////////////////////////////////////////
////////////////------------------------LES FONCTIONS DE sign-up------------------------------///////////////////

//DiaryEntryModel ml entry-schema
//lister 
app.get('/signup/lister', async (req, res) => {
    try {
       const listHelps = await signupModel.find({}).exec();
       return res.status(200).json({ listHelps });
    } catch (error) {
       console.error('Error:', error);
       return res.status(500).json({ error: 'Internal Server Error' });
    }
 });
 
 
//ajouter
app.post('/signup/ajouter', async (req, res) => {
    try {  
        // Logique pour récupérer tous les utilisateurs
        const Helpobj = {
            f: req.body.firstname,
            l: req.body.lastname,
            p: req.body.phoneNumber,
            e: req.body.email,
            pp:req.body.password

        };

        const Helps = new signupModel(Helpobj);
        const createdHelps = await Helps.save();

        if (createdHelps) {
            return res.status(200).json({ createdHelps });
        }
    } catch (error) {
        console.error('Error:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
});
  
app.get('/signup/:id/supprimer', async (req, res) => {
    try {
       const id = req.params.id;
       const deletedHelp = await signupModel.findByIdAndRemove(id).exec();
 
       if (deletedHelp) {
          return res.status(200).json({ message: 'Suppression effectuée' });
       } else {
          return res.status(404).json({ message: 'Aucune aide trouvée avec cet ID' });
       }
    } catch (error) {
       console.error('Error:', error);
       return res.status(500).json({ error: 'Internal Server Error' });
    }
 });
 //modifier///////////////////////////////////////////////////
 app.post('/signup/:id/modifier', async (req, res) => {
    try {
        const id = req.params.id;
        const modifobj = {
                f: req.body.firstname,
                l: req.body.lastname,
                p: req.body.phoneNumber,
                e: req.body.email,
                pp:req.body.password
        };

        const modifiedHelp = await signupModel.findByIdAndUpdate(id, modifobj).exec();

        if (modifiedHelp) {
            return res.status(200).json({ message: 'Modification effectuée' });
        } else {
            return res.status(404).json({ message: 'Aucune aide trouvée avec cet ID' });
        }
    } catch (error) {
        console.error('Error:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;