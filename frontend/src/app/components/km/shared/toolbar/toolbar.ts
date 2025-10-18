import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-toolbar',
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
  ],
  standalone: true,
  templateUrl: './toolbar.html',
  styleUrls: ['./toolbar.css']
})
export class Toolbar implements OnInit, OnDestroy {
  appTitle = "KM-Tracker";
  isAdminRoute = false;
  private sub = new Subscription();

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.checkRoute(this.router.url);
    this.sub.add(
      this.router.events.subscribe(evt => {
        if (evt instanceof NavigationEnd) {
          this.checkRoute(evt.urlAfterRedirects);
        }
      })
    );
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  private checkRoute(url: string) {
    this.isAdminRoute = url.startsWith('/admin');
  }

  navigateToAdmin() {
    this.router.navigate(['/admin']);
  }

  navigateToHome() {
    this.router.navigate(['/']);
  }

  navigateToRegister() {
    this.router.navigate(['/admin/register']);
  }

  navigateToLogin() {
    this.router.navigate(['/admin/login']);
  }

}
