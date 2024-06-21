import Aside from "../Components/Aside/ContactAside";
import ContactForm from "../Components/Form/ContactForm";

const Page = () => {
  return (
    <section className="container mx-auto flex flex-col laptop:flex-row items-center laptop:items-start gap-10 justify-between pt-10 tablet:pt-16 laptop:pt-48">
      <Aside />
      <ContactForm />
    </section>
  );
};
export default Page;
