import { Logger } from '@nestjs/common';
import { Process, Processor } from '@nestjs/bull';
import { Job } from 'bull';

@Processor('example')
export class ExampleService {
  private readonly logger = new Logger(ExampleService.name);

  @Process('test')
  handleTest(job: Job) {
    this.logger.debug('Start test');
    this.logger.debug(job.data);
    this.logger.debug('Complete');
  }
}
