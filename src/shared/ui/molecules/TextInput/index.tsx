import { Input, InputProps } from "@chakra-ui/input";
import { FormControl, FormLabel } from "@chakra-ui/react";
import { UseFormRegisterReturn } from "react-hook-form";

interface Props extends UseFormRegisterReturn {
  label?: string;
  errors?: string[];
}

export const TextInput = ({ label, errors, ...props }: Props & InputProps) => {
  return (
    <FormControl>
      <FormLabel>{label}</FormLabel>
      <Input {...props} />
      {/*<Text>{}</Text>*/}
    </FormControl>
  );
};
