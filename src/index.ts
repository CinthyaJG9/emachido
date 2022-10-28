import express from 'express'

const app= express()

app.use(express.json())

const PORT= 3000

app.get('/ping', (_req, res)=>{

    console.log("me quiero matar")

    res.send('pong')
})

app.listen(PORT, () =>{

    console.log(`Servidor en el puerto ${PORT}`)
})