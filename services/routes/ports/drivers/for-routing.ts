import { Router } from "express";

export interface ForRouting {
    appRouter(): Router;
}