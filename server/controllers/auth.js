import User from '../models/user.js';

export const regAuth = async (req, res) => {
    try {
        const passport = req.app.settings.passport;
        User.register({email: req.body.email, name: req.body.name}, req.body.password, (err, user) => {
            if (err) {
                //console.log(err);
                res.status(401).json({ message: err.message });
            } else {
                passport.authenticate("local")(req, res, () => {
                    console.log(user);
                    res.status(200).json(user);
                });
            }
        });
    } catch (err) {
        console.log(err);
        res.status(402).json({ message: err});
    }
}

export const loginAuth = async (req, res) => {
    try {
        const passport = req.app.settings.passport;
        const user = new User({
            email: req.body.email,
            password: req.body.password
        });
    
        req.login(user, (err) => {
            if (err) {

                console.log(err);
            } else {
                passport.authenticate("local")(req, res, () => {
                    res.status(200).json(user);
                });
            }
        });
    } catch (err) {
        res.status(401).json({ message: err.message });
    }
}

export const googleAuth = async (req, res) => {
    try {
        
    } catch (err) {
        res.status(401).json({ message: err.message });
    }
};