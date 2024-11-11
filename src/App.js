import React, { useState, useEffect } from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import { db } from './firebaseConfig';
import { collection, addDoc, deleteDoc, doc, onSnapshot, updateDoc } from 'firebase/firestore';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);

  // Fetch tasks from Firebase in real-time
  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'tasks'), (snapshot) => {
      const tasksArray = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setTasks(tasksArray);
    });

    return () => unsubscribe();  // Clean up the listener on unmount
  }, []);

  // Add task to Firebase
  const addTask = async (taskText) => {
    const newTask = { text: taskText, completed: false };
    await addDoc(collection(db, 'tasks'), newTask);
  };

  // Delete task from Firebase
  const deleteTask = async (id) => {
    await deleteDoc(doc(db, 'tasks', id));
    setTasks(tasks.filter(task => task.id !== id));
  };

  // Toggle task completion status in Firebase
  const toggleTask = async (id) => {
    const task = tasks.find(task => task.id === id);
    await updateDoc(doc(db, 'tasks', id), {
      completed: !task.completed
    });
    setTasks(
      tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task)
    );
  };

  return (
    <div className="App">
      <h1>Task Tracker</h1>
      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks} deleteTask={deleteTask} toggleTask={toggleTask} />
      <p>Completed Tasks: {tasks.filter(task => task.completed).length}</p>
    </div>
  );
}

export default App;
