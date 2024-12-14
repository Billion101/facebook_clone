function Widgets() {
  const contacts = [
    { id: 1, name: "John Doe", image: "https://placekitten.com/32/32" },
    { id: 2, name: "Jane Smith", image: "https://placekitten.com/33/33" },
    { id: 3, name: "Mike Johnson", image: "https://placekitten.com/34/34" },
    { id: 4, name: "Sarah Williams", image: "https://placekitten.com/35/35" },
    { id: 5, name: "David Brown", image: "https://placekitten.com/36/36" },
  ];

  return (
    <div className="hidden xl:flex flex-col w-[280px] p-4 mt-5 fixed right-0">
      <div className="flex justify-between items-center text-gray-500 mb-5">
        <h2 className="text-lg font-semibold">Contacts</h2>
      </div>

      {contacts.map((contact) => (
        <div
          key={contact.id}
          className="flex items-center space-x-3 p-2 hover:bg-gray-200 rounded-xl cursor-pointer"
        >
          <img
            className="rounded-full w-8 h-8"
            src={contact.image}
            alt={contact.name}
          />
          <p className="font-medium text-sm">{contact.name}</p>
        </div>
      ))}
    </div>
  );
}

export default Widgets;