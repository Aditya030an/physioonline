// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { FaComments, FaTimes } from "react-icons/fa";

// const FloatingChat = () => {
//   const [open, setOpen] = useState(false);

//   return (
//     <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">

//       {/* Chat Box */}
//       <AnimatePresence>
//         {open && (
//           <motion.div
//             initial={{ opacity: 0, y: 50, scale: 0.9 }}
//             animate={{ opacity: 1, y: 0, scale: 1 }}
//             exit={{ opacity: 0, y: 50, scale: 0.9 }}
//             transition={{ duration: 0.3 }}
//             className="w-[320px] bg-white rounded-2xl shadow-2xl overflow-hidden mb-4"
//           >
//             {/* Header */}
//             <div className="bg-[#00A99D] text-white p-4 flex justify-between items-center">
//               <span className="font-semibold text-sm">
//                 💪 Movement Rehab
//               </span>
//               <FaTimes
//                 className="cursor-pointer"
//                 onClick={() => setOpen(false)}
//               />
//             </div>

//             {/* Message */}
//             <div className="p-4 text-gray-700 text-sm">
//               👋 Hello! How can we help your recovery today?
//             </div>

//             {/* Options */}
//             <div className="flex flex-col border-t">

//               {/* Appointment */}
//               <button
//                 onClick={() => window.open("/appointment", "_self")}
//                 className="p-4 text-blue-600 border-b hover:bg-gray-50 transition text-left"
//               >
//                 📅 Book Physiotherapy Appointment
//               </button>

//               {/* Talk to Physio */}
//               <button
//                 onClick={() =>
//                   window.open("https://wa.me/919424094362", "_blank")
//                 }
//                 className="p-4 text-blue-600 border-b hover:bg-gray-50 transition text-left"
//               >
//                 🩺 Talk to Physiotherapist
//               </button>

//               {/* Exercise Help */}
//               <button
//                 onClick={() => alert("We will guide you with exercises")}
//                 className="p-4 text-blue-600 border-b hover:bg-gray-50 transition text-left"
//               >
//                 🧘 Get Exercise Guidance
//               </button>

//               {/* Pain Consultation */}
//               <button
//                 onClick={() => alert("Describe your pain to proceed")}
//                 className="p-4 text-blue-600 hover:bg-gray-50 transition text-left"
//               >
//                 🦴 Pain Consultation
//               </button>

//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* Floating Button */}
//       <motion.button
//         whileTap={{ scale: 0.9 }}
//         whileHover={{ scale: 1.1 }}
//         onClick={() => setOpen(!open)}
//         className="w-14 h-14 rounded-full bg-gradient-to-r from-teal-500 to-green-500 text-white flex items-center justify-center shadow-xl"
//       >
//         {open ? <FaTimes size={20} /> : <FaComments size={22} />}
//       </motion.button>
//     </div>
//   );
// };

// export default FloatingChat;




import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaComments, FaTimes, FaPaperPlane } from "react-icons/fa";

const FloatingChat = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "bot", text: "👋 Hello! How can we help your recovery today?" }
  ]);
  const [input, setInput] = useState("");

  const bottomRef = useRef(null);

  // Auto scroll
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Bot logic (customize this)
  const getBotReply = (msg) => {
    const text = msg.toLowerCase();

    if (text.includes("appointment")) {
      return "📅 You can book here: /appointment";
    }
    if (text.includes("pain")) {
      return "🦴 Please tell me where exactly you feel pain.";
    }
    if (text.includes("exercise")) {
      return "🧘 I’ll suggest exercises based on your condition.";
    }
    if (text.includes("physio")) {
      return "🩺 Connecting you to a physiotherapist...";
    }

    return "💬 Our expert will guide you shortly!";
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const userMsg = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMsg]);

    // Bot reply delay
    setTimeout(() => {
      const botMsg = { sender: "bot", text: getBotReply(input) };
      setMessages((prev) => [...prev, botMsg]);
    }, 600);

    setInput("");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">

      {/* Chat Box */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="w-[320px] h-[420px] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden mb-4"
          >
            {/* Header */}
            <div className="bg-[#00A99D] text-white p-4 flex justify-between items-center">
              <span className="font-semibold text-sm">
                💪 Movement Rehab
              </span>
              <FaTimes
                className="cursor-pointer"
                onClick={() => setOpen(false)}
              />
            </div>

            {/* Messages */}
            <div className="flex-1 p-3 overflow-y-auto bg-gray-50 space-y-2">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${
                    msg.sender === "user"
                      ? "justify-end"
                      : "justify-start"
                  }`}
                >
                  <div
                    className={`px-3 py-2 rounded-xl text-sm max-w-[75%] ${
                      msg.sender === "user"
                        ? "bg-green-500 text-white"
                        : "bg-white shadow"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              <div ref={bottomRef}></div>
            </div>

            {/* Input */}
            <div className="p-3 border-t flex items-center gap-2">
              <input
                type="text"
                placeholder="Type your message..."
                className="flex-1 border rounded-full px-4 py-2 text-sm focus:outline-none"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
              />
              <button
                onClick={handleSend}
                className="bg-[#00A99D] text-white p-2 rounded-full"
              >
                <FaPaperPlane />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      <motion.button
        whileTap={{ scale: 0.9 }}
        whileHover={{ scale: 1.1 }}
        onClick={() => setOpen(!open)}
        className="w-14 h-14 rounded-full bg-gradient-to-r from-teal-500 to-green-500 text-white flex items-center justify-center shadow-xl"
      >
        {open ? <FaTimes size={20} /> : <FaComments size={22} />}
      </motion.button>
    </div>
  );
};

export default FloatingChat;