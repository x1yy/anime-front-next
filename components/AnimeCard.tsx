import { Card, Image } from 'rbxhotfix';
import React from 'react';
import Link from 'next/link';

interface Props {
  anime?: any;
}

class AnimeCard extends React.Component<Props> {

  render() {
    const anime = this.props.anime;

    return (
      <Card>
        <Card.Image>
          <Image.Container size='3by4'>
            <Image src={anime.coverLink} />
          </Image.Container>
        </Card.Image>
        <Card.Content>
          {anime.title}
        </Card.Content>
      </Card>
    );
  }
}

export default AnimeCard;
