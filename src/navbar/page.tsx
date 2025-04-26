import Layout from "./layout";

export const NavigationBar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-30 bg-white dark:bg-background transition-colors duration-700 ease-in-out px-4 md:px-[5%] xl:px-[15%]">
      <Layout />
    </div>
  );
};
