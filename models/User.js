const { Schema, model } = require("mongoose");

// Schema to create User model
const userSchema = new Schema(
  {
    username: String, //username string unique required trimed
    email: String, // email string required unique
    age: Number, // delete     thoughts / friends??

    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: "thought", //ref 'thought'
      },
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: "user", //self reference
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

// --> (this the original) Create a virtual property `fullName` that gets and sets the user's full name
// look at the userSchema below

userSchema.virtual("friendCount");
Getter.get(function () {
  return this.friends.length;
});

// Initialize our User model
const User = model("user", userSchema);

module.exports = User;
