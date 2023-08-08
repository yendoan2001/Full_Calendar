import jwt from "jsonwebtoken";

export const auth = async (req, res, next) => {
    try {
        let accessToken = req.body['accessToken'];
        if (accessToken) {
            jwt.verify(accessToken, '123456789', (err, decoded) => {
                if (err) {
                    return res.json({error: err.error})
                } else {
                    req.decoded = decoded;
                    next();
                }
            })
        } else {
            return res.status(401).json({
                message: 'No token provided.'
            })
        }
    } catch (e) {
        return res.status(401).json({error: e.error})
    }
}

