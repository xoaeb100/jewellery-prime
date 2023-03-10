import { BooleanInput } from '@angular/cdk/coercion';
import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  customers!: any[];

  representatives!: any[];

  statuses!: any[];

  loading: boolean = true;

  activityValues: number[] = [0, 100];

  constructor(private customerService: CustomerService) {}

  ngOnInit() {
    this.customerService.getCustomersLarge().then((customers: any) => {
      this.customers = customers;
      this.loading = false;

      this.customers.forEach(
        (customer) => (customer.date = new Date(customer.date))
      );
    });

    this.representatives = [
      { name: '5000',  },
      { name: '4900',  },
      { name: '10000',  },
      { name: '4000 ',  },
      { name: '20000',  },
      { name: '24000',  },
      { name: '288976',  },
      { name: '3000',  },
      { name: '60000',  },
      { name: '100000',  },
    ];

    this.statuses = [
      { label: 'Online', value: 'online' },
      { label: 'Cash', value: 'cash' },
      { label: 'Cheque', value: 'cheque' },
      { label: 'Credit Card', value: 'credit card' },
      { label: 'Debit Dard', value: 'debit card' },
      
    ];
  }

  clear(table: any) {
    table.clear();
  }
}
