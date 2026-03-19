import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})

export class AboutComponent {
  title = 'Desarrollador de Software';
  
  description = 
  `🚀 Estudiante de Desarrollo de Software (IFTS 16)🎓. Enfocado en Mobile 🤖(Android/Kotlin) y el desarrollo Full-Stack 💻.`;

  detail = 
  `🚀 Mis proyectos actuales: 
  • FlyStack: Buscador de vuelos y tours en tiempo real con Angular y Amadeus API,
  y además sugerencia de destinos con Gemini API.
  • Brevísimo News: App nativa de noticias en tiempo real con Jetpack Compose e IA y News API.`;

  skill = [
    { name: 'Kotlin', icon: 'code' },
    { name: 'TypeScript', icon: 'terminal' },
    { name: 'Javascript', icon: 'terminal' },
    { name: 'C++', icon: 'terminal' },
    { name: 'SQL', icon: 'terminal' },
    { name: 'Angular', icon: 'code' },
    { name: 'Android JetpackCompose', icon: 'code' },
    { name: 'React Native', icon: 'code' },
    { name: 'Node.js', icon: 'code' },
    { name: 'Express', icon: 'code' },
    { name: 'Firebase', icon: 'code' },
    { name: 'Supabase', icon: 'code' },
    { name: 'Github', icon: 'code' },
    { name: 'Git', icon: 'code' },
    { name: 'Android Studio', icon: 'code' },
    { name: 'Visual Studio Code', icon: 'code' },
    { name: 'Expo', icon: 'code' }
  ];
}