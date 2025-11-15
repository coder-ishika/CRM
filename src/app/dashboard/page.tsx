"use client";

import { useState, useEffect, ChangeEvent, FormEvent } from "react";
import type { DashboardStats } from "@/types";

// Material UI Icons
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import BusinessIcon from '@mui/icons-material/Business';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import TaskAltIcon from '@mui/icons-material/TaskAlt';

export default function Dashboard() {
  const [stats, setStats] = useState<DashboardStats>({
    totalContacts: 0,
    totalCompanies: 0,
    totalDeals: 0,
    totalRevenue: 0,
    openDeals: 0,
    wonDeals: 0,
    lostDeals: 0,
  });

  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState(""); // "contact" | "company" | "deal" | "task"

  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    title: "",
    status: "Lead",
  });

  useEffect(() => {
    setStats({
      totalContacts: 124,
      totalCompanies: 45,
      totalDeals: 32,
      totalRevenue: 2450000,
      openDeals: 18,
      wonDeals: 12,
      lostDeals: 2,
    });
  }, []);

  const statCards = [
    { title: "Total Contacts", value: stats.totalContacts, change: "+12%", icon: PersonAddAltOutlinedIcon, color: "bg-blue-800" },
    { title: "Total Companies", value: stats.totalCompanies, change: "+8%", icon: BusinessIcon, color: "bg-green-500" },
    { title: "Open Deals", value: stats.openDeals, change: "+5%", icon: WorkOutlineIcon, color: "bg-purple-500" },
    { title: "Total Revenue", value: `$${(stats.totalRevenue / 1000000).toFixed(1)}M`, change: "+23%", icon: AttachMoneyIcon, color: "bg-yellow-500" },
  ];

  const recentActivities = [
    { type: "Deal", action: "New deal created", name: "Acme Corp - $50K", time: "2 hours ago" },
    { type: "Contact", action: "Contact added", name: "Jane Smith", time: "5 hours ago" },
    { type: "Task", action: "Task completed", name: "Follow up with client", time: "1 day ago" },
    { type: "Deal", action: "Deal won", name: "Tech Solutions - $120K", time: "2 days ago" },
  ];

  const quickActions = [
    { label: "Add Contact", icon: PersonAddAltOutlinedIcon, type: "contact" },
    { label: "Add Company", icon: BusinessIcon, type: "company" },
    { label: "Create Deal", icon: WorkOutlineIcon, type: "deal" },
    { label: "New Task", icon: TaskAltIcon, type: "task" },
  ];

  const openModal = (type: string) => {
    setModalType(type);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalType("");
    setContactForm({
      name: "",
      email: "",
      phone: "",
      company: "",
      title: "",
      status: "Lead",
    });
  };

  const handleContactChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setContactForm({ ...contactForm, [e.target.name]: e.target.value });
  };

  const submitContactForm = (e: FormEvent) => {
    e.preventDefault();
    console.log("Contact submitted:", contactForm);
    alert("Contact added successfully!");
    closeModal();
  };

  return (
    <div className="space-y-6 p-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600 mt-1">Welcome back! Here's what's happening with your CRM.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statCards.map((card, index) => (
          <div key={index} className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">{card.title}</p>
                <p className="text-2xl font-bold text-gray-900">{card.value}</p>
                <p className="text-xs text-green-600 mt-2">{card.change} from last month</p>
              </div>
              <div className={`${card.color} w-12 h-12 rounded-lg flex items-center justify-center text-2xl text-white`}>
                {card.icon && <card.icon />}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Activities & Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activities */}
        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Recent Activities</h2>
          <div className="space-y-4">
            {recentActivities.map((activity, index) => (
              <div key={index} className="flex items-start gap-4 pb-4 border-b border-gray-100 last:border-0">
                <div className="w-10 h-10 bg-blue-200 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-blue-900">📝</span>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">{activity.action}</p>
                  <p className="text-sm text-gray-600">{activity.name}</p>
                  <p className="text-xs text-gray-400 mt-1">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Actions</h2>
          <div className="grid grid-cols-2 gap-4">
            {quickActions.map((action, index) => (
              <button
                key={index}
                onClick={() => openModal(action.type)}
                className="p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-blue-800 hover:bg-blue-100 transition-colors text-center"
              >
                <span className="text-2xl block mb-2">{action.icon && <action.icon />}</span>
                <p className="text-sm font-medium text-gray-700">{action.label}</p>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-11/12 max-w-md max-h-[90vh] overflow-y-auto">
            <h3 className="text-lg font-semibold mb-4">
              {modalType === "contact" ? "Add Contact" : modalType === "company" ? "Add Company" : modalType === "deal" ? "Create Deal" : "New Task"}
            </h3>

            {/* Add Contact Form */}
            {modalType === "contact" && (
              <form onSubmit={submitContactForm} className="space-y-4">
                <input type="text" name="name" placeholder="Name" value={contactForm.name} onChange={handleContactChange} className="w-full p-2 border rounded" required />
                <input type="email" name="email" placeholder="Email" value={contactForm.email} onChange={handleContactChange} className="w-full p-2 border rounded" required />
                <input type="tel" name="phone" placeholder="Phone" value={contactForm.phone} onChange={handleContactChange} className="w-full p-2 border rounded" required />
                <input type="text" name="company" placeholder="Company" value={contactForm.company} onChange={handleContactChange} className="w-full p-2 border rounded" />
                <input type="text" name="title" placeholder="Title" value={contactForm.title} onChange={handleContactChange} className="w-full p-2 border rounded" />
                <select name="status" value={contactForm.status} onChange={handleContactChange} className="w-full p-2 border rounded">
                  <option value="Lead">Lead</option>
                  <option value="Customer">Customer</option>
                  <option value="Partner">Partner</option>
                </select>
                <div className="flex justify-end gap-2">
                  <button type="button" onClick={closeModal} className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400">Cancel</button>
                  <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Add Contact</button>
                </div>
              </form>
            )}

            {/* Placeholder for other modals */}
            {modalType !== "contact" && <p className="mb-4">Form for {modalType} goes here...</p>}
          </div>
        </div>
      )}
    </div>
  );
}
