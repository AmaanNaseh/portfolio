import React, { useEffect, useState, useRef } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { scroller } from "react-scroll";
import { FaMicrophone } from "react-icons/fa6";

const commands = [
  "skills",
  "projects",
  "experience",
  "certifications",
  "education",
  "extras",
  "contact",
];

const commandToSectionMap = {
  skills: "aboutSection",
  projects: "projectSection",
  experience: "internshipSection",
  certifications: "certificationSection",
  education: "educationSection",
  extras: "extraSection",
  contact: "contactSection",
};

const VoiceNavigation = () => {
  const { transcript, listening, resetTranscript } = useSpeechRecognition();
  const [hovered, setHovered] = useState(false);
  const [lastCommand, setLastCommand] = useState("");
  const stopTimeoutRef = useRef(null);

  useEffect(() => {
    const lower = transcript.toLowerCase().trim();
    if (commands.includes(lower) && lower !== lastCommand) {
      setLastCommand(lower);
      clearTimeout(stopTimeoutRef.current); // Clear auto-stop if command recognized
      handleCommand(lower);
    }
  }, [transcript]);

  const handleCommand = (command) => {
    const sectionId = commandToSectionMap[command];
    if (!sectionId) return;

    handleStopListening(); // Stop listening immediately

    const message = `Scrolling to ${command}`;
    const utterance = new SpeechSynthesisUtterance(message);
    utterance.rate = 1.5;

    utterance.onend = () => {
      scroller.scrollTo(sectionId, {
        duration: 500,
        delay: 0,
        smooth: "easeInOutQuart",
        offset: -100,
      });

      resetTranscript();
      setLastCommand("");
    };

    window.speechSynthesis.speak(utterance);
  };

  const handleStartListening = async () => {
    resetTranscript();
    setLastCommand("");

    try {
      // Request mic permission
      await navigator.mediaDevices.getUserMedia({ audio: true });

      // Start listening for a short session (non-continuous)
      SpeechRecognition.startListening({
        continuous: false,
        language: "en-US",
      });

      // Auto-stop mic after 3 seconds if nothing said
      stopTimeoutRef.current = setTimeout(() => {
        handleStopListening();
      }, 3000);
    } catch (err) {
      console.error("Microphone access denied or blocked:", err);
      alert("Please allow microphone access to use voice navigation.");
    }
  };

  const handleStopListening = () => {
    SpeechRecognition.stopListening();
    clearTimeout(stopTimeoutRef.current);
  };

  return (
    <div className="fixed top-28 left-4 z-10">
      <div
        className="relative"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Mic Button */}
        <button
          className="w-[50px] h-[50px] z-10 rounded-full border-[4px] border-[#3B38A0] cursor-pointer flex items-center justify-center hover:scale-110 transition-all duration-200"
          onClick={handleStartListening}
        >
          {listening ? (
            <div
              className="w-[25px] h-[25px] bg-red-700 rounded-full animate-pulse"
              onClick={(e) => {
                e.stopPropagation();
                handleStopListening();
              }}
              title="Click to stop listening"
            ></div>
          ) : (
            <FaMicrophone className="text-3xl text-[#3B38A0]" />
          )}
        </button>

        {/* Hover / Listening Panel */}
        {(hovered || listening) && (
          <div className="absolute left-full top-1/2 -translate-y-1/2 ml-4 bg-white border border-gray-300 shadow-md rounded px-4 py-2 text-sm min-w-[150px] z-20">
            {listening ? (
              <div className="font-semibold text-red-600 text-center">
                Click to Stop
              </div>
            ) : (
              <div>
                <p className="font-bold text-center mb-2">Commands</p>
                <ul className="flex flex-col gap-2 max-w-[200px]">
                  {commands.map((cmd) => (
                    <li key={cmd} className="capitalize">
                      {cmd}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default VoiceNavigation;
