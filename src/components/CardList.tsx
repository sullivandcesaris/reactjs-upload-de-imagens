/* eslint-disable prettier/prettier */
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
  // MODAL USEDISCLOSURE
  const {isOpen, onClose, onOpen} = useDisclosure();

  // SELECTED IMAGE URL STATE
  const [selectedImageUrl, setSelectedImageUrl] = useState('');

  // FUNCTION HANDLE VIEW IMAGE
  const handleViewImage = (url:string): void => {
      setSelectedImageUrl(url);
      onOpen()
  }

  return (
    <>
    <SimpleGrid columns={[1,2,3,]} spacing="40px">
      {cards.map(card => {
        return(
          <Card key={card.id} data={card} viewImage={handleViewImage} />
        )
      })}
    </SimpleGrid>
      {/* MODALVIEWIMAGE */}
      <ModalViewImage isOpen={isOpen} onClose={onClose} imgUrl={selectedImageUrl}/>
    </>
  );
}
