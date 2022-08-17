import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  Image,
  Link,
} from '@chakra-ui/react';

interface ModalViewImageProps {
  isOpen: boolean;
  onClose: () => void;
  imgUrl: string;
}

export function ModalViewImage({
  isOpen,
  onClose,
  imgUrl,
}: ModalViewImageProps): JSX.Element {
  // MODAL WITH IMAGE AND EXTERNAL LINK
  return (
    <Modal onClose={onClose} isOpen={isOpen}>
      <ModalOverlay />
      <ModalContent
        h="auto"
        w="auto"
        maxW="900px"
        alignItems="flex-start"
        bgColor="pGray.800"
      >
        <ModalBody p={0}>
          <Image maxH="600px" maxW="900px" src={imgUrl} />
        </ModalBody>
        <ModalFooter>
          <Link href={imgUrl} target="_blank" color="white">
            Abrir original
          </Link>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
