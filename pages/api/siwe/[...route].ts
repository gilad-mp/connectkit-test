import { configureServerSideSIWE } from "connectkit-next-siwe";

let siweServer = configureServerSideSIWE({
    session: {
      cookieName: "connectkit-next-siwe",
      password: process.env.SESSION_SECRET,
      cookieOptions: {
        secure: process.env.NODE_ENV === "production",
      },
    },
    options: {
        afterVerify: (req, res, session) =>{
            console.log(`🔐 we just verified the user ${session.address}`)
        }
      },
  })


export default siweServer.apiRouteHandler