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

const companyNameSx = {
    color: colors.teal,
    fontWeight: 'bold',
    fontSize: '1.05rem',
};

const dateSx = {
    color: colors.teal,
    opacity: 0.7,
    fontSize: '0.85rem',
};

const roleTitleSx = {
    color: colors.teal,
    opacity: 0.8,
    fontSize: '0.9rem',
    fontStyle: 'italic',
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

function Company({ name, href, date, children }) {
    return (
        <Box sx={{ mb: 3 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap' }}>
                {href ? (
                    <Link href={href} target="_blank" rel="noopener" sx={{ ...companyNameSx, textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>{name}</Link>
                ) : (
                    <Typography sx={companyNameSx}>{name}</Typography>
                )}
                <Typography sx={dateSx}>{date}</Typography>
            </Box>
            {children}
        </Box>
    );
}

function Role({ title, date, children }) {
    return (
        <Box sx={{ mb: 2 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap' }}>
                <Typography sx={roleTitleSx}>{title}</Typography>
                {date && <Typography sx={dateSx}>{date}</Typography>}
            </Box>
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
                        Resume
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 2, mt: 1, flexWrap: 'wrap' }}>
                        <Typography sx={{ color: colors.teal, opacity: 0.7, fontSize: '0.9rem' }}>
                            🎯 Aim high, 🚀 ship fast, ⚙️ embrace pragmatism
                        </Typography>
                    </Box>
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

                <Section title="Introduction">
                    <Typography sx={{ color: colors.teal, opacity: 0.85, fontSize: '0.9rem', lineHeight: 1.7 }}>
                        I get stuff done. I have a decade of software experience and take pride in being a generalist. I've held roles building product, platforms, and infrastructure which gives me a deep understanding of what it takes to ship great software. I've worked at companies ranging from 3 to 30,000 engineers and feel comfortable operating anywhere in between. I'm most happy working with a small group of smart, driven, and empathetic humans to deliver something impactful.
                    </Typography>
                </Section>

                <Divider sx={dividerSx} />

                <Section title="Experience">
                    <Company name="Datadog" href="https://www.datadoghq.com" date="Dec 2024 – Present">
                        <Role title="Senior Software Engineer, APM">
                            <Bullet>I am currently working on APM Onboarding through <Link href="https://docs.datadoghq.com/tracing/trace_collection/automatic_instrumentation/single-step-apm/kubernetes" target="_blank" rel="noopener" sx={{ color: colors.teal }}>Single Step Instrumentation</Link>.</Bullet>
                        </Role>
                    </Company>

                    <Company name="Squarespace" href="https://www.squarespace.com" date="Oct 2023 – Dec 2024">
                        <Role title="Senior Software Engineer, Websites">
                            <Bullet>I rebuilt the Squarespace <Link href="https://developers.squarespace.com/quick-start" target="_blank" rel="noopener" sx={{ color: colors.teal }}>developer mode</Link> feature using GitHub. I meet with our customers regularly to help them migrate to the new feature, which enabled the company to decommission legacy hardware that powered the platform for over a decade.</Bullet>
                        </Role>
                    </Company>

                    <Company name="Tidbyt" href="https://tidbyt.com" date="Jun 2021 – Oct 2023">
                        <Role title="Founding Software Engineer">
                            <Bullet>I worked in a team of four to bring the <Link href="https://tidbyt.com/products/tidbyt" target="_blank" rel="noopener" sx={{ color: colors.teal }}>Tidbyt product</Link> to market and scale adoption to 35,000 devices. I did a little bit of everything, including: customer support, marketing, business forecasting, building major features, sourcing screws, scaling our backend, and building a developer community.</Bullet>
                        </Role>
                    </Company>

                    <Company name="Facebook" href="https://about.meta.com" date="Nov 2019 – Jun 2021">
                        <Role title="Production Engineer, Artificial Intelligence">
                            <Bullet>I worked on AI infrastructure, mostly focused on release engineering. The AI training framework I supported powered some of the company's largest models including ads and the Facebook newsfeed. I optimized the build speed, stabilized the test suites, and facilitated independent binary releases.</Bullet>
                        </Role>
                    </Company>

                    <Company name="Squarespace" href="https://www.squarespace.com" date="Jun 2016 – Nov 2019">
                        <Role title="Senior Software Engineer, Backend" date="Jan 2019 – Nov 2019">
                            <Bullet>I did some great backend work in this role. I made it possible to dynamically update the CMS frontend without deploying the backend. I setup a new CDN using Google Cloud to host static assets so they no longer were hosted on NFS. I moved the CMS backend to Kubernetes and off of home grown deployment and provisioning software.</Bullet>
                        </Role>
                        <Role title="Software Engineer, Backend" date="Mar 2018 – Jan 2019">
                            <Bullet>I fixed a lot of the pain points I discovered as an SRE in this role. The biggest impact was converting the hard coded, Java class based configuration system to a YAML based system that enabled faster resolution in production. I also migrated the metrics and alerts off of legacy systems onto Prometheus and Alertmanager which later enabled the Kubernetes migration.</Bullet>
                        </Role>
                        <Role title="Site Reliability Engineer" date="Jun 2016 – Mar 2018">
                            <Bullet>I really cut my teeth as an on-call in this role, participating in a rotation covering the entire Squarespace platform. I conducted over 50 interviews for SRE roles as we scaled out the team. I worked with a squad to build out bare metal Kubernetes clusters. I worked with a backend team to migrate the first microservice to Kubernetes. I deployed a new CI/CD system that was configured via code instead of a UI. I worked on a special project to handle traffic for the <Link href="https://youtu.be/W3FH1scDhfA" target="_blank" rel="noopener" sx={{ color: colors.teal }}>Super Bowl 2018 Commercial</Link> featuring Keanu Reeves.</Bullet>
                        </Role>
                    </Company>

                    <Company name="Spotify" href="https://www.spotify.com" date="Jun 2015 – Aug 2015">
                        <Role title="Site Reliability Engineer, Intern">
                            <Bullet>I built a proof of concept for self-healing infrastructure to understand if automated health checks could reduce toil for the team.</Bullet>
                        </Role>
                    </Company>
                </Section>

                <Divider sx={dividerSx} />

                <Section title="Education">
                    <Company name="Rochester Institute of Technology" href="https://www.rit.edu" date="Aug 2012 – May 2016">
                        <Role title="Bachelor of Science">
                            <Bullet>Double major in Networking and Systems Administration / Computing Security</Bullet>
                        </Role>
                    </Company>
                </Section>
            </Container>
        </Box>
    );
}

export default Resume;
