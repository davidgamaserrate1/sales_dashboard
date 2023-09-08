import { PrismaService } from "src/prisma_service";
import { Injectable } from '@nestjs/common';

@Injectable()
export class SelectAllProductsService {
  constructor(private prisma: PrismaService) {}

  async getAllProducts() {
    const productsList = await this.prisma.$queryRaw`
    SELECT
        id,
        name,
        description,
        value ,
        'Produto Configurável' type    
    FROM
        public."ConfigurableProduct"

    UNION  

    SELECT
        id,
        name,
        description,
        value,
        'Produto Simples' type    
    FROM
        public."SimpleProduct"

    UNION ALL

    SELECT
        id,
        name ,   
        description,
        value,
        'Produto Digital' type    
    FROM
        public."DigitalProduct"  

    ORDER BY type;
        `;

    return productsList;
  }
}
