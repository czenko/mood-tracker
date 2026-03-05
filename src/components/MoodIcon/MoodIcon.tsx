import { MoodValue } from "@/app/types";
import {
  IconVerySadWhite,
  IconSadWhite,
  IconNeutralWhite,
  IconHappyWhite,
  IconVeryHappyWhite,
} from ".";

interface MoodIconProps {
  mood: MoodValue;
  className?: string;
}

const ICON_MAP: Record<MoodValue, React.ElementType> = {
  [-2]: IconVerySadWhite,
  [-1]: IconSadWhite,
  0: IconNeutralWhite,
  1: IconHappyWhite,
  2: IconVeryHappyWhite,
};

export default function MoodIcon({ mood, className }: MoodIconProps) {
  const Icon = ICON_MAP[mood];

  return <Icon className={className} />;
}
