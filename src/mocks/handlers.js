import { rest } from "msw";
import data from "./data.json";
export const handlers = [
  rest.get("/read", (req, res, ctx) => {
    return res(ctx.status(200), ctx.delay(1000), ctx.json(data));
  }),
  rest.post("/login", (req, res, ctx) => {
    const formData = JSON.parse(req.body);
    return res(ctx.json(formData), ctx.delay(2000), ctx.status(200));
  }),
  rest.post("/signup", (req, res, ctx) => {
    const formData = JSON.parse(req.body);
    const { email, pass } = formData;
    let isValid = pass.pass === pass.confirmation && Boolean(email);
    console.log(isValid);
    if (isValid)
      return res(ctx.json(formData), ctx.delay(2000), ctx.status(200));
    return res(ctx.delay(2000), ctx.status(400));
  }),
];
