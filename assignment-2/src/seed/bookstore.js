import { TOPICS } from "../contants/topic.constant";
import {
  GetBooksFromLocalStorage,
  LocalStorage,
  SetBooksToLocalStorage,
} from "../utils/localstore";
import { BOOKS } from "../contants/storage";

export const bookstore = {
  header: ["Name", "Author", "Topic", "Action"],
  data: [
    {
      id: 1,
      name: "Chú mèo máy doraemon",
      author: "Fujiko F. Fujio",
      topic: TOPICS.comic,
    },
    {
      id: 2,
      name: "Refactoring",
      author: "Martin Fowler",
      topic: TOPICS.programing,
    },
    {
      id: 3,
      name: "Designing Data-Intensive Applications",
      author: "Martin Kleppmann",
      topic: TOPICS.database,
    },
    {
      id: 4,
      name: "The Phoenix Project",
      author: "Gene Kim",
      topic: TOPICS.devops,
    },
  ],
};
