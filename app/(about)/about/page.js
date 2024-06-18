import Heading from "@/app/Components/Heading/Heading";
import Tabs from "../components/TabContainer/TabContainer";
import Intro from "../Intro";

const Page = () => {
  return (
    <section className="container mx-auto flex flex-col p-4">
      <Heading bgtext="ABOUT" text="KHAN" />
      <div className="flex flex-col gap-12 laptop:flex-row items-center laptop:items-start mt-10">
        <div className="flex-1 w-full">
          <Intro />
        </div>
        <div className="flex-1 w-full">
          <Tabs />
        </div>
      </div>
    </section>
  );
};

export default Page;
