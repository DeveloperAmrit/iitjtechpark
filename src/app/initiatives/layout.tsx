import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Initiatives',
  description: 'Discover our key initiatives like Deep Tech Acceleration, Women Entrepreneurship Drive, and Student Innovation Fellowships.',
};

export default function InitiativesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
