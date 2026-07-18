import { useState, useCallback, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numallow, setNumallow] = useState(false);
  const [charallow, setCharallow] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numallow) str += "0123456789";
    if (charallow) str += "!@#$%^&*()<>?{}[]";

    for (let i = 0; i < length; i++) {
      const char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numallow, charallow]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 999);
    navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    passwordGenerator();
  }, [passwordGenerator]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 px-4">
      <div className="w-full max-w-xl bg-gray-800 rounded-2xl shadow-2xl p-6">
        <h1 className="text-3xl font-bold text-center text-orange-400 mb-6">
          🔐 Password Generator
        </h1>

        <div className="flex overflow-hidden rounded-lg shadow-md mb-6">
          <input
            type="text"
            value={password}
            readOnly
            ref={passwordRef}
            className="w-full px-4 py-3 outline-none bg-white text-gray-800 font-medium"
            placeholder="Generated Password"
          />

          <button
            onClick={copyPasswordToClipboard}
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 transition"
          >
            Copy
          </button>
        </div>

        <div className="space-y-4">
          <div>
            <label className="text-white block mb-2">
              Length: <span className="text-orange-400">{length}</span>
            </label>

            <input
              type="range"
              min="6"
              max="50"
              value={length}
              onChange={(e) => setLength(Number(e.target.value))}
              className="w-full cursor-pointer"
            />
          </div>

          <div className="flex gap-8">
            <label className="flex items-center gap-2 text-white cursor-pointer">
              <input
                type="checkbox"
                checked={numallow}
                onChange={() => setNumallow((prev) => !prev)}
              />
              Numbers
            </label>

            <label className="flex items-center gap-2 text-white cursor-pointer">
              <input
                type="checkbox"
                checked={charallow}
                onChange={() => setCharallow((prev) => !prev)}
              />
              Special Characters
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;