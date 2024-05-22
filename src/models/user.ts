import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  date: { type: String, required: true },
  password: {
    type: String,
    required: true,
    minlength: 8,
    validate: {
      validator: function (v: string) {
        return /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/.test(v);
      },
      message: (props: { value: string }) =>
        `${props.value} must have at least 6 characters, 2 lowercase letters, 1 uppercase letter, and 1 number`,
    },
  },
  confirmPassword: { type: String, required: true },
});

const User = mongoose.model("User", userSchema);

export default User;