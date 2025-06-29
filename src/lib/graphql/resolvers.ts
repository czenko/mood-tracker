import fs from "fs";
import path from "path";

const dataPath = path.resolve(process.cwd(), "src/lib/graphql/data.json");

function readData() {
  const file = fs.readFileSync(dataPath, "utf-8");
  return JSON.parse(file);
}

export const resolvers = {
  Query: {
    moodEntries: () => {
      const data = readData();
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      return data.moodEntries.map((entry: any) => ({
        ...entry,
      }));
    },
  },
};
