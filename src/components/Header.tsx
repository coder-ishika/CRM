"use client";


export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-gray-100 rounded-lg">
            <span className="text-xl"></span>
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-lg">
            <span className="text-xl"></span>
          </button>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="text-right">
            <p className="text-sm font-medium text-gray-900">John Doe</p>
            <p className="text-xs text-gray-500">john@example.com</p>
          </div>
          <div className="w-10 h-10 bg-blue-900 rounded-full flex items-center justify-center text-white font-semibold">
            JD
          </div>
        </div>
      </div>
    </header>
  );
}

