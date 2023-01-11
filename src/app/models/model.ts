export class nbpModel {
  code: string;
  currency: string;
  rates: rates[];
  table: string;
}


export class rates {
  no: string;
  effectiveDate: string;
  mid: number;
}
