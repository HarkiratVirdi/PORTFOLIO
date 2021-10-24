import React, { Component } from "react";
import emailjs from "emailjs-com";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Footer.css";
import { ThemeContext } from "../Context/Context";
import ClipText from "../ClipText/ClipText";
import { ContextLang } from "../Context/ContextLang";

class Footer extends Component {
  static contextType = ThemeContext;
  constructor(props) {
    super(props);
    this.state = { personName: "", personEmail: "", personMessage: "" };
    AOS.init();
  }

  submitMessage = (e) => {
    const button = document.querySelector(".form_submit_button");
    e.preventDefault();

    button.innerHTML = "Finding Harkirat...";
    button.style.animation = "bounce 0.75s alternate ease-in-out infinite";

    emailjs
      .sendForm(
        "service_2m6gdxl",
        "template_pz4cejs",
        e.target,
        "user_r95YKZAAuhO4p6roegGgJ"
      )
      .then((res) => {
        button.style.animation = "";
        button.innerHTML = "Message Sent!";
        Array.from(document.querySelectorAll("input")).map(
          (el) => (el.value = "")
        );

        setTimeout(() => {
          button.style.backgroundColor = "";
          button.innerHTML = "Send";
          this.setState({ personEmail: "", personMessage: "", personName: "" });
        }, 3200);
      });
  };

  onChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({ [nam]: val });
  };

  render() {
    const { isLightTheme } = this.context;
    return (
      <ContextLang.Consumer>
        {(contextLang) => {
          const { isEnglish } = contextLang;
          return (
            <footer className="footer section-title">
              <ClipText>Contact</ClipText>
              <form
                data-aos="fade-up"
                data-aos-offset="300"
                data-aos-duration="800"
                data-aos-easing="ease"
                onSubmit={this.submitMessage}
              >
                <div
                  data-aos="fade-in"
                  data-aos-offset="200"
                  data-aos-delay="400"
                  data-aos-duration="1000"
                  data-aos-easing="ease"
                >
                  <h1 className="form_text">
                    {isEnglish ? "Hello," : "Bonjour,"}
                  </h1>

                  <div className="form_field">
                    <h1 className="form_text">
                      {isEnglish ? "My name is" : "Je m'appelle"}
                      <input
                        style={{ color: isLightTheme ? "black" : "white" }}
                        name="personName"
                        autoComplete="off"
                        type="text"
                        value={this.state.personName}
                        className="form_input"
                        required
                        onChange={this.onChangeHandler}
                      />{" "}
                    </h1>
                  </div>

                  <div className="form_field">
                    <h1 className="form_text">
                      {isEnglish ? "Here is my email" : "Mon email est"}
                      <input
                        style={{ color: isLightTheme ? "black" : "white" }}
                        name="personEmail"
                        autoComplete="off"
                        className="form_input"
                        type="email"
                        value={this.state.personEmail}
                        onChange={this.onChangeHandler}
                        required
                      />{" "}
                    </h1>
                  </div>

                  <div className="form_field">
                    <h1 className="form_text">
                      {isEnglish ? "Let's talk about" : "Parlons de"}
                      <input
                        style={{ color: isLightTheme ? "black" : "white" }}
                        className="form_input"
                        name="personMessage"
                        autoComplete="off"
                        type="text"
                        value={this.state.personMessage}
                        onChange={this.onChangeHandler}
                        required
                      />{" "}
                    </h1>
                  </div>
                </div>
                <div className="form_button">
                  <button
                    style={{ color: isLightTheme ? "black" : "white" }}
                    class="form_submit_button"
                    type="submit"
                  >
                    {isEnglish ? "Send" : "Envoyez"}
                  </button>
                  <div className="socials">
                    <h1 className="form_text">
                      {" "}
                      {isEnglish ? "Follow Me" : "Suivez moi"}
                    </h1>
                    <div>
                      <a
                        style={{ color: isLightTheme ? "black" : "white" }}
                        href="https://www.linkedin.com/in/harkirat-singh-8254a21b4/"
                      >
                        <h1 className="form_text"> Linkedin</h1>
                      </a>
                      <a
                        style={{ color: isLightTheme ? "black" : "white" }}
                        href="https://github.com/harkiratvirdi"
                      >
                        <h1 className="form_text">Github</h1>
                      </a>
                      <a
                        style={{ color: isLightTheme ? "black" : "white" }}
                        href="https://www.instagram.com/harkirat_singh_virdi/"
                      >
                        <h1 className="form_text">Instagram</h1>
                      </a>
                    </div>
                  </div>
                </div>
              </form>
            </footer>
          );
        }}
      </ContextLang.Consumer>
    );
  }
}

export default Footer;

// const Contact = () => {
//   useEffect(() => {
//     AOS.init();
//   }, []);

//   const [messageInputs, setMessageInputs] = useState({
//     personName: "",
//     personEmail: "",
//     personMessage: "",
//   });

//   const updateMessage = (e) => {
//     const { name, value } = e.target;
//     const messages = { ...messageInputs, [name]: value };
//     setMessageInputs(messages);
//   };

//   const submitMessage = (e) => {
//     const button = document.querySelector("#form-button");
//     e.preventDefault();

//     button.innerHTML = "Finding Kenn...";
//     button.style.animation = "bounce 0.75s alternate ease-in-out infinite";

//     emailjs
//       .sendForm("outlook", "email", e.target, "user_KphhJtzxSz89fGr0StW6v")
//       .then((res) => {
//         button.style.backgroundColor = "lightseagreen";
//         button.style.animation = "";
//         button.innerHTML = "Message Sent!";

//         Array.from(document.querySelectorAll("input")).map(
//           (el) => (el.value = "")
//         );

//         setTimeout(() => {
//           button.style.backgroundColor = "lightsalmon";
//           button.innerHTML = "Send";
//         }, 3200);
//       });
//   };

//   return (
//     <>
//       <div
//         data-aos="fade-up"
//         data-aos-offset="300"
//         data-aos-duration="800"
//         data-aos-easing="ease"
//         id="para"
//       >
//         <h1 className="section-title">
//           <small> (003) </small> <span> Talk to Me </span>
//         </h1>
//       </div>

//       <form
//         onChange={(e) => updateMessage(e)}
//         onSubmit={(e) => submitMessage(e)}
//       >
//         <div
//           data-aos="fade-in"
//           data-aos-offset="200"
//           data-aos-delay="400"
//           data-aos-duration="1000"
//           data-aos-easing="ease"
//         >
//           <p> HELLO, </p>

//           <p>
//             MY NAME IS{" "}
//             <input name="personName" autoComplete="off" type="text" required />{" "}
//           </p>

//           <p>
//             HERE IS MY EMAIL{" "}
//             <input
//               name="personEmail"
//               autoComplete="off"
//               type="email"
//               required
//             />{" "}
//           </p>

//           <p>
//             LET'S TALK ABOUT{" "}
//             <input
//               name="personMessage"
//               autoComplete="off"
//               type="text"
//               required
//             />{" "}
//           </p>
//         </div>

//         <section>
//           <button id="form-button"> Send </button>
//           <div id="socials">
//             <h1> STALK ME </h1>
//             <div>
//               <a href="https://www.linkedin.com/in/kennseang/"> LINKEDIN </a>
//               <a href="https://github.com/seangpachareonsub"> GITHUB </a>
//             </div>
//           </div>
//         </section>
//       </form>

//       {/* </div> */}
//     </>
//   );
// };

// export default Contact;
