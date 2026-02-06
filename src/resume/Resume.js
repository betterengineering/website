import React from 'react';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Divider from '@mui/material/Divider';
import { colors } from '../colors';

const sectionHeaderSx = {
    color: colors.teal,
    fontWeight: 'bold',
    fontSize: '1.1rem',
    letterSpacing: '0.15em',
    textTransform: 'uppercase',
    mb: 2,
};

const jobTitleSx = {
    color: colors.teal,
    fontWeight: 'bold',
    fontSize: '1rem',
};

const companySx = {
    color: colors.teal,
    opacity: 0.7,
    fontSize: '0.9rem',
};

const bulletSx = {
    color: colors.teal,
    opacity: 0.85,
    fontSize: '0.85rem',
    pl: 2,
    mb: 0.5,
};

const dividerSx = {
    borderColor: colors.teal,
    opacity: 0.2,
    my: 3,
};

function Section({ title, children }) {
    return (
        <Box sx={{ mb: 4 }}>
            <Typography sx={sectionHeaderSx}>{title}</Typography>
            {children}
        </Box>
    );
}

function Job({ title, company, date, children }) {
    return (
        <Box sx={{ mb: 3 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap' }}>
                <Typography sx={jobTitleSx}>{title}</Typography>
                <Typography sx={companySx}>{date}</Typography>
            </Box>
            <Typography sx={{ ...companySx, mb: 1 }}>{company}</Typography>
            {children}
        </Box>
    );
}

function Bullet({ children }) {
    return (
        <Typography sx={bulletSx}>
            {'> '}{children}
        </Typography>
    );
}

function Resume() {
    return (
        <Box sx={{
            backgroundColor: colors.darkBlue,
            minHeight: '100vh',
            width: 1,
            pt: 10,
            pb: 8,
        }}>
            <Container maxWidth="md">
                <Box sx={{ mb: 1 }}>
                    <Typography sx={{ color: colors.teal, fontSize: '2rem', fontWeight: 'bold' }}>
                        Mark Spicer
                    </Typography>
                    <Typography sx={{ color: colors.teal, opacity: 0.7, fontSize: '0.9rem' }}>
                        Brooklyn, NY
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 2, mt: 1, flexWrap: 'wrap' }}>
                        <Link href="https://github.com/betterengineering" target="_blank" rel="noopener" sx={{ color: colors.teal, opacity: 0.7, fontSize: '0.85rem' }}>
                            github.com/betterengineering
                        </Link>
                        <Link href="https://www.linkedin.com/in/markspicerjr/" target="_blank" rel="noopener" sx={{ color: colors.teal, opacity: 0.7, fontSize: '0.85rem' }}>
                            linkedin.com/in/markspicerjr
                        </Link>
                    </Box>
                </Box>

                <Divider sx={dividerSx} />

                <Section title="Experience">
                    <Job title="Software Engineer" company="Datadog" date="Current">
                    </Job>

                    <Job title="Founding Engineer" company="Tidbyt" date="">
                        <Bullet>Worked across the entire software stack spanning backend, frontend, mobile, and embedded engineering</Bullet>
                    </Job>

                    <Job title="Software Engineer" company="Facebook" date="">
                        <Bullet>Supported AI infrastructure that enabled training ML models for personalization tasks across Ads, Instagram, Search, and Feed</Bullet>
                        <Bullet>Enabled package separation for DPER on PyTorch through a release design and implementation</Bullet>
                        <Bullet>Led the collaboration on the initial direction and wrote an RFC, then led the delivery of the first phase of implementation and ongoing improvements across 7 teams</Bullet>
                        <Bullet>Established operational excellence best practices by establishing an SLO, creating escalation policies, defining on-call expectations, creating runbooks, and refining the SEV creation process</Bullet>
                    </Job>

                    <Job title="Software Engineer" company="Squarespace" date="">
                        <Bullet>Engineered a caching solution on a small team to support significantly higher than normal traffic for the Super Bowl 2018 commercial starring Keanu Reeves</Bullet>
                        <Bullet>Proved viability of the Kubernetes platform by migrating Squarespace's first microservice to Kubernetes</Bullet>
                        <Bullet>Increased developer efficiency by introducing an open source, containerized CI/CD system</Bullet>
                    </Job>
                </Section>

                <Divider sx={dividerSx} />

                <Section title="Projects">
                    <Job title="Keyless Entry System" company="" date="">
                        <Bullet>Built a keyless entry system for contactless key cards using custom printed circuit boards, 3D models, and controller software in Go</Bullet>
                    </Job>

                    <Job title="Electronic Cold Brewer" company="" date="">
                        <Bullet>Converted a Kyoto cold brew tower into an electronic cold brewer controllable through the browser using a custom 3D printed mount, peristaltic pump, Go backend, and Vue.js frontend</Bullet>
                    </Job>
                </Section>

                <Divider sx={dividerSx} />

                <Section title="Open Source">
                    <Box sx={{ mb: 1 }}>
                        <Bullet>
                            <Link href="https://github.com/tidbyt/pixlet" target="_blank" rel="noopener" sx={{ color: colors.teal }}>tidbyt/pixlet</Link> — Build apps for pixel-based displays (Go)
                        </Bullet>
                        <Bullet>
                            <Link href="https://github.com/tidbyt/community" target="_blank" rel="noopener" sx={{ color: colors.teal }}>tidbyt/community</Link> — Publishing platform for Tidbyt community apps (Starlark)
                        </Bullet>
                        <Bullet>
                            <Link href="https://github.com/Roastero/Openroast" target="_blank" rel="noopener" sx={{ color: colors.teal }}>Roastero/Openroast</Link> — Open source application for home coffee roasting (Python)
                        </Bullet>
                    </Box>
                </Section>

                <Divider sx={dividerSx} />

                <Section title="Education">
                    <Typography sx={jobTitleSx}>Rochester Institute of Technology</Typography>
                </Section>
            </Container>
        </Box>
    );
}

export default Resume;
