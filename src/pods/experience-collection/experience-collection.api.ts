import client from '#lib/client.ts';
import type { ExperienceSection } from './experience-collection.model';

export const getExperience = async () =>
  await client.getContent<ExperienceSection>({
    contentType: 'ExperienceSection',
    language: 'en',
    includeRelatedContent: true
  });
