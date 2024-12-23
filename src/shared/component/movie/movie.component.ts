import { Component, OnInit } from "@angular/core";
import { Imovie } from "src/models/movie";
import { movieArray } from "src/shared/const/movie";


@Component({
    selector : "app-movie",
    templateUrl : "./movie.component.html",
    styleUrls : ["./movie.component.scss"]
})


export class moviecomponent implements OnInit{
    movieData : Array<Imovie> = movieArray;
    constructor(){

    }

    ngOnInit(): void {
        
    }

}