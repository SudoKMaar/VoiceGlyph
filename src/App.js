import "./App.css";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { useState } from "react";
import logo from "./vg_logo.jpg";
import { saveAs } from "file-saver";

const App = () => {
  const [textToCopy, setTextToCopy] = useState("");
  const [isCopied, setCopied] = useState(false);
  const [showContent, setShowContent] = useState(true);

  const startListening = () =>
    SpeechRecognition.startListening({ continuous: true, language: "en-IN" });
  const { transcript, resetTranscript, browserSupportsSpeechRecognition } =
    useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return null;
  }

  const currentYear = new Date().getFullYear();

  const handleExport = () => {
    const blob = new Blob([transcript], { type: "text/plain;charset=utf-8" });
    saveAs(blob, "transcript.txt");
  };

  const handleClear = () => {
    setTextToCopy("");
    resetTranscript();
  };

  const handleCopyToClipboard = () => {
    if (transcript) {
      navigator.clipboard
        .writeText(transcript)
        .then(() => {
          setCopied(true);
          setTimeout(() => {
            setCopied(false);
          }, 1000);
        })
        .catch((error) => {
          console.error("Failed to copy text to clipboard:", error);
        });
    }
  };

  return (
    <>
      <div className="container">
        <div className="column">
          <img src={logo} alt="Logo" className="logo" />
          <h2>Voice Glyph</h2>
        </div>
        <p>
          Introducing Voice Glyph: A revolutionary React web app for real-time
          speech-to-text conversion. Effortlessly transcribe spoken words into
          written text, capturing ideas and taking notes with ease. Experience
          the convenience and speed of Voice Glyph today...
        </p>
        <div className="main-content" onClick={() => setTextToCopy(transcript)}>
          {showContent ? transcript : null}
        </div>
        <div className="btn-style">
          <button onClick={handleCopyToClipboard}>
            {isCopied ? "Copied!" : "Copy to clipboard"}
          </button>
          <button onClick={startListening}>Start Listening</button>
          <button onClick={SpeechRecognition.stopListening}>
            Stop Listening
          </button>
          <button onClick={handleExport}>Export</button>
          <button onClick={handleClear}>Clear</button>
        </div>
        <footer className="footer">
          &copy; {currentYear}{" "}
          <a
            href="https://kmaar.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            Abhishek Kumar
          </a>
          . All rights reserved. | Powered by{" "}
          <a
            href="https://kmstudio.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            KMaar Miscellaneous Studio
          </a>
        </footer>{" "}
      </div>
    </>
  );
};

export default App;

// Introducing Voice Glyph: The Revolutionary React Web App that Converts Speech to Text in Real-Time! It provides a seamless and intuitive experience for users to transcribe their spoken words into written text instantly. With Voice Glyph, you can effortlessly capture your ideas, take notes, or dictate content without the need for manual typing.

// Voice Glyph leverages the power of speech recognition technology to accurately convert spoken language into written text. Powered by React, this web application offers a modern and interactive interface that enhances the user experience. Whether you're a student, professional, or anyone looking for a convenient way to transcribe speech, Voice Glyph is the perfect tool for you.

// Developed by Abhishek Kumar, Voice Glyph combines cutting-edge technology with user-friendly design. It empowers individuals to communicate effectively and efficiently by eliminating the barriers posed by traditional typing methods. With Voice Glyph, you can unleash the power of your voice and transform it into written words with ease.

// Experience the convenience and speed of real-time speech-to-text conversion with Voice Glyph. Try it now and revolutionize the way you capture and document your thoughts.
