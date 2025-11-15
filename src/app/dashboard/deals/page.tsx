"use client";

import { useState } from "react";
import type { Deal } from "@/types";

const stages = [
  { id: "prospecting", name: "Prospecting", color: "bg-gray-200" },
  { id: "qualification", name: "Qualification", color: "bg-blue-300" },
  { id: "proposal", name: "Proposal", color: "bg-yellow-200" },
  { id: "negotiation", name: "Negotiation", color: "bg-orange-200" },
  { id: "closed-won", name: "Closed Won", color: "bg-green-200" },
  { id: "closed-lost", name: "Closed Lost", color: "bg-red-200" },
];

export default function DealsPage() {
  const [deals, setDeals] = useState<Deal[]>([
    {
      id: "1",
      title: "Acme Corp - Enterprise Package",
      value: 50000,
      stage: "proposal",
      probability: 60,
      contactId: "1",
      companyId: "1",
      expectedCloseDate: "2024-03-15",
      createdAt: "2024-01-15",
    },
    {
      id: "2",
      title: "Tech Solutions - Premium Plan",
      value: 120000,
      stage: "negotiation",
      probability: 80,
      contactId: "2",
      companyId: "2",
      expectedCloseDate: "2024-02-28",
      createdAt: "2024-01-20",
    },
    {
      id: "3",
      title: "Startup Inc - Basic Package",
      value: 25000,
      stage: "qualification",
      probability: 40,
      contactId: "3",
      companyId: "3",
      expectedCloseDate: "2024-04-01",
      createdAt: "2024-02-01",
    },
  ]);

  // ✅ addDeal after state
  const addDeal = () => {
    const newDeal: Deal = {
      id: (deals.length + 1).toString(),
      title: `New Deal #${deals.length + 1}`,
      value: 10000,
      stage: "prospecting",
      probability: 10,
      contactId: "0",
      companyId: "0",
      expectedCloseDate: new Date().toISOString().split("T")[0],
      createdAt: new Date().toISOString().split("T")[0],
    };
    setDeals([...deals, newDeal]);
  };

  const totalValue = deals.reduce((sum, deal) => sum + deal.value, 0);
  const openDeals = deals.filter((deal) => !deal.stage.startsWith("closed-"));
  const wonDeals = deals.filter((deal) => deal.stage === "closed-won");
  const wonValue = wonDeals.reduce((sum, deal) => sum + deal.value, 0);

  return (
    <div className="space-y-6 p-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Deals Pipeline</h1>
          <p className="text-gray-600 mt-1">Manage your sales opportunities</p>
        </div>
        <button
          type="button" // ✅ make sure it's a button element
          onClick={addDeal}
          className="bg-blue-900 hover:bg-blue-950 text-white px-6 py-2 rounded-lg font-medium transition-colors"
        >
          + Create Deal
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-200">
          <p className="text-sm text-gray-600 mb-1">Total Pipeline</p>
          <p className="text-2xl font-bold text-gray-900">${(totalValue / 1000).toFixed(0)}K</p>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-200">
          <p className="text-sm text-gray-600 mb-1">Open Deals</p>
          <p className="text-2xl font-bold text-gray-900">{openDeals.length}</p>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-200">
          <p className="text-sm text-gray-600 mb-1">Won Deals</p>
          <p className="text-2xl font-bold text-gray-900">{wonDeals.length}</p>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-200">
          <p className="text-sm text-gray-600 mb-1">Won Value</p>
          <p className="text-2xl font-bold text-gray-900">${(wonValue / 1000).toFixed(0)}K</p>
        </div>
      </div>

      {/* Pipeline */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 overflow-x-auto">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Sales Pipeline</h2>
        <div className="flex gap-4 min-w-max">
          {stages.map((stage) => {
            const stageDeals = deals.filter((deal) => deal.stage === stage.id);
            const stageValue = stageDeals.reduce((sum, deal) => sum + deal.value, 0);

            return (
              <div key={stage.id} className="flex-shrink-0 w-64">
                <div className={`${stage.color} rounded-lg p-3 mb-3`}>
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-gray-900">{stage.name}</h3>
                    <span className="text-sm text-gray-700">{stageDeals.length}</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">${(stageValue / 1000).toFixed(0)}K</p>
                </div>
                <div className="space-y-2">
                  {stageDeals.map((deal) => (
                    <div
                      key={deal.id}
                      className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer"
                    >
                      <h4 className="font-medium text-gray-900 mb-2">{deal.title}</h4>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-lg font-semibold text-gray-900">
                          ${(deal.value / 1000).toFixed(0)}K
                        </span>
                        <span className="text-xs text-gray-500">{deal.probability}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-blue-900 h-2 rounded-full"
                          style={{ width: `${deal.probability}%` }}
                        ></div>
                      </div>
                      <p className="text-xs text-gray-500 mt-2">
                        Close: {new Date(deal.expectedCloseDate).toLocaleDateString()}
                      </p>
                    </div>
                  ))}
                  {stageDeals.length === 0 && (
                    <div className="text-center py-8 text-gray-400 text-sm border-2 border-dashed border-gray-200 rounded-lg">
                      No deals
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
