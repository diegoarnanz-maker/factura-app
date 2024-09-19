import { Client } from "./client";
import { Company } from "./company";
import { Item } from "./item";

//Son como los POJOS en Java

export class Invoice {
    id!: number;
    name!: string;
    client!: Client;
    company!: Company;
    items!: Item[];
    
    total!: number;
}