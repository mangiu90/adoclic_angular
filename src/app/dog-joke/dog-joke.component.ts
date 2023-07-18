import { Component } from '@angular/core';
import { DogService } from '../services/dog.service';
import { JokeService } from '../services/joke.service';
import { timer } from 'rxjs';

@Component({
  selector: 'app-dog-joke',
  templateUrl: './dog-joke.component.html',
  styleUrls: ['./dog-joke.component.css']
})
export class DogJokeComponent {

  image_url = 'https://images.dog.ceo/breeds/corgi-cardigan/n02113186_4480.jpg';
  question = 'What did the fish say when it swam into a wall?';
  answer = 'Damn!';
  count_down = 20;

  timer = timer(1000, 1000);

  constructor(
    private dogService: DogService,
    private jokeService: JokeService,
  ) { }

  ngOnInit() {

    this.timer.subscribe(t => {
      this.count_down -= 1
      if (this.count_down === 0) {
        this.fetchData()
      }
    })

  }

  fetchData() {
    this.resetCountDown()

    this.dogService.getImage().subscribe(r => {
      this.image_url = r.message
    });

    this.jokeService.getJoke().subscribe(r => {
      this.question = r.setup
      this.answer = r.punchline
    });
  }

  resetCountDown() {
    this.count_down = 20
  }

}
