import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { myDatabase } from "./database.js";

export const auth = betterAuth({
  database: mongodbAdapter(myDatabase),
   baseURL: "http://localhost:3000",
    trustedOrigins: [
    "http://localhost:5173",
  ],

  emailAndPassword: {
    enabled: true,
  },
});
