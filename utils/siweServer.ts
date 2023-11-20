import { configureServerSideSIWE } from "connectkit-next-siwe";

let siweServer = configureServerSideSIWE({
  session: {
    cookieName: "connectkit-next-siwe",
    password: process.env.SESSION_SECRET,
    cookieOptions: {
      secure: process.env.NODE_ENV === "production",
    },
  },
})

export { siweServer }