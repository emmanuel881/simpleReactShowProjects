import { useState } from "react";

export default function ButtonOnComponent() {
    const [isOn, setIsOn] = useState(false);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            {/* Toggle Switch */}
            <label className="relative inline-flex items-center cursor-pointer">
                {/* Hidden Checkbox */}
                <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={isOn}
                    onChange={() => setIsOn(!isOn)}
                />

                {/* Toggle Background */}
                <div className="w-14 h-8 bg-gray-300 rounded-full peer-checked:bg-green-500 peer-focus:ring-4 peer-focus:ring-green-300 transition-all"></div>

                {/* Toggle Knob */}
                <div className="absolute left-1 top-1 w-6 h-6 bg-white rounded-full shadow-md transform peer-checked:translate-x-6 transition-all"></div>
            </label>

            {/* Status Text */}
            <p className="mt-4 text-lg font-semibold">
                {isOn ? "Power: ON 🔵" : "Power: OFF 🔴"}
            </p>
        </div>
    );
}
