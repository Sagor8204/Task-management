import React from "react";
import { db } from "../../firebase/firebase";
import { ref, set } from "firebase/database";

const AddTodo = ({ setOpen }) => {
  // handle overlay clik outside of modal content then modal will be close
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      setOpen(false);
    }
  };

  const addTodo = async (e) => {
    e.preventDefault();
    try {
      const data = e.target;
      const title = data.title.value;
      const description = data.description.value;
      const newTodo = { title, description };

      if (newTodo) {
        const todoRef = ref(db, "todos/" + new Date().getTime());
        await set(todoRef, {
          title: title,
          description: description,
          createdAt: new Date().toISOString(),
        });
        console.log("Todo Added successfully!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      onClick={handleOverlayClick}
      className="modal_overlay fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center"
    >
      <div className="relative border border-gray-400 p-2 max-w-[500px] bg-white rounded-md">
        <h3 className="text-center text-lg font-semibold">Add Todo</h3>

        <form onSubmit={addTodo}>
          <label className="mb-1z text-sm font-semibold text-gray-500">
            Title:
          </label>
          <input
            className="w-full border border-gray-300 rounded-md p-2 mb-2 outline-none"
            type="text"
            placeholder="Enter your title..."
            name="title"
          />
          <label className="mb-1 text-sm font-semibold text-gray-500">
            Description:
          </label>
          <input
            className="w-full border border-gray-300 rounded-md p-2 mb-2 outline-none"
            type="text"
            placeholder="Enter your description..."
            name="description"
          />
          <button className="bg-blue-500 text-white px-8 py-2 rounded-md mt-4">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddTodo;
