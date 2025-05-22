'use client'

import { FormQuery } from "../lib/defintions"
import { v4 as uuidv4 } from 'uuid';
import { useState } from "react"
import { useRouter } from "next/navigation";

import Form from "../ui/components/Form"

export default function Page() {
    const router = useRouter();
  const [formData, setFormData] = useState({
    title: '',
    message: '',
    unlockDate: '',
    media: {},
    isPublic: null
  });

  const handleClick = async (e) => {
    e.preventDefault();
    const uuid = uuidv4();
    try {
      const res = await fetch('/api/capsules', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: uuid,
          title: formData.title,
          message: formData.message,
          unlockDate: formData.unlockDate,
          media: formData.media,
          isPublic: formData.isPublic
        }),
      });

      if (res.ok) {
        console.log('Capsule created successfully');
        router.push('/dashboard');
        setFormData({
          title: '',
          message: '',
          unlockDate: '',
          media: {},
          isPublic: false
        });
      } else {
        console.error('Error creating capsule');
      }
    } catch (err) {
      console.error('Network error:', err);
    }
  };

  const form: FormQuery = {
    headline: 'Create Your Time Capsule',
    subHeadline: "Write a message to your future self. We'll lock it away until the date you choose.",
    formData: formData,
    setFormData: setFormData,
    fields: [
      { name: "Capsule Title", type: "text", value: formData.title, onChange: (e) => setFormData({ ...formData, title: e.target.value }) },
      { name: "Message", type: "textarea", value: formData.message, onChange: (e) => setFormData({ ...formData, message: e.target.value }) },
      { name: "Unlock Date", type: "date", value: formData.unlockDate, onChange: (e) => setFormData({ ...formData, unlockDate: e.target.value }) },
      { name: "Upload a File", type: "file", onChange: (e) => setFormData({ ...formData, media: e.target.files[0] }) },
      { name: "Make It Public", type: "radio", values: ["yes", "no"], value: formData.isPublic ? "yes" : "no", onChange: (e) => setFormData({ ...formData, isPublic: e.target.value === "yes" }) },
    ],
    buttons: [
      { name: 'Seal My Capsule', onClick: handleClick }
    ]
  };

  return (
    <div className="py-20 sm:py-40 flex flex-col items-center justify-center">
      <Form form={form} />
    </div>
  );
}
