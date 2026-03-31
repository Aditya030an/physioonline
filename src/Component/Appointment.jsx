

import React, { useState } from "react";

const PhysioAppointmentForm = () => {

  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [mode, setMode] = useState("");
  const [timeSlots, setTimeSlots] = useState([]);

  const next = () => setStep(step + 1);
  const back = () => setStep(step - 1);

  const handleModeChange = (value) => {

    setMode(value);

    if (value === "Clinic Visit") {

      setTimeSlots([
        "10:00 AM","10:30 AM","11:00 AM","11:30 AM",
        "12:00 PM","12:30 PM","01:00 PM","06:00PM","06:30PM","07:00","07:30PM","08:00PM",
      ]);

    }

    else if (value === "Home Visit") {

      setTimeSlots([
        "02:00 PM","03:30 PM","05:00 PM",
      ]);

    }

    else if (value === "Online Consultation") {

      const slots = [];

      for(let i=9;i<=22;i++){

        const hour = i>12 ? i-12 : i;
        const ampm = i>=12 ? "PM":"AM";

        slots.push(`${hour}:00 ${ampm}`);

      }

      setTimeSlots(slots);

    }

  };

  if (submitted) {

    return (

      <section className="min-h-screen flex items-center justify-center bg-gray-100 px-6">

        <div className="bg-white p-10 rounded-2xl shadow text-center max-w-md">

          <h2 className="text-2xl font-semibold mb-3">
            Appointment Submitted
          </h2>

          <p className="text-gray-500">
          Our team will contact you to confirm appointment
          </p>

        </div>

      </section>

    );

  }

  return (

    <section className="min-h-screen pt-28 bg-gray-100 px-4 md:px-6">

      <div className="max-w-6xl mx-auto">

        <div className="mb-10 text-center md:text-left">

          <h1 className="text-3xl md:text-4xl font-semibold">
            Movement Rehab Physiotherapy Consultation
          </h1>

          <p className="text-gray-500 mt-2">
            Complete the form to book your physiotherapy appointment.
          </p>

        </div>

        <div className="bg-white rounded-2xl shadow-lg grid md:grid-cols-3 overflow-hidden min-h-[500px]">

          {/* SIDEBAR */}

          <div className="hidden md:block bg-[#0f172a] text-white p-10">

            <h2 className="text-xl font-semibold mb-8">
              Appointment Steps
            </h2>

            <div className="space-y-6">

              {[
                "Patient Details",
                "Appointment",
                "Medical Info",
                "Functional Info",
                "Upload & Submit"
              ].map((label,index)=>{

                const number = index + 1;

                return(

                  <div
                    key={index}
                    className={`flex items-center gap-4 ${
                      step === number ? "opacity-100":"opacity-50"
                    }`}
                  >

                    <div className="w-8 h-8 bg-white text-black rounded-full flex items-center justify-center text-sm">
                      {number}
                    </div>

                    <span>{label}</span>

                  </div>

                );

              })}

            </div>

          </div>

          {/* FORM */}

          <div className="md:col-span-2 p-6 md:p-12 overflow-y-auto max-h-[500px]">

            {/* STEP 1 */}

            {step === 1 && (

              <div>

                <h2 className="text-xl md:text-2xl font-semibold mb-6">
                  Basic Patient Details
                </h2>

                <div className="grid md:grid-cols-2 gap-5">

                  <input placeholder="Patient Name"
                  className="border rounded-lg p-3"/>

                  <input type="number"
                  placeholder="Age"
                  className="border rounded-lg p-3"/>

                  <select className="border rounded-lg p-3">
                    <option>Gender</option>
                    <option>Male</option>
                    <option>Female</option>
                  </select>
                  <select className="border rounded-lg p-3">
                    <option>First Visit</option>
                    <option>Follow-up</option>
                  </select>

                  <input placeholder="Mobile Number"
                  className="border rounded-lg p-3"/>

                  <input placeholder="Email ID"
                  className="border rounded-lg p-3"/>

                </div>

              </div>

            )}

            {/* STEP 2 */}

            {step === 2 && (

              <div>

                <h2 className="text-xl md:text-2xl font-semibold mb-6">
                  Appointment Details
                </h2>

                <div className="grid md:grid-cols-2 gap-5">

                  <input
                  type="date"
                  className="border rounded-lg p-3"/>
                  <select
                  className="border rounded-lg p-3"
                  onChange={(e)=>handleModeChange(e.target.value)}
                  >

                    <option>Select Mode</option>
                    <option>Clinic Visit</option>
                    <option>Home Visit</option>
                    <option>Online Consultation</option>

                  </select>
                  <select
                  className="border rounded-lg p-3"
                  disabled={!mode}
                  >

                    <option>Select Time Slot</option>

                    {timeSlots.map((slot,index)=>(
                      <option key={index}>{slot}</option>
                    ))}

                  </select>

              



                </div>

              </div>

            )}

            {/* STEP 3 */}

            {step === 3 && (

              <div>

                <h2 className="text-xl md:text-2xl font-semibold mb-6">
                  Medical Condition
                </h2>

                <div className="space-y-5">

                  <input
                  placeholder="Problem / Complaint"
                  className="w-full border rounded-lg p-3"/>

                  <select className="w-full border rounded-lg p-3">

                    <option>Duration of Problem</option>
                    <option>Days</option>
                    <option>Weeks</option>
                    <option>Months</option>

                  </select>

                  <input
                  placeholder="Diagnosis"
                  className="w-full border rounded-lg p-3"/>

                </div>

              </div>

            )}

            {/* STEP 4 */}

            {step === 4 && (

              <div>

                <h2 className="text-xl md:text-2xl font-semibold mb-6">
                  Functional Information
                </h2>

                <div className="grid md:grid-cols-2 gap-4">

                  {[
                    "Walking Difficulty",
                    "Sitting Difficulty",
                    "Standing Difficulty",
                    "Hand Function Difficulty"
                  ].map((item)=>(
                    <label
                    key={item}
                    className="border rounded-lg p-4 flex items-center gap-3"
                    >

                      <input type="checkbox"/>

                      {item}

                    </label>
                  ))}

                </div>

                <div className="mt-6">

                  <label className="text-sm text-gray-500">
                    Pain Level (0 - 10)
                  </label>

                  <input
                  type="range"
                  min="0"
                  max="10"
                  className="w-full mt-2"/>

                </div>

              </div>

            )}

            {/* STEP 5 */}

            {step === 5 && (

              <div>

                <h2 className="text-xl md:text-2xl font-semibold mb-6">
                  Upload Reports
                </h2>

                {mode==="Home Visit" && (

                  <div className="space-y-4 mb-6">

                    <input placeholder="Address"
                    className="w-full border rounded-lg p-3"/>

                    <input placeholder="City"
                    className="w-full border rounded-lg p-3"/>

                    <input placeholder="Landmark"
                    className="w-full border rounded-lg p-3"/>

                  </div>

                )}

                <input type="file" className="mb-6"/>

                <label className="flex gap-3 mb-8">
                  <input type="checkbox"/>
                  I agree to physiotherapy treatment policies
                </label>

                <button
                onClick={()=>setSubmitted(true)}
                className="bg-black text-white px-8 py-3 rounded-lg">

                  Submit Appointment

                </button>

              </div>

            )}

            {/* NAVIGATION */}

            <div className="flex justify-between mt-10">

              {step>1 && (
                <button
                onClick={back}
                className="border px-6 py-2 rounded-lg">
                  Back
                </button>
              )}

              {step<5 && (
                <button
                onClick={next}
                className="bg-black text-white px-6 py-2 rounded-lg">
                  Next
                </button>
              )}

            </div>

          </div>

        </div>

      </div>

    </section>

  );

};

export default PhysioAppointmentForm;