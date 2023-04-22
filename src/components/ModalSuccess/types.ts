import { ModalProps } from "react-native";

export type ModalSuccessProps = {
  text: string;
  subText: string;
  isVisible: boolean;
  onPress: () => void;
  buttonText: string;
} & ModalProps;
