import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";

type BreadCrumbButtonProps = {
  children: React.ReactNode;
}

const BreadCrumbButton: React.FC<BreadCrumbButtonProps> = ({ children }) => {
  return (
    <Breadcrumb spacing="5px" separator={<ChevronRightIcon color="gray.500" />}>
      <BreadcrumbItem>
        <BreadcrumbLink
          href="/"
          textDecoration="underline"
          color="gray.500"
          textDecorationThickness="1px"
          textUnderlineOffset="2px"
        >
          Home
        </BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem>
        <BreadcrumbLink color="green.500" pointerEvents="none">
          {children}
        </BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
  );
};

export default BreadCrumbButton;