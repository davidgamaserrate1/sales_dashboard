import { Module } from '@nestjs/common';
import { SimpleProducteModule } from './simple_product/simple_product.module';
import { DigitalProductModule } from './digital_product/digital_product.module';
import { ConfigurableProductModule } from './configurable_product/configurable_product.module';
import { GroupedProductModule } from './grouped_product/grouped_product.module';

@Module({
  imports: [
    SimpleProducteModule, 
    DigitalProductModule, 
    ConfigurableProductModule,
    GroupedProductModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
