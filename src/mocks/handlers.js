import { rest } from "msw";
import data from "./data.json";
export const handlers = [
  rest.get("/read", (req, res, ctx) => {
    return res(ctx.status(200), ctx.delay(2000), ctx.json(data));
  }),
];
