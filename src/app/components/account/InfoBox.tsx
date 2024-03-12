"use client";

import { useLayoutEffect, useRef } from "react";

interface InfoBoxProps {
  title?: string;
  content: React.ReactNode;
  bottom?: React.ReactNode;
}

const InfoBox = ({ title, content, bottom }: InfoBoxProps) => {
  const ref = useRef<HTMLDivElement | null>(null);
  useLayoutEffect(() => {
    if (ref.current) {
      const currentHeigth = ref.current.getBoundingClientRect().height;
      const currentSpan = Math.ceil((currentHeigth + 16) / (20 + 16));
      ref.current.style.gridRowEnd = `span ${currentSpan}`;
    }
  }, []);
  return (
    <div id="grid" ref={ref} className={`bg-white p-5 relative h-fit`}>
      {title && <p className="font-bold pb-5 text-lg">{title}</p>}
      <div className="pb-7">{content}</div>
      {bottom && bottom}
    </div>
  );
};

const Bottom = ({
  content,
  isButton = true,
}: {
  content: React.ReactNode;
  isButton?: boolean;
}) => {
  const buttonStyles = isButton
    ? "justify-center flex text-white font-semibold bg-blue-600"
    : "bg-gray-100";
  return (
    <div className={`absolute left-0 w-full p-4 ${buttonStyles}`}>
      {content}
    </div>
  );
};

InfoBox.Bottom = Bottom;

export default InfoBox;
