import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about our vision, mission, and the team behind IIT Jodhpur Tech Park. We are setting up an Incubation Centre to nucleate new age ventures.',
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
