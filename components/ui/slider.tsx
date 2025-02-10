"use client";
import { useState } from "react";

interface SliderProps {
  value: number;
  onChange: (newValue: number) => void;
  min?: number;
  max?: number;
  step?: number;
}

const Slider: React.FC<SliderProps> = ({
  value,
  onChange,
  min = 0,
  max = 180,
  step = 0.1,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(Number(e.target.value));
  };

  const getProgressWidth = () => {
    return `${(value / max) * 100}%`;
  };

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <div className="flex items-center gap-3 w-full max-w-lg">
      <span className="text-white text-sm w-12 text-right">
        {formatTime(value)}
      </span>
      <div className="relative w-full">
        {/* Background Track */}
        <div className="absolute top-1/2 left-0 h-2 bg-gray-600 rounded-lg w-full transform -translate-y-1/2"></div>

        {/* Progress Bar (fills up to the thumb) */}
        <div
          className="absolute top-1/2 left-0 h-2 bg-white rounded-lg"
          style={{ width: getProgressWidth(), transform: "translateY(-50%)" }}
        ></div>

        {/* Slider Input */}
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={handleChange}
          className="relative w-full appearance-none h-2 rounded-lg outline-none transition cursor-pointer bg-transparent 
          [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 
          [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:bg-white 
          [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-blue-500 
          [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:cursor-pointer 
          [&::-webkit-slider-thumb]:relative [&::-webkit-slider-thumb]:translate-y-[-10%] 
          [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:h-5 
          [&::-moz-range-thumb]:bg-white [&::-moz-range-thumb]:border-2 
          [&::-moz-range-thumb]:border-blue-500 [&::-moz-range-thumb]:rounded-full 
          [&::-moz-range-thumb]:cursor-pointer"
        />
      </div>
      <span className="text-white text-sm w-12">{formatTime(max)}</span>
    </div>
  );
};

export default Slider;
