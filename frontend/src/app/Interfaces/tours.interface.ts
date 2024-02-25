export interface tours{
    tourId: string,
    destination: string,
    price: number,
    startDate: string,
    endDate: string,
    content: string,
}

export interface updatedtour{
    tourId: string,
    destination: string,
    price: number,
    startDate: string,
    endDate: string,
    content: string,
}

export interface deletedtours {
    tourId: string;
    destination: string;
    content: string;
    price: number;
    startDate: string;
    endDate: string;
  }
  