/* eslint-disable import/no-anonymous-default-export */
import passport from "passport";
import connect from "../../../lib/database";
import "../../../lib/passport";

export default async function (req, res, next) {
  await connect();
  passport.authenticate("orcid", {
    scope: ['/authenticate'],
    session: false,
  })(req, res, next);
}
