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
  // TODO MODAL WITH IMAGE AND EXTERNAL LINK

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered size="4xl">
      <ModalOverlay />
      <ModalContent bgColor="pGray.900">
        <ModalBody>
          <Image
            alt='Texto alternativo para imagem'
            src={imgUrl}
            width="900px"
            height="600px"
            objectFit="contain"
          />
        </ModalBody>
        <ModalFooter>
          <Link passHref>
            <a href={imgUrl}>Abrir original</a>
          </Link>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
