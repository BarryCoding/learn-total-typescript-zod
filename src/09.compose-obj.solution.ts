import { z } from 'zod';
import type { Equal, Expect } from './helpers/type-utils';

/**
 * 🕵️‍♂️ Refactor this code below to reduce the duplication,
 * while also making sure the cases don't go red!
 */

const objectWithId = z.object({
  id: z.string().uuid(),
});

const User = objectWithId.extend({
  name: z.string(),
});

const Post = objectWithId.extend({
  title: z.string(),
  body: z.string(),
});

const Comment = objectWithId.extend({
  text: z.string(),
});

type cases = [
  Expect<Equal<z.infer<typeof Comment>, { id: string; text: string }>>,
  Expect<Equal<z.infer<typeof Post>, { id: string; title: string; body: string }>>,
  Expect<Equal<z.infer<typeof User>, { id: string; name: string }>>
];
