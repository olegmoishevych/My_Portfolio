import JS from '../../assets/image/js.svg';
import Node from '../../assets/image/node.png';
import TS from '../../assets/image/typescript.svg';
import React from '../../assets/image/react.svg';
import Nest from '../../assets/image/nest.png';
import Express from '../../assets/image/express.png';
import Next from '../../assets/image/next.png';
import Redis from '../../assets/image/redis.png';
import Mongo from '../../assets/image/mongo.png';
import Postgree from '../../assets/image/postgresql.png';
import MySql from '../../assets/image/mysql.png';
import Mongoose from '../../assets/image/mongoose.png';
import TypeORM from '../../assets/image/typeOrm.png';
import Prisma from '../../assets/image/prisma.png';
import Knex from '../../assets/image/knex.png';
import Socket from '../../assets/image/socket.svg';
import Rest from '../../assets/image/rest-api.png';
import Graph from '../../assets/image/graph.png';
import Rbac from '../../assets/image/rbac.png';
import Abac from '../../assets/image/abac.png';
import Aws from '../../assets/image/aws.png';
import Heroku from '../../assets/image/heroku.png';
import Vercel from '../../assets/image/vercel.png';
import Render from '../../assets/image/render.png';
import Netlify from '../../assets/image/netlify.png';
import Docker from '../../assets/image/docker.png';
import Jenkins from '../../assets/image/jenkins.png';
import Github from '../../assets/image/GitHub.png';
import Gitlab from '../../assets/image/gitlab.png';

