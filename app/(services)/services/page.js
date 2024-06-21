import ServiceSide from "../components/Aside/ServiceSide";
import MyServices from "../components/Services/MyServices";

const Page = () => {
  return (
    <section className="container mx-auto pt-10 tablet:pt-16 laptop:pt-48 flex flex-col laptop:flex-row gap-5 justify-between">
      <ServiceSide />
      <MyServices />
    </section>
  );
};
export default Page;
