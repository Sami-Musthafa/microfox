/* eslint-disable react/no-unescaped-entities */
import {
  Box,
  Card,
  CardContent,
  Container,
  Stack,
  Typography,
} from '@mui/material';
import React from 'react';
import { FaArrowRight } from 'react-icons/fa6';

type Props = {};

const ShowMoreCard = (props: Props) => {
  return (
    <Container maxWidth='md'>
      <Stack alignItems={'center'} sx={{ my: 5, width: 1 }}>
        <Card sx={{ bgcolor: '#016aff', borderRadius: 5, mx: 5 }}>
          <CardContent>
            <Stack direction='row'>
              <Stack flex={1} p={3} sx={{ color: '#ffffff' }}>
                <Typography variant='body1' sx={{ color: 'orange' }}>
                  Automate your outreach
                </Typography>
                <Typography variant='h4' sx={{ fontWeight: 'bold' }}>
                  Learn my simple method for attracting clients
                </Typography>
                <Typography sx={{ fontSize: '14px' }}>
                  This toolkit unveils my secret to a fully automated cold
                  outreach system using OpenAl & Zapier. After three months of
                  perfecting this automation, I'm sharing my proprietary setup
                  with you-from making initial contact to setting up a call to
                  close the deal. Unlike other Al tools that require constant
                  intervention, my system handles everything autonomously until
                  you need to step in, if at all. Let me show you how to turn
                  cold leads into hot prospects.
                </Typography>

                <Stack
                  sx={{
                    fontSize: '14px',
                    fontWeight: 'bold',
                    color: '#ffffff',
                    cursor: 'pointer',
                    mt: 5,
                    bgcolor: 'black',
                    width: 135,
                    p: 2,
                    borderRadius: 10,
                  }}
                >
                  <Stack
                    direction='row'
                    sx={{
                      '&:hover': {
                        justifyContent: 'space-between',
                      },
                    }}
                  >
                    <Box
                      sx={{
                        justifySelf: 'flex-start',
                        alignSelf: 'flex-start',
                      }}
                    >
                      Show me more
                    </Box>
                    <Stack sx={{ height: 1, justifyContent: 'center', px: 1 }}>
                      <FaArrowRight />
                    </Stack>
                  </Stack>
                </Stack>
              </Stack>
              <Stack
                flex={1}
                p={3}
                fontSize={70}
                justifyContent={'center'}
                alignItems={'center'}
                sx={{ fontWeight: 'bold', color: '#ffffff' }}
              >
                <Box>Turn cold outreach into hot outreach</Box>
              </Stack>
            </Stack>
          </CardContent>
        </Card>
      </Stack>
    </Container>
  );
};

export default ShowMoreCard;
