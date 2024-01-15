import { Status } from "../../../repository/app";

export interface Product {
    name: string;
    serie: string;
    status: Status;
    last_service: string;
    next_service: string;
    description: string;
    timestamp: string;
}