"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { ArrayInput } from "./types/array-input";

const DialogPage = () => {
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
    <div>
      <Dialog>
        <DialogTrigger className="border p-2 rounded-md cursor-pointer">
          Add New Work Experience
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add New Work Experience</DialogTitle>
            <div className="">
              <label htmlFor="title">Title</label>
              <Input
                id="title"
                type="text"
                placeholder="Title"
                name="title"
                className="px-4 py-6"
              />
            </div>
            <div className="">
              <label htmlFor="location">location</label>
              <Input
                id="location"
                type="text"
                placeholder="Location"
                name="location"
                className="px-4 py-6"
              />
            </div>
            <div className=" w-6.5xl flex flex-col gap-4">
              <Button
                onClick={handleAddNewInput}
                className="py-6 px-4 cursor-pointer bg-blue-600 hover:bg-blue-800 text-white"
              >
                Add New Description
              </Button>
              <label htmlFor="desc">Description</label>
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
            <div className="">
              <label htmlFor="date">Date</label>
              <Input
                id="date"
                type="date"
                name="time"
                min="2017-06-01"
                max="2030-12-12"
                className="px-4 py-6"
              />
            </div>
            <div className="">
              <label htmlFor="image">Picture</label>
              <Input type="file" id="image" />
            </div>
            <div className="">
              <Button className="w-full px-4 py-6 text-4xl font-medium text-shadow-2xs text-shadow-amber-400 bg-cyan-500 text-white cursor-pointer hover:bg-cyan-700 shadow-lg shadow-cyan-300">
                Submit
              </Button>
            </div>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default DialogPage;
