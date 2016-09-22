import {Component} from 'angular2/core';

@Component({
    selector: 'my-app',
    templateUrl: 'partials/app.html'
    styles: ['.contai']
})

export class AppComponent {
    name = 'Ray';
    artists = ['pavan', 'kondapuram', 'sreenivasa'];

    onClick(myName, myElement) {
        this.name = myName;
        myElement.style.backgroundColor="#fece4e"
    }

    addArtist(myArtist) {
        if (myArtist !== "") {
            this.artists.push(myArtist);
        }
    }
}
