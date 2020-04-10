import { useRouter } from 'next/router';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import { Column, List, Title, PageLoader, Pagination } from 'rbxhotfix';
import Layout from '../../components/AnimeLayout';

import 'rbxhotfix/index.css';
import '../index.css';

const animeStreaming = props => (
    <Layout>
      <Column size='three-fifths' offset='one-fifth' height='380px'>
        <Title size={3} as='h1'>{props.anime.title}</Title>
        <Title size={4} as='h2'>Episode {props.episodes.items[0].title}</Title>
        <iframe className='video-iframe' title={props.episodes.items[0].title} frameBorder={0} src={props.episodes.items[0].link} allowFullScreen />
        <br />
        <Title size={5} as='h3'>Episode</Title>
        <List>
          {props.episodes.items.map(episode => (
            <Link href={`/animes/${props.anime.id}/episodes/${episode.id}`}>
              <List.Item>Episode {episode.episode}</List.Item>
            </Link>
          ))}
          <List.Item>
            <Pagination align='centered'>
              <Pagination.Step align='previous' href={props.previousLink}>sebelumnya</Pagination.Step>
              <Pagination.Step align='next' href={props.nextLink}>selanjutnya</Pagination.Step>
            </Pagination>
          </List.Item>
        </List>
      </Column>
    </Layout>
)

animeStreaming.getInitialProps = async function(ctx) {
  console.log(ctx.query);
  const {animeId} = ctx.query;
  const res = await fetch(`https://api.id-anime.net/v1/animes/${animeId}`);
  const anime = await res.json();

  let episodesLink = `https://api.id-anime.net/v1/animes/${animeId}/episodes`;
  if (ctx.query.page) {
    episodesLink = `https://api.id-anime.net/v1/animes/${animeId}/episodes?page=${ctx.query.page}&limit=12`;
  }

  const res2 = await fetch(episodesLink);
  const episodes = await res2.json()

  console.log(anime);
  console.log(episodes);
  let previousLink = '';
  if (episodes.links.previous) {
    // @ts-ignore
    const previousPage = parseInt(episodes.meta.currentPage) - 1;
    previousLink = `/animes/${anime.id}?page=${previousPage}`;
  }

  // @ts-ignore
  let nextPage = parseInt(episodes.meta.currentPage) + 1;
  let nextLink = `/animes/${anime.id}?page=${nextPage}`;
  return { anime, episodes, previousLink, nextLink };
}

export default animeStreaming;
