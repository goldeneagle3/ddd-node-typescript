import express, { Express } from "express";

import setupMiddleware from "@main/config/middlewares.config";
import setupRoutes from "@main/config/routes.config";

export const setupApp = async (): Promise<Express> => {
  const app = express();
  setupMiddleware(app);
  setupRoutes(app);
  return app;
};
