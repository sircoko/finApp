import { Module } from '@nestjs/common';
import { ClientProxyFinantials } from './client-proxy';

@Module({
  providers: [ClientProxyFinantials],
  exports: [ClientProxyFinantials],
})
export class ProxyModule {}
