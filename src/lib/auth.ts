import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";

import { db } from "@/db";
import * as shema from "@/db/schema";

export const auth = betterAuth({
    emailAndPassword: {
        enabled: true,
        autoSignIn: false
    },
   database: drizzleAdapter(db, {
        provider: "pg", // or "mysql", "sqlite"
        schema: {
            ...shema,
        },
    }),
});