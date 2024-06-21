import Button1 from "@/app/Components/Common/Buttons/Button1";
import ContactDropdown from "../../../Components/Common/Input/ContactDropdown";
import ContactInp from "./ContactInp";

const ContactForm = () => {
  return (
    <div className="z-10 flex-1 p-7">
      <form className="grid grid-cols-2 gap-5">
        <ContactInp title={"First Name"} name={"firstname"} />
        <ContactInp title={"Last Name"} name={"lastname"} />
        <ContactInp title={"Email"} name={"email"} />
        <ContactDropdown
          title={"Subject"}
          name={"subject"}
          options={["front", "back"]}
        />
        <div className="col-span-2">
          <h1>Message</h1>
          <textarea className="bg-transparent border-b border-b-card outline-none w-full focus-within:border-b-primary" rows={5}></textarea>
        </div>
        <div className="col-span-2">
        <Button1 title={"Send Message"} subtitle={"Let`s Work Together!"} />
        </div>
      </form>
    </div>
  );
};
export default ContactForm;
