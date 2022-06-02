import mongoose from 'mongoose';
import passport from 'passport';
import passportLocalMongoose from 'passport-local-mongoose';
import findOrCreate from 'mongoose-findorcreate';

const userSchema = new mongoose.Schema({
    name : { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String },
    googleId: String,
    facebookId: String,
    id: { type: String }
});

userSchema.plugin(passportLocalMongoose, { usernameField: "email" });
userSchema.plugin(findOrCreate);

const User = mongoose.model('User', userSchema);

export default User;