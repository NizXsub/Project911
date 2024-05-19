import React from 'react';

const SubmissionCard = ({ name, file, portal, space, date }) => (
  <div className="bg-white shadow-md rounded-md p-4 mb-2 flex justify-between items-center">
    <div className="flex flex-col">
      <span className="font-semibold">{name}</span>
      <span className="text-gray-600">File: {file}</span>
      <span className="text-gray-600">Portal: {portal}</span>
      <span className="text-gray-600">Space: {space}</span>
    </div>
    <span className="text-gray-500">{date}</span>
  </div>
);

const Section = ({ title, children }) => (
  <div className="bg-white h-[20%] shadow-md rounded-md p-4 mb-4 overflow-y-auto">
    <h2 className="text-xl font-semibold mb-2">{title}</h2>
    {children}
  </div>
);

const Dashboard = () => (
  <div className="flex flex-col p-6 bg-gray-100 min-h-screen">
    <Section title="Submitted Files">
      <SubmissionCard 
        name="John Doe"
        file="report.pdf"
        portal="Portal A"
        space="Space 1"
        date="2024-05-19"
      />
      <SubmissionCard 
        name="Jane Smith"
        file="summary.docx"
        portal="Portal B"
        space="Space 2"
        date="2024-05-18"
      />
      {/* Add more SubmissionCard components as needed */}
    </Section>
    <Section title="Ongoing Portals">
      {/* Content for Ongoing Portals */}
    </Section>
    <Section title="Submitted MCQ Paper">
      {/* Content for Submitted MCQ Paper */}
    </Section>
    <Section title="Ongoing MCQ Papers">
      {/* Content for Ongoing MCQ Papers */}
    </Section>
  </div>
);

export default Dashboard;
