
import { useState } from 'react';
import {
  ChevronLeft, Plus, ChevronRight, ChevronDown, Eye, Info, Upload, FolderPlus, FileText, Search, MoreVertical
} from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Tabs, TabsList, TabsTrigger } from './ui/tabs';

export default function TeachersCenter() {
  const [activeTab, setActiveTab] = useState('Materials');
  const [dropdownOpen, setDropdownOpen] = useState(true);
  const [search, setSearch] = useState('');

  const files = [
    {
      name: 'Chapter 2 revision notes.pdf',
      size: '23MB',
      created: '25/02/2025 10:35 pm',
      by: 'Sir',
      modified: 'Friday, 25/02/2025, 10:35 pm',
      type: 'PDF Document',
      visibleTo: 'Batch 1, Batch 2, Batch 3 — For both online & physical students',
    }
  ];

  const filteredFiles = files.filter(f =>
    f.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex min-h-screen bg-white text-sm">
      <div className="w-64 p-4 border-r space-y-2">
        <div className="font-medium flex items-center gap-2 mb-2">
          <span className="bg-black text-white p-1 rounded-full">
            <ChevronLeft size={16} />
          </span>
          Teacher’s Center
        </div>
        <div className="text-sm">Teach</div>
        <div className="text-sm">Dashboard</div>
        <div className="text-sm font-medium flex items-center justify-between cursor-pointer" onClick={() => setDropdownOpen(!dropdownOpen)}>
          <span>Manage Batch</span>
          {dropdownOpen ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
        </div>
        {dropdownOpen && (
          <div className="pl-4 text-blue-600 rounded bg-blue-100 py-1">All Batches</div>
        )}
        <div className="pl-4 text-sm">Resources</div>
        <div className="text-sm">My Earnings</div>
        <div className="text-sm">Timetable</div>
        <div className="text-sm">Analytics</div>
        <div className="text-sm">Manage Profile</div>
        <div className="text-sm">Settings</div>
      </div>

      <div className="flex-1 p-6 space-y-4">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <select className="border px-2 py-1 rounded text-sm">
              <option>Course for Chemistry</option>
            </select>
            <select className="border px-2 py-1 rounded text-sm">
              <option>All Batches</option>
            </select>
          </div>
          <div className="flex items-center gap-4">
            <Button>Take Class</Button>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-blue-400" />
              <div className="text-right">
                <div className="font-semibold text-sm">Sir 1</div>
                <div className="text-xs text-gray-500">Chemistry | Level 3</div>
              </div>
            </div>
          </div>
        </div>

        {/* Black progress line */}
        <div className="bg-black h-[3px] rounded-full w-full" />

        {/* Tabs */}
        <Tabs>
          <TabsList>
            {['Students', 'Announcements', 'Materials', 'Homework', 'Attendance', 'Discussion'].map(tab => (
              <TabsTrigger
                key={tab}
                value={tab}
                isActive={activeTab === tab}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        {/* Secondary nav */}
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center gap-6 text-sm">
            <div className="font-semibold border-b-2 border-black pb-1">Content</div>
            <div>Course Details</div>
            <div>Revision</div>
            <div className="text-gray-400 flex items-center gap-1"><Plus size={14} /> Add main Folder</div>
          </div>
          <div className="flex items-center gap-2">
            <input type="text" placeholder="Search files" className="border rounded px-2 py-1 text-sm" value={search} onChange={e => setSearch(e.target.value)} />
            <Upload size={16} />
            <Info size={16} />
            <Eye size={16} />
            <MoreVertical size={16} />
          </div>
        </div>

        {/* Breadcrumb */}
        <div className="flex items-center gap-2 mt-2 text-sm">
          <ChevronLeft size={16} />
          <span className="text-blue-600 underline">Chapter 1</span>
          <ChevronRight size={16} />
          <span className="text-blue-600 underline">Chapter 1.1</span>
          <ChevronRight size={16} />
          <div className="border px-2 py-1 rounded font-medium">Chapter 1</div>
        </div>

        {/* File List */}
        <Card>
          <CardContent className="space-y-4">
            {filteredFiles.map((file, idx) => (
              <div key={idx} className="border bg-white p-3 rounded flex flex-col gap-2 shadow-sm">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <FileText size={20} />
                    <div className="font-medium">{file.name}</div>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Info size={16} />
                    <Eye size={16} />
                    <select className="text-sm border px-1 rounded">
                      <option>Access to</option>
                    </select>
                    <select className="text-sm border px-1 rounded">
                      <option>Actions</option>
                    </select>
                  </div>
                </div>
                <div className="text-xs text-gray-500 pl-8">
                  Created on: {file.created}<br />
                  Created by: {file.by}<br />
                  Last Modified: {file.modified}<br />
                  Last Modified by: {file.by}<br />
                  Kind: {file.type}<br />
                  Size: {file.size}<br />
                  Visible to: {file.visibleTo}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 pt-4">
          <ActionButton icon={<FolderPlus size={16} />} label="Add Folder" />
          <ActionButton icon={<Upload size={16} />} label="Upload File" />
          <ActionButton icon={<Upload size={16} />} label="Upload Folder" />
          <ActionButton icon={<FileText size={16} />} label="Add Text" />
          <ActionButton label="Paste" />
        </div>
      </div>
    </div>
  );
}

function ActionButton({ icon, label }) {
  return (
    <button
      onClick={() => alert(`${label} clicked`)}
      className="border rounded px-3 py-2 flex items-center gap-2 text-sm hover:bg-gray-100"
    >
      {icon}
      {label}
    </button>
  );
}
