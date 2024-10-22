import React, { useState } from 'react';

const BloodGroupProfiles = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedBloodGroup, setSelectedBloodGroup] = useState("All");

  const bloodGroupList = [
  { name: "MD Rijoan Maruf", bloodGroup: "O+", address: "Dadudkandi, Cumilla", phoneNumber: "01813606468", schoolName: "Abeda Noor High School", sscBatch: 2020, timestamp: "16/08/2024 20:50:21" },
  { name: "Saleh", bloodGroup: "A+", address: "Jashore", phoneNumber: "01628013342", schoolName: "Abeda Noor High School", sscBatch: 2020, timestamp: "16/08/2024 21:20:24" },
  { name: "Sourav Bhakta", bloodGroup: "A+", address: "Dollai Nowabpur", phoneNumber: "01642907185", schoolName: "Abeda Noor High School", sscBatch: 2020, timestamp: "16/08/2024 23:33:52" },
  { name: "Sadman Alam Sami", bloodGroup: "A+", address: "Tejgaon, Dhaka", phoneNumber: "01895201275", schoolName: "Abeda Noor High School", sscBatch: 2020, timestamp: "17/08/2024 06:05:30" },
  { name: "Md Robiul Alom", bloodGroup: "A+", address: "Gallai, Chandina, Comilla", phoneNumber: "01768513892", schoolName: "Abeda Noor High School", sscBatch: "SSC 25", timestamp: "17/08/2024 09:42:22" },
  { name: "Md Mainul Islam", bloodGroup: "A+", address: "Pachdhara, Gollai, Chandina, Cumilla", phoneNumber: "01886334427", schoolName: "Abeda Noor High School", sscBatch: 19, timestamp: "17/08/2024 10:11:35" },
  { name: "Khadiza Towsin Efty", bloodGroup: "A+", address: "Dhanshiri, Chandina, Cumilla", phoneNumber: "01935572784", schoolName: "Matribhumi Model School and College", sscBatch: 2025, timestamp: "17/08/2024 11:41:41" },
  { name: "Sabrina Afrin Neha", bloodGroup: "A+", address: "Chandina, Cumilla", phoneNumber: "01846664154", schoolName: "Matribhumi Model School and College", sscBatch: 2024, timestamp: "17/08/2024 17:12:34" },
  { name: "Abu Musha", bloodGroup: "A+", address: "Dhaka", phoneNumber: "01857714419", schoolName: "Abeda Noor High School", sscBatch: 2018, timestamp: "18/08/2024 23:00:17" },
  { name: "Md. Riyaj Uddin Shawon", bloodGroup: "A+", address: "Cumilla Sadar, Cumilla", phoneNumber: "01945707212", schoolName: "Abeda Noor High School", sscBatch: 2018, timestamp: "18/08/2024 23:01:57" },
  { name: "Sourav Debnath", bloodGroup: "AB+", address: "Barkarai, Chandina, Cumilla", phoneNumber: "01811327091", schoolName: "Abeda Noor High School", sscBatch: 2020, timestamp: "16/08/2024 22:06:51" },
  { name: "Farhana", bloodGroup: "AB+", address: "Miyabazar, Chauddagram, Cumilla", phoneNumber: "01872314541", schoolName: "Miya Bazar TR Girls High School", sscBatch: 2024, timestamp: "17/08/2024 10:57:58" },
  { name: "Mehedi Hasan", bloodGroup: "AB+", address: "Cumilla", phoneNumber: "01866056363", schoolName: "Abeda Noor High School", sscBatch: 2016, timestamp: "17/08/2024 15:17:37" },
  { name: "Md. Abu Musa", bloodGroup: "AB+", address: "Nulpuni, Ombarpur, Chandina, Cumilla", phoneNumber: "01848179108", schoolName: "Abeda Noor High School", sscBatch: 2016, timestamp: "17/08/2024 20:02:47" },
  { name: "Mojammal Hossen", bloodGroup: "AB+", address: "Gollai, Chandina, Cumilla", phoneNumber: "01925435602", schoolName: "Abeda Noor High School", sscBatch: 2018, timestamp: "18/08/2024 23:43:53" },
  { name: "MD Mainuddin Mahin", bloodGroup: "B-", address: "Gollia Complex", phoneNumber: "+97470246369", schoolName: "Abeda Noor High School", sscBatch: 2016, timestamp: "16/08/2024 22:41:42" },
  { name: "Rayhan", bloodGroup: "B+", address: "Atomor, Kachua, Chandpur", phoneNumber: "01745980874", schoolName: "Abeda Noor High School", sscBatch: 2020, timestamp: "16/08/2024 21:14:23" },
  { name: "Alamgir Hossen", bloodGroup: "B+", address: "Demra, Jatrabari, Dhaka", phoneNumber: "01409197807", schoolName: "Abeda Noor High School", sscBatch: 2020, timestamp: "16/08/2024 21:29:23" },
  { name: "Md Jobaer Ahmed", bloodGroup: "B+", address: "Nowabpur", phoneNumber: "01851299186", schoolName: "Abeda Noor High School", sscBatch: 2021, timestamp: "16/08/2024 21:36:42" },
  { name: "Mohammed Ekramul Haq", bloodGroup: "B+", address: "House 24, Avenue-5, Mirpur-6, Dhaka 1216", phoneNumber: "01813100110", schoolName: "Abeda Noor High School", sscBatch: 2020, timestamp: "16/08/2024 22:17:06" },
  { name: "MD. Sabuj Munshi", bloodGroup: "B+", address: "Fakirapool (Postal Colony), Motijheel, Dhaka-1000", phoneNumber: "01882881743", schoolName: "Abeda Noor High School", sscBatch: 2016, timestamp: "16/08/2024 22:43:53" },
  { name: "Md Jakir Hasan", bloodGroup: "B+", address: "Dhaka", phoneNumber: "01648006773", schoolName: "Abeda Noor High School", sscBatch: 2020, timestamp: "16/08/2024 22:54:24" },
  { name: "Md. Salman Mahmud Shifat", bloodGroup: "B+", address: "Rajshahi, Bangladesh", phoneNumber: "01603515828", schoolName: "Abeda Noor High School", sscBatch: 2020, timestamp: "16/08/2024 22:54:53" },
  { name: "Rahat Muntasir", bloodGroup: "B+", address: "Dollai Nowabpur, Chandina, Cumilla", phoneNumber: "01814152399", schoolName: "Abeda Noor High School", sscBatch: 2020, timestamp: "16/08/2024 23:19:25" },
  { name: "MD. Arifur Rahaman Reyad", bloodGroup: "B+", address: "Bashundhara R/A", phoneNumber: "01771894989", schoolName: "Noakhali Zilla School", sscBatch: 2018, timestamp: "16/08/2024 23:31:06" },
  { name: "MD. Mahil Mozumdar", bloodGroup: "B+", address: "Amborpur, Mohichail, Chandina, Cumilla", phoneNumber: "01609439177", schoolName: "Amborpur High School", sscBatch: 2020, timestamp: "16/08/2024 23:32:51" },
  { name: "Md. Mehedi Hasan", bloodGroup: "B+", address: "Chandina", phoneNumber: "01868961138", schoolName: "Abeda Noor High School", sscBatch: 2020, timestamp: "16/08/2024 23:45:22" },
  { name: "Md Saroyar Hossen", bloodGroup: "B+", address: "Nobabpur, Chandina", phoneNumber: "01833806366", schoolName: "Abeda Noor High School", sscBatch: 2016, timestamp: "17/08/2024 09:08:16" },
  { name: "Dip Karmakar", bloodGroup: "B+", address: "Darora, Chandina, Cumilla", phoneNumber: "01844709773", schoolName: "Kangai High School", sscBatch: 2025, timestamp: "17/08/2024 09:20:15" },
  { name: "Payel Acharjee", bloodGroup: "B+", address: "Madhaiya, Chandina, Cumilla", phoneNumber: "01998163852", schoolName: "Matribhumi Model School and College", sscBatch: 2024, timestamp: "17/08/2024 11:06:04" },
  { name: "Arafat Ivne Siyam Omar", bloodGroup: "B+", address: "Koilain, Chandina, Cumilla", phoneNumber: "01720085629", schoolName: "Abeda Noor High School", sscBatch: 2025, timestamp: "17/08/2024 11:38:37" },
  { name: "Mariya Akter", bloodGroup: "B+", address: "Baropara, Cumilla", phoneNumber: "01619121824", schoolName: "Gouripur Subal Aftab High School", sscBatch: 2021, timestamp: "20/08/2024 19:20:30" },
  { name: "Abul Kalam Azad", bloodGroup: "O-", address: "Dewkamta", phoneNumber: "01616594652", schoolName: "Abeda Noor High School", sscBatch: 2020, timestamp: "16/08/2024 21:10:55" },
  { name: "Faysal Shihab", bloodGroup: "O+", address: "Chandina, Cumilla", phoneNumber: "01966947491", schoolName: "Abeda Noor High School", sscBatch: 2020, timestamp: "16/08/2024 20:45:53" },
  { name: "Mehedi Hasan", bloodGroup: "O+", address: "Bashantopur, Gallai, Chandina", phoneNumber: "01318824544", schoolName: "Abeda Noor High School", sscBatch: 2025, timestamp: "16/08/2024 21:11:01" },
  { name: "Amatur Rafiue Jemim", bloodGroup: "O+", address: "Gallai, Chandina, Cumilla", phoneNumber: "01994438254", schoolName: "Abeda Noor Girls High School", sscBatch: 2019, timestamp: "16/08/2024 22:19:19" },
  { name: "Farhad", bloodGroup: "O+", address: "GI Bazar, Chandina, Cumilla", phoneNumber: "01879854052", schoolName: "Abeda Noor High School", sscBatch: 2016, timestamp: "16/08/2024 22:35:52" },
  { name: "Abdul Kaiyum", bloodGroup: "O+", address: "Jatrabari, Dhaka", phoneNumber: "01626188684", schoolName: "Abeda Noor High School", sscBatch: 2016, timestamp: "16/08/2024 22:43:24" },
  { name: "Mehedi Hasan", bloodGroup: "O+", address: "Cumilla", phoneNumber: "01875338616", schoolName: "Abeda Noor High School", sscBatch: 2016, timestamp: "16/08/2024 23:00:32" },
  { name: "Shakhayat Hossen Tusher", bloodGroup: "O+", address: "Tomchom Bridge, Cumilla", phoneNumber: "01737042340", schoolName: "Abeda Noor High School", sscBatch: 2020, timestamp: "16/08/2024 23:17:02" },
  { name: "Abdullah Al Jubayer (Fahim)", bloodGroup: "O+", address: "Shorikhola, Nobabpur, Chandina, Cumilla", phoneNumber: "01966947491", schoolName: "Abeda Noor High School", sscBatch: 2025, timestamp: "17/08/2024 09:53:11" },
  { name: "Farhana", bloodGroup: "O+", address: "Mia Bazar, Cumilla", phoneNumber: "01872314541", schoolName: "Mia Bazar TR Girls High School", sscBatch: 2024, timestamp: "17/08/2024 11:00:04" },
  { name: "Akash", bloodGroup: "O+", address: "Motijheel, Dhaka", phoneNumber: "01978599260", schoolName: "Abeda Noor High School", sscBatch: 2018, timestamp: "18/08/2024 22:58:18" },
  { name: "Abdur Rahman Chowdury Apurbo", bloodGroup: "O+", address: "Cumilla", phoneNumber: "01822488436", schoolName: "Bhagaban Govt. High School", sscBatch: 2021, timestamp: "20/08/2024 18:25:34" },
  { name: "Sabikun Nahar Nishi", bloodGroup: "O+", address: "Matlab, Chandpur (Present: Baropara, Cumilla)", phoneNumber: "01612902800", schoolName: "Matlab Ganj Pilot Girls High School", sscBatch: 2020, timestamp: "20/08/2024 18:39:42" },
  { name: "Tasfia Tahsin Khan Promi", bloodGroup: "O+", address: "Jhawtala, Cumilla", phoneNumber: "01956357577", schoolName: "Mainamati Medical College", sscBatch: 2020, timestamp: "20/08/2024 21:07:59" },
  { name: "Alamin Parvez", bloodGroup: "O+", address: "Gallai, Chandina, Cumilla", phoneNumber: "01642300659", schoolName: "Abeda Noor High School", sscBatch: 2018, timestamp: "20/08/2024 23:40:18" },
  { name: "Shah Md Abu Sayed", bloodGroup: "O+", address: "Gollai, Chandina, Cumilla", phoneNumber: "01731249585", schoolName: "Abeda Noor High School", sscBatch: 2020, timestamp: "05/09/2024 16:41:01" },
  { name: "M Saeed Sorkar", bloodGroup: "O+", address: "Madhaiya", phoneNumber: "01617525649", schoolName: "Abeda Noor High School", sscBatch: 2025, timestamp: "11/10/2024 16:35:24" }
  ];

  // Filtering based on search term and selected blood group
  const filteredList = bloodGroupList.filter(person => {
    const matchesName = person.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesBloodGroup = selectedBloodGroup === "All" || person.bloodGroup === selectedBloodGroup;
    return matchesName && matchesBloodGroup;
  });

  return (
    <div className="container max-w-[1200px] mx-auto p-6">
      <div className="flex mb-6 space-x-4">
        {/* Search by name */}
        <input
          type="text"
          placeholder="Search by name"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          className="border border-gray-300 rounded-lg p-2 w-full"
        />

        {/* Dropdown to filter by blood group */}
        <select
          value={selectedBloodGroup}
          onChange={e => setSelectedBloodGroup(e.target.value)}
          className="border border-gray-300 rounded-lg p-2"
        >
          <option value="All">All Blood Groups</option>
          <option value="A+">A+</option>
          <option value="A-">A-</option>
          <option value="B+">B+</option>
          <option value="B-">B-</option>
          <option value="AB+">AB+</option>
          <option value="AB-">AB-</option>
          <option value="O+">O+</option>
          <option value="O-">O-</option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredList.map((person, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
            <div className="bg-gradient-to-r from-blue-500 to-green-500 p-4">
              <h2 className="text-white text-2xl font-bold">{person.name}</h2>
              <p className="text-white">{person.bloodGroup}</p>
            </div>
            <div className="p-4">
              <p className="text-gray-700 font-semibold">Address: <span className="font-normal">{person.address}</span></p>
              <p className="text-gray-700 font-semibold">Phone: <span className="font-normal">{person.phoneNumber}</span></p>
              <p className="text-gray-700 font-semibold">School: <span className="font-normal">{person.schoolName}</span></p>
              <p className="text-gray-700 font-semibold">SSC Batch: <span className="font-normal">{person.sscBatch}</span></p>
              <p className="text-gray-700 font-semibold">Timestamp: <span className="font-normal">{person.timestamp}</span></p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BloodGroupProfiles;
