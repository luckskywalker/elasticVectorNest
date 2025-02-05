import { Module } from '@nestjs/common';
import { EpisodeResolver } from './episode.resolver';
import { ElasticsearchModule } from '../elasticsearch/elasticsearch.module';

@Module({
  imports: [ElasticsearchModule],
  providers: [EpisodeResolver],
})
export class EpisodeModule {}
