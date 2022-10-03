/* eslint-disable import/no-anonymous-default-export */
import { setCookies } from "cookies-next";
import passport from "passport";
import connect from "../../../lib/database";
import "../../../lib/passport";

export default async function (req, res, next) {
  await connect();
  passport.authenticate("orcid", (err, user, info) => {
    if (err || !user) {
      return res.redirect("http://localhost:5000/?a=auth_fail");
    }

    // set cookie and send redirect
    setCookies("token", info.token, {
      req,
      res,
    });
    res.redirect("http://localhost:5000/dashboard");
  })(req, res, next);
}
