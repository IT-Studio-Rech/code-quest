import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-worst-practices',
  template: `
    <div *ngIf="showData">
      <h1>{{ title }}</h1>
      <div *ngFor="let item of data">
        <p>{{ item.name }}</p>
        <p>{{ item.author }}</p>
        <p>{{ formatDate(item.releaseDate) }}</p>
      </div>
    </div>
    <button (click)="fetchData()">Fetch Data</button>
  `,
})
export class WorstPracticesComponent {
  title = 'Worst Practices Example';
  showData = false;
  data?: {
    title: string;
    author: string;
    releaseDate: Date;
    pageNumber: number;
  };

  constructor(private http: HttpClient) {}

  fetchData() {
    this.http
      .get<{
        title: string;
        author: string;
        releaseDate: Date;
        pageNumber: number;
      }>('https://api.example.com/books')
      .subscribe(
        (response) => {
          this.data = response;
          this.showData = true;
        },
        (error) => {
          console.error('Error fetching data', error);
          alert('Failed to fetch data');
        }
      );
  }

  formatDate(date: Date): string {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}.${month}.${year}`;
  }
}
