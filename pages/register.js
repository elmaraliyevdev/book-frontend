import {
  Stack,
  FormControl,
  FormLabel,
  Input,
  Text,
  useColorModeValue,
  Heading,
  Box,
  StackDivider,
  HStack,
  Select,
  Button,
  IconButton,
  InputGroup,
  InputRightElement,
  useToast,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../actions/userActions";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import countries from "../countries.json";

function Register() {
  const [show, setShow] = useState(false);
  const [showRepeat, setShowRepeat] = useState(false);

  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const dispatch = useDispatch();
  const toast = useToast();
  const router = useRouter();

  const userRegister = useSelector((state) => state.userRegister);
  const { error, loading, success, userInfo } = userRegister;

  useEffect(() => {
    if (userInfo) {
      router.push("/deposit");
    }
    if (success) {
      toast({
        title: "Success",
        position: "top",
        description: "You successfully registered.",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
      setTimeout(() => {
        router.push("/thank-you");
      }, 1000);
    }
  }, [userInfo, success]);

  const handleClick = () => setShow(!show);
  const handleRepeatClick = () => setShowRepeat(!showRepeat);

  const handleSubmit = () => {
    dispatch(
      register(
        first_name,
        last_name,
        email,
        phone,
        country,
        state,
        city,
        password
      )
    );
    console.log("register");
  };

  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.800")}
      px={{
        base: "4",
        md: "10",
      }}
      py="16"
    >
      <Box maxW="xl" mx="auto">
        <Stack spacing="12">
          <Stack as="section" spacing="6">
            <Stack spacing="1">
              <Heading size="md" fontWeight="semibold">
                Sign Up
              </Heading>
              <Text color={useColorModeValue("gray.600", "gray.400")}>
                Change your profile, request your data, and more
              </Text>
            </Stack>
            <Box
              bg={useColorModeValue("white", "gray.700")}
              shadow="base"
              rounded="lg"
              p={{
                base: "4",
                md: "8",
              }}
            >
              <HStack mb="4">
                <FormControl>
                  <FormLabel>First Name</FormLabel>
                  <Input
                    type="text"
                    value={first_name}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="John"
                  />
                </FormControl>
                <Stack divider={<StackDivider />} spacing="6"></Stack>
                <FormControl>
                  <FormLabel>Last Name</FormLabel>
                  <Input
                    type="text"
                    value={last_name}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="Doe"
                  />
                </FormControl>
              </HStack>
              <FormControl mb="4">
                <FormLabel>Email</FormLabel>
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="example@domain.com"
                />
              </FormControl>
              <FormControl mb="4">
                <FormLabel>Phone</FormLabel>
                <Input
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="example@domain.com"
                />
              </FormControl>
              <FormControl mb="4">
                <FormLabel>Country</FormLabel>
                <Select
                  placeholder="Select country"
                  onChange={(e) => setCountry(e.target.value)}
                >
                  {countries.map((country) => {
                    return <option value={country.name}>{country.name}</option>;
                  })}
                </Select>
              </FormControl>
              <FormControl mb="4">
                <FormLabel>State</FormLabel>
                <Input
                  type="text"
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                  placeholder="State / Region"
                />
              </FormControl>
              <FormControl mb="4">
                <FormLabel>City</FormLabel>
                <Input
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  placeholder="Los Angeles"
                />
              </FormControl>
              <HStack mb="4">
                <FormControl>
                  <FormLabel>Password</FormLabel>
                  <InputGroup>
                    <Input
                      type={show ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter password"
                    />
                    <InputRightElement>
                      <IconButton
                        size="sm"
                        onClick={handleClick}
                        icon={show ? <ViewIcon /> : <ViewOffIcon />}
                      />
                    </InputRightElement>
                  </InputGroup>
                </FormControl>
                <Stack divider={<StackDivider />} spacing="6"></Stack>
                <FormControl>
                  <FormLabel>Repeat Password</FormLabel>
                  <InputGroup>
                    <Input
                      type={show ? "text" : "password"}
                      value={repeatPassword}
                      onChange={(e) => setRepeatPassword(e.target.value)}
                      placeholder="Enter password"
                    />
                    <InputRightElement>
                      <IconButton
                        size="sm"
                        onClick={handleRepeatClick}
                        icon={showRepeat ? <ViewIcon /> : <ViewOffIcon />}
                      />
                    </InputRightElement>
                  </InputGroup>
                </FormControl>
              </HStack>
              <Button
                w="full"
                isLoading={loading}
                onClick={handleSubmit}
                colorScheme="blue"
              >
                Submit
              </Button>
            </Box>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
}

export default Register;
