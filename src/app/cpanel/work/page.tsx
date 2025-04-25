"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import { ArrayInput } from "./types/array-input";

const WorkPage = () => {
  const inputArr: ArrayInput[] = [
    {
      id: 1,
      name: "description",
      type: "text",
    },
  ];
  const [arrInput, setArrInput] = useState<ArrayInput[]>(inputArr);

  const handleAddNewInput = () => {
    setArrInput((s) => {
      return [
        ...s,
        {
          type: "text",
          value: "",
          name: "description",
        },
      ];
    });
  };

  return (
    <div className="p-4">
      <h1>Work Experience Setting</h1>
      <div className="my-4 w-7xl">
        <Input
          type="text"
          placeholder="Title"
          name="title"
          className="px-4 py-6"
        />
      </div>
      <div className="my-4 w-7xl">
        <Input
          type="text"
          placeholder="Sub Title"
          name="subtitle"
          className="px-4 py-6"
        />
      </div>
      <div className="my-4 w-6.5xl flex flex-col gap-4">
        {/* <Input
          type="text"
          placeholder="Description"
          name="description"
          className="px-4 py-6"
        /> */}
        <Button
          onClick={handleAddNewInput}
          className="py-6 px-4 cursor-pointer bg-blue-600 hover:bg-blue-800 text-white"
        >
          Add New Description
        </Button>
        {arrInput.map((addInput, i) => (
          <Input
            key={i}
            type={addInput.type}
            name={addInput.name}
            // value={addInput.value}
            placeholder="Description"
            className="px-4 py-6"
          />
        ))}
      </div>
      <div className="my-4 w-7xl">
        <Input
          type="date"
          name="time"
          min="2017-06-01"
          max="2030-12-12"
          className="px-4 py-6"
        />
      </div>
      <div className="my-4">
        <Button className="w-full px-4 py-6 text-4xl font-medium text-shadow-2xs text-shadow-amber-400 bg-cyan-500 text-white cursor-pointer hover:bg-cyan-700 shadow-lg shadow-cyan-300">
          Submit
        </Button>
      </div>
    </div>
  );
};

export default WorkPage;
