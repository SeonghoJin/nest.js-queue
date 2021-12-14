import { Module } from '@nestjs/common';
import { BullModule } from '@nestjs/bull';
import { ExampleController } from './example.controller';
import { ExampleService } from './example.service';

@Module({
  imports: [
    BullModule.registerQueue({
      name: 'example',
    }),
  ],
  controllers: [ExampleController],
  providers: [ExampleService],
})
export class ExampleModule {}
