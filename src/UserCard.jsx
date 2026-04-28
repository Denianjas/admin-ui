import React, {useState} from "react";

function UserCard(props) {
  const { name, email, street, city, ...rest} = props;
  const [clicked, setClicked] = useState(false);

  console.log(Object.entries(rest)); // untuk melihat properti tambahan yang diterima

  return (
    <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow">
      <h2 className="text-xl font-semibold text-gray-800 mb-2">{name}</h2>
      <p className="text-gray-600">
        <span className="font-medium">Email:</span> {email}
      </p>
      <p className="text-gray-600">
        <span className="font-medium">Address:</span> {street}, {city}
      </p>
      
            {/* Menampilkan data tambahan dari rest */}
      {Object.entries(rest).map(([key, value]) => (
        <p key={key} className="text-gray-600">
          <span className="font-medium capitalize">{key}:</span> {value}
        </p>
      ))}

      {/* Tombol yang sudah diperbaiki */}
      <button 
      className={`${clicked ? "bg-green-500" : "bg-gray-500"} text-white p-2 rounded-md`}
      onClick={() => setClicked(true)}
      >
      {clicked ? "Tombol sudah diclick" : "Silakan click"}
      </button>
    </div>
  );
}

export default UserCard;