const jwt = require('jsonwebtoken');

const getToken = (payload) => {
    return jwt.sign({
        data: payload
    }, 'SECRET', { expiresIn: '1h' });
}

const getTokenData = (token) => {
    let data = null;
    jwt.verify(token, 'SECRET', (err, decoded) => {
        if (err) {
            console.log("Error al obtener el token email");
        } else {
            data = decoded;
        }
    })

    return data;
}

module.exports = {
    getToken,
    getTokenData
}