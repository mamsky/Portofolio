import { ListWork } from "./layout";

const WorkExperience = () => {
  return (
    <div id="work">
      <div className="h-24"></div>
      <div className="flex justify-between items-center mb-12">
        <h2 className="text-2xl md:text-3xl font-bold">Work Experiences:</h2>
      </div>
      <ListWork />
      <ListWork />
      <ListWork />
      <ListWork />
    </div>
  );
};

export default WorkExperience;
