'use client';

import TestimonialsSection, { TestimonialsData } from '@/components/ui/community-testimonial';

const testimonialsData: TestimonialsData = {
  title: 'Trusted by Businesses Across Industries',
  subtitle:
    'Real feedback from businesses that have worked with R.K Digital Media across SEO, Google Business Profile, paid advertising and digital marketing.',
  rows: [
    {
      id: 'row1',
      speed: '48s',
      direction: 'left',
      testimonials: [
        {
          id: 't1',
          quote:
            'This digital marketing agency is the best agency I have seen ever. The work in this agency is best. I like the behaviour of employees also.',
          authorName: 'Mohini Bhardwaj',
          authorTitle: 'Google reviewer',
          initials: 'MB',
        },
        {
          id: 't2',
          quote:
            'Awesome and fast work. One of the best Digital marketing agency must try.',
          authorName: 'Diksha Mangla',
          authorTitle: 'Google reviewer',
          initials: 'DM',
        },
        {
          id: 't3',
          quote:
            'R.K digital media...Best digital marketing agency..must visit.',
          authorName: 'Sonia Kumari',
          authorTitle: 'Google reviewer',
          initials: 'SK',
        },
        {
          id: 't4',
          quote: 'Very good',
          authorName: 'Umar Farooq',
          authorTitle: 'Google reviewer',
          initials: 'UF',
        },
      ],
    },
    {
      id: 'row2',
      speed: '42s',
      direction: 'right',
      testimonials: [
        {
          id: 't5',
          quote: 'My best experience with R.K Digital Media.',
          authorName: 'Deep Mala',
          authorTitle: 'Google reviewer',
          initials: 'DM',
        },
        {
          id: 't6',
          quote: 'Great service and professional team.',
          authorName: 'Ravinder Singh',
          authorTitle: 'Google reviewer',
          initials: 'RS',
        },
        {
          id: 't7',
          quote: 'Excellent digital marketing services.',
          authorName: 'Insha Kamal',
          authorTitle: 'Google reviewer',
          initials: 'IK',
        },
        {
          id: 't8',
          quote:
            'Very good experience working with R.K Digital Media.',
          authorName: 'Client feedback',
          authorTitle: 'Google reviewer',
          initials: 'CF',
        },
      ],
    },
  ],
};

export function GoogleReviews() {
  return <TestimonialsSection data={testimonialsData} />;
}
