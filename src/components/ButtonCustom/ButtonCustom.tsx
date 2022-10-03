import { FC } from "react";

interface IProps {
  fn: () => void;
  text: string;
}

export const ButtonCustom: FC<IProps> = ({ fn, text }) => {
  return (
    <div className="flex flex-row justify-center items-center mt-8">
      <button
        className="p-2 px-7 bg-blue-200 hover:bg-blue-300 rounded-xl"
        onClick={fn}
      >
        {text}
      </button>
    </div>
  );
};
