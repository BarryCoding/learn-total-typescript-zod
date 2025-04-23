// CODE

import { z } from 'zod';

const StarWarsPerson = z.object({
  name: z.string(),
});

const StarWarsPeopleResults = z.object({
  results: z.array(StarWarsPerson),
});

const logStarWarsPeopleResults = (data: unknown) => {
  //                                    ^ 🕵️‍♂️
  // @ts-expect-error
  data.results.map((person) => {
    console.log(person.name);
  });
};
