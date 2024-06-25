import Sidebar from '../Components/Sidebar/Sidebar';
const Layout = ({ children }) => {
  return (
    <main className="container mx-auto flex py-20">
      {/* <Sidebar /> */}
      <div className="flex-1 z-10">{children}</div>
    </main>
  );
};

export default Layout;
