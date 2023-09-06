import { INestApplication, Injectable, OnModuleInit } from "@nestjs/common";
import {PrismaClient} from "@prisma/client/"

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit{
    DigitalProduct: any;
    findUnique(arg0: any): import("./simple_product/simple_product.model").SimpleProduct | PromiseLike<import("./simple_product/simple_product.model").SimpleProduct> {
        throw new Error("Method not implemented.");
    }
   
    async onModuleInit(){
        await this.$connect();
    }

    async enableShutdownHooks(app:INestApplication){
        process.on('beforeExit', async()=>{
            await app.close();
        })
    }
}

 