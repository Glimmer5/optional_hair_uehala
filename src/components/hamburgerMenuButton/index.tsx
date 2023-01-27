import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  MenuDivider,
  Text,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { IoLogoFacebook } from "react-icons/io5";
import { IoLogoInstagram } from "react-icons/io5";

const HamburgerMenuButton: React.FC = () => {
  return (
    <Menu>
      <MenuButton
        as={IconButton}
        icon={<HamburgerIcon />}
        variant="outline"
        area-label="Options"
      />
      <MenuList>
        <MenuItem>About</MenuItem>
        <MenuItem>Menu</MenuItem>
        <MenuItem>Staff</MenuItem>
        <MenuItem>Access</MenuItem>
        <MenuDivider />
        <MenuItem>
          <IoLogoFacebook />
          <Text ml={1}>Facebook</Text>
        </MenuItem>
        <MenuItem>
          <IoLogoInstagram />
          <Text ml={1}>Instagram</Text>
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default HamburgerMenuButton;
