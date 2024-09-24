import React, { useEffect, useState } from "react";
import AddTodo from "./AddTodo";
import { db } from "../../firebase/firebase";
import { ref, onValue } from "firebase/database";
import TodoItem from "./TodoItem";

const Tasks = () => {
  const [open, setOpen] = useState(false);
  const [todos, setTodos] = useState([]);

  // get todos from firebase realtimve database
  useEffect(() => {
    const todosRef = ref(db, "todos");
    onValue(todosRef, (snapshot) => {
      const data = snapshot.val();
      const todosArray = [];
      for (let id in data) {
        todosArray.push({ id, ...data[id] });
      }
      setTodos(todosArray);
    });
  }, []);

  return (
    <div className="max-w-[600px] mx-auto mt-32 border border-gray-300 p-3 rounded-md">
      <div className="h-96 overflow-y-scroll">
        {todos.map((data) => (
          <TodoItem key={data.id} data={data} />
        ))}
      </div>
      <button
        onClick={() => setOpen(true)}
        className="border border-blue-500 px-10 py-2 rounded-md mt-4"
      >
        Add Todo
      </button>
      {open && <AddTodo setOpen={setOpen} />}
    </div>
  );
};

export default Tasks;

// if the user come for first time in a day in my website i want to show a message by below the code

// import React, { useEffect, useState } from "react";

// function WelcomeMessage() {
//   const [showWelcomeMessage, setShowWelcomeMessage] = useState(false);

//   useEffect(() => {
//     // Get today's date in YYYY-MM-DD format
//     const today = new Date().toISOString().split('T')[0];

//     // Check if the user has already visited today
//     const lastVisit = localStorage.getItem("lastVisit");

//     if (lastVisit !== today) {
//       // If it's a new day or first time, show the welcome message
//       setShowWelcomeMessage(true);

//       // Update the last visit date in localStorage
//       localStorage.setItem("lastVisit", today);
//     }
//   }, []);

//   return (
//     <>
//       {showWelcomeMessage && (
//         <div className="welcome-message">
//           <p>Welcome! Thanks for visiting today!</p>
//         </div>
//       )}
//     </>
//   );
// }

// export default WelcomeMessage;

// useEffect(() => {
//   if (showWelcomeMessage) {
//     const timer = setTimeout(() => {
//       setShowWelcomeMessage(false);
//     }, 5000); // Hide message after 5 seconds

//     return () => clearTimeout(timer); // Cleanup the timer
//   }
// }, [showWelcomeMessage]);
