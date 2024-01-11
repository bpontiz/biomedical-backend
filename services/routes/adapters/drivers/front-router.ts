// import { Router as RouterHEX } from "../../app/router";
import { Router } from "../../app/router";
import { ForRouting } from "../../ports/drivers/for-routing";
import { Router as RouterModule } from "express";

export class FrontRouter implements ForRouting {
    constructor(){};

    appRouter = RouterModule().get('/users', new Router().getUsers);

};
