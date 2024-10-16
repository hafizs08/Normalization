/* eslint-disable @next/next/no-img-element */

import { Avatar, Box, Divider, Stack, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material';

const DATA = {
  employee: {
    name: 'Fulan bin Titan',
    position: 'Full Stack Developer',
    email: 'sample.address@supermail.sh',
    image: 'https://thispersondoesnotexist.com/',
    biodata: {
      profile: 'A biodegradable employee, since i am a human :)',
      placeOfBirth: 'Jakarta',
      dateOfBirth: 'xx May 2001',
      gender: 'Male',
      religion: 'Moslem',
      language: 'English, Indonesian',
    },
  },
  histories: {
    employment: [
      {
        employer: 'Sample',
        position: 'Sample',
        from: 'June 2021',
        to: 'July 2024',
      },
      {
        employer: 'Sample',
        position: 'Sample',
        from: 'June 2021',
        to: 'July 2024',
      },
      {
        employer: 'Sample',
        position: 'Sample',
        from: 'June 2021',
        to: 'July 2024',
      },
      {
        employer: 'Sample',
        position: 'Sample',
        from: 'June 2021',
        to: 'July 2024',
      },
      {
        employer: 'Sample',
        position: 'Sample',
        from: 'June 2021',
        to: 'July 2024',
      },
    ],
    certification: [
      {
        title: 'Sample',
        provider: 'Sample',
        date: 'December 2024',
        duration: '5 Years',
        certificate: 'Sample',
      },
      {
        title: 'Sample',
        provider: 'Sample',
        date: 'December 2024',
        duration: '5 Years',
        certificate: 'Sample',
      },
      {
        title: 'Sample',
        provider: 'Sample',
        date: 'December 2024',
        duration: '5 Years',
        certificate: 'Sample',
      },
    ],
    education: [
      {
        school: 'Sample',
        degree: 'Sample',
        subject: 'Sample',
        from: '2020',
        to: '2024',
      },
      {
        school: 'Sample',
        degree: 'Sample',
        subject: 'Sample',
        from: '2020',
        to: '2024',
      },
    ],
    project: [
      {
        projectName: 'Sample',
        role: 'Sample',
        from: 'June 2000',
        to: 'December 2024',
        customer: 'Sample',
        projectDescription: 'Sample',
        technicalInformation: 'Sample',
        jobDescription: 'Sample',
      },
      {
        projectName: 'Sample',
        role: 'Sample',
        from: 'June 2000',
        to: 'December 2024',
        customer: 'Sample',
        projectDescription: 'Sample',
        technicalInformation: 'Sample',
        jobDescription: 'Sample',
      },
      {
        projectName: 'Sample',
        role: 'Sample',
        from: 'June 2000',
        to: 'December 2024',
        customer: 'Sample',
        projectDescription: 'Sample',
        technicalInformation: 'Sample',
        jobDescription: 'Sample',
      },
      {
        projectName: 'Sample',
        role: 'Sample',
        from: 'June 2000',
        to: 'December 2024',
        customer: 'Sample',
        projectDescription: 'Sample',
        technicalInformation: 'Sample',
        jobDescription: 'Sample',
      },
      {
        projectName: 'Sample',
        role: 'Sample',
        from: 'June 2000',
        to: 'December 2024',
        customer: 'Sample',
        projectDescription: 'Sample',
        technicalInformation: 'Sample',
        jobDescription: 'Sample',
      },
      {
        projectName: 'Sample',
        role: 'Sample',
        from: 'June 2000',
        to: 'December 2024',
        customer: 'Sample',
        projectDescription: 'Sample',
        technicalInformation: 'Sample',
        jobDescription: 'Sample',
      },
      {
        projectName: 'Sample',
        role: 'Sample',
        from: 'June 2000',
        to: 'December 2024',
        customer: 'Sample',
        projectDescription: 'Sample',
        technicalInformation: 'Sample',
        jobDescription: 'Sample',
      },
    ],
  },
};

const Page = () => {
  return (
    <>
      <Box className="page-header">
        <img src="/Header.png" alt="Header" width="100%" height="50px" />
        <Box component="img" src="/Logo.svg" alt="Logo" sx={{ height: 50, position: 'absolute', top: 50, left: 50 }} />
      </Box>
      <Box className="page-footer">
        <img src="/Footer.png" alt="Footer" width="100%" height="50px" />
      </Box>

      <Box component="table" sx={{ width: '100%' }}>
        <Box component="thead">
          <Box component="tr">
            <Box component="td">
              <Box className="page-header-space" />
            </Box>
          </Box>
        </Box>

        <Box component="tbody">
          <Box component="tr">
            <Box
              component="td"
              sx={{
                py: 2,
                px: 6,
              }}
            >
              <Stack direction="column" spacing={1} alignItems="stretch">
                <Stack direction="row" alignItems="center">
                  <Box sx={{ flexGrow: 1 }}>
                    <Typography variant="h5" sx={{ py: 1 }}>
                      <strong>{DATA.employee.name}</strong>
                    </Typography>
                    <Typography variant="subtitle1">{DATA.employee.position}</Typography>
                    <Typography variant="subtitle2">{DATA.employee.email}</Typography>
                  </Box>
                  <Box>
                    <Avatar src={DATA.employee.image} sx={{ height: 150, width: 150 }}>
                      Talent Image
                    </Avatar>
                  </Box>
                </Stack>

                <Stack direction="row" spacing={1} justifyContent="stretch">
                  <Stack direction="column" spacing={1} sx={{ flexBasis: '50%', pb: 4 }}>
                    <Typography variant="body1" sx={{ pt: 1 }}>
                      <strong>Employment</strong>
                    </Typography>
                    <Table size="small">
                      <TableHead>
                        <TableRow>
                          <TableCell sx={{ p: 0 }} />
                          <TableCell width="50" sx={{ p: 0 }}>
                            <Typography variant="caption">
                              <strong>From</strong>
                            </Typography>
                          </TableCell>
                          <TableCell width="50" sx={{ p: 0 }}>
                            <Typography variant="caption">
                              <strong>To</strong>
                            </Typography>
                          </TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {DATA.histories.employment.map((o, i) => (
                          <TableRow key={i}>
                            <TableCell sx={{ p: 0 }}>
                              <Typography variant="body2">
                                <strong>{o.employer}</strong>
                              </Typography>
                              <Typography variant="caption">{o.position}</Typography>
                            </TableCell>
                            <TableCell sx={{ p: 0 }}>
                              <Typography variant="caption">{o.from}</Typography>
                            </TableCell>
                            <TableCell sx={{ p: 0 }}>
                              <Typography variant="caption">{o.to}</Typography>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </Stack>

                  <Divider orientation="vertical" flexItem />

                  <Stack direction="column" spacing={1} sx={{ flexBasis: '50%', pb: 4 }}>
                    <Typography variant="body1" sx={{ pt: 1 }}>
                      <strong>Objective</strong>
                    </Typography>
                    <Typography variant="body2">{DATA.employee.biodata.profile}</Typography>
                    <Typography variant="body1" sx={{ pt: 1 }}>
                      <strong>Personal Detail</strong>
                    </Typography>
                    <Table size="small">
                      <TableBody>
                        <TableRow>
                          <TableCell sx={{ p: 0 }}>
                            <Typography variant="caption">
                              <strong>Place of Birth</strong>
                            </Typography>
                          </TableCell>
                          <TableCell sx={{ p: 0 }}>
                            <Typography variant="caption">{DATA.employee.biodata.placeOfBirth}</Typography>
                          </TableCell>
                          <TableCell sx={{ p: 0 }}>
                            <Typography variant="caption">
                              <strong>Date of Birth</strong>
                            </Typography>
                          </TableCell>
                          <TableCell sx={{ p: 0 }}>
                            <Typography variant="caption">{DATA.employee.biodata.dateOfBirth}</Typography>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell sx={{ p: 0 }}>
                            <Typography variant="caption">
                              <strong>Gender</strong>
                            </Typography>
                          </TableCell>
                          <TableCell sx={{ p: 0 }}>
                            <Typography variant="caption">{DATA.employee.biodata.gender}</Typography>
                          </TableCell>
                          <TableCell sx={{ p: 0 }}>
                            <Typography variant="caption">
                              <strong>Religion</strong>
                            </Typography>
                          </TableCell>
                          <TableCell sx={{ p: 0 }}>
                            <Typography variant="caption">{DATA.employee.biodata.religion}</Typography>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell sx={{ p: 0 }}>
                            <Typography variant="caption">
                              <strong>Language</strong>
                            </Typography>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell colSpan={4} sx={{ p: 0 }}>
                            <Typography variant="caption">{DATA.employee.biodata.language}</Typography>
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </Stack>
                </Stack>

                <Divider flexItem />

                <Stack direction="row" spacing={1} justifyContent="stretch" sx={{ pb: 2, pageBreakAfter: 'always' }}>
                  <Stack direction="column" spacing={1} sx={{ flexBasis: '50%', pb: 4 }}>
                    <Typography variant="body1" sx={{ pt: 1 }}>
                      <strong>Course, Training</strong>
                    </Typography>
                    <Table size="small">
                      <TableHead>
                        <TableRow>
                          {['Title', 'Provider', 'Date', 'Duration', 'Certificate'].map((o) => (
                            <TableCell key={o} sx={{ p: 0 }}>
                              <Typography variant="caption">
                                <strong>{o}</strong>
                              </Typography>
                            </TableCell>
                          ))}
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {DATA.histories.certification.map((o, i) => (
                          <TableRow key={i}>
                            <TableCell sx={{ p: 0 }}>
                              <Typography variant="caption">{o.title}</Typography>
                            </TableCell>
                            <TableCell sx={{ p: 0 }}>
                              <Typography variant="caption">{o.provider}</Typography>
                            </TableCell>
                            <TableCell sx={{ p: 0 }}>
                              <Typography variant="caption">{o.date}</Typography>
                            </TableCell>
                            <TableCell sx={{ p: 0 }}>
                              <Typography variant="caption">{o.duration}</Typography>
                            </TableCell>
                            <TableCell sx={{ p: 0 }}>
                              <Typography variant="caption">{o.certificate}</Typography>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </Stack>

                  <Divider orientation="vertical" flexItem />

                  <Stack direction="column" spacing={1} sx={{ flexBasis: '50%', pb: 4 }}>
                    <Typography variant="body1" sx={{ pt: 1 }}>
                      <strong>Education</strong>
                    </Typography>
                    <Table size="small">
                      <TableHead>
                        <TableRow>
                          <TableCell sx={{ p: 0 }}>
                            <Typography variant="caption">
                              <strong>School</strong>
                            </Typography>
                          </TableCell>
                          <TableCell sx={{ p: 0 }}>
                            <Typography variant="caption">
                              <strong>Degree</strong>
                            </Typography>
                          </TableCell>
                          <TableCell sx={{ p: 0 }}>
                            <Typography variant="caption">
                              <strong>Subject</strong>
                            </Typography>
                          </TableCell>
                          <TableCell sx={{ p: 0 }}>
                            <Typography variant="caption">
                              <strong>From</strong>
                            </Typography>
                          </TableCell>
                          <TableCell sx={{ p: 0 }}>
                            <Typography variant="caption">
                              <strong>To</strong>
                            </Typography>
                          </TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {DATA.histories.education.map((o, i) => (
                          <TableRow key={i}>
                            <TableCell sx={{ p: 0 }}>
                              <Typography variant="caption">{o.school}</Typography>
                            </TableCell>
                            <TableCell sx={{ p: 0 }}>
                              <Typography variant="caption">{o.degree}</Typography>
                            </TableCell>
                            <TableCell sx={{ p: 0 }}>
                              <Typography variant="caption">{o.subject}</Typography>
                            </TableCell>
                            <TableCell sx={{ p: 0 }}>
                              <Typography variant="caption">{o.from}</Typography>
                            </TableCell>
                            <TableCell sx={{ p: 0 }}>
                              <Typography variant="caption">{o.to}</Typography>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </Stack>
                </Stack>

                <Divider flexItem />

                <Stack direction="row" spacing={1} justifyContent="stretch" sx={{ pb: 2, pageBreakAfter: 'always' }}>
                  <Stack direction="column" spacing={1} sx={{ flexBasis: '100%', pb: 4 }}>
                    <Typography variant="body1" sx={{ pt: 1 }}>
                      <strong>Project</strong>
                    </Typography>
                    <Table size="small">
                      <TableHead>
                        <TableRow>
                          <TableCell sx={{ p: 0 }}>
                            <Typography variant="caption">
                              <strong>No</strong>
                            </Typography>
                          </TableCell>
                          <TableCell sx={{ p: 0 }}>
                            <Typography variant="caption">
                              <strong>Project Name</strong>
                            </Typography>
                          </TableCell>
                          <TableCell sx={{ p: 0 }}>
                            <Typography variant="caption">
                              <strong>Role</strong>
                            </Typography>
                          </TableCell>
                          <TableCell sx={{ p: 0 }}>
                            <Typography variant="caption">
                              <strong>From</strong>
                            </Typography>
                          </TableCell>
                          <TableCell sx={{ p: 0 }}>
                            <Typography variant="caption">
                              <strong>To</strong>
                            </Typography>
                          </TableCell>
                          <TableCell sx={{ p: 0 }}>
                            <Typography variant="caption">
                              <strong>Customer</strong>
                            </Typography>
                          </TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {DATA.histories.project.map((o, i) => (
                          <TableRow key={i}>
                            <TableCell sx={{ p: 0 }}>
                              <Typography variant="caption">{i + 1}</Typography> {/* Menambahkan nomor di sini */}
                            </TableCell>
                            <TableCell sx={{ p: 0 }}>
                              <Typography variant="caption">{o.projectName}</Typography>
                            </TableCell>
                            <TableCell sx={{ p: 0 }}>
                              <Typography variant="caption">{o.role}</Typography>
                            </TableCell>
                            <TableCell sx={{ p: 0 }}>
                              <Typography variant="caption">{o.from}</Typography>
                            </TableCell>
                            <TableCell sx={{ p: 0 }}>
                              <Typography variant="caption">{o.to}</Typography>
                            </TableCell>
                            <TableCell sx={{ p: 0 }}>
                              <Typography variant="caption">{o.customer}</Typography>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </Stack>
                </Stack>
              </Stack>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Page;
