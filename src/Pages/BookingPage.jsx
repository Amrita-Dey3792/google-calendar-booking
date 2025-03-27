import React, { useState } from "react";

function GoogleCalendarEmbed() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const calendarLink =
    "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1eP6JMKEaRfb0o9qYMqJ0opDkjJu0h5pynihAnEoU5J9KlDJaSLK_fNPlG1nTK4kP7WnYbfwcX?gv=true"; // Google Calendar link

  // Toggle modal visibility
  const toggleModal = () => setIsModalOpen(!isModalOpen);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600 text-white p-5">
      <h1 className="text-4xl font-semibold mb-4">Book a Call with Anirban</h1>
      <p className="text-xl mb-6">
        Schedule a time that works best for you. Click the button below to open the calendar.
      </p>

      {/* Button to open the modal */}
      <button
        onClick={toggleModal}
        className="px-6 py-3 bg-yellow-400 text-black font-bold rounded-lg shadow-lg hover:bg-yellow-500 transition duration-300"
      >
        Book a Call
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-opacity-30 backdrop-blur-md flex items-center justify-center z-50">
          <div className="bg-white rounded-lg w-11/12 md:w-2/3 lg:w-3/5 h-[90vh] p-6 flex flex-col">
            <iframe
              src={calendarLink}
              width="100%"
              height="100%"
              className="flex-grow"
              style={{ border: "none" }}
              title="Google Calendar Booking"
            />
            <div className="flex justify-end mt-4">
              <button
                onClick={toggleModal}
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition duration-300"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default GoogleCalendarEmbed;
