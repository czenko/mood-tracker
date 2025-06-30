export default function addOrdinalSuffix(day: number): string {
  if (Math.abs(day) >= 11 && Math.abs(day) <= 13) {
    return day + "th";
  }

  switch (Math.abs(day) % 10) {
    case 1:
      return day + "st";
    case 2:
      return day + "nd";
    case 3:
      return day + "rd";
    default:
      return day + "th";
  }
}
