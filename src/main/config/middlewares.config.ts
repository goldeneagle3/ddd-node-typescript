import { Express } from "express";

import { bodyParser } from "main/middlewares/body-parser";
import { contentType } from "main/middlewares/content-type";
import { cors } from "main/middlewares/cors";

export default (app: Express) => {
  app.use(bodyParser);
  app.use(cors);
  app.use(contentType);
};
