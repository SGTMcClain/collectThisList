import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../services/item.service';
import { Item } from '../../models/item';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  items: Item[];
  editState = false; // typescript will infer the type based on the data
  itemToEdit: Item;


  constructor(private itemService: ItemService) { }

  ngOnInit() {
    // console.log('ngOnInit ran in items.component.ts');
    this.itemService.getItems().subscribe(items => {
      // console.log(items);
      this.items = items;
    });
  }

  updateItem(item: Item) {
    this.clearState();
    this.itemService.updateItem(item);
  }

  deleteItem(event, item: Item) {
    this.clearState();
    this.itemService.deleteItem(item);
  }

  editItem(event, item: Item) {
    this.editState = true;
    this.itemToEdit = item;
  }

  clearState() {
    this.editState = false;
    this.itemToEdit = null;
  }

}
