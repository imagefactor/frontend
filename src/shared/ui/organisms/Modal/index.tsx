import * as React from "react";
import {
  Modal as ModalWrapper,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { PropsWithChildren } from "react";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  headerTitle: string;
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "full";
};
export const Modal = ({
  isOpen,
  onClose,
  headerTitle,
  size = "xl",
  children,
}: PropsWithChildren<Props>) => {
  return (
    <ModalWrapper size={size} isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent paddingBottom="15px">
        <ModalHeader>{headerTitle}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>{children}</ModalBody>
      </ModalContent>
    </ModalWrapper>
  );
};
