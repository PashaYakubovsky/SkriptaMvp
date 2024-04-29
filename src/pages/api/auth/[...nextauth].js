import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";

export const authOptions = {
    // Configure one or more authentication providers
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID ?? "",
            clientSecret: process.env.GITHUB_SECRET ?? "",
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID ?? "",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
        }),
        Credentials({
            // The name to display on the sign in form (e.g. 'Sign in with...')
            name: "credentials",
            // The credentials is used to generate a suitable form on the sign in page.
            // You can specify whatever fields you are expecting to be submitted.
            // e.g. domain, username, password, 2FA token, etc.
            credentials: {
                username: { label: "Username", type: "text", placeholder: "jsmith" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials, req) {
                // You need to provide your own logic here that takes the credentials
                // submitted and returns either a object representing a user or value
                // that is false/null if the credentials are invalid.
                // e.g. return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
                // You can also use the `req` object to obtain additional parameters
                // (i.e., the request IP address)

                if (credentials.repeatPassword) {
                    const res = await fetch(`${process.env.NEXTAUTH_URL}/api/auth/signup`, {
                        method: "POST",
                        body: JSON.stringify(credentials),
                        headers: { "Content-Type": "application/json" },
                    });
                    const resJson = await res.json();
                    const user = resJson.data.user;

                    // If no error and we have user data, return it
                    if (res.ok && user) {
                        return user;
                    }
                } else {
                    const res = await fetch(`${process.env.NEXTAUTH_URL}/api/auth/login`, {
                        method: "POST",
                        body: JSON.stringify(credentials),
                        headers: { "Content-Type": "application/json" },
                    });
                    const resJson = await res.json();
                    const user = resJson.data.user;

                    // If no error and we have user data, return it
                    if (res.ok && user) {
                        return user;
                    }
                }

                // Return null if user data could not be retrieved
                throw new Error("Invalid credentials");
            },
        }),
    ],
    // ...add more providers here
    callbacks: {
        async jwt({ token, account }) {
            console.log("jwt", token, account);
            // Persist the OAuth access_token to the token right after signin
            if (account) {
                token.accessToken = account.access_token;
            }

            if (account?.provider === "google") {
                await fetch(`${process.env.NEXTAUTH_URL}/api/auth/save`, {
                    method: "POST",
                    body: JSON.stringify({
                        name: token.name,
                        email: token.email,
                        picture: token.picture,
                        accessToken: account.access_token,
                    }),
                    headers: { "Content-Type": "application/json" },
                });
            }
            if (account?.provider === "github") {
                await fetch(`${process.env.NEXTAUTH_URL}/api/auth/save`, {
                    method: "POST",
                    body: JSON.stringify({
                        name: token.name,
                        email: token.email,
                        picture: token.picture,
                        accessToken: account.access_token,
                    }),
                    headers: { "Content-Type": "application/json" },
                });
            }
            return token;
        },
        async session({ session, token, user }) {
            console.log("session", session, token, user);
            // Send properties to the client, like an access_token from a provider.
            session.accessToken = token.accessToken;
            return session;
        },
        async signIn({ account, profile }) {
            console.log("signIn", account, profile);
            if (account.provider === "google") {
                return profile.email_verified;
            }

            return true; // Do different verification for other providers that don't have `email_verified`
        },
    },
};
export default NextAuth(authOptions);
