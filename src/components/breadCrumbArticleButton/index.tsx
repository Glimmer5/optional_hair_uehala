import NextLink from "next/link";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";

type BreadCrumbArticleButtonProps = {
  children: React.ReactNode;
};

const BreadCrumbArticleButton: React.FC<BreadCrumbArticleButtonProps> = ({
  children,
}) => {
  return (
    <Breadcrumb spacing="5px" separator={<ChevronRightIcon color="gray.500" />}>
      <BreadcrumbItem>
        <BreadcrumbLink
          as={NextLink}
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
        <BreadcrumbLink
          as={NextLink}
          href="/staff"
          textDecoration="underline"
          color="gray.500"
          textDecorationThickness="1px"
          textUnderlineOffset="2px"
        >
          Staff
        </BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem>
        <BreadcrumbLink color="teal.500" pointerEvents="none" href="">
          {children}
        </BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
  );
};

export default BreadCrumbArticleButton;
