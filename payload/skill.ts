import { SkillPayload, SkillItem } from '../types/skill';

const backend: SkillItem = {
  category: 'Backend',
  items: [
    { title: 'Java 21' },
    { title: 'Spring Boot' },
    { title: 'Spring MVC' },
    { title: 'Spring Data JPA' },
    { title: 'QueryDSL' },
    { title: 'Spring Batch' },
    { title: 'MyBatis' },
    { title: 'Virtual Thread' },
    { title: 'CompletableFuture' },
  ],
};

const dataMessaging: SkillItem = {
  category: 'Database & Messaging',
  items: [{ title: 'MySQL' }, { title: 'RabbitMQ' }, { title: 'GA4' }],
};

const observability: SkillItem = {
  category: 'Observability & Verification',
  items: [
    { title: 'Spring Actuator' },
    { title: 'AOP Memory Monitoring' },
    { title: 'ArchUnit' },
    { title: 'Docker' },
    { title: 'GitHub Actions' },
  ],
};

const frontend: SkillItem = {
  category: 'Frontend',
  items: [{ title: 'Vue.js (2·3)' }, { title: 'TypeScript' }, { title: 'Fabric.js' }],
};

const skill: SkillPayload = {
  disable: false,
  skills: [backend, dataMessaging, observability, frontend],
};

export default skill;
