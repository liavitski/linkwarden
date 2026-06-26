import type { Metadata } from 'next';
import StyledComponentsRegistry from '@/lib/registry';
import GlobalStyles from '@/components/GlobalStyles';
import { APP_TITLE, DARK_TOKENS } from '@/utils/constants';
import { manrope } from '@/utils/fonts';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';

export const metadata: Metadata = {
  title: APP_TITLE,
  description:
    'Linkwarden is a fully self-hostable, open-source collaborative bookmark manager to collect, organize and archive webpages.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      style={DARK_TOKENS as React.CSSProperties}
      className={`${manrope.variable}`}
    >
      <body>
        <StyledComponentsRegistry>
          <MaxWidthWrapper>
            {children}
            </MaxWidthWrapper>  
        </StyledComponentsRegistry>
        <GlobalStyles />
      </body>
    </html>
  );
}
