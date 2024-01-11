import { Router as RouterHEX } from "../../app/router";
import { ForRouting } from "../../ports/drivers/for-routing";
import { Router, Router as RouterModule } from "express";

export class FrontRouter implements ForRouting {
    appRouter = RouterModule();
    routerInstance = new RouterHEX();

    getProducts(): Router {
        return new FrontRouter().appRouter.get(this.routerInstance.allUsers, this.routerInstance.getUsers);
    }

}
