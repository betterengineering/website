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

const subBulletSx = {
    ...bulletSx,
    pl: 4,
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
            {company && <Typography sx={{ ...companySx, mb: 1 }}>{company}</Typography>}
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

function SubBullet({ children }) {
    return (
        <Typography sx={subBulletSx}>
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
                    <Job title="Senior Software Engineer" company="Datadog" date="Dec 2024 – Present">
                        <Bullet>Currently working on APM onboarding through Single Step Instrumentation.</Bullet>
                    </Job>

                    <Job title="Senior Software Engineer" company="Squarespace" date="Oct 2023 – Dec 2024">
                    </Job>

                    <Job title="Founding Software Engineer" company="Tidbyt" date="Jun 2021 – Oct 2023">
                        <Bullet>Collaborated closely with company founders in all aspects of bringing the Tidbyt product to market. Responsibilities included product development, sourcing materials, documentation writing, customer support, load testing, troubleshooting, performance monitoring, and manufacturing process optimization.</Bullet>
                        <Bullet>Partnered with company founders in strategic business planning, setting ambitious goals, and successfully converting these objectives into tangible engineering outcomes.</Bullet>
                        <Bullet>Initiated and nourished a dynamic developer community, growing it from 0 to over 2,000 members. Facilitated the development of an open-source app platform with 400+ community-contributed apps. Implemented effective engagement strategies, created comprehensive documentation, and developed custom developer tools and CI pipelines to support community growth.</Bullet>
                        <Bullet>Significantly enhanced the core product by introducing an app store, establishing integrations with Google Home and Zapier, implementing app features like mute/pin, and forging custom features for partnerships with Shopify and the New York Mets.</Bullet>
                        <Bullet>Expanded our backend infrastructure to support growth from 10 to 35,000 devices. Led the migration from Google Cloud IoT Core to a custom MQTT setup, while developing monitoring tools, alerts, and dashboards.</Bullet>
                    </Job>

                    <Job title="Production Engineer, Artificial Intelligence" company="Facebook" date="Nov 2019 – Jun 2021">
                        <Bullet>Supported the development of a cutting-edge machine learning stack on custom hardware, guiding it through numerous release milestones. Contributions included advising on release engineering, providing guidance on binary separation, establishing a Service Level Objective (SLO), formulating escalation policies, setting code quality standards, defining on-call expectations, developing comprehensive runbooks, and refining the severity (SEV) incident creation process.</Bullet>
                        <Bullet>Collaborated with a Machine Learning framework product team to boost developer productivity by addressing entrenched code health challenges. Initiatives included reducing overlooked PR failures, modernizing dependency management, streamlining redundant tests, enhancing build speed, optimizing target determination, among other efficiency improvements.</Bullet>
                        <SubBullet>The implemented solutions necessitated a hybrid approach, where technical advancements fostered cultural shifts in a self-perpetuating manner.</SubBullet>
                    </Job>

                    <Job title="Senior Software Engineer, Backend" company="Squarespace" date="Jan 2019 – Nov 2019">
                        <Bullet>Spearheaded the division of the monolithic frontend from the backend:</Bullet>
                        <SubBullet>Conducted the migration of the static asset origin to Google Cloud Storage.</SubBullet>
                        <SubBullet>Optimized build times, reducing them from 25 to 12 minutes.</SubBullet>
                        <SubBullet>Facilitated independent building and deploying of the two components.</SubBullet>
                        <SubBullet>Pioneered the implementation of hot reloads for new frontend versions.</SubBullet>
                        <Bullet>Championed the migration of the monolithic CMS platform to Kubernetes:</Bullet>
                        <SubBullet>Collaborated with 7+ teams across multiple quarters, ensuring a coordinated approach.</SubBullet>
                        <SubBullet>Streamlined production deployment times, reducing them from 50 minutes to just 6.</SubBullet>
                        <SubBullet>Expedited new instance creation from 2 hours to a swift 1.5 minutes, improving efficiency.</SubBullet>
                    </Job>

                    <Job title="Software Engineer, Backend" company="Squarespace" date="Mar 2018 – Jan 2019">
                        <Bullet>Led the transition of core CMS monolith's metrics and alerting systems to Prometheus and Alertmanager, enhancing performance tracking and alert responsiveness.</Bullet>
                        <Bullet>Replaced rigid, hard-coded configuration classes with a more flexible and maintainable file-based system.</Bullet>
                        <Bullet>Expertly triaged, diagnosed, and resolved a multitude of production outages for the core CMS platform, ensuring optimal uptime and user experience.</Bullet>
                    </Job>

                    <Job title="Site Reliability Engineer" company="Squarespace" date="Jun 2016 – Mar 2018">
                        <Bullet>Engaged in a critical on-call rotation for Squarespace, providing robust support for monolith and microservices as well as their downstream dependencies.</Bullet>
                        <Bullet>Conducted over 50 comprehensive interviews for Site Reliability Engineering roles, involving both initial phone screens and on-site interviews.</Bullet>
                        <Bullet>Contributed significantly to a specialized team responsible for constructing caching layers for the high-profile Super Bowl 2018 commercial featuring Keanu Reeves.</Bullet>
                        <Bullet>Spearheaded the migration of Squarespace's inaugural microservice to Kubernetes, enhancing overall service efficiency and scalability.</Bullet>
                        <Bullet>Initiated and implemented a containerized CI/CD system, promoting the concept of 'build as code' through open-source solutions.</Bullet>
                    </Job>

                    <Job title="Site Reliability Engineering Intern" company="Spotify" date="Jun 2015 – Aug 2015">
                        <Bullet>Constructed a proof of concept for an automated remediation framework aimed at optimizing bare metal host systems.</Bullet>
                    </Job>
                </Section>

                <Divider sx={dividerSx} />

                <Section title="Education">
                    <Job title="Rochester Institute of Technology" company="Bachelor of Science" date="Aug 2012 – May 2016">
                        <Bullet>Double major in Networking and Systems Administration and Computing Security</Bullet>
                    </Job>
                </Section>
            </Container>
        </Box>
    );
}

export default Resume;
