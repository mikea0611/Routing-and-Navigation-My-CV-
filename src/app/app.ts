import { Component } from '@angular/core';
import { Header } from './header/header';
import { ProfileCard } from './profile-card/profile-card';
import { Skills } from './skills/skills';
import { Footer } from './footer/footer';
import { Proficiency } from './proficiency';

@Component({
  selector: 'app-root',
  imports: [Header, ProfileCard, Skills, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  fullName = 'Francine Kimea A. Sto. Domingo';
  location = 'San Fernando City, Pampanga';
  email = 'francinekimea@gmail.com';
  phone = '0969 025 1232';

  profile = 'I am currently a 3rd year IT with specialization in web development student who is still learning and improving my skills in creating websites and applications. Through our school activities and projects, I have gained some experience in using HTML, CSS, JavaScript, and other web development tools. I enjoy working on the design and layout of websites, but I also want to improve my understanding of how the backend works. There are still many things I need to learn, especially when it comes to coding and solving errors. My goal is to become more confident in my skills and eventually use what I have learned in real-world projects.';

  skills = [
    'HTML5',
    'CSS3',
    'JavaScript',
    'TypeScript',
    'Angular',
    'Vue.js',
    'Node.js and Express.js',
    'MongoDB',
    'Responsive Web Design',
    'Git and GitHub'
  ];

  proficiencies: Proficiency[] = [
    { tool: 'Visual Studio Code', level: 'Intermediate' },
    { tool: 'Git and GitHub', level: 'Beginner' },
    { tool: 'Node.js and npm', level: 'Beginner' },
    { tool: 'Angular CLI', level: 'Beginner' }
  ];

  message = 'Click any skill above to select it.';

  onSkillSelected(skill: string) {
    this.message = `You selected: ${skill}`;
  }
}
