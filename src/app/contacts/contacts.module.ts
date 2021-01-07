import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactsRoutingModule } from './contacts-routing.module';
import { ContactsComponent } from './contacts.component';
import { ContactDashboardComponent } from './contact-dashboard/contact-dashboard.component';
import { ContactDiscussionComponent } from './contact-discussion/contact-discussion.component';
import { ContactSearchComponent } from './contact-search/contact-search.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    ContactsComponent,
    ContactDashboardComponent,
    ContactDiscussionComponent,
    ContactSearchComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ContactsRoutingModule
  ]
})
export class ContactsModule { }
