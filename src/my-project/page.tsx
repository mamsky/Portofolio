import { LayoutMyProject } from "./layout";

export const MyProject = () => {
  return (
    <div className="mb-32" id="project">
      {/* spacer for id  */}
      <div className="h-24"></div>
      <h1 className="text-2xl md:text-3xl font-bold mb-8">My Projects:</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <LayoutMyProject />
        <LayoutMyProject />
        <LayoutMyProject />
        <LayoutMyProject />
        <LayoutMyProject />
      </div>
    </div>
  );
};
