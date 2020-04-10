import { Column, Pagination } from 'rbxhotfix';
import React from 'react';
import Link from 'next/link';

import AnimeCard from './AnimeCard';

interface IItem {
  id: number;
  title: string;
  synopis: string;
  coverLink: string;
  metaDescription: string;
}

interface IMeta {
  totalItems: number;
  itemCount: number;
  itemsPerPage: number;
  totalPages: any;
  currentPage: any;
}

interface ILink {
  first: string;
  previous: string;
  next: string;
  last: string;
}

interface IState {
  items: IItem[];
  meta: IMeta;
  links: ILink;
}

class AnimeCollection extends React.Component<{}, IState> {
  state: IState;
  animeGridRef: React.RefObject<HTMLDivElement>;

  constructor(props: any) {
    super(props);
    this.state = {
      items: [{
        id: 0,
        title: '',
        synopis: '',
        coverLink: '',
        metaDescription: ''
      }],
      meta: {
        totalItems: 0,
        itemCount: 0,
        itemsPerPage: 0,
        totalPages: 0,
        currentPage: 0
      },
      links: {
        first: '',
        previous: '',
        next: '',
        last: ''
      }
    }

    this.getAnimeCollection = this.getAnimeCollection.bind(this);
    this.previous = this.previous.bind(this);
    this.next = this.next.bind(this);
    this.animeGridRef = React.createRef<HTMLDivElement>();
  }

  getAnimeCollection(endpoint: string) {
    if (!endpoint) {
      endpoint = `https://api.id-anime.net/v1/animes`;
    }

    window.fetch(endpoint)
      .then(response => {
        return response.json();
      })
      .then((data: any) => {
        this.setState({
          items: data.items,
          meta: data.meta,
          links: data.links
        });
        let element = this.animeGridRef.current;
        if (element !== null) {
          this.animeGridRef.current.scrollIntoView();
        }
      })
  }

  componentDidMount() {
    this.getAnimeCollection('');
  }

  previous() {
    let previousLink = '';
    if (this.state.links.previous) {
      const previousPage = parseInt(this.state.meta.currentPage) - 1;
      previousLink = `https://api.id-anime.net/v1/animes?page=${previousPage}&limit=12`;
      this.getAnimeCollection(previousLink);
    }
  }

  next() {
    const currentPage = parseInt(this.state.meta.currentPage);
    const totalPages = parseInt(this.state.meta.totalPages);

    if (currentPage < totalPages) {
      let nextPage = currentPage + 1;
      let nextLink = `https://api.id-anime.net/v1/animes?page=${nextPage}&limit=12`;
      this.getAnimeCollection(nextLink);
    }
  }

  render() {
    const animeCollection = this.state.items;

    return (
      <div ref={this.animeGridRef}>
        <Column.Group vcentered multiline gapSize={8} className='anime-grid'>
          {animeCollection.map(collection => (
            <Column size='one-quarter' key={collection.id}>
              <Link href={`/animes/${collection.id}`}>
                <a><AnimeCard anime={collection} /></a>
              </Link>
            </Column>
          ))}

          <Column>
              <Pagination align='centered'>
                <Pagination.Step align='previous' onClick={this.previous}>sebelumnya</Pagination.Step>
                <Pagination.Step align='next' onClick={this.next}>selanjutnya</Pagination.Step>
              </Pagination>
            </Column>
        </Column.Group>
      </div>
    );
  }
}

export default AnimeCollection;
