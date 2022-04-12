import envConfig from "@main/config/env.config";
import { MongoHelper } from "@infrastructure/db/mongo/mongo-helper";

MongoHelper.connect(envConfig.mongoUri)
  .then(async () => {
    const { setupApp } = await import("@main/config/app.config");
    const app = await setupApp();
    app.listen(envConfig.port, () =>
      console.log(`Server running at http://localhost:${envConfig.port}`)
    );
  })
  .catch(console.error);
