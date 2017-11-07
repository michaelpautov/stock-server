import { Config } from "./config";
import { ExpressApplication } from "./server/express";

const config = new Config();
const app = new ExpressApplication(config);

app.start();