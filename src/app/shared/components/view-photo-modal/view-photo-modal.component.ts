import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {ICats} from "../../../interfaces";

@Component({
  selector: 'app-view-photo-modal',
  templateUrl: './view-photo-modal.component.html',
  styleUrls: ['./view-photo-modal.component.scss']
})
export class ViewPhotoModalComponent implements OnInit {
  cat: ICats;

  constructor(@Inject(MAT_DIALOG_DATA) public data: ICats) {
  };

  ngOnInit(): void {
    this.cat = this.data
  };
}
