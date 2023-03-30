import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { UntilDestroy } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'ui-eosc-community-envri-widget',
  template: `
    <a href="https://envri.eu/" target="_blank" class="widget fixed-size gx-0">
      <div class="row">
        <div class="col-5 ps-4 pt-4 pb-3 carousel-image">
          <img width="100%" height="auto" src="assets/envri.svg" />
        </div>
        <div class="col-7 ps-3 pt-4 carousel-text">
          <div class="row pe-3">
            <span class="theme-community"
              >ENVRI Fair – the way to understanding of the Earth System
            </span>
          </div>
          <div class="row pe-3 pt-3">
            <span class="text-community"
              >ENVRI is a community of environmental research infrastructures
              working together to observe the Earth as one system. Community
              collaborates to provide environmental data, tools, and other
              services that are Open and FAIR, and can be easily used by anyone
              for free.
            </span>
          </div>
        </div>
      </div>
      <div></div>
    </a>
  `,
  styles: [
    `
      .right-arrow {
        padding-left: 4px;
        padding-bottom: 4px;
      }

      .theme-community {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;
        color: #232c34;
      }
      .text-community {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 21px;
        color: #232c34;
        opacity: 0.9;
      }
      .link-community {
        font-family: 'Inter';
        display: inline-block;
        font-style: normal;
        font-weight: 500;
        font-size: 10px;
        line-height: 18px;
        color: #3d4db6;
      }
      .link-community:hover {
        cursor: pointer;
        border-bottom: 1px solid #3d4db6;
        color: #3d4db6;
      }
    `,
  ],
})
export class EoscCommunityEnvriWidgetComponent {
  constructor(@Inject(DOCUMENT) private document: Document) {}

  public readMore() {
    window.open('https://envri.eu/', '_blank');
  }
}
