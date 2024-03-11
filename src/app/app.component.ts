import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  currentPage = 0;
  images = [
    {
      title: 'At the beach',
      url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmVhY2h8ZW58MHx8MHx8fDA%3D',
    },
    {
      title: 'Playing Cricket',
      url: 'https://media.istockphoto.com/id/505583215/photo/cricket-batsman.webp?b=1&s=170667a&w=0&k=20&c=hU071uH_kc_KmABGh6g7fzYZwnX4RVfKUk40oK-xsUY=',
    },
    {
      title: 'Heart of Biryani',
      url: 'https://images.unsplash.com/photo-1633945274405-b6c8069047b0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YmlyeWFuaXxlbnwwfHwwfHx8MA%3D%3D',
    },
    {
      title: 'Pasta Lover',
      url: 'https://plus.unsplash.com/premium_photo-1661666882005-9fdeeb6fef80?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHBlc3RvJTIwcGFzdGF8ZW58MHx8MHx8fDA%3D',
    },
    {
      title: 'At the beach',
      url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmVhY2h8ZW58MHx8MHx8fDA%3D',
    },
    {
      title: 'Playing Cricket',
      url: 'https://media.istockphoto.com/id/505583215/photo/cricket-batsman.webp?b=1&s=170667a&w=0&k=20&c=hU071uH_kc_KmABGh6g7fzYZwnX4RVfKUk40oK-xsUY=',
    },
    {
      title: 'Heart of Biryani',
      url: 'https://images.unsplash.com/photo-1633945274405-b6c8069047b0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YmlyeWFuaXxlbnwwfHwwfHx8MA%3D%3D',
    },
    {
      title: 'Pasta Lover',
      url: 'https://plus.unsplash.com/premium_photo-1661666882005-9fdeeb6fef80?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHBlc3RvJTIwcGFzdGF8ZW58MHx8MHx8fDA%3D',
    },
    {
      title: 'At the beach',
      url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmVhY2h8ZW58MHx8MHx8fDA%3D',
    },
    {
      title: 'Playing Cricket',
      url: 'https://media.istockphoto.com/id/505583215/photo/cricket-batsman.webp?b=1&s=170667a&w=0&k=20&c=hU071uH_kc_KmABGh6g7fzYZwnX4RVfKUk40oK-xsUY=',
    },
    {
      title: 'Heart of Biryani',
      url: 'https://images.unsplash.com/photo-1633945274405-b6c8069047b0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YmlyeWFuaXxlbnwwfHwwfHx8MA%3D%3D',
    },
    {
      title: 'Pasta Lover',
      url: 'https://plus.unsplash.com/premium_photo-1661666882005-9fdeeb6fef80?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHBlc3RvJTIwcGFzdGF8ZW58MHx8MHx8fDA%3D',
    },
  ];

  checkWindowIndex(index: number) {
    return Math.abs(this.currentPage - index) < 5;
  }
}
