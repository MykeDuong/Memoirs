import User from './models/user.js';

export default (passport) => {
    passport.use(User.createStrategy());

    passport.serializeUser((user, done) => {
        done(null, user._id);
    });
    passport.deserializeUser((id, done) => {
        User.findById(id, (err, user) => {
            done(err, user);
        })
    });
}