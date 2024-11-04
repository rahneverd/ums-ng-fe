import { Component, Input } from '@angular/core';
import { TableConfig } from '../../models/table.model';

@Component({
  selector: 'app-table-generic',
  templateUrl: './table-generic.component.html',
  styleUrls: ['./table-generic.component.scss'],
})
export class TableGenericComponent {
  @Input() tableConfig = new TableConfig();
  users: any[] = [
    {
      name: 'Ian Chesnut',
      email: 'ian.chesnut@gmail.com',
      avatar: 'https://via.placeholder.com/40',
      role: 'Super Admin',
      groups: ['Falcons', 'Stallions'],
      status: 'Active',
    },
    {
      name: 'Zeki Mokhrazada',
      email: 'zeki@gmail.com',
      avatar: 'https://via.placeholder.com/40',
      role: 'Admin',
      groups: ['Falcons', 'Stallions'],
      status: 'Inactive',
    },
    // Add more users as needed
  ];

  selectedUsers: any[] = [];
  allSelected: boolean = false;
  totalUsers: number = this.users.length;

  onSelectionChange(selected: any[]) {
    this.selectedUsers = selected;
    this.allSelected = this.selectedUsers.length === this.users.length;
  }

  selectAll(selectAll: boolean) {
    this.allSelected = selectAll;
    this.selectedUsers = selectAll ? [...this.users] : [];
  }
}
