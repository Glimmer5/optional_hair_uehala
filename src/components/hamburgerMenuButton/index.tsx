import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

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
        <MenuItem>コンセプト</MenuItem>
        <MenuItem>メニュー</MenuItem>
        <MenuItem>スタッフ</MenuItem>
        <MenuItem>お店の情報</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default HamburgerMenuButton;
