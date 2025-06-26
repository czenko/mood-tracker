import { gql } from "apollo-server-micro";

export const typeDefs = gql`
    type MoodEntry {
        createdAt: String!
        mood: Int!
        feelings: [String!]!
        journalEntry: String!
        sleepHours: Float!
    }

    type Query {
        moodEntries: [MoodEntry!]!
    }

    # type Mutation {
    #     addMoodEntry(
    #         createdAt: String!
    #         mood: Int!
    #         feelings: [String!]!
    #         journalEntry: String!
    #         sleepHours: Float!
    #     ): MoodEntry!
    # }
`;
