import { BoxProps, Stack, StackProps } from "@mui/material";

/** extension of the MUI Stack component for flex rows */
export const HStack = (props: StackProps & BoxProps) => {
  return (
    <Stack direction="row" component={props.component || "div"} {...props}>
      {props.children}
    </Stack>
  );
};

/** extension of the MUI Stack component for flex columns */
export const VStack = (props: StackProps & BoxProps) => {
  return (
    <Stack direction="column" {...props}>
      {props.children}
    </Stack>
  );
};
