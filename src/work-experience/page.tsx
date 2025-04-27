"use client";
import { ListWork } from "./layout";
import { dataWorkExperience, WorkExperienceDTO } from "./types/dummy-data-we";

const WorkExperience = () => {
  const data: WorkExperienceDTO[] = dataWorkExperience;
  return (
    <div id="work">
      <div className="h-24"></div>
      <div className="flex justify-between items-center mb-12">
        <h2 className="text-2xl md:text-3xl font-bold">Work Experiences:</h2>
      </div>
      {data.map((item) => (
        <ListWork key={item.id} data={item} />
      ))}
    </div>
  );
};

export default WorkExperience;
