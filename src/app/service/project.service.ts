import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class ProjectService{
    private project = [
        {
            id: 1,
            title: 'FlyStack',
            stack:'Angular • Angular Material • Gemini AI • Amadeus API • Supabase Auth • Firebase Auth',
            description: 'FlyStack: Gestor de itinerarios con Angular 19+ y Amadeus API. Incluye un motor de inspiración de viajes mediante Gemini AI (Firebase AI Logic). Autenticación híbrida con Firebase Auth (Google/Anónimo) y persistencia con Supabase.',
            imgUrl: 'image/flyStackapp_mockup_img.png',
            githubUrl: 'https://github.com/nicoHernan/Flystack-app.git'
        },
        {
            id: 2,
            title: 'BrevismoNews',
            stack:'Angular • Angular Material • Gemini AI • Amadeus API • Supabase Auth • Firebase Auth',
            description: 'Brevísimo News: App de noticias en tiempo real nativa con Jetpack Compose y News API. Navegación adaptativa, integración con Gemini AI, Firebase Auth y Supabase. Arquitectura limpia y M3',
            imgUrl: 'image/flyStackapp_mockup_img.png',
            githubUrl: 'https://github.com/nicoHernan/BrevisimoNews-app.git'
        }
    ] ;

    constructor(){}

    getProject(){
        return this.project ;
    }
}