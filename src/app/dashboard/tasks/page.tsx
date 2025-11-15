"use client";

import { useState } from "react";
import type { Task } from "@/types";

export default function TasksPage() {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: "1",
      title: "Follow up with Acme Corp",
      description: "Discuss proposal details and answer questions",
      type: "call",
      dueDate: "2024-02-15",
      status: "pending",
      contactId: "1",
      companyId: "1",
      createdAt: "2024-02-10",
    },
    {
      id: "2",
      title: "Send contract to Tech Solutions",
      description: "Email the finalized contract for review",
      type: "email",
      dueDate: "2024-02-12",
      status: "in-progress",
      contactId: "2",
      companyId: "2",
      createdAt: "2024-02-08",
    },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [newTask, setNewTask] = useState<Partial<Task>>({
    title: "",
    description: "",
    type: "other",
    dueDate: new Date().toISOString().split("T")[0],
    status: "pending",
  });

  const addTask = () => {
    if (!newTask.title || !newTask.description) {
      alert("Please enter title and description");
      return;
    }

    const task: Task = {
      id: (tasks.length + 1).toString(),
      title: newTask.title!,
      description: newTask.description!,
      type: newTask.type as Task["type"],
      dueDate: newTask.dueDate!,
      status: newTask.status as Task["status"],
      createdAt: new Date().toISOString().split("T")[0],
    };

    setTasks([...tasks, task]);
    setShowModal(false);
    setNewTask({
      title: "",
      description: "",
      type: "other",
      dueDate: new Date().toISOString().split("T")[0],
      status: "pending",
    });
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">Tasks & Activities</h1>
        <button
          type="button"
          onClick={() => setShowModal(true)}
          className="bg-blue-900 hover:bg-blue-950 text-white px-6 py-2 rounded-lg font-medium transition-colors"
        >
          + New Task
        </button>
      </div>

      {/* Tasks List */}
      <div className="space-y-4">
        {tasks.map((task) => (
          <div key={task.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold">{task.title}</h3>
            <p className="text-gray-600">{task.description}</p>
            <p className="text-sm text-gray-500">Due: {new Date(task.dueDate).toLocaleDateString()}</p>
          </div>
        ))}
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <h2 className="text-xl font-semibold mb-4">New Task</h2>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Title"
                className="w-full px-4 py-2 border rounded-lg"
                value={newTask.title}
                onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
              />
              <textarea
                placeholder="Description"
                className="w-full px-4 py-2 border rounded-lg"
                value={newTask.description}
                onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
              />
              <select
                className="w-full px-4 py-2 border rounded-lg"
                value={newTask.type}
                onChange={(e) => setNewTask({ ...newTask, type: e.target.value as Task["type"] })}
              >
                <option value="call">Call</option>
                <option value="meeting">Meeting</option>
                <option value="email">Email</option>
                <option value="note">Note</option>
                <option value="other">Other</option>
              </select>
              <input
                type="date"
                className="w-full px-4 py-2 border rounded-lg"
                value={newTask.dueDate}
                onChange={(e) => setNewTask({ ...newTask, dueDate: e.target.value })}
              />
              <div className="flex justify-end gap-2">
                <button
                  className="px-4 py-2 bg-gray-200 rounded-lg"
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </button>
                <button
                  className="px-4 py-2 bg-blue-900 text-white rounded-lg"
                  onClick={addTask}
                >
                  Add Task
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
