import {
  Box,
  Button,
  Flex,
  HStack,
  useDisclosure,
  VisuallyHidden,
  useColorMode,
  useColorModeValue as mode,
  IconButton,
} from "@chakra-ui/react";
import { Logo } from "./Logo";
import { NavLink } from "./NavLink";
import { NavMenu } from "./NavMenu";
import { Submenu } from "./Submenu";
import { ToggleButton } from "./ToggleButton";
import { links } from "./_data";
import { MdOutlineLightMode, MdDarkMode } from "react-icons/md";
import { useSelector } from "react-redux";
import { ArrowForwardIcon } from "@chakra-ui/icons";

const MobileNavContext = (props) => {
  const { isOpen, onToggle } = useDisclosure();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  return (
    <>
      <Flex
        align="center"
        justify="space-between"
        className="nav-content__mobile"
        {...props}
      >
        <Box flexBasis="6rem">
          <ToggleButton isOpen={isOpen} onClick={onToggle} />
        </Box>
        <Box as="a" rel="home" mx="auto">
          <Logo h="24px" iconColor="blue.400" />
        </Box>
        <Box
          visibility={{
            base: "hidden",
            sm: "visible",
          }}
        >
          <Button as="a" colorScheme="blue">
            Get Started
          </Button>
        </Box>
      </Flex>
      <NavMenu animate={isOpen ? "open" : "closed"}>
        {links.map((link, idx) =>
          link.children ? (
            <Submenu.Mobile key={idx} link={link} />
          ) : (
            <NavLink.Mobile key={idx} href={link.href}>
              {link.label}
            </NavLink.Mobile>
          )
        )}
        <Button colorScheme="blue" w="full" size="lg" mt="5">
          Try for free
        </Button>
      </NavMenu>
    </>
  );
};

const DesktopNavContent = (props) => {
  const { colorMode, toggleColorMode } = useColorMode();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  return (
    <Flex
      className="nav-content__desktop"
      align="center"
      justify="space-between"
      {...props}
    >
      <Box as="a" href="#" rel="home">
        <VisuallyHidden>Bookspace</VisuallyHidden>
        <Logo h="6" iconColor="blue.500" />
      </Box>
      <HStack
        as="ul"
        id="nav__primary-menu"
        aria-label="Main Menu"
        listStyleType="none"
      >
        {links.map((link, idx) => (
          <Box as="li" key={idx} id={`nav__menuitem-${idx}`}>
            {link.children ? (
              <Submenu.Desktop link={link} />
            ) : (
              <NavLink.Desktop href={link.href}>{link.label}</NavLink.Desktop>
            )}
          </Box>
        ))}
      </HStack>
      <HStack spacing="8" minW="240px">
        {userInfo ? (
          <Button
            as="a"
            href="/profile"
            colorScheme="blue"
            rightIcon={<ArrowForwardIcon />}
          >
            Account
          </Button>
        ) : (
          <>
            <Box
              as="a"
              href="/login"
              color={mode("blue.600", "blue.300")}
              fontWeight="bold"
            >
              Sign In
            </Box>
            <Button
              as="a"
              href="/register"
              colorScheme="blue"
              fontWeight="bold"
            >
              Sign Up For Free
            </Button>
          </>
        )}
        <IconButton
          onClick={toggleColorMode}
          colorScheme="blue"
          size="md"
          variant="outline"
          icon={colorMode === "light" ? <MdDarkMode /> : <MdOutlineLightMode />}
        />
      </HStack>
    </Flex>
  );
};

export const NavContent = {
  Mobile: MobileNavContext,
  Desktop: DesktopNavContent,
};
