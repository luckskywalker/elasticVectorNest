import { Query, Args, Resolver } from '@nestjs/graphql';
import { Episode } from './episode.model';
import { ElasticsearchService } from '../elasticsearch/elasticsearch.service';

@Resolver()
export class EpisodeResolver {
  constructor(private readonly elasticsearchService: ElasticsearchService) {}

  @Query(() => [Episode], { nullable: 'items' })
  async searchEpisode(
    @Args('text', { type: () => String, nullable: false }) text: string,
  ): Promise<Episode[]> {
    return this.elasticsearchService.searchEpisode(text).then((res) =>
      res.hits.hits.map(({ _id, _score, _source }) => {
        return {
          id: _id,
          score: _score,
          title: (
            _source as {
              name: { text: string };
            }
          ).name.text,
          description: (
            _source as {
              description: { text: string };
            }
          ).description.text,
        } as Episode;
      }),
    );
  }
  @Query(() => String)
  test(@Args('input', { type: () => String }) input: string): string {
    return input;
  }
}
