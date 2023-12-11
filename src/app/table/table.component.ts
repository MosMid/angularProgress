import { Component, OnInit } from '@angular/core';

import { lessons } from '../data/lessons';
import { data } from '../data/lessonsList';

@Component({
    selector: 'app-table',
    templateUrl: './table.component.html',
    styleUrl: './table.component.css'
})
export class TableComponent implements OnInit {
    list: lessons[] = [];

    ngOnInit() {
        this.fetchLessons();
    }

    fetchLessons(){
        data.forEach(element => {
            this.list.push(element)
        });
        console.log(this.list)
    }
}
