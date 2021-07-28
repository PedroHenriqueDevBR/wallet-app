import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getAllQuickTransfers() {
    return [
      {
        id: 1,
        name: 'Jane',
        imageUrl: 'https://images.unsplash.com/photo-1542206395-9feb3edaa68d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80'
      },
      {
        id: 2,
        name: 'Robert',
        imageUrl: 'https://images.unsplash.com/photo-1555952517-2e8e729e0b44?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80'
      },
      {
        id: 3,
        name: 'Devon',
        imageUrl: 'https://images.unsplash.com/photo-1598411072028-c4642d98352c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80'
      },
      {
        id: 4,
        name: 'Jacob',
        imageUrl: 'https://media-exp1.licdn.com/dms/image/C4D03AQHaCIlTlgk4cw/profile-displayphoto-shrink_200_200/0/1618430399477?e=1632960000&v=beta&t=WRWLuIenhJLiN08uM8Z-xQvwBCWznlQU4XrB0uNTFJ8'
      },
      {
        id: 5,
        name: 'Kevin',
        imageUrl: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80'
      },
      {
        id: 6,
        name: 'Karla',
        imageUrl: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=333&q=80'
      },
      {
        id: 7,
        name: 'Mary',
        imageUrl: 'https://images.unsplash.com/photo-1596215143922-eedeaba0d91c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=334&q=80'
      },
    ]
  }
}
