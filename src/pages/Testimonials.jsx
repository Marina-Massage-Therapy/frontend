import { Box, Flex } from "@chakra-ui/react";
import TestimonialCard from "../cmps/TestimonialCard";
import NewTestimonialCard from "../cmps/NewTestimonialCard";
import { useSelector } from "react-redux";
import { t } from "i18next";
const Testimonials = () => {
  const testimonials = useSelector(
    (state) => state?.testimonialModule?.testimonials
  );

  return (
    <Box mt="80px">
      <Flex
        justifyContent="center"
        flexDirection="column"
        alignItems="center"
      >
        <h1>{t("pages.testimonials.title")}</h1>
        <NewTestimonialCard />
      </Flex>
      <Flex
        justify="center"
        wrap="wrap"
        gap="6"
      >
        {testimonials?.map((testimonial) => (
          <TestimonialCard
            key={testimonial?._id}
            _id={testimonial?._id}
            fullname={testimonial?.fullname}
            message={testimonial?.message}
          />
        ))}
      </Flex>
    </Box>
  );
};

export default Testimonials;
