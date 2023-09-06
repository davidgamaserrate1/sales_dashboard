import { Module } from '@nestjs/common';
import { SimpleProducteModule } from './simple_product/simple_product.module';

@Module({
  imports: [SimpleProducteModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
