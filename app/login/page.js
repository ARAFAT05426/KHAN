"use client"
import Button1 from "../Components/Common/Buttons/Button1";
import ReusableInputField from "../Components/Common/Input/ReusableInputField";

const Page = () => {
  const handlelogin = (e) =>{
    e.preventDefault()
    const username = e.target.username.value;
    const password = e.target.password.value;
    console.log(username, password);
  }
  return (
    <section className="h-screen w-full flex items-center justify-center">
      <div className="bg-card/50 z-10 p-20 rounded-md flex flex-col items-center justify-center ">
        <form onSubmit={handlelogin}>
        <ReusableInputField name={"username"}/>
        <ReusableInputField name={"password"}/>
        <Button1 title={"Log In"} subtitle={"Error"} />
        </form>
      </div>
    </section> 
  );
};
export default Page;