export const skillsData = [
   {
    id: '1',
    title: 'TypeScript',
    description: 'A syntactic superset of JavaScript which adds static typing.',
    backgroundImage: `url(${TS})`,
   },
   {
    id: '2',
    title: 'JavaScript',
    description: 'The Programming language for the Web that conforms to the ECMAScript specification.',
    backgroundImage: `url(${JS})`,
   },
  {
    id: '3',
    title: 'Node',
    description: 'Node.js is an open-source, cross-platform JavaScript runtime environment that executes JavaScript code outside a web browser.',
    backgroundImage: `url(${Node})`,
  },
  {
    id: '4',
    title: 'Nest',
    description: 'Nest.js is a progressive Node.js framework for building efficient, reliable, and scalable server-side applications.',
    backgroundImage: `url(${Nest})`,
  },
  {
    id: '5',
    title: 'Express',
    description: 'Node.js framework for building efficient, reliable, and scalable server-side applications.',
    backgroundImage: `url(${Express})`,
  },
  {
    id: '6',
    title: 'Next',
    description: 'Next.js is a popular React framework that enables server-side rendering, static site generation, and hybrid rendering for React applications.',
    backgroundImage: `url(${Next})`,
  },
  {
        id: '7',
        title: 'React',
        description: 'JavaScript-based UI development library.',
        backgroundImage: `url(${React})`,
    },
    {
        id: '8',
        title: 'Redis',
        description: 'In-memory data structure store.',
        backgroundImage: `url(${Redis})`,
    },
  {
    id: '9',
    title: 'MongoDB',
    description: 'NoSQL document database.',
    backgroundImage: `url(${Mongo})`,
  },
  {
    id: '10',
    title: 'PostgreSQL',
    description: 'Open-source relational database.',
    backgroundImage: `url(${Postgree})`,
  },
  {
    id: '11',
    title: 'MySQL',
    description: 'Open-source relational database.',
    backgroundImage: `url(${MySql})`,
  },
  {
    id: '12',
    title: 'Mongoose',
    description: 'Elegant MongoDB object modeling for Node.js.',
    backgroundImage: `url(${Mongoose})`,
  },
  {
    id: '13',
    title: 'TypeORM',
    description: 'TypeORM is an ORM (Object-Relational Mapping) for TypeScript and JavaScript that works with databases like PostgreSQL, MySQL, MariaDB, SQLite, and others.',
    backgroundImage: `url(${TypeORM})`,
  },
  {
    id: '14',
    title: 'Prisma',
    description: 'Prisma is a modern database toolkit that makes database access easy with an auto-generated and type-safe query builder for TypeScript and JavaScript.',
    backgroundImage: `url(${Prisma})`,
  },
  {
    id: '15',
    title: 'Knex.js',
    description: 'Knex.js is a SQL query builder for Node.js that enables developers to write database queries in a flexible and fluent syntax, supporting various SQL databases such as PostgreSQL, MySQL, SQLite, and others.',
    backgroundImage: `url(${Knex})`,
  },
  {
    id: '16',
    title: 'Socket.IO',
    description: 'Socket.IO is a JavaScript library for real-time web applications. It enables bidirectional communication between web clients and servers, allowing for instant data exchange and updates without the need for polling or refreshing the page.',
    backgroundImage: `url(${Socket})`,
  },
  {
    id: '17',
    title: 'REST API',
    description: 'REST (Representational State Transfer) API is a software architectural style that defines a set of constraints for creating web services. It uses standard HTTP methods like GET, POST, PUT, DELETE for data manipulation and follows stateless communication between clients and servers.',
    backgroundImage: `url(${Rest})`,
  },
  {
    id: '18',
    title: 'GraphQL',
    description: 'GraphQL is a query language for APIs and a runtime for executing those queries with your existing data. It provides a more efficient, powerful, and flexible alternative to RESTful APIs, allowing clients to request only the data they need in a single request.',
    backgroundImage: `url(${Graph})`,
  },
  {
    id: '19',
    title: 'RBAC',
    description: 'RBAC (Role-Based Access Control) is an approach to restricting system access to authorized users. It assigns roles to users and permissions to roles, allowing administrators to manage access rights efficiently and securely based on roles rather than individual users.',
    backgroundImage: `url(${Rbac})`,
  },
  {
    id: '20',
    title: 'ABAC',
    description: 'ABAC (Attribute-Based Access Control) is an access control approach that evaluates access requests based on attributes associated with the user, the resource, and the environment. It allows for fine-grained access control by considering multiple attributes and their values when making access decisions.',
    backgroundImage: `url(${Abac})`,
  },
  {
    id: '21',
    title: 'AWS',
    description: 'AWS (Amazon Web Services) is a comprehensive and secure cloud computing platform provided by Amazon. It offers a wide range of services including computing power, storage, databases, machine learning, and more, allowing businesses to scale and grow without the need for large upfront investments in infrastructure.',
    backgroundImage: `url(${Aws})`,
  },
  {
    id: '22',
    title: 'Heroku',
    description: 'Heroku is a cloud platform as a service (PaaS) that enables developers to build, deploy, and manage applications seamlessly. It supports multiple programming languages and frameworks, providing a flexible and scalable solution for hosting web applications without the need to manage infrastructure.',
    backgroundImage: `url(${Heroku})`,
  },
  {
    id: '23',
    title: 'Vercel',
    description: 'Vercel is a cloud platform for static sites and serverless functions, providing developers with a seamless workflow for building, deploying, and managing web applications. It offers features like automatic deployments, instant scaling, and built-in CI/CD, enabling fast and reliable development and hosting of modern web projects.',
    backgroundImage: `url(${Vercel})`,
  },
  {
    id: '24',
    title: 'Render',
    description: 'Render is a cloud platform for deploying and running modern web applications and backend services. It offers a simple and intuitive experience for developers, with features like automatic scaling, zero downtime deploys, and managed HTTPS, enabling seamless deployment and management of web projects.',
    backgroundImage: `url(${Render})`,
  },
  {
    id: '25',
    title: 'Netlify',
    description: 'Netlify is a cloud platform for hosting static websites and serverless functions, providing developers with a powerful and easy-to-use platform for building, deploying, and managing web projects. It offers features like continuous deployment, serverless functions, and global CDN, enabling fast and scalable web hosting with a focus on developer productivity.',
    backgroundImage: `url(${Netlify})`,
  },
  {
    id: '26',
    title: 'Docker',
    description: 'Docker is a platform for developing, shipping, and running applications in containers. It provides a consistent environment for applications to run across different environments, making it easier to build, deploy, and scale applications with greater efficiency and portability.',
    backgroundImage: `url(${Docker})`,
  },
  {
    id: '27',
    title: 'Jenkins',
    description: 'Jenkins is an open-source automation server used for building, testing, and deploying software projects. It provides a wide range of plugins to support building, deploying, and automating any project, making it a versatile and powerful tool for continuous integration and continuous delivery (CI/CD).',
    backgroundImage: `url(${Jenkins})`,
  },
  {
    id: '28',
    title: 'GitHub',
    description: 'GitHub is a web-based platform for hosting and collaborating on Git repositories. It provides tools for version control, code review, issue tracking, and project management, making it a central hub for software development teams to work together efficiently and transparently.',
    backgroundImage: `url(${Github})`,
  },
  {
    id: '29',
    title: 'GitLab',
    description: 'GitLab is a web-based DevOps lifecycle tool that provides a Git repository manager providing wiki, issue-tracking, and CI/CD pipeline features, using an open-source license. It enables collaboration and code sharing within teams, offering a comprehensive platform for software development and deployment.',
    backgroundImage: `url(${Gitlab})`,
  }
]
