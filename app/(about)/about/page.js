import Intro from "../Intro";
import Tabs from "../components/TabContainer/TabContainer";

const Page = () => {
  return (
    <section className="container mx-auto p-4">
      <div className="flex flex-col gap-12 laptop:flex-row items-center laptop:items-start mt-8 tablet:mt-14 laptop:mt-48">
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
