import { Module } from '@nestjs/common';
import { ElasticsearchService } from './elasticsearch.service';
import { ElasticsearchModule as _ElasticsearchModule } from '@nestjs/elasticsearch';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    _ElasticsearchModule.register({
      node: process.env.ES_LOCAL__URL,
      auth: {
        username: process.env.ES_LOCAL_USERNAME,
        password: process.env.ES_LOCAL_PASSWORD,
      },
    }),
  ],
  providers: [ElasticsearchService],
  exports: [ElasticsearchService],
})
export class ElasticsearchModule {}
