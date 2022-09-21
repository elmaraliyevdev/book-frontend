import {
  Avatar,
  Box,
  Flex,
  Heading,
  Stack,
  HStack,
  Button,
  Text,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import {
  BsFillBookmarksFill,
  BsFillInboxFill,
  BsPencilSquare,
  BsSearch,
} from "react-icons/bs";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserDetails, logout } from "../actions/userActions";
import { SideBarLink } from "../components/SideBarLink";
import { UseMobileMenuState } from "../components/UseMobileMenuState";
import { MobileMenuButton } from "../components/MobileMenuButton";
import { useRouter } from "next/router";

function Profile() {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const userDetails = useSelector((state) => state.userDetails);
  const { error, loading, success, user } = userDetails;

  const { isOpen, toggle } = UseMobileMenuState();
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    if (!userInfo) {
      router.push("/login");
    } else {
      if (Object.keys(user) == 0) {
        dispatch(getUserDetails(userInfo.id));
      }
    }
  }, [userInfo, user, success, loading, error]);

  const logoutHandler = () => {
    dispatch(logout());
  };

  if (loading) {
    return <Text>Loading...</Text>;
  } else {
    return (
      <Flex
        height="100vh"
        bg={mode("blue.700", "gray.800")}
        overflow="hidden"
        sx={{
          "--sidebar-width": "16rem",
        }}
      >
        <Box
          as="nav"
          display="block"
          flex="1"
          width="var(--sidebar-width)"
          left="0"
          py="5"
          px="3"
          color="gray.200"
          position="fixed"
        >
          <Box fontSize="sm" lineHeight="tall">
            <Box p="3" display="block" whiteSpace="nowrap">
              <HStack display="inline-flex">
                <Avatar
                  size="sm"
                  name={`${user.first_name} ${user.last_name}`}
                />
                <Box lineHeight="1">
                  <Text fontWeight="semibold">
                    {user.first_name} {user.last_name}
                  </Text>
                  <Text
                    fontSize="xs"
                    mt="1"
                    color={mode("whiteAlpha.700", "gray.400")}
                  >
                    {user.email}
                  </Text>
                </Box>
              </HStack>
            </Box>
            <Box
              overflowY="auto"
              height="80vh"
              minH="px"
              maxH="full"
              sx={{
                "&::-webkit-scrollbar-track": {
                  bg: "transparent",
                },
                "&::-webkit-scrollbar": {
                  width: "4px",
                },
                "&::-webkit-scrollbar-thumb": {
                  bg: mode("blue.600", "gray.700"),
                  borderRadius: "20px",
                },
              }}
            >
              <SideBarLink
                display={{
                  base: "block",
                  lg: "none",
                }}
                mb="2"
                icon={<BsSearch />}
              >
                Search
              </SideBarLink>
              <Stack pb="6">
                <SideBarLink icon={<BsFillInboxFill />}>Inbox</SideBarLink>
                <SideBarLink icon={<BsFillBookmarksFill />}>
                  Bookmarks
                </SideBarLink>
                <SideBarLink icon={<BsPencilSquare />}>Drafts</SideBarLink>
                <SideBarLink onClick={logoutHandler} icon={<BsPencilSquare />}>
                  Logout
                </SideBarLink>
              </Stack>
              <Stack pb="6">
                <Text
                  casing="uppercase"
                  fontSize="xs"
                  fontWeight="semibold"
                  letterSpacing="wide"
                  paddingStart="3"
                  color="gray.400"
                >
                  Chats
                </Text>

                <SideBarLink>🎉 Inbox</SideBarLink>
                <SideBarLink>👍 Personal</SideBarLink>
                <SideBarLink>🦋 Work</SideBarLink>
                <Button colorScheme="blue" onClick={logoutHandler}>
                  Logout
                </Button>
              </Stack>
            </Box>
          </Box>
        </Box>
        <Box
          flex="1"
          p={{
            base: "0",
            md: "6",
          }}
          marginStart={{
            md: "var(--sidebar-width)",
          }}
          position="relative"
          left={isOpen ? "var(--sidebar-width)" : "0"}
          transition="left 0.2s"
        >
          <Box
            maxW="2560px"
            bg={mode("white", "gray.700")}
            height="100%"
            pb="6"
            rounded={{
              md: "lg",
            }}
          >
            <Flex direction="column" height="full">
              <Flex
                w="full"
                py="4"
                justify="space-between"
                align="center"
                px="10"
              >
                <Flex align="center" minH="8">
                  <MobileMenuButton onClick={toggle} isOpen={isOpen} />
                </Flex>
              </Flex>
              <Flex direction="column" flex="1" overflow="auto" px="10" pt="8">
                <Heading size="md" fontWeight="extrabold" mb="6">
                  Product Vision
                </Heading>
                <Box
                  flex="1"
                  borderWidth="3px"
                  borderStyle="dashed"
                  rounded="xl"
                />
              </Flex>
            </Flex>
          </Box>
        </Box>
      </Flex>
    );
  }
}

export default Profile;
