import express from 'express'
import * as jwt from 
    'jsonwebtoken'

const app = express()

const getToken = (user) => {
    const payload = {
        id: user.id
    }
    return jwt.sign(
        payload,
        'secret',
        {
            expiresIn: '1h'
        }
    )
}

app.post('/login', 
    (req, res) => {
    // Passar os dados para
    // um controller, que
    // verifica os dados do
    // usuário e retorna
    // o token.
    const user = {
        id: 1,
        name: 'João',
        email: 'joao@gmail.com'
    }
    const token = getToken(user)
    return res.json({token})
})

app.listen(3333, () => {
    console.log(
        'Server is running.'
    )
})