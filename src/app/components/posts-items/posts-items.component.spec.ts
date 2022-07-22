import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsItemsComponent } from './posts-items.component';

describe('PostsItemsComponent', () => {
  let component: PostsItemsComponent;
  let fixture: ComponentFixture<PostsItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostsItemsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostsItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
