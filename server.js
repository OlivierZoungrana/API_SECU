import routes from './src/routes/userNewRoutes.js'
import express from "express"
import mongoose from "mongoose"
import bodyParser from "body-parser"

const app = express()
const PORT = 3000
mongoose.Promise = global.Promise

mongoose.connect('mongodb+srv://olivier:olive@cluster0.to70a.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
{ useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));
  
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({
    extended: true
  }));

  routes(app)
app.get("/", (req, res)=>
res.send("Hello")
)

app.listen(PORT, (req, res)=>
console.log(`le serveur ${PORT} est en route`)
)