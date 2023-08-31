import { Row } from "react-bootstrap";
import { Formik, Form, Field, ErrorMessage } from "formik";
import emailjs from "@emailjs/browser";
import * as Yup from "yup";
import "./contact-form.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import paperFly from "../../Images/paper-fly.png";
import Image from "next/image";
const apiKey = process.env.REACT_APP_API_KEY;

const validationSchema = Yup.object().shape({
  fullName: Yup.string()
    .min(4, "Full name must be at least 4 characters")
    .max(50, "Full name must be less than 50 characters")
    .required("Full name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  message: Yup.string()
    .min(10, "Message must be at least 10 characters")
    .max(500, "Message must be less than 500 characters")
    .required("Message is required"),
});
const ContactForm = () => {
  const initialFormState = {
    fullName: "",
    email: "",
    message: "",
  };
  const submitHandler = (values, { setSubmitting, resetForm }) => {
    emailjs.send("service_mcyw7xh", "template_i2fpib6", values, apiKey).then(
      (result) => {
        console.log(result.text);
        toast.success("The message has sent !", {
          position: toast.POSITION.TOP_RIGHT,
        });
        setSubmitting(false);
        resetForm();
      },
      (error) => {
        console.log(error.text);
        setSubmitting(false);
      }
    );
  };
  return (
    <Formik
      initialValues={initialFormState}
      validationSchema={validationSchema}
      onSubmit={submitHandler}
    >
      {({ isSubmitting, isValid, errors, touched }) => (
        <Form>
          <Row>
            <div className="name-content">
              <Field
                type="text"
                name="fullName"
                className={`input-Contact ${
                  errors.fullName && touched.fullName ? "is-invalid" : ""
                }`}
                placeholder="Full Name"
              />{" "}
              <div className="error">
                <ErrorMessage name="fullName" />
              </div>
            </div>
            <div className="email-textarea">
              {" "}
              <Field
                type="email"
                name="email"
                className={`input-Contact ${
                  errors.email && touched.email ? "is-invalid" : ""
                }`}
                placeholder="Email"
              />
              <div className="error">
                <ErrorMessage name="email" />
              </div>
              <Field
                as="textarea"
                name="message"
                id="message"
                rows="10"
                placeholder="Your Message"
                className={`text-area ${
                  errors.message && touched.message ? "is-invalid" : ""
                }`}
                eholder="Message"
              />
              <div className="error">
                <ErrorMessage name="message" className="error" />
              </div>
              <button
                className="submit"
                type="submit"
                disabled={
                  isSubmitting ||
                  !isValid ||
                  (!touched.email && !touched.message)
                }
              >
                Submit
                <Image src={paperFly} alt="" width={20} height={20} />
              </button>
            </div>
          </Row>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
