import { SimpleGrid, useDisclosure } from '@chakra-ui/react';
import { useState } from 'react';
import { Card } from './Card';
import { ModalViewImage } from './Modal/ViewImage';

interface Card {
  title: string;
  description: string;
  url: string;
  ts: number;
  id: string;
}

interface CardsProps {
  cards: Card[];
}

export function CardList({ cards }: CardsProps): JSX.Element {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [imageUrl, setImageUrl] = useState('')

  const handleOpenImage = (uri: string) => {
    setImageUrl(uri)
    onOpen()
  }
  // TODO SELECTED IMAGE URL STATE

  // TODO FUNCTION HANDLE VIEW IMAGE

  return (
    <>
      <SimpleGrid
        columns={3}
        spacing="40px"
      >
        {cards.map(cardItem => (
          <Card
            key={cardItem.id}
            data={cardItem}
            viewImage={(imageUrl: string) => handleOpenImage(imageUrl)}
          />
        ))}
      </SimpleGrid>

      <ModalViewImage
        imgUrl={imageUrl}
        isOpen={isOpen}
        onClose={onClose}
      />
    </>
  );
}
