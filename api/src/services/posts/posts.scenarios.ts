import type { Prisma, Post } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.PostCreateArgs>({
  post: {
    one: { data: { body: 'String', likes: 3366911, createdAt: 'String' } },
    two: { data: { body: 'String', likes: 2459250, createdAt: 'String' } },
  },
})

export type StandardScenario = ScenarioData<Post, 'post'>
