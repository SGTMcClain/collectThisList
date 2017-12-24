import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../services/item.service';
import { Item } from '../../models/Item';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})

export class AddItemComponent implements OnInit {
// add additional categories to item as needed
  item: Item = {
    title: '',
    description: ''
  };
  constructor(private itemService: ItemService) {

   }

  ngOnInit() {
  }

  onSubmit() {
    if (this.item.title != '' && this.item.description != '') {
      this.itemService.addItem(this.item);

      // clear the fields
      this.item.title = '';
      this.item.description = '';
    }
  }

}
