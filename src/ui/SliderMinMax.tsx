import { TypeSetStateFunction } from "../types/TypeSetStateFunction";

import { Slider } from "@mui/material";

interface ISliderMinMax {
  name: string;
  value: number[];
  handleChange: (event: Event, newValue: number | number[]) => void;
  min: number;
  max: number;
  setValue: TypeSetStateFunction<number[]>;
}

const SliderMinMax: React.FC<ISliderMinMax> = ({
  name,
  value,
  min,
  max,
  handleChange,
  setValue,
}) => {
  return (
    <div className="flex flex-col gap-y-1">
      <span className="font-semibold">{name}</span>
      <Slider
        sx={{
          width: 250,
          color: "var(--font-secondary-color)",
        }}
        onChange={handleChange}
        step={max >= 100 ? 1 : 0.1}
        max={max}
        min={min}
        value={value}
        valueLabelDisplay="auto"
        disableSwap={true}
      />
      <div className="flex justify-between">
        <div className="flex items-center gap-x-1">
          <span>Мин:</span>
          <input
            className="w-[44px] appearance-none rounded-md bg-hover-color text-center"
            onChange={(e) =>
              setValue((value) => [+e.target.value, value.at(1)!])
            }
            value={value.at(0)}
            type="number"
          />
        </div>
        <div className="flex items-center gap-x-1">
          <span>Макс:</span>
          <input
            className="w-[44px] appearance-none rounded-md bg-hover-color text-center"
            onChange={(e) =>
              setValue((value) => [value.at(0)!, +e.target.value])
            }
            value={value.at(1)}
            type="number"
          />
        </div>
      </div>
    </div>
  );
};

export default SliderMinMax;
