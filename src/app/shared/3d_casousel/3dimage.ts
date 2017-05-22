import { Directive, Input, ElementRef, AfterViewInit } from '@angular/core';
declare var $: any;


@Directive({
  selector: '[app3dimage]'
})

export class Image3dDirective implements AfterViewInit {

  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    const slides = [
      {src: 'https://unsplash.it/600/450?image=839'},
      {src: 'https://unsplash.it/600/450?image=838'},
      {src: 'https://unsplash.it/600/450?image=837'},
      {src: 'https://unsplash.it/600/450?image=836'},
      {src: 'https://unsplash.it/600/450?image=832'},
      {src: 'https://unsplash.it/600/450?image=823'},
      {src: 'https://unsplash.it/600/450?image=822'}
    ];
    $(this.el.nativeElement).jR3DCarousel({
      width : 600,
      height: 450,
      slides: slides,
      animation: 'slide3D',
      animationInterval: 3000,
      animationDuration: 1500,

    });

  }
}
