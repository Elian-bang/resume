import { SkillPayload } from '../types/skill';

const skill: SkillPayload = {
  disable: false,
  skills: [
    {
      category: 'Language',
      items: [{ title: 'Java' }, { title: 'TypeScript' }],
    },
    {
      category: 'Backend',
      items: [
        { title: 'Spring Boot' },
        { title: 'Spring Data JPA' },
        { title: 'QueryDSL' },
        { title: 'MyBatis' },
        { title: 'Spring Batch' },
      ],
    },
    {
      category: 'Database & Messaging',
      items: [{ title: 'MySQL' }, { title: 'RabbitMQ' }],
    },
    {
      category: 'Infrastructure & Ops',
      items: [
        { title: 'Docker' },
        { title: 'Kubernetes' },
        { title: 'GitHub Actions' },
        { title: 'Spring Boot Actuator' },
        { title: 'Git' },
      ],
    },
    {
      category: 'Frontend',
      items: [{ title: 'Vue.js 2·3' }, { title: 'TypeScript' }, { title: 'Fabric.js' }],
    },
  ],
};

export default skill;
