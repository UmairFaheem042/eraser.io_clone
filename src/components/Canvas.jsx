import React, { useRef, useState } from "react";
import { ReactSketchCanvas } from "react-sketch-canvas";

const Canvas = () => {
  const [brushProp, setBrushPro] = useState({
    strokeColor: "#ffffff",
  });

  const [strokeWidth, setStrokeWidth] = useState(4);

  const canvasRef = useRef();

  const [canvasBG, setCanvasBG] = useState("transparent");
  const [cursorStyle, setCursorStyle] = useState("crosshair");

  const [selectedOption, setSelectedOption] = useState("pencil");
  const [EraserMode, setEraseMode] = useState(false);

  const styles = {
    // border: "2px solid rgba(255,255,255,0.08)",
    border: "2px solid transparent",
    borderRadius: "0.25rem",
  };

  // setCursorStyle(eraserIco);
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
    // canvasRef.current?.eraseMode(true);
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
    <div className={`flex-1 px-2 pb-2 cursor-${cursorStyle}`}>
      <div className="absolute left-3 top-[50%] translate-y-[-50%] flex flex-col gap-2">
        {/* <ul className=" flex flex-col gap-[0.7rem] rounded-md border border-[rgba(255,255,255,0.08)]">
          <li
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
          </li>
        </ul> */}
        
        <ul className="p-2 overflow-hidden flex items-center justify-center flex-col gap-[0.7rem] rounded-md border border-[rgba(255,255,255,0.08)]">
          <li
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
          </li>
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
              // setCursorStyle(`url(${eraserIco})`);
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

      <div className=" flex justify-center w-screen gap-4">
        <span className="cursor-pointer" onClick={handleUndoClick}>
          <i className="ri-arrow-go-back-line"></i>
        </span>
        <span className="cursor-pointer" onClick={handleRedoClick}>
          <i className="ri-arrow-go-forward-line"></i>
        </span>
        <span className="cursor-pointer" onClick={handleClearClick}>
          <i className="ri-loop-left-line"></i>
        </span>
      </div>

      <div className="flex flex-col absolute bottom-5 left-[50%] translate-x-[-50%]">
        <label htmlFor="" className="text-[.8rem] text-[rgba(255,255,255,0.5)]">
          Stroke Width
        </label>
        <input
          type="number"
          min={1}
          max={10}
          value={strokeWidth}
          onChange={(e) => setStrokeWidth(e.target.value)}
          className="w-[74.5px] outline-none bg-transparent appearance-none border p-2 rounded-md border-[rgba(255,255,255,0.08)]"
        />
      </div>

      <ReactSketchCanvas
        ref={canvasRef}
        style={styles}
        canvasColor={canvasBG}
        strokeColor={brushProp.strokeColor}
        strokeWidth={strokeWidth}
      />
    </div>
  );
};

export default Canvas;
