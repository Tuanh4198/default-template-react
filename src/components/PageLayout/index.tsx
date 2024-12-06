import React, { ReactNode, useMemo } from 'react';
import { AppShell, Burger, Group, ScrollArea, Select, Skeleton, Text, UnstyledButton } from '@mantine/core';
import { useDisclosure, useHeadroom } from '@mantine/hooks';
import { useChangeLanguage } from '../../locales/useChangeLanguage';
import { LanguageCode } from '../../locales/type';
import { Helmet } from 'react-helmet';
import { useSelector } from 'react-redux';
import { selectLanguage } from 'src/app/appSlice/selectors';

interface PageLayoutProps {
  title: string;
  children: ReactNode;
  noLayout?: boolean;
}
const PageLayout = ({ title, children, noLayout }: PageLayoutProps) => {
  const language = useSelector(selectLanguage);

  const pinned = useHeadroom({ fixedAt: 120 });

  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();

  const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true);

  const { changeLanguage, dataLang } = useChangeLanguage();

  const helmet = useMemo(
    () => (
      <Helmet>
        <title>{title}</title>
      </Helmet>
    ),
    [title]
  );

  if (noLayout) {
    return (
      <>
        {helmet}
        {children}
      </>
    );
  }

  return (
    <AppShell
      header={{ height: 60, collapsed: !pinned }}
      navbar={{ width: 300, breakpoint: 'sm', collapsed: { mobile: !mobileOpened, desktop: !desktopOpened } }}
      padding='md'
    >
      {helmet}
      <AppShell.Header>
        <Group h='100%' px='md' justify='space-between'>
          <Group h='100%' px='md'>
            <Text size='30px'>LOGO</Text>
            <Burger opened={mobileOpened} onClick={toggleMobile} hiddenFrom='sm' size='sm' />
            <Burger opened={desktopOpened} onClick={toggleDesktop} visibleFrom='sm' size='sm' />
          </Group>
          <Group ml='xl' gap='md' visibleFrom='sm'>
            <UnstyledButton>Home</UnstyledButton>
            <UnstyledButton>Blog</UnstyledButton>
            <UnstyledButton>Contacts</UnstyledButton>
            <UnstyledButton>Support</UnstyledButton>
            <Select
              placeholder='Change language'
              data={dataLang.map((it) => ({
                label: it.lang,
                value: it.value,
              }))}
              value={language}
              onChange={(lang) => changeLanguage(lang as LanguageCode)}
            />
          </Group>
        </Group>
      </AppShell.Header>
      <AppShell.Navbar p='md'>
        <AppShell.Section grow my='md' component={ScrollArea}>
          {Array(60)
            .fill(0)
            .map((_, index) => (
              <Skeleton key={index} h={28} mt='sm' animate={false} />
            ))}
        </AppShell.Section>
      </AppShell.Navbar>
      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
};

export default React.memo(PageLayout);
