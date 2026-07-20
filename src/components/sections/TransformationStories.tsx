import { Container } from '@/components/ui/Container'
import { Heading } from '@/components/ui/Heading'
import { Section } from '@/components/ui/Section'
import { VideoStoryCard } from '@/components/ui/VideoStoryCard'
import { REAL_RESULT_VIDEOS } from '@/data/transformations'

const STORY_STAGGER_DELAY = 0.1

export function TransformationStories() {
  return (
    <Section id="transformations" tone="white">
      <Container>
        <div className="max-w-2xl">
          <p className="text-caption font-medium uppercase tracking-[0.2em] text-accent">Real Results</p>
          <Heading size="h2" className="mt-4">
            See it for yourself.
          </Heading>
          <p className="mt-4 text-body-lg text-gray-600">
            Real members, real equipment, real energy — no stock photos, no filters.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-3">
          {REAL_RESULT_VIDEOS.map((item, index) => (
            <VideoStoryCard key={item.title} {...item} delay={index * STORY_STAGGER_DELAY} />
          ))}
        </div>
      </Container>
    </Section>
  )
}
