/// <reference path="../..//typings/index.d.ts" />

import * as Express from "express";
import * as Http from "http";

import { Config } from "../config";

export class ExpressApplication {

  private readonly express: Express.Express;
  private readonly config: Config;
  private readonly http: Http.Server;

  constructor(config: Config) {

    this.express = Express();
    this.http = Http.createServer(this.express);
    this.config = config;

  }

  public start(): void {
    this.http.listen(this.config.serverPort, () => {
      console.log(new Date().toISOString() + ': server listening on port:' + this.config.serverPort)
    });
  }
}