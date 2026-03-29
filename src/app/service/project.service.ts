import { Injectable } from "@angular/core";
import { PROJECT } from "../util/project-data";

@Injectable({
    providedIn: 'root'
})
export class ProjectService{
    constructor(){}

    getProject(){
        return PROJECT ;
    }
}