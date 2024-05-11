import React, { useEffect, useRef, useState } from "react";
import { ReactSketchCanvas } from "react-sketch-canvas";

const Canvas = () => {
  const [brushProp, setBrushPro] = useState({
    strokeColor: "#ffffff",
  });

  const [strokeColor, setStrokeColor] = useState("#FFFFFF");
  const [strokeWidth, setStrokeWidth] = useState(4);

  const [canvasBG, setCanvasBG] = useState("transparent");

  const canvasRef = useRef();

  const [cursorStyle, setCursorStyle] = useState("crosshair");

  const [selectedOption, setSelectedOption] = useState("pencil");

  const [EraserMode, setEraseMode] = useState(false);

  const styles = {
    border: "2px solid transparent",
    borderRadius: "0.25rem",
  };

  function handleSelectOption(val) {
    // console.log(val);
    switch (val) {
      case "add":
        setSelectedOption("add");
        break;
      case "pointer":
        setSelectedOption("pointer");
        break;
      case "arrow":
        setSelectedOption("arrow");
        break;
      case "rectangle":
        setSelectedOption("rectangle");
        break;
      case "circle":
        setSelectedOption("circle");
        break;
      case "pencil":
        setSelectedOption("pencil");
        break;
      case "eraser":
        setSelectedOption("eraser");
        break;
      case "text":
        setSelectedOption("text");
        break;

      default:
        setSelectedOption("pointer");
    }
  }

  const handlePenClick = () => {
    setEraseMode(false);
    canvasRef.current?.eraseMode(false);
  };

  const handleEraserClick = () => {
    setEraseMode(true);
    canvasRef.current?.eraseMode(true);
    // canvasRef.current?.eraseMode(false);
  };

  const handleUndoClick = () => {
    canvasRef.current?.undo();
  };

  const handleRedoClick = () => {
    canvasRef.current?.redo();
  };

  const handleClearClick = () => {
    canvasRef.current?.clearCanvas();
  };


  return (
    <div className={`flex-1 cursor-${cursorStyle}`}>
      {/* CANVAS CONTROL */}
      <div className="absolute left-4 top-[50%] translate-y-[-50%] flex flex-col gap-2">
        <ul className=" flex flex-col rounded-md border border-[rgba(255,255,255,0.08)]">
          {/* <li
            onClick={() => {
              handleSelectOption("add");
              setCursorStyle("crosshair");
            }}
            className={`${
              selectedOption === "add"
                ? "text-white"
                : "text-[rgba(255,255,255,0.5)]"
            } p-2 cursor-pointer `}
          >
            <i className="ri-add-line text-xl  "></i>
          </li> */}
          <li
            onClick={handleUndoClick}
            className={`text-[rgba(255,255,255,0.5)] p-2 cursor-pointer`}
          >
            <i className="ri-arrow-go-back-line text-lg  "></i>
          </li>
          <li
            onClick={handleRedoClick}
            className={`text-[rgba(255,255,255,0.5)] p-2 cursor-pointer`}
          >
            <i className="ri-arrow-go-forward-line text-lg  "></i>
          </li>
          <li
            onClick={handleClearClick}
            className={`text-[rgba(255,255,255,0.5)] p-2 cursor-pointer`}
          >
            <i className="ri-loop-left-line text-lg  "></i>
          </li>
        </ul>

        <ul className="p-2 overflow-hidden flex items-center justify-center flex-col gap-[0.7rem] rounded-md border border-[rgba(255,255,255,0.08)]">
          {/* <li
            className={`rotate-[-90deg] cursor-pointer ${
              selectedOption === "pointer"
                ? "text-white"
                : "text-[rgba(255,255,255,0.5)]"
            }`}
            onClick={() => {
              handleSelectOption("pointer");
              setCursorStyle("default");
            }}
          >
            <i className=" ri-send-plane-line text-xl "></i>
          </li> */}
          {/* <li
            onClick={() => {
              handleSelectOption("arrow");
              setCursorStyle("pointer");
            }}
            className={`${
              selectedOption === "arrow"
                ? "text-white"
                : "text-[rgba(255,255,255,0.5)]"
            } cursor-pointer`}
          >
            <i className="ri-arrow-left-up-line text-xl "></i>
          </li> */}
          {/* <li
            onClick={() => {
              handleSelectOption("rectangle");
              setCursorStyle("crosshair");
            }}
            className={`${
              selectedOption === "rectangle"
                ? "text-white"
                : "text-[rgba(255,255,255,0.5)]"
            } cursor-pointer`}
          >
            <i className="ri-rectangle-line text-xl "></i>
          </li> */}
          {/* <li
            onClick={() => {
              handleSelectOption("circle");
              setCursorStyle("crosshair");
            }}
            className={`${
              selectedOption === "circle"
                ? "text-white"
                : "text-[rgba(255,255,255,0.5)]"
            } cursor-pointer`}
          >
            <i className="ri-circle-line text-xl "></i>
          </li> */}
          <li
            onClick={() => {
              handleSelectOption("pencil");
              setCursorStyle("crosshair");
              handlePenClick();
            }}
            className={`${
              selectedOption === "pencil"
                ? "text-white"
                : "text-[rgba(255,255,255,0.5)]"
            } cursor-pointer`}
          >
            <i className="ri-pencil-line text-xl "></i>
          </li>
          <li
            onClick={() => {
              handleSelectOption("eraser");
              setCursorStyle("crosshair");
              handleEraserClick();
            }}
            className={`${
              selectedOption === "eraser"
                ? "text-white"
                : "text-[rgba(255,255,255,0.5)]"
            } cursor-pointer`}
          >
            <i className="ri-eraser-line text-xl "></i>
          </li>
          {/* <li
            onClick={() => {
              handleSelectOption("text");
              setCursorStyle("text");
            }}
            className={`${
              selectedOption === "text"
                ? "text-white"
                : "text-[rgba(255,255,255,0.5)]"
            } cursor-pointer`}
          >
            <i className="ri-text text-xl "></i>
          </li> */}
        </ul>
      </div>

      

      {/* STROKE */}
      <div className="flex gap-5 absolute bottom-4 left-[50%] translate-x-[-50%]">
        <div className="flex items-center gap-2">
          <label
            htmlFor=""
            className="text-[.8rem] text-[rgba(255,255,255,0.5)]"
          >
            Stroke Width
          </label>
          <input
            type="number"
            min={1}
            // max={10}
            value={strokeWidth}
            onChange={(e) => setStrokeWidth(e.target.value)}
            className="w-[50px] outline-none bg-transparent appearance-none border px-1 py-1 rounded-md border-[rgba(255,255,255,0.08)]"
          />
        </div>
        <div className="flex items-center gap-2">
          <label
            htmlFor=""
            className="text-[.8rem] text-[rgba(255,255,255,0.5)]"
          >
            Stroke Color
          </label>
          <input
            type="color"
            className="w-[50px] outline-none bg-transparent appearance-none border p-2 rounded-md border-[rgba(255,255,255,0.08)]"
            value={strokeColor}
            onChange={(e) => setStrokeColor(e.target.value)}
          />
        </div>
      </div>

      {/* CANVAS */}
      <div className="m-4 h-[89dvh]">
        <ReactSketchCanvas
          ref={canvasRef}
          style={styles}
          height="100%"
          canvasColor={canvasBG}
          strokeColor={strokeColor}
          strokeWidth={strokeWidth}
        />
      </div>
    </div>
  );
};

export default Canvas;
