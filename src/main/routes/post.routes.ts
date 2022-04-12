import { Router } from "express";
import { adaptRoute } from "main/adapters/express-route.adapter";
import { makeAddPostController } from "main/factories/controllers/add-post-controller.factory";

export default (router: Router): void => {
  router.post("/posts", adaptRoute(makeAddPostController()));
};
