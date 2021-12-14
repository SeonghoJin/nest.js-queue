import { Controller, Get } from '@nestjs/common';
import { InjectQueue } from '@nestjs/bull';
import { Queue } from 'bull';

@Controller('example')
export class ExampleController {
  constructor(@InjectQueue('example') private readonly queue: Queue) {}

  @Get('test')
  async test() {
    await this.queue.add('test', {
      hello: 'hello',
    });
  }
}
