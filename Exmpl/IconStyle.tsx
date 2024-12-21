// import { useEffect, useState } from "react";
// import * as Icons from "lucide-react";
// import { Service } from "@/types"; // Assuming you have defined a Service type
// import axios from "axios";

// export function ServicesList() {
//   const [services, setServices] = useState<Service[]>([]);

//   useEffect(() => {
//     // Fetch data from your backend or MongoDB
//     axios.get("/api/services")
//       .then((response) => {
//         setServices(response.data);
//       })
//       .catch((error) => {
//         console.error("Error fetching services:", error);
//       });
//   }, []);

//   return (
//     <div className="space-y-8">
//       {services.map((service) => {
//         // Dynamically import the icon component based on the name
//         const Icon = Icons[service.icon as keyof typeof Icons];

//         return (
//           <div key={service.id} className="service-card">
//             <div className="icon">
//               {Icon && <Icon className="h-6 w-6 text-purple-500" />}
//             </div>
//             <h3 className="text-xl font-bold">{service.title}</h3>
//             <p>{service.shortDescription}</p>
//             {/* Render other fields like full description, features, etc. */}
//           </div>
//         );
//       })}
//     </div>
//   );
// }

// import { Schema, model, Document } from "mongoose";

// interface IService extends Document {
//   id: string;
//   title: string;
//   icon: string; // Icon name as a string
//   shortDescription: string;
//   fullDescription: string;
//   features: string[];
//   technologies: string[];
// }

// const serviceSchema = new Schema<IService>({
//   id: { type: String, required: true },
//   title: { type: String, required: true },
//   icon: { type: String, required: true },
//   shortDescription: { type: String, required: true },
//   fullDescription: { type: String, required: true },
//   features: { type: [String], required: true },
//   technologies: { type: [String], required: true },
// });

// const Service = model<IService>("Service", serviceSchema);
// export default Service;

// import { useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Select } from "@/components/ui/select";
// import * as Icons from "lucide-react";
// import axios from "axios";

// export function ServiceForm() {
//   const [title, setTitle] = useState("");
//   const [icon, setIcon] = useState("");
//   const [shortDescription, setShortDescription] = useState("");
//   const [fullDescription, setFullDescription] = useState("");
//   const [features, setFeatures] = useState<string[]>([]);
//   const [technologies, setTechnologies] = useState<string[]>([]);

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     const serviceData = {
//       title,
//       icon, // Icon is passed as the string name
//       shortDescription,
//       fullDescription,
//       features,
//       technologies,
//     };

//     try {
//       await axios.post("/api/services", serviceData);
//       alert("Service added successfully");
//     } catch (error) {
//       console.error("Error adding service:", error);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="space-y-6">
//       <div>
//         <label>Title</label>
//         <Input
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//           required
//         />
//       </div>

//       <div>
//         <label>Icon</label>
//         <Select value={icon} onChange={(e) => setIcon(e.target.value)}>
//           <Select.Trigger>
//             <Select.Value placeholder="Select an icon" />
//           </Select.Trigger>
//           <Select.Content>
//             {Object.keys(Icons).map((iconName) => (
//               <Select.Item key={iconName} value={iconName}>
//                 <div className="flex items-center gap-2">
//                   {React.createElement(Icons[iconName as keyof typeof Icons])}
//                   <span>{iconName}</span>
//                 </div>
//               </Select.Item>
//             ))}
//           </Select.Content>
//         </Select>
//       </div>

//       {/* Add other fields like shortDescription, fullDescription, etc. */}
      
//       <Button type="submit">Add Service</Button>
//     </form>
//   );
// }
