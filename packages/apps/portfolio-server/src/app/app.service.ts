import { Injectable } from '@nestjs/common';
import { pascalCase } from '@venkatasudha/portfolio-core';
@Injectable()
export class AppService {
  getData(): { message: string } {
    return { message: pascalCase('Welcome to portfolio-server!') };
  }
}
