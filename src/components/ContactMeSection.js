import React, {useEffect} from "react";
import { useFormik } from "formik";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
  VStack,
  FormHelperText,
  Alert,
  CircularProgress
} from "@chakra-ui/react";
import * as Yup from 'yup';
import FullScreenSection from "./FullScreenSection";
import useSubmit from "../hooks/useSubmit";
import {useAlertContext} from "../context/alertContext";

//Component that contains a form that simulates an automatic email sending
const ContactMeSection = () => {
  const {isLoading, response, submit} = useSubmit();
  const { onOpen } = useAlertContext();

  const focusBordColor = "#2E9CCA";
  

  const formik = useFormik({
    initialValues: {
      firstName: "",
      email: "",
      type:"default",
      comment:""
    },
    onSubmit: (values) => {
      submit("https://myPortafolioReact.com/contactme",values);
    },
    validationSchema: Yup.object({
      firstName:Yup.string().required("Name is required").max(20,"The First name must be 20 characters or less"),
      email:Yup.string().email("Enter a Valid email address").required("Email is required"),
      type:Yup.string().required("Type of Contact Information is required"),
      comment:Yup.string().required("Comment is required").min(25,"Must be at least 25 characters"),
    }),
  });

  useEffect(() => { 
    //When response changes to null it refers that the submit button has been pressed and the request is sent
    if (response !== null) { 
      //it will load the alert with the OnOpen function that sets the display value of the alert to true
      onOpen(response.type, response.message); 
      //When the request is successful it will reset the form inputs
      if (response.type === 'success') { 
        formik.resetForm(); 
      } 
    } 
  }, [response]); 

  return (
    <FullScreenSection
      isDarkBackground
      backgroundColor="#464866"
      py={16}
      spacing={8}
      
    >
      
      <VStack w={{ base: "300px", md: "768px", lg:"1024px"}} p={{ base:1, md: 32 }} alignItems="flex-start">
        <Heading as="h1" id="contactme-section">
          Contact me
        </Heading>
        <Box p={{ base:1, md: 6, lg:1 }} rounded="md" w="100%">
          <form onSubmit={formik.handleSubmit}>
            <VStack spacing={4}>
              <FormControl isInvalid={!!formik.errors.firstName && formik.touched.firstName}>
                <FormLabel htmlFor="firstName">Name</FormLabel>
                <Input
                  id="firstName"
                  name="firstName"
                  focusBorderColor= {focusBordColor}
                  {...formik.getFieldProps("firstName")}
                />
                <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={!!formik.errors.email && formik.touched.email}>
                <FormLabel htmlFor="email">Email Address</FormLabel>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  focusBorderColor= {focusBordColor}
                  {...formik.getFieldProps("email")}
                />
                <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="type">Type of enquiry</FormLabel>
                <Select id="type" name="type" 
                fontWeight="bold"
                focusBorderColor= {focusBordColor}
                {...formik.getFieldProps("type")}>
                  <option value="hireMe">Freelance project proposal</option>
                  <option value="openSource">
                    Open source consultancy session
                  </option>
                  <option value="other">Other</option>
                </Select>
              </FormControl>
              <FormControl isInvalid={!!formik.errors.comment && formik.touched.comment}>
                <FormLabel htmlFor="comment">Your message</FormLabel>
                <Textarea
                  id="comment"
                  name="comment"
                  height={250}
                  focusBorderColor= {focusBordColor}
                  {...formik.getFieldProps("comment")}
                />
                <FormErrorMessage>{formik.errors.comment}</FormErrorMessage>
              </FormControl>
              <Button type="submit" bg={focusBordColor} width="full">
                { isLoading? 
                  <CircularProgress isIndeterminate size="30px" color='green.300' />: ""
                }
                {
                  isLoading ?  "  Loading...":"Submit"
                }
              </Button>
            </VStack>
          </form>
        </Box>
      </VStack>
    </FullScreenSection>
  );
};

export default ContactMeSection;
