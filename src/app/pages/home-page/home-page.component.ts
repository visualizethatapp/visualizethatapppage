import { Component } from '@angular/core';
import { BannerComponent } from '../../components/banner/banner.component';
import { FeaturesComponent } from '../../components/features/features.component';
import { ArticleSectionComponent } from '../../components/article-section/article-section.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    BannerComponent,
    FeaturesComponent,
    ArticleSectionComponent
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

}
