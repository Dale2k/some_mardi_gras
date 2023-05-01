const { Schema, model } = require("mongoose");

// Schema to create User model
const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },

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

userSchema
  .virtual("friendCount")
  // Getter
  .get(function () {
    return this.friends.length;
  });

// Initialize our User model
const User = model("user", userSchema);

module.exports = User;
