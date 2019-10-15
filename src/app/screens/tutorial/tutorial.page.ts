// Vendors
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.page.html',
  styleUrls: ['./tutorial.page.scss'],
})
export class TutorialPage implements OnInit {
  @ViewChild('slides', null) slides: ElementRef;
  isShowTutorial: boolean = false;
  topButtonText: string = 'SKIP';

  constructor(
    private storage: Storage,
    private router: Router
  ) {
    this.storage.get('tutorialComplete').then((res) => {
      if (res) {
        this.router.navigate(['auth']);
      }
    })

    setTimeout(() => {
      this.isShowTutorial = true;
    }, 2000)
  }

  ngOnInit() {
  }

  public slideDrag() {
    this.topButtonText = 'START'
  }

  public async finishTutorial() {
    await this.storage.set('tutorialComplete', true);
    this.router.navigateByUrl('/auth');
  }

}
