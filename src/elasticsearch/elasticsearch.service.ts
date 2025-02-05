import { Injectable } from '@nestjs/common';
import { ElasticsearchService as NestElasticsearchService } from '@nestjs/elasticsearch';

@Injectable()
export class ElasticsearchService {
  constructor(
    private readonly elasticsearchService: NestElasticsearchService,
  ) {}

  async searchEpisode(text: string) {
    return this.elasticsearchService.search({
      index: process.env.ES_LOCAL_INDEX,
      body: {
        query: {
          semantic: {
            field: 'description',
            query: text,
          },
        },
      },
    });
  }
}
