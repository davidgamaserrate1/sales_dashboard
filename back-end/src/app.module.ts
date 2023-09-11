import { Module } from '@nestjs/common';
import { SimpleProducteModule } from './simple_product/simple_product.module';
import { DigitalProductModule } from './digital_product/digital_product.module';
import { ConfigurableProductModule } from './configurable_product/configurable_product.module';
import { GroupedProductModule } from './grouped_product/grouped_product.module';
import { SelectAllProductsModule } from './select_all_products/select_all_procuts.module';
import { AuthModule } from './authentication/auth.module';

@Module({
  imports: [
    SimpleProducteModule, 
    DigitalProductModule, 
    ConfigurableProductModule,
    GroupedProductModule,
    SelectAllProductsModule,
    AuthModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
