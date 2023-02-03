import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";

const BreadCrumbButton: React.FC = () => {
  return (
    <Breadcrumb>
      <BreadcrumbItem>
        <BreadcrumbLink href="/">Home</BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
  );
};

export default BreadCrumbButton;
