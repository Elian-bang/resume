import { SkillPayload } from '../types/skill';

const skill: SkillPayload = {
  disable: false,
  skills: [
    {
      category: 'Languages',
      items: [{ title: 'Java' }, { title: 'TypeScript' }],
    },
    {
      category: 'Backend',
      items: [
        { title: 'Spring Boot' },
        { title: 'Spring MVC' },
        { title: 'Spring Data JPA' },
        { title: 'QueryDSL' },
        { title: 'MyBatis' },
        { title: 'Spring Batch' },
      ],
    },
    {
      category: 'Frontend',
      items: [{ title: 'Vue.js 2·3' }, { title: 'Fabric.js' }],
    },
    {
      category: 'Database & Messaging',
      items: [{ title: 'MySQL' }, { title: 'RabbitMQ' }],
    },
    {
      category: 'Development & Testing',
      items: [
        { title: 'Git' },
        { title: 'Docker' },
        { title: 'GitHub Actions' },
        { title: 'Spring Boot Actuator' },
        { title: 'ArchUnit (개인 프로젝트)' },
      ],
    },
  ],
};

export default skill;
