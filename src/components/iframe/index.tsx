import { AspectRatio, Card, CardBody } from "@chakra-ui/react";

type Iframe = {
  children: React.ReactNode;
}

const Iframe: React.FC<Iframe> = ({ children }) => {
  return (
    <Card>
      <CardBody>
        <AspectRatio ratio={4 / 3}>
          {children}
        </AspectRatio>
      </CardBody>
    </Card>
  );
};

export default Iframe;
