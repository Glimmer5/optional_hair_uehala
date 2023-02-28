import NextLink from 'next/link';
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  MenuDivider,
  Text,
  Link
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { IoLogoFacebook } from "react-icons/io5";
import { IoLogoInstagram } from "react-icons/io5";

const HamburgerMenuButton: React.FC = () => {
  return (
    <Menu isLazy>
      <MenuButton
        as={IconButton}
        icon={<HamburgerIcon />}
        variant="outline"
        area-label="Options"
      />
      <MenuList>
        <MenuItem>About</MenuItem>
        <MenuItem as={NextLink} href="/menu">Menu</MenuItem>
        <MenuItem as={NextLink} href="/staff">Staff</MenuItem>
        <MenuItem as={NextLink} href="/access">Access</MenuItem>
        <MenuDivider />
        <MenuItem as={Link} href="https://ja-jp.facebook.com/people/Optional-Hair-Uehala/100057615032399/">
          <IoLogoFacebook />
          <Text ml={1}>Facebook</Text>
        </MenuItem>
        <MenuItem as={Link} href="https://www.instagram.com/optional_hair_uehala/">
          <IoLogoInstagram />
          <Text ml={1}>Instagram</Text>
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default HamburgerMenuButton;
