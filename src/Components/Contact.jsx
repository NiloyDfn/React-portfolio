import React, { useState } from "react";
import vg from "../assets/vg.png";
import gsap from "gsap";
import toast from "react-hot-toast";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";
import { useGSAP } from "@gsap/react";
const Contact = () => {
  useGSAP(() =>{
    const tl = gsap.timeline();

    tl.from("#contact h2,input ", {
      x: -800,
      opacity : 0,
      duration: 1.5,
      stagger : .5,
      scrollTrigger: {
        trigger: "#contact",
        scroller: "body",
        start: "top 40%",
        end: "top 80%",
        scrub: 2,
      },
    });
    gsap.from("#contact aside ", {
      y: 800,
      opacity : 0,
      duration: 1.5,
      stagger : .5,
      scrollTrigger: {
        trigger: "#contact",
        scroller: "body",
        start: "top 40%",
        end: "top 80%",
        scrub: 2,
      },
    });
    
  })
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [disableBtn, setDisableBtn] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();
    setDisableBtn(true);
    try {
      await addDoc(collection(db, "contacts"), { name, email, message });
      setName("");
      setEmail("");
      setMessage("");
      toast.success("Message Sent");
      setDisableBtn(false);
    } catch (error) {
      toast.error("Error");
      setDisableBtn(false);
    }
  };

  return (
    <div id="contact">
      <section>
        <form onSubmit={submitHandler}>
          <h2>Contact Me</h2>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your  Name"
            required
          />
          <input
            type="email"
            placeholder="Enter your Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            placeholder="Your Message"
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button
            disabled={disableBtn}
            className={disableBtn ? "disableBtn" : ""}
            type="submit"
          >
            {" "}
            Send{" "}
          </button>
        </form>
      </section>
      <aside>
        <img src={vg} alt="Graphics" />
      </aside>
    </div>
  );
};

export default Contact;
