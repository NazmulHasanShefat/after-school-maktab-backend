import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { myDatabase } from "./database.js";

export const auth = betterAuth({
  database: mongodbAdapter(myDatabase),
  emailAndPassword: {
    enabled: true,
  },
});
