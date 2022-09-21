import {
  Box,
  Button,
  Flex,
  Heading,
  SimpleGrid,
  Stack,
  Text,
  chakra,
  FormControl,
  FormLabel,
  Input,
  HStack,
  Img,
  useToast,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import { ImQuotesLeft } from "react-icons/im";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../actions/userActions";
import { useRouter } from "next/router";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const toast = useToast();
  const router = useRouter();

  const userLogin = useSelector((state) => state.userLogin);
  const { error, loading, userInfo, success } = userLogin;

  useEffect(() => {
    if (userInfo) {
      router.push("/login");
    }
    if (success) {
      toast({
        title: "Success",
        position: "top",
        description: "You logged in successfully.",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
      setTimeout(() => {
        router.push("/thank-you");
      }, 1000);
    }
  }, [userInfo, success]);
  const handleSubmit = () => {
    dispatch(login(email, password));
    console.log("login");
  };
  return (
    <Box
      minH="100vh"
      bg={{
        md: mode("gray.100", "inherit"),
      }}
    >
      <Box
        maxW="6xl"
        mx="auto"
        py={{
          base: "10",
          md: "20",
        }}
        px={{
          base: "4",
          md: "10",
        }}
      >
        <SimpleGrid
          columns={{
            base: 1,
            lg: 2,
          }}
          spacing="14"
        >
          <Box w="full" maxW="xl" mx="auto">
            <Box
              bg={{
                md: mode("white", "gray.700"),
              }}
              rounded={{
                md: "2xl",
              }}
              p={{
                base: "4",
                md: "12",
              }}
              borderWidth={{
                md: "1px",
              }}
              borderColor={mode("gray.200", "transparent")}
              shadow={{
                md: "lg",
              }}
            >
              <Box
                mb="8"
                textAlign={{
                  base: "center",
                  md: "start",
                }}
              >
                <Heading size="lg" mb="2" fontWeight="extrabold">
                  Welcome to Bookspace
                </Heading>
                <Text
                  fontSize="lg"
                  color={mode("gray.600", "gray.400")}
                  fontWeight="medium"
                >
                  Enter your info to get started
                </Text>
              </Box>

              <Stack spacing="4">
                <FormControl id="email">
                  <FormLabel mb={1}>Email</FormLabel>
                  <Input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    autoComplete="email"
                  />
                </FormControl>
                <FormControl>
                  <Flex align="baseline" justify="space-between">
                    <FormLabel mb={1}>Password</FormLabel>
                    <Box
                      as="a"
                      href="#"
                      fontWeight="semibold"
                      fontSize="sm"
                      color={mode("black", "orange")}
                    >
                      Forgot Password?
                    </Box>
                  </Flex>
                  <Input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    autoComplete="current-password"
                  />
                </FormControl>
                <Button
                  bg={mode("black", "orange")}
                  color={mode("white", "black")}
                  isLoading={loading}
                  onClick={handleSubmit}
                  _hover={{
                    bg: mode("black.800", "orange"),
                  }}
                >
                  Sign In
                </Button>
              </Stack>
            </Box>
          </Box>

          <Flex
            direction="column"
            py="24"
            display={{
              base: "none",
              lg: "flex",
            }}
          >
            <Flex as="blockquote" flex="1">
              <Box marginEnd="4" fontSize="32px" color="gray.300">
                <ImQuotesLeft />
              </Box>
              <Box>
                <Text fontSize="2xl" mt="4">
                  Lorem dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut
                  enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </Text>
                <HStack spacing="4" mt="8">
                  <Img
                    w="12"
                    h="12"
                    alt="Kunle Panther"
                    rounded="full"
                    objectFit="cover"
                    src="https://images.unsplash.com/photo-1547037579-f0fc020ac3be?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8YWZyaWNhJTIwbWFuJTIwc21pbGluZ3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"
                  />
                  <Box>
                    <Text as="cite" fontStyle="normal" fontWeight="medium">
                      Kunle Panther
                    </Text>
                    <Text color={mode("gray.600", "gray.400")}>
                      VP, Product and Engineering @ Wakanda
                    </Text>
                  </Box>
                </HStack>
              </Box>
            </Flex>
            <SimpleGrid
              columns={3}
              spacing="10"
              paddingStart="12"
              alignItems="center"
              color="gray.400"
            >
              <Box>
                <chakra.svg viewBox="0 0 103 21" fill="none">
                  <path
                    d="M.324 21V0H12v2.324H5v7h4.676v2.352H5V21H.324zM19 21V0h4.648v21H19zM30.648 21V0h1.092l12.908 11.676V0H47v21h-1.064L33 9.324V21h-2.352zM51.648 21V0h1.092l12.908 11.676V0H68v21h-1.064L54 9.324V21h-2.352zM75 21V0h4.648v21H75zM86.648 21V0h4.676v8.568L98.884 0H103l-9.352 10.5L103 21h-4.676l-7-8.176V21h-4.676z"
                    fill="currentcolor"
                  />
                </chakra.svg>
              </Box>
              <Box>
                <chakra.svg viewBox="0 0 164 22" fill="none">
                  <path
                    d="M34.05 20l-2.3-17.5h3.275l1.7 15.2h.45l2.2-15.2h5.7l2.2 15.2h.45l1.7-15.2H52.7L50.4 20h-5.7L42.45 4.45H42L39.75 20h-5.7zM60.215 20.35c-1.234 0-2.342-.25-3.326-.75a5.624 5.624 0 01-2.325-2.175c-.566-.95-.85-2.092-.85-3.425v-.4c0-1.333.284-2.475.85-3.425A5.624 5.624 0 0156.89 8c.984-.5 2.092-.75 3.325-.75 1.234 0 2.342.25 3.325.75a5.625 5.625 0 012.326 2.175c.566.95.85 2.092.85 3.425v.4c0 1.333-.284 2.475-.85 3.425A5.625 5.625 0 0163.54 19.6c-.984.5-2.092.75-3.325.75zm0-2.8c.966 0 1.766-.308 2.4-.925.633-.633.95-1.533.95-2.7v-.25c0-1.167-.317-2.058-.95-2.675-.617-.633-1.417-.95-2.4-.95-.967 0-1.767.317-2.4.95-.634.617-.95 1.508-.95 2.675v.25c0 1.167.316 2.067.95 2.7.633.617 1.433.925 2.4.925zM68.872 20V7.6h3.1V9h.45c.183-.5.483-.867.9-1.1.433-.233.933-.35 1.5-.35h1.5v2.8h-1.55c-.8 0-1.458.217-1.975.65-.517.417-.775 1.067-.775 1.95V20h-3.15zM78.034 20V2.5h3.15v9.675h.45l4.1-4.575h4.1l-5.725 6 5.925 6.4h-4.05l-4.35-4.925h-.45V20h-3.15zM102.968 20.35c-1.35 0-2.542-.242-3.575-.725-1.033-.483-1.841-1.175-2.425-2.075-.583-.9-.875-1.983-.875-3.25v-.7h3.25v.7c0 1.05.325 1.842.975 2.375.65.517 1.533.775 2.65.775 1.133 0 1.975-.225 2.525-.675.567-.45.85-1.025.85-1.725 0-.483-.141-.875-.425-1.175-.266-.3-.667-.542-1.2-.725-.517-.2-1.15-.383-1.9-.55l-.575-.125c-1.2-.267-2.233-.6-3.1-1-.85-.417-1.508-.958-1.975-1.625-.45-.667-.675-1.533-.675-2.6 0-1.067.25-1.975.75-2.725.517-.767 1.234-1.35 2.15-1.75.933-.417 2.025-.625 3.275-.625s2.358.217 3.325.65c.983.417 1.75 1.05 2.3 1.9.567.833.85 1.883.85 3.15v.75h-3.25v-.75c0-.667-.133-1.2-.4-1.6a2.113 2.113 0 00-1.1-.9c-.483-.2-1.058-.3-1.725-.3-1 0-1.742.192-2.225.575-.466.367-.7.875-.7 1.525 0 .433.109.8.325 1.1.233.3.575.55 1.025.75.45.2 1.025.375 1.725.525l.575.125c1.25.267 2.333.608 3.25 1.025.933.417 1.659.967 2.175 1.65.517.683.775 1.558.775 2.625s-.275 2.008-.825 2.825c-.533.8-1.3 1.433-2.3 1.9-.983.45-2.15.675-3.5.675zM117.229 20.35c-1.2 0-2.291-.25-3.275-.75a5.67 5.67 0 01-2.3-2.175c-.566-.95-.85-2.1-.85-3.45v-.35c0-1.35.284-2.5.85-3.45a5.67 5.67 0 012.3-2.175c.984-.5 2.075-.75 3.275-.75 1.184 0 2.2.208 3.05.625.85.417 1.534.992 2.05 1.725a5.757 5.757 0 011.05 2.45l-3.05.65c-.066-.5-.216-.95-.45-1.35a2.494 2.494 0 00-1-.95c-.416-.233-.941-.35-1.575-.35a3.53 3.53 0 00-1.725.425c-.5.267-.9.675-1.2 1.225-.283.533-.425 1.192-.425 1.975v.25c0 .783.142 1.45.425 2 .3.533.7.942 1.2 1.225.517.267 1.092.4 1.725.4.95 0 1.667-.242 2.15-.725.5-.5.817-1.15.95-1.95l3.05.725a6.841 6.841 0 01-1.125 2.425c-.516.717-1.2 1.283-2.05 1.7-.85.417-1.866.625-3.05.625zM131.203 20.35c-1.234 0-2.342-.25-3.325-.75a5.616 5.616 0 01-2.325-2.175c-.567-.95-.85-2.092-.85-3.425v-.4c0-1.333.283-2.475.85-3.425A5.616 5.616 0 01127.878 8c.983-.5 2.091-.75 3.325-.75 1.233 0 2.341.25 3.325.75a5.628 5.628 0 012.325 2.175c.566.95.85 2.092.85 3.425v.4c0 1.333-.284 2.475-.85 3.425a5.628 5.628 0 01-2.325 2.175c-.984.5-2.092.75-3.325.75zm0-2.8c.966 0 1.766-.308 2.4-.925.633-.633.95-1.533.95-2.7v-.25c0-1.167-.317-2.058-.95-2.675-.617-.633-1.417-.95-2.4-.95-.967 0-1.767.317-2.4.95-.634.617-.95 1.508-.95 2.675v.25c0 1.167.316 2.067.95 2.7.633.617 1.433.925 2.4.925zM144.585 20.2c-.966 0-1.816-.217-2.55-.65a4.619 4.619 0 01-1.675-1.85c-.4-.783-.6-1.683-.6-2.7V7.6h3.15v7.15c0 .933.225 1.633.675 2.1.467.467 1.125.7 1.975.7.967 0 1.717-.317 2.25-.95.534-.65.8-1.55.8-2.7V7.6h3.15V20h-3.1v-1.625h-.45c-.2.417-.575.825-1.125 1.225-.55.4-1.383.6-2.5.6zM159.266 20c-.817 0-1.484-.25-2-.75-.5-.517-.75-1.2-.75-2.05v-7h-3.1V7.6h3.1V3.75h3.15V7.6h3.4v2.6h-3.4v6.45c0 .5.233.75.7.75h2.4V20h-3.5z"
                    fill="currentcolor"
                  />
                  <path
                    d="M3 0h19l-3 6H0l3-6zM3 8h19l-3 6H0l3-6zM3 16h19l-3 6H0l3-6z"
                    fill="currentcolor"
                  />
                </chakra.svg>
              </Box>
              <Box>
                <chakra.svg viewBox="0 0 152 27" fill="none">
                  <path
                    d="M45.328 16.326c0 .765-.138 1.432-.415 2.002a4.413 4.413 0 01-1.062 1.403 4.4 4.4 0 01-1.428.818c-.521.188-1.022.281-1.502.281a5.297 5.297 0 01-2.331-.55c-.757-.357-1.437-.919-2.039-1.684-.594-.773-1.074-1.762-1.44-2.966-.358-1.213-.537-2.665-.537-4.358 0-1.131.085-2.14.256-3.027.18-.887.415-1.669.708-2.344.301-.676.651-1.25 1.05-1.721.407-.48.842-.867 1.306-1.16.464-.301.944-.52 1.44-.66a5.44 5.44 0 011.465-.207c.725 0 1.347.102 1.868.305.529.204.964.464 1.306.782a3.044 3.044 0 01.842 3.222 2.248 2.248 0 01-.402.745c-.171.203-.375.358-.61.464a1.829 1.829 0 01-.758.159 2.02 2.02 0 01-1.294-.476 1.87 1.87 0 01-.439-.562 1.805 1.805 0 01-.159-.769c.008-.163.029-.334.061-.513.033-.154.082-.321.147-.5.073-.187.179-.375.317-.562a1.522 1.522 0 00-.39-.268 1.994 1.994 0 00-.379-.159 3.697 3.697 0 00-.415-.073 1.31 1.31 0 00-.842.293c-.244.195-.456.468-.635.818-.179.341-.33.748-.452 1.22s-.22.985-.292 1.538a27.452 27.452 0 00-.147 1.746 33.872 33.872 0 00-.049 1.831c0 .928.049 1.843.147 2.747.105.895.272 1.7.5 2.417.236.708.545 1.281.928 1.72.39.432.867.648 1.428.648a2.01 2.01 0 00.928-.293c.122-.073.24-.163.354-.269.114-.114.215-.252.305-.415a2.38 2.38 0 00.232-.586c.065-.22.106-.476.122-.769a1.241 1.241 0 01-.476.086c-.195 0-.387-.041-.574-.122a1.871 1.871 0 01-.488-.354 1.865 1.865 0 01-.354-.538 1.768 1.768 0 01-.134-.695c0-.383.085-.696.256-.94.179-.253.383-.452.61-.598.228-.147.452-.249.672-.306.22-.065.374-.097.464-.097.065 0 .166.012.305.036a1.7 1.7 0 01.464.135c.179.073.358.183.537.33.187.138.354.329.5.573.155.244.281.55.379.916.097.358.146.793.146 1.306zM50.174 1.42a464.526 464.526 0 00-.183 3.15 195.61 195.61 0 00-.147 3.15c.285-.537.602-.952.952-1.245.35-.301.68-.521.99-.66.357-.162.72-.26 1.086-.293.586 0 1.086.143 1.501.428.415.285.757.691 1.025 1.22.269.53.464 1.168.586 1.917.122.74.183 1.57.183 2.49 0 1.538-.052 3.027-.158 4.468a25.628 25.628 0 01-.635 4.2l-2.856-.343c.187-.968.33-1.871.427-2.71.106-.838.183-1.57.232-2.197.057-.732.09-1.404.097-2.014 0-.773-.012-1.444-.036-2.014-.017-.578-.073-1.054-.171-1.428-.09-.383-.232-.668-.427-.855-.196-.187-.468-.28-.818-.28-.269.04-.533.203-.794.488a2.865 2.865 0 00-.341.463c-.114.188-.232.42-.354.696a8.511 8.511 0 00-.33.952c-.106.367-.2.79-.28 1.27-.025.83-.041 1.656-.05 2.478V18.755c0 .52.008 1.038.025 1.55l-2.771-.06c.09-1.49.154-2.98.195-4.469a142.205 142.205 0 00-.012-9.448 171.21 171.21 0 00-.244-4.956l3.308.049zM64.065 20.5a21.64 21.64 0 01-.134-.769 12.1 12.1 0 01-.098-.805c-.374.553-.822.976-1.343 1.27-.52.3-1.09.451-1.709.451-.317 0-.643-.053-.976-.159a2.314 2.314 0 01-.916-.525c-.268-.252-.492-.594-.671-1.025-.171-.44-.257-.993-.257-1.66 0-.554.082-1.034.245-1.44.162-.416.374-.778.634-1.087.26-.31.554-.578.88-.806.325-.228.646-.431.964-.61.325-.18.634-.346.927-.5a4.25 4.25 0 00.72-.464 6.12 6.12 0 00.928-.904c.269-.325.484-.663.647-1.013-.032-.561-.093-1.021-.183-1.38-.081-.365-.191-.654-.33-.866-.138-.22-.309-.37-.512-.452a1.595 1.595 0 00-.672-.134c-.374 0-.691.081-.952.244-.252.163-.46.358-.622.586.203.13.358.269.464.415.114.147.199.29.256.427.065.155.102.314.11.477 0 .553-.159.976-.476 1.269-.31.293-.708.44-1.197.44-.252 0-.484-.058-.695-.171a1.916 1.916 0 01-.562-.5 2.52 2.52 0 01-.366-.758 3.245 3.245 0 01-.134-.952c0-.342.077-.704.232-1.086.154-.383.402-.737.744-1.062.342-.334.781-.607 1.319-.818.537-.22 1.188-.33 1.953-.33.765 0 1.42.15 1.965.452.545.293.993.688 1.343 1.184a4.81 4.81 0 01.757 1.697c.162.643.244 1.306.244 1.99 0 .512-.004 1.07-.012 1.672-.008.602-.013 1.22-.013 1.855 0 .53.005 1.058.013 1.587.008.53.024 1.042.048 1.538.025.489.057.953.098 1.392.04.431.094.818.159 1.16l-2.82.17zm-.183-7.153c-.285.342-.59.635-.916.88-.244.17-.508.361-.793.573a8.905 8.905 0 00-.781.671 4.21 4.21 0 00-.599.745 1.475 1.475 0 00-.231.781c0 .366.089.68.268.94.18.26.431.39.757.39.301 0 .57-.08.806-.244a2.71 2.71 0 00.622-.598c.187-.244.342-.504.464-.78a6.42 6.42 0 00.305-.758l.098-2.6zM73.22 1.445a90.184 90.184 0 00-.159 2.478l-.122 2.43a47.89 47.89 0 011.062-.037c.35-.016.708-.037 1.074-.061l.049 3.125c-.39-.065-.777-.118-1.16-.159a28.61 28.61 0 00-1.123-.097 88.18 88.18 0 00-.048 2.05v2.051c0 1.237.012 2.466.036 3.687.033 1.22.082 2.45.147 3.686l-3.186-.049c.105-1.912.19-3.82.256-5.725.073-1.912.122-3.837.146-5.774-.341.017-.683.037-1.025.061a51.33 51.33 0 00-1.05.061l.098-2.893c.334.025.663.045.989.061.333.008.663.02.988.037 0-.814-.008-1.624-.024-2.43l-.049-2.453 3.1-.049zM95.948 20.305l-3.357.244c.074-1.074.13-2.059.171-2.954.049-.895.082-1.672.098-2.331.024-.765.037-1.461.037-2.088 0-.293-.005-.622-.013-.989-.008-.309-.02-.679-.036-1.11a51.738 51.738 0 00-.05-1.429c-.21.985-.398 1.836-.56 2.552-.155.708-.281 1.294-.38 1.758-.121.545-.219 1-.292 1.367-.114.496-.216.992-.305 1.489a35.96 35.96 0 00-.232 1.355c-.073.48-.126.915-.159 1.306l-3.125-.024c-.17-1.058-.346-2.071-.525-3.04-.17-.976-.35-1.916-.537-2.82a88.074 88.074 0 00-.561-2.649 84.136 84.136 0 00-.599-2.563c-.04.814-.069 1.55-.085 2.21a66.673 66.673 0 00.085 5.64c.074 1.236.171 2.46.293 3.673l-3.6.098c.056-.586.105-1.217.146-1.892.04-.684.073-1.371.098-2.063.032-.7.056-1.384.073-2.05.016-.676.028-1.307.036-1.893.008-.586.013-1.107.013-1.562a63.033 63.033 0 000-2.625c0-.586-.009-1.184-.025-1.794-.008-.619-.02-1.221-.037-1.807a37.786 37.786 0 00-.073-1.587c.39.016.761.029 1.111.037.35.008.68.012.989.012.79 0 1.404-.012 1.843-.037.26-.008.488-.02.684-.036.114 1.033.236 2.042.366 3.027a97.246 97.246 0 00.977 5.688c.195.92.402 1.84.622 2.76.293-1.034.574-2.048.842-3.04.269-.993.513-1.974.733-2.942.22-.969.41-1.929.573-2.881.163-.952.29-1.9.379-2.844.301.016.582.028.842.036a23.505 23.505 0 001.904-.012c.326-.016.595-.037.806-.06.244-.025.444-.054.598-.086-.065.854-.118 1.7-.158 2.539-.041.838-.074 1.635-.098 2.392-.016.757-.028 1.453-.037 2.088v2.417a199.141 199.141 0 00.183 4.846c.041.635.09 1.265.147 1.892.057.627.122 1.22.195 1.782zM102.43 20.696c-.806 0-1.502-.175-2.088-.525a4.283 4.283 0 01-1.44-1.465c-.374-.627-.651-1.371-.83-2.234a13.88 13.88 0 01-.269-2.82c0-1.18.106-2.262.318-3.247.211-.984.52-1.83.927-2.539.415-.708.924-1.257 1.526-1.648.611-.399 1.31-.598 2.1-.598.797 0 1.485.167 2.063.5a4.057 4.057 0 011.428 1.404c.383.603.663 1.323.842 2.161.179.838.269 1.762.269 2.771 0 .52-.033 1.087-.098 1.697-.057.61-.158 1.22-.305 1.83-.138.611-.325 1.201-.561 1.77a6.11 6.11 0 01-.892 1.502 4.09 4.09 0 01-1.281 1.05c-.489.26-1.058.39-1.709.39zm1.904-9.143c0-.619-.028-1.172-.085-1.66a5.258 5.258 0 00-.281-1.258c-.122-.342-.281-.602-.476-.781a.93.93 0 00-.684-.28c-.293 0-.565.154-.818.463-.252.31-.476.757-.671 1.343-.187.586-.338 1.302-.452 2.148a22.855 22.855 0 00-.159 2.845c0 .683.033 1.298.098 1.843.065.537.163.997.293 1.38.13.374.289.663.476.866a.938.938 0 00.684.293c.26 0 .492-.106.696-.317.203-.22.378-.513.524-.88.155-.366.285-.789.391-1.269.114-.488.204-.997.269-1.526.065-.537.114-1.082.146-1.636.033-.553.049-1.078.049-1.574zM112.378 6.475l-.073 1c.268-.447.553-.789.854-1.025.309-.236.594-.403.855-.5.26-.098.476-.15.647-.159a17.1 17.1 0 01.293-.012c.602 0 1.127.138 1.574.415.448.277.818.68 1.111 1.208.293.521.509 1.16.647 1.917.147.748.22 1.599.22 2.551 0 .7-.012 1.416-.037 2.149a32.28 32.28 0 01-.122 2.172 28.41 28.41 0 01-.244 2.1 15.668 15.668 0 01-.403 1.953l-2.844-.342a41.73 41.73 0 00.439-2.71c.106-.838.184-1.57.232-2.197.057-.732.09-1.404.098-2.014 0-.773-.024-1.444-.073-2.014-.049-.578-.139-1.054-.269-1.428-.122-.383-.293-.668-.512-.855-.22-.187-.501-.28-.843-.28-.228.048-.456.21-.683.488-.196.236-.403.614-.623 1.135-.22.513-.411 1.237-.574 2.173-.024.635-.04 1.265-.048 1.892v3.894c0 .683.008 1.456.024 2.32l-2.771-.062c.024-.83.041-1.709.049-2.637.016-.935.024-1.973.024-3.112a252.333 252.333 0 00-.122-8.069l3.174.049zM123.791 1.47a302.913 302.913 0 00-.354 6.128c-.033.87-.057 1.705-.073 2.502-.017.798-.025 1.607-.025 2.43.391-.432.753-.892 1.087-1.38.333-.497.635-1.005.903-1.526.277-.529.517-1.066.72-1.611a16.74 16.74 0 00.537-1.612l3.309.293c-.375.79-.745 1.49-1.111 2.1-.367.61-.721 1.147-1.062 1.611-.334.456-.647.843-.94 1.16-.285.317-.541.578-.769.781.341.114.639.248.891.403.252.155.46.301.622.44.196.162.358.333.489.512.154.252.276.541.366.867.098.317.179.655.244 1.013.073.358.142.733.208 1.123.073.383.162.77.268 1.16.106.39.244.777.415 1.16.171.374.395.732.672 1.074h-3.248a10.245 10.245 0 01-.402-1.258 31.954 31.954 0 01-.245-1.147c-.073-.399-.126-.79-.158-1.172a4.003 4.003 0 00-.427-1.33 2.445 2.445 0 00-.342-.489 2.009 2.009 0 00-.476-.427 2.119 2.119 0 00-.623-.305 2.463 2.463 0 00-.806-.122h-.122c0 .92.004 1.9.013 2.942.016 1.041.044 2.213.085 3.515l-3.027-.06c.073-1.148.138-2.194.195-3.138.057-.944.102-1.827.134-2.649.041-.83.069-1.62.086-2.368.024-.749.036-1.506.036-2.27 0-.578-.004-1.173-.012-1.783a80.733 80.733 0 00-.049-1.94c-.016-.684-.04-1.409-.073-2.174-.033-.773-.069-1.607-.11-2.502l3.174.049zM140.014 17.375c0 .48-.11.932-.33 1.355-.22.424-.517.79-.891 1.1-.374.308-.814.553-1.318.732a4.786 4.786 0 01-1.612.268c-.382 0-.769-.053-1.159-.159a3.703 3.703 0 01-1.123-.524 4.672 4.672 0 01-1.014-.965 5.965 5.965 0 01-.83-1.465 10.64 10.64 0 01-.549-2.026c-.13-.781-.195-1.677-.195-2.686 0-.952.065-1.794.195-2.527a9.589 9.589 0 01.549-1.916 5.487 5.487 0 01.818-1.367c.309-.375.639-.676.989-.904a3.679 3.679 0 011.099-.5 4.521 4.521 0 012.673.122c.488.171.915.427 1.282.77.366.34.655.764.866 1.269.22.496.33 1.07.33 1.72 0 .587-.122 1.18-.366 1.783a5.84 5.84 0 01-1.062 1.697 8.123 8.123 0 01-1.758 1.453c-.692.43-1.489.773-2.393 1.025.049.504.118.964.208 1.38.098.414.216.768.354 1.061.146.293.313.521.5.684.196.163.419.244.672.244.162-.008.317-.037.464-.085.13-.041.26-.106.39-.196.139-.09.253-.22.342-.39a1.226 1.226 0 01-.488-.379 2.107 2.107 0 01-.257-.44 1.56 1.56 0 01-.109-.512c0-.39.077-.708.231-.952a1.86 1.86 0 01.55-.574 1.95 1.95 0 01.647-.28 2.21 2.21 0 01.525-.086c.138 0 .305.028.5.085.204.057.399.167.586.33.187.163.346.395.476.696.138.293.208.68.208 1.16zm-3.015-7.678c0-.293-.029-.57-.086-.83a2.33 2.33 0 00-.232-.696 1.275 1.275 0 00-.378-.463.779.779 0 00-.513-.184c-.334 0-.606.155-.818.464-.211.301-.382.704-.513 1.209-.13.504-.219 1.086-.268 1.745-.049.66-.073 1.347-.073 2.063v.891a6.2 6.2 0 001.147-.78c.358-.302.663-.631.916-.99a4.52 4.52 0 00.598-1.16c.146-.406.22-.83.22-1.269zM151.231 6.829c-.048.48-.089.968-.122 1.464l-.097 1.465-.074 1.429a191.368 191.368 0 00-.158 4.114c-.049.96-.078 1.912-.086 2.856 0 .936-.028 1.827-.085 2.673a15.5 15.5 0 01-.33 2.368c-.154.733-.411 1.363-.769 1.892a3.646 3.646 0 01-1.452 1.258c-.603.3-1.38.451-2.332.451-.716 0-1.29-.105-1.721-.317-.423-.203-.749-.456-.977-.757a2.331 2.331 0 01-.451-.94 4.723 4.723 0 01-.098-.891c0-.277.041-.537.122-.781.09-.236.212-.444.366-.623a1.72 1.72 0 01.562-.427c.228-.106.484-.159.769-.159.301 0 .57.057.806.171.236.114.431.26.585.44.163.187.285.394.367.622.081.228.122.456.122.684-.008.13-.037.264-.086.403-.04.114-.114.24-.219.378a1.86 1.86 0 01-.415.427c.097.041.187.065.268.073.09.017.175.025.256.025.212 0 .432-.065.66-.195.236-.122.451-.318.647-.586.195-.269.358-.607.488-1.014.13-.406.203-.89.22-1.452v-1.795c.008-.585.02-1.233.036-1.94-.276.529-.574.94-.891 1.232a3.997 3.997 0 01-.903.635c-.326.163-.655.26-.989.293-.602 0-1.127-.15-1.575-.451-.447-.302-.818-.729-1.111-1.282-.293-.554-.512-1.217-.659-1.99a15.081 15.081 0 01-.207-2.612c0-2.661.183-5.2.549-7.617l3.101.341c-.065.269-.131.562-.196.88-.057.317-.11.646-.158.988-.049.342-.094.688-.135 1.038-.032.341-.065.671-.097.988-.074.75-.135 1.51-.183 2.283 0 .773.024 1.449.073 2.027.049.57.134 1.045.256 1.428.13.374.305.655.525.842.22.187.501.28.842.28.245-.04.481-.21.708-.512.098-.13.2-.293.306-.488.105-.196.211-.436.317-.72.106-.285.207-.619.305-1.001.098-.391.187-.843.269-1.355.024-.635.04-1.213.049-1.734.016-.529.024-1.033.024-1.514 0-.577-.012-1.13-.037-1.66a43.627 43.627 0 00-.11-1.684l3.125.049z"
                    fill="currentcolor"
                  />
                  <path
                    d="M22 0H2a2 2 0 00-2 2v14a2 2 0 002 2h3v6l8-6h9a2 2 0 002-2V2a2 2 0 00-2-2zM12 13v-3H5V8h7V5l6 4-6 4z"
                    fill="currentcolor"
                  />
                </chakra.svg>
              </Box>
            </SimpleGrid>
          </Flex>
        </SimpleGrid>
      </Box>
    </Box>
  );
}

export default Login;
