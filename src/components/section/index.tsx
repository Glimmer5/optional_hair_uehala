import { motion } from "framer-motion";
import { chakra, shouldForwardProp, ChakraProps } from "@chakra-ui/react";

type SectionProps = {
  children: React.ReactNode;
  delay?: string;
  chakraProps?: ChakraProps;
};

const StyledDiv = chakra(motion.div, {
  shouldForwardProp: (prop) => {
    return shouldForwardProp(prop) || prop === "transition";
  },
});

const Section: React.FC<SectionProps> = ({
  children,
  delay,
  chakraProps,
}) => {
  return (
    <StyledDiv
      {...chakraProps}
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", delay }}
    >
      {children}
    </StyledDiv>
  );
};

export default Section;
