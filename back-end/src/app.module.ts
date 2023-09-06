import { Module } from '@nestjs/common';
import { SimpleProducteModule } from './simple_product/simple_product.module';
import { DigitalProductModule } from './digital_product/digital_product.module';

@Module({
  imports: [SimpleProducteModule, DigitalProductModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
