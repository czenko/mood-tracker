import addOrdinalSuffix from "@/components/Welcome/addOrdinalSuffix";

interface WelcomeProps {
  firstName?: string;
}

export default function Welcome({ firstName = "World" }: WelcomeProps) {
  const date = new Date();
  const dayWithSuffix = addOrdinalSuffix(date.getDate());

  const weekday = date.toLocaleDateString("en-US", { weekday: "long" });
  const month = date.toLocaleDateString("en-US", { month: "long" });
  const year = date.getFullYear();

  const currentDate = `${weekday}, ${month} ${dayWithSuffix}, ${year}`;

  return (
    <div className="flex flex-col text-center py-12 md:gap-2.5 gap-4 lg:py-16">
      <p className="text-t3 text-blue-600">Hello, {firstName}!</p>
      <h1 className="text-t1 text-neutral-900">How are you feeling today?</h1>
      <p className="text-t6 text-neutral-600">{currentDate}</p>
    </div>
  );
}
