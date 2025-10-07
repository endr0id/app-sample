import { cva } from "../../../../styled-system/css";

export const buttonRecipe = cva({
  base: {
    borderRadius: "md",
    color: "white",
    backgroundColor: "blue.500",
    fontSize: "0.75em",
    fontWeight: "semibold",
    _hover: {
      backgroundColor: "blue.600",
    },
    _active: {
      backgroundColor: "blue.700",
    },
    _disabled: {
      color: "gray.300",
      backgroundColor: "gray.400",
      _hover: {
        backgroundColor: "gray.400",
      },
      _active: {
        backgroundColor: "gray.400",
      },
    },
  },
  variants: {
    size: {
      small: {
        paddingX: "3",
        paddingY: "1.5",
        fontSize: "xs",
      },
      medium: {
        paddingX: "4",
        paddingY: "2",
        fontSize: "sm",
      },
      large: {
        paddingX: "5",
        paddingY: "2.5",
        fontSize: "md",
      },
    },
  },
  defaultVariants: {
    size: "medium",
  },
});
