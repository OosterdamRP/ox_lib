import { Box, createStyles, Text } from '@mantine/core';
import React from 'react';

const useStyles = createStyles((theme) => ({
  container: {
    textAlign: 'center',
    borderTopLeftRadius: theme.radius.md,
    borderTopRightRadius: theme.radius.md,
    // backgroundColor: theme.colors.dark[6],
    height: 60,
    width: 384,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 24,
    textShadow: `1px 2px 2px rgba(0, 0, 0, 1)`,
    textTransform: 'uppercase',
    fontWeight: 500,
    color: 'white',
  },
}));

const Header: React.FC<{ title: string }> = ({ title }) => {
  const { classes } = useStyles();

  return (
    <Box className={classes.container}>
      <Text className={classes.heading}>{title}</Text>
    </Box>
  );
};

export default React.memo(Header);
