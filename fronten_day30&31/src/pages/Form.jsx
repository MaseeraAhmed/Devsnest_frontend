import React from "react";
import ReactDOM from "react-dom";
import "../sass/components/Form.scss";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const notify = () => {
  toast.success("Successfully submitted!");
  toast.info("Someone will get intouch with you soon!", {
    position: "bottom-center",
    autoClose: 10000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};

const Form = () => {
  const [inputs, setInputs] = React.useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    e.persist();
    setInputs((inputs) => ({ ...inputs, [e.target.name]: e.target.value }));
  };

  const sendMessage = (e) => {
    if (e) e.preventDefault();
    const message = inputs.message;
    const messageEnter = message
      .replace(/\r\n|\r|\n/g, "%0D%0A")
      .replace(" ", "%20");
    const request =
      "mailto:YOUREMAIL?subject=Email%20from%20" +
      inputs.name +
      "/" +
      inputs.email +
      "&body=" +
      messageEnter;
    document.location = request;
  };
  return (
    <div className="contact__wrap">
      <h1>Frequently Asked Questions</h1>

      <div class="faq">
        <p style={{ fontSize: "1.5rem" }}>
          <i class="fa fa-question-circle"></i>FAQ
        </p>
        <div class="dropdown">
          <span class="fa fa-angle-down">
            I’m having problems placing an order. What do I do?
          </span>
          <div class="dropdown-content">
            <p>
              If you are having trouble at any stage of the process, we are
              happy to help! Call us at 416-755-1100 (toll free 1-800-561-9177)
              or email us at help@baskits.ca and we will respond in a timely
               manner.
            </p>
          </div>
        </div>
        <div class="dropdown">
          <span class="fa fa-angle-down">How do I track an order?</span>
          <div class="dropdown-content">
            <p>
              Once your order is placed, you will receive a confirmation email
              which will include a tracking number. You can enter that number on
              our tracking page to follow your Baskit on its journey.
            </p>
          </div>
        </div>
        <div class="dropdown">
          <span class="fa fa-angle-down">
            Can I add to/change or cancel an existing order?
          </span>
          <div class="dropdown-content">
            <p>
              Can I add to/change or cancel an existing order?keyboard_arrow_up
              Because we aim to provide efficient service and delivery, we like
              to prepare gifts immediately after orders are placed. Therefore,
              orders cannot be changed within 48 hours of the shipping date. You
              can read more about our cancellation policy here.
            </p>
          </div>
        </div>
        <div class="dropdown">
          <span class="fa fa-angle-down">
            Can I checkout with multiple shipping addresses?
          </span>
          <div class="dropdown-content">
            <p>
              Yes! You can send multiple baskits to different addresses in a
              single web checkout session/transaction. Just add your desired
              gifts to cart and our website will walk you through the rest! If
              you are ordering more than 10 baskits, you may want to consider
              using our large order form, which can be found here.
            </p>
          </div>
        </div>
        <h3>Shipping</h3>
        <div class="dropdown">
          <span class="fa fa-angle-down">
            What are your rates for shipping and how long will delivery take?
          </span>
          <div class="dropdown-content">
            <p>
              Shipping rates and delivery times vary depending on where you want
              the product delivered, how soon you need it, and whether it is
              being delivered within Canada or the United States.
            </p>
          </div>
        </div>
        <div class="dropdown">
          <span class="fa fa-angle-down">
            Will I get a shipping confirmation?
          </span>
          <div class="dropdown-content">
            <p>
              Yes. You will receive a confirmation email once your order has
              shipped, which will also include a tracking number so you can
              follow your Baskit on its journey!
            </p>
          </div>
        </div>
        <div class="dropdown">
          <span class="fa fa-angle-down">
            My order didn’t arrive when it was supposed to. What do I do?
          </span>
          <div class="dropdown-content">
            <p>
              Please note that unforeseen weather can cause unexpected delays in
              delivery. In addition, during holidays, estimated delivery times
              might be longer than usual. If your delivery did not arrive when
              expected, please contact us at 416-755-1100 (toll free
              1-800-561-9177) or email us at deliverytracking@baskits.ca and we
              will gladly assist.
            </p>
          </div>
        </div>
        <div class="dropdown">
          <span class="fa fa-angle-down">
            Why don’t you offer free shipping?
          </span>
          <div class="dropdown-content">
            <p>
              We ship across India and provide real-time tracking and proof of
              delivery as a part of the cost of shipping. If anything goes
              wrong, we’ll make it right. Some companies offer "free shipping"
              by not offering customer service and/or by reducing the quality
              and/or number of items in their baskets. We are unwilling to alter
              the quality of our gifts/services and prefer to provide our
              customers with transparent and fair pricing at all times. We work
              with top brands and select only the highest quality products, as a
              result, we are unable to offer free shipping. The good news is the
              person receiving your gift will know that it came from the best
              and you can rest assured that you have selected a gift service
              company that won’t quit until you are satisfied
            </p>
          </div>
        </div>
        <h3>PRODUCTS</h3>
        <div class="dropdown">
          <span class="fa fa-angle-down">
            How do I find a specific product?
          </span>
          <div class="dropdown-content">
            <p>
              You can use the search function on our website, located at the
              right of our top menu. Search by keywords, brand names, or
              categories!
            </p>
          </div>
        </div>
        <div class="dropdown">
          <span class="fa fa-angle-down">
            How many people are your gifts for?
          </span>
          <div class="dropdown-content">
            <p>
              Many of our clients send our products to offices or groups. As a
              result, we are often asked what size gourmet baskit is
              appropriate. As a general guideline, our $50 gifts work well for
              1-2 people; $75 for 2-4 people; $100 for 4-6 people;
            </p>
          </div>
        </div>
        <div class="dropdown">
          <span class="fa fa-angle-down">What size are your baby clothes?</span>
          <div class="dropdown-content">
            <p>
              We try to ensure 6-12 months plus. We find this is best in case of
              large babies and/or belated gifts.
            </p>
          </div>
        </div>
        <h3>PAYMENT& RETURNS</h3>
        <div class="dropdown">
          <span class="fa fa-angle-down">
            What forms of payment do you accept?
          </span>
          <div class="dropdown-content">
            <p>
              We accept credit cards, including VISA, MasterCard, and American
              Express. We also accept cash payments in our stores. For large,
              recurring corporate clients, we offer payment terms.
            </p>
          </div>
        </div>
        <div class="dropdown">
          <span class="fa fa-angle-down">How can I change currency?</span>
          <div class="dropdown-content">
            <p>
              You can change your preferred currency at any point while browsing
              our website. On the top of the page on the left side, you should
              see a black bar with your currency. Click on the arrow beside it
              to switch between Canadian and US dollars. Please note you can pay
              in either currency and ship to either country{" "}
            </p>
          </div>
        </div>
        <div class="dropdown">
          <span class="fa fa-angle-down">
            Do you offer gift cards or flowers?
          </span>
          <div class="dropdown-content">
            <p>
              Unfortunately, we do not offer gift cards or flowers at this time.
            </p>
          </div>
        </div>
        <div class="dropdown">
          <span class="fa fa-angle-down">
            Can I return a product I purchased online?
          </span>
          <div class="dropdown-content">
            <p>
              Due to health and safety regulations, we cannot exchange or accept
              returns on food products. Non-perishable items may be exchanged at
              our head office. Exchanges are valid for 30 days from the order
              date and are subject to a 15% restocking fee.
            </p>
          </div>
        </div>
      </div>

      {/* <div id="yuvarlak">
        <span class="carpi"></span>
        <div id="icerik">
          <a href="#">
            <span class="fa fa-home a"></span>
          </a>
          <a href="https://github.com/Runtime-Terror-Team">
            <span class="fa fa-github b"></span>
          </a>
          <a href="#">
            <span class="fa fa-envelope-o c"></span>
          </a>
          <a href="#">
            <span class="fa fa-share d"></span>
          </a>
        </div>
      </div> */}
      <h1>Get in touch!</h1>
      <form
        onSubmit={(e) => {
          sendMessage(e);
          notify();
        }}
        className="contact__form"
      >
        <input
          value={inputs.name}
          onChange={(e) => handleInputChange(e)}
          type="text"
          name="name"
          placeholder="name"
          title="Your name"
          maxLength="50"
          required
        />
        <input
          value={inputs.number}
          onChange={(e) => handleInputChange(e)}
          type="number"
          name="number"
          placeholder="Phone number"
          title="Your number"
          maxLength="50"
          required
        />
        <input
          value={inputs.email}
          onChange={(e) => handleInputChange(e)}
          type="email"
          name="email"
          placeholder="E-mail id"
          title="Your email"
          maxLength="50"
          required
        />
        <textarea
          value={inputs.message}
          onChange={(e) => handleInputChange(e)}
          type="text"
          name="message"
          placeholder="message"
          title="Your message"
          maxLength="550"
          required
        />
        <input type="submit" value="Send" />
        <ToastContainer />
      </form>
    </div>
  );
};

ReactDOM.render(<Form />, document.getElementById("root"));

export default Form;
