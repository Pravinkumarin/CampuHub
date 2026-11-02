"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Input from "@/components/Input";
import Select from "@/components/Select";
import Button from "@/components/Button";
import { useCampus } from "@/context/CampusContext";

const emptyForm = {
  type: "Lost",
  name: "",
  description: "",
  location: "",
  date: "",
  contact: "",
};

export default function ReportItemPage() {
  const router = useRouter();
  const { addItem } = useCampus();
  const [form, setForm] = useState(emptyForm);
  const [errors, setErrors] = useState({});

  // One function to update any field
  function handleChange(field) {
    return (e) => setForm({ ...form, [field]: e.target.value });
  }

  function validate() {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Item name is required";
    if (!form.location.trim()) newErrors.location = "Location is required";
    if (!form.contact.trim()) newErrors.contact = "Contact is required";
    return newErrors;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newErrors = validate();
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    addItem({
      ...form,
      date: form.date || new Date().toISOString().slice(0, 10),
    });
    router.push("/lost-found");
  }

  return (
    <div className="form-wrap">
      <h1>Report an item</h1>
      <p className="subtitle">Tell us what you lost or found.</p>

      <form onSubmit={handleSubmit} className="form">
        <Select id="type" label="Type" value={form.type} onChange={handleChange("type")} options={["Lost", "Found"]} />
        <Input id="name" label="Item name" value={form.name} onChange={handleChange("name")} placeholder="e.g. Black wallet" error={errors.name} />
        <Input id="description" label="Description" value={form.description} onChange={handleChange("description")} placeholder="Colour, brand, any mark..." multiline />
        <Input id="location" label="Location" value={form.location} onChange={handleChange("location")} placeholder="e.g. Library" error={errors.location} />
        <Input id="date" label="Date" type="date" value={form.date} onChange={handleChange("date")} />
        <Input id="contact" label="Contact" value={form.contact} onChange={handleChange("contact")} placeholder="Name and phone number" error={errors.contact} />

        <div className="card-actions">
          <Button type="submit">Submit</Button>
          <Button href="/lost-found" variant="outline">Cancel</Button>
        </div>
      </form>
    </div>
  );
}
