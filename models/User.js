import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
  username: String,
  orcid: String,
  accessToken: String,
  tokens: [String],
  date_joined: Date
});

let User;

try {
  User = mongoose.model("users");
} catch (err) {
  User = mongoose.model("users", UserSchema);
}

export default User;
