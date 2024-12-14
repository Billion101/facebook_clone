import React from 'react';
import Contact from './Contact';

function Widgets() {
  const contacts = [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Smith" },
    { id: 3, name: "Mike Johnson" },
    { id: 4, name: "Sarah Williams" },
    { id: 5, name: "David Brown" },
  ];

  return (
    <div className="hidden xl:flex flex-col w-[280px] p-4 mt-5 fixed right-0">
      <div className="flex justify-between items-center text-gray-500 mb-5">
        <h2 className="text-lg font-semibold">Contacts</h2>
      </div>

      {contacts.map((contact) => (
        <Contact key={contact.id} {...contact} />
      ))}
    </div>
  );
}

export default Widgets;