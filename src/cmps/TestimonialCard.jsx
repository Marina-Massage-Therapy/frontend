import "../assets/css/TestimonialCard.css";
import { Flex } from "@chakra-ui/react";
import { GoPencil } from "react-icons/go";
import { RiDeleteBinLine } from "react-icons/ri";
import {
  delete_Testimonial,
  set_selected_testimonial,
} from "../store/actions/testimonial";

const TestimonialCard = ({ _id, fullname, message }) => {
  return (
    <div className="testimonial-card">
      <blockquote className="testimonial-message">“{message}”</blockquote>
      <div className="testimonial-footer">
        <h5 className="testimonial-name">{fullname}</h5>
        <div className="testimonial-rating">
          <span>⭐⭐⭐⭐⭐</span>
          <Flex w="100%" justify="space-between">
            <RiDeleteBinLine
              size={20}
              onClick={() => delete_Testimonial(_id)}
              cursor="pointer"
            />
            <GoPencil
              size={20}
              onClick={() =>
                set_selected_testimonial({
                  _id: _id,
                  fullname: fullname,
                  message: message,
                })
              }
              cursor="pointer"
            />
          </Flex>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
