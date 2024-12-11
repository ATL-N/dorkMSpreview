// pages/dashboard/messaging/composemessage.jsx
import React, { useState, useEffect } from "react";
import { FaUser, FaEnvelope, FaPaperPlane, FaFileAlt } from "react-icons/fa";
import axios from "axios";
import {
  TextAreaField,
  SelectField,
  InputField,
  MultiSelectDropdown
} from "../../components/inputFieldSelectField";

const ComposeMessage = ({ onClose, onSend, isDetails=false }) => {
  const [messageData, setMessageData] = useState({
    message_type: "general",
    recipients: "",
    subject: "",
    others: '',
    content: "",
  });
  const [templates, setTemplates] = useState([]);
  const [users, setUsers] = useState([]);
  const [staff, setStaff] = useState([]);
  const [parents, setParents] = useState([]);
  const [students, setStudents] = useState([]);
  const [recipientsNotOnList, setRecipientsNotOnList] = useState([]);
  const [studentsInDebt, setStudentsInDebt] = useState([]);
  const [selectedTemplate, setSelectedTemplate] = useState("");
const [selectedStudents, setSelectedStudents] = useState([]);
const user = process.env.DB_USER;
console.log('user',user)

  useEffect(() => {
    fetchTemplates();
     fetchStudents();
  }, []);

  

  const fetchTemplates = async () => {
    // Replace with actual API call
    const data = [
      {
        id: 1,
        name: "Welcome Email",
        subject: "Welcome to Our School",
        content:
          "Dear {name},\n\nWelcome to our school! We're excited to have you join us...",
      },
      {
        id: 2,
        name: "Event Reminder",
        subject: "Reminder: {event_name}",
        content:
          "Dear {name},\n\nThis is a reminder about the upcoming event: {event_name}...",
      },

      {
        id: 3,
        name: "Fee Reminder(professional)",
        subject: "Reminder: {Fee Reminder}",
        content: `Dear Parent, this is a reminder that school fees for {Student Name} are overdue. Kindly settle the outstanding balance of GHS {Amount} before [Date] to avoid disruption of academic services.`,
      },
      {
        id: 4,
        name: "Fee Reminder(urgent)",
        subject: "Reminder: {Fee Reminder}",
        content: `Attention Parent: School fees for {Student Name} are past due. Kindly clear the GHS {Amount} balance by [Date] to prevent academic service suspension.`,
      },
      {
        id: 5,
        name: "Fee Reminder(Empathetic)",
        subject: "Reminder: {Fee Reminder}",
        content: `Attention Parent: School fees for {Student Name} are past due. Kindly clear the GHS {Amount} balance by [Date] to prevent academic service suspension.`,
      },
      // Add more template data as needed
    ];
    setTemplates(data);
  };

  const fetchStudents = async () => {
    try {
      // Replace with your actual API call
      const response = await axios.get("/api/students/getstudents");
      console
      const formattedStudents = response.data.map((student) => ({
        // ...response.data,
        value: student.id,
        label: `${student.name} - ${student.class}`,
        phone: student.phone
      }));
      console.log('formattedStudents', formattedStudents)
      setStudents(formattedStudents);
    } catch (error) {
      console.error("Error fetching students:", error);
    }
  };

  // // Add this to your useEffect
  // useEffect(() => {
  //   if (messageData.recipients === "select_students") {
  //     fetchStudents();
  //   }
  // }, [messageData.recipients]);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setMessageData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    // console.log('messageData', messageData)
  };

  const handleTemplateChange = (e) => {
    const templateId = parseInt(e.target.value);
    setSelectedTemplate(templateId);
    if (templateId) {
      const template = templates.find((t) => t.id === templateId);
      setMessageData((prevData) => ({
        ...prevData,
        subject: template.subject,
        content: template.content,
      }));
    }
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   console.log("handle submit function");
  //   const data = {
  //     sender: "ATL Trying",
  //     message: "Nelson's Second message text here",
  //     recipients: ["0551577446"],
  //     sandbox: true,
  //   };

  //   const config = {
  //     method: "post",
  //     url: "https://sms.arkesel.com/api/v2/sms/send",
  //     headers: {
  //       "api-key": "Q3pCaFNaSWJFQ2RyRE5GZHRvUEw",
  //     },
  //     data: data,
  //   };

  //   try {
  //     const response = await axios(config);
  //     console.log(JSON.stringify(response.data));
  //     // Handle successful SMS send (e.g., show success message)
  //     onClose();
  //   } catch (error) {
  //     console.error(error);
  //     // Handle error (e.g., show error message)
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let recipients = [];
    if (messageData.recipients === "select students") {
      const selectedStudentsData = students.filter((student) =>
        selectedStudents.includes(student?.value)
      );
      recipients = selectedStudentsData.map((student) => student.phone);
    }

    try {
      const response = await axios.post("/api/messaging/send-message", {
        message: messageData.content,
        recipients,
      });
      console.log(response.data);
      onClose();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-cyan-700">
        {process.env.DB_USER}Compose Message
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <SelectField
            label="Message Type"
            name="message_type"
            icon={<FaEnvelope />}
            value={messageData?.message_type}
            onChange={handleChange}
            isReadOnly={isDetails}
            isDisAbled={isDetails}
            isRequired={true}
            options={[
              { value: "", label: "Select message category" },
              { value: "general", label: "General" },
              { value: "fee_reminder", label: "Fee Reminder" },
              // { value: "B+", label: "B+" },
            ]}
          />
          {messageData?.message_type === "fee_reminder" && (
            <SelectField
              label="Recipients"
              name="recipients"
              icon={<FaEnvelope />}
              value={messageData?.recipients}
              onChange={handleChange}
              isReadOnly={isDetails}
              isDisAbled={isDetails}
              isRequired={true}
              options={[
                { value: "", label: "Select recipient group" },
                { value: "students_owing", label: "All Students Owing" },
                { value: "class_students_owing", label: "Students by class" },
                // { value: "parents", label: "All Parents" },
                // { value: "B+", label: "B+" },
              ]}
            />
          )}

          {messageData?.message_type === "general" && (
            <>
              <SelectField
                label="Recipients"
                name="recipients"
                icon={<FaEnvelope />}
                value={messageData?.recipients}
                onChange={handleChange}
                isReadOnly={isDetails}
                isDisAbled={isDetails}
                isRequired={true}
                options={[
                  { value: "", label: "Select recipient group" },
                  { value: "users", label: "All Users" },
                  { value: "students", label: "All Students" },
                  { value: "staff", label: "All Staff" },
                  { value: "parents", label: "All Parents" },
                  { value: "select students", label: "Select Students" },
                  { value: "suppliers", label: "Suppliers" },
                  { value: "Others", label: "Others" },
                ]}
              />

              {messageData.recipients === "select students" && (
                <MultiSelectDropdown
                  label="Select Students"
                  options={students}
                  selectedValues={selectedStudents}
                  onChange={setSelectedStudents}
                  placeholder="Choose students..."
                  isRequired={true}
                />
              )}

              {messageData.recipients === "Others" && (
                <InputField
                  label="Others Numbers "
                  name="others"
                  type="text"
                  icon={<FaFileAlt />}
                  value={messageData?.others}
                  placeholder={"eg. 02000000000, 233540235697"}
                  title="separate the numbers with comma. Eg. 02000000000, 233540235697,"
                  onChange={handleChange}
                  isReadOnly={isDetails}
                  isRequired={true}
                />
              )}
            </>
          )}

          <SelectField
            label="Use Template"
            name="template"
            icon={<FaEnvelope />}
            value={selectedTemplate}
            onChange={handleTemplateChange}
            isReadOnly={isDetails}
            isDisAbled={isDetails}
            isRequired={false}
            options={[
              { value: "", label: "Select a template" },
              ...templates?.map((template) => ({
                value: template.id,
                label: template.name,
              })),
              // { value: "general", label: "General" },
              // { value: "fee_reminder", label: "Fee Reminder" },
              // { value: "B+", label: "B+" },
            ]}
          />
        </div>
        <TextAreaField
          label="Message"
          name="content"
          // icon={<FaPaperPlane className="text-gray-400" />}
          value={messageData?.content}
          onChange={handleChange}
          isReadOnly={isDetails}
          maxLength={160}
          placeholder="Enter message content"
        />

        <div className="flex items-center justify-between">
          <button
            className="bg-cyan-700 hover:bg-cyan-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex items-center"
            type="submit"
          >
            <FaPaperPlane className="mr-2" /> Broadcast Message
          </button>
          <button
            className="bg-gray-400 hover:bg-gray-300 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default ComposeMessage;
