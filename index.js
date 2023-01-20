/*pour lancer mon serveur, étape 1 définir le script de lancement en écrivant : "start": "node index.js"  dans le fichier package.json
(à condition que mon point d'entrée s'appelle index.js)
 Etape 2, lancer la commande dans le terminal : npm run start ou node index.js */

const express = require('express')
const res = require('express/lib/response')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('hello world')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })