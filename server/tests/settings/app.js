import express from "express";
import routers from "../../routes/router.js";

const app = express();
app.use(express.json());


for (const r of routers) {
  app.use(r.path, r.route);
}

export default app;
