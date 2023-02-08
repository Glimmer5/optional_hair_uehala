import { AspectRatio, Card, CardBody } from "@chakra-ui/react";

type Iframe = {
  title: string;
  src: string;
}

const Iframe: React.FC<Iframe> = ({ title, src }) => {
  return (
    <Card>
      <CardBody>
        <AspectRatio ratio={4 / 3}>
          <iframe
            title={title}
            src={src}
          />
        </AspectRatio>
      </CardBody>
    </Card>
  );
};

export default Iframe;
